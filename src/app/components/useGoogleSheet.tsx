import { useState, useEffect } from "react";
import { APPS_SCRIPT_URL } from "../config";

const SHEET_ID = "1GZRZ31mAZ2jGK9FBum9s_1skQjY50RYyQ-PSy3MXfXg";

// 시트별 고정 데이터 범위 (끝 행)
const SHEET_END_ROW: Record<string, number> = {
  "Weekly(1F)": 54,
  "Weekly(2F)": 35,
  "Weekly(3F)": 33,
};

export interface SeatData {
  seatNumber: number;
  studentId: string;
  name: string;
  /** 현재 요일 기준 4교시 값 배열 ("O" | "X" | "") */
  periods: string[];
}

// 요일 → 그룹 인덱스 (월=0, 화=1, 수=2, 금=3)
const DAY_GROUP: Record<number, number> = { 1: 0, 2: 1, 3: 2, 5: 3 };

export function getDayGroup(): number {
  const day = new Date().getDay();
  return DAY_GROUP[day] ?? 0; // 야자 없는 요일은 월요일(0) 기본값
}

// 글로벌 콜백 카운터 (중복 방지)
let callbackCounter = 0;

/**
 * JSONP 방식으로 구글 시트 데이터를 가져옵니다.
 * 헤더 2행(요일·교시명)을 건너뛰고 A3:S 범위의 데이터만 읽습니다.
 *
 * 열 인덱스 (0-based):
 *   0=자리번호, 1=학번, 2=이름
 *   3+g*4+p = 요일그룹 g, 교시 p (g:0~3, p:0~3)
 */
function fetchSheetData(sheetName: string): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    const callbackName = `__gvizCallback_${Date.now()}_${callbackCounter++}`;
    const timeoutMs = 15000;

    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`시트 "${sheetName}" 데이터 로드 시간 초과`));
    }, timeoutMs);

    const cleanup = () => {
      clearTimeout(timer);
      delete (window as unknown as Record<string, unknown>)[callbackName];
      document.getElementById(callbackName)?.remove();
    };

    (window as unknown as Record<string, unknown>)[callbackName] = (response: {
      status?: string;
      errors?: { detailed_message?: string; message?: string }[];
      table?: {
        cols: { label?: string }[];
        rows: { c: ({ v?: string | number | null; f?: string } | null)[] }[];
      };
    }) => {
      cleanup();
      try {
        if (response.status === "error") {
          const errMsg = response.errors?.map((e) => e.detailed_message || e.message).join(", ");
          reject(new Error(`구글 시트 오류: ${errMsg}`));
          return;
        }
        const table = response.table;
        if (!table?.rows) {
          reject(new Error("테이블 데이터가 없습니다."));
          return;
        }

        const rows: string[][] = table.rows.map((row) =>
          row.c.map((cell) => {
            if (!cell) return "";
            if (cell.f != null) return String(cell.f);
            if (cell.v != null) return String(cell.v);
            return "";
          })
        );

        resolve(rows);
      } catch (err) {
        reject(err);
      }
    };

    const script = document.createElement("script");
    script.id = callbackName;
    // range=A3:S → 헤더 2행 건너뛰기, headers=0 → 응답에 헤더 없음
    script.src =
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq` +
      `?tqx=responseHandler:${callbackName}` +
      `&sheet=${encodeURIComponent(sheetName)}` +
      `&range=B7:T${SHEET_END_ROW[sheetName] || ""}&headers=0`;
    script.onerror = () => {
      cleanup();
      reject(new Error("스크립트 로드 실패. 시트 이름 또는 네트워크를 확인해주세요."));
    };

    console.log(`[useGoogleSheet] JSONP 시작 (${sheetName}):`, script.src);
    document.head.appendChild(script);
  });
}

/**
 * JSONP 방식으로 Apps Script availability 데이터를 가져옵니다.
 * 응답: { seatNumber: { "dayGroup_periodIdx": true } }
 */
function fetchAvailability(sheetName: string): Promise<Record<string, Record<string, boolean>>> {
  return new Promise((resolve) => {
    const callbackName = `__availCallback_${Date.now()}_${callbackCounter++}`;
    const timeoutMs = 15000;

    const timer = setTimeout(() => {
      cleanup();
      resolve({}); // availability 실패는 조용히 무시
    }, timeoutMs);

    const cleanup = () => {
      clearTimeout(timer);
      delete (window as unknown as Record<string, unknown>)[callbackName];
      document.getElementById(callbackName)?.remove();
    };

    (window as unknown as Record<string, unknown>)[callbackName] = (data: Record<string, Record<string, boolean>>) => {
      cleanup();
      if (data && !data.error) {
        resolve(data);
      } else {
        console.warn("[useGoogleSheet] availability 응답 오류:", data?.error);
        resolve({});
      }
    };

    const script = document.createElement("script");
    script.id = callbackName;
    script.src =
      `${APPS_SCRIPT_URL}?action=availability` +
      `&sheet=${encodeURIComponent(sheetName)}` +
      `&callback=${callbackName}`;
    script.onerror = () => {
      cleanup();
      resolve({}); // 조용히 무시
    };

    console.log(`[useGoogleSheet] availability JSONP 시작 (${sheetName})`);
    document.head.appendChild(script);
  });
}

/**
 * "Weekly 1F" / "Weekly 2F" / "Weekly 3F" 시트에서 좌석 데이터를 불러옵니다.
 *
 * 반환값:
 *   data           - 좌석번호 → SeatData (periods는 오늘 요일의 4교시 값)
 *   unavailableMap - 좌석번호 → { "dayGroup_periodIdx": true } (음영/X 셀)
 *   dayGroup       - 오늘 요일 그룹 (0=월, 1=화, 2=수, 3=금)
 */
export function useGoogleSheet(sheetName: string) {
  const [data, setData] = useState<Record<number, SeatData>>({});
  const [unavailableMap, setUnavailableMap] = useState<Record<number, Record<string, boolean>>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dayGroup] = useState<number>(getDayGroup);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        setError(null);

        const [rows, availability] = await Promise.all([
          fetchSheetData(sheetName),
          fetchAvailability(sheetName),
        ]);

        console.log(`[useGoogleSheet][${sheetName}] 행 수: ${rows.length}, 요일그룹: ${dayGroup}`);
        if (rows.length > 0) {
          console.log(`[useGoogleSheet][${sheetName}] 첫 행 샘플:`, rows[0]);
        }

        if (rows.length === 0) {
          throw new Error(`시트 "${sheetName}"에 데이터가 없습니다. 시트 이름을 확인해주세요.`);
        }

        const seatMap: Record<number, SeatData> = {};

        for (const row of rows) {
          const seatNum = parseInt(row[0], 10);
          if (isNaN(seatNum) || !seatNum) continue;

          // 오늘 요일 기준 4교시 값 추출 (cols[3+g*4] ~ cols[3+g*4+3])
          const baseIdx = 3 + dayGroup * 4;
          const periods = [0, 1, 2, 3].map((p) => (row[baseIdx + p] || "").trim().toUpperCase());

          seatMap[seatNum] = {
            seatNumber: seatNum,
            studentId: row[1] || "",
            name: row[2] || "",
            periods,
          };
        }

        const seatNums = Object.keys(seatMap).map(Number);
        console.log(`[useGoogleSheet][${sheetName}] 파싱된 좌석 수: ${seatNums.length}, 범위: ${Math.min(...seatNums)||'-'}~${Math.max(...seatNums)||'-'}`);
        console.log(`[useGoogleSheet][${sheetName}] 이름 있는 좌석: ${seatNums.filter(n => seatMap[n].name).length}개`);

        // availability 응답의 키는 문자열이므로 숫자로 변환
        const availMap: Record<number, Record<string, boolean>> = {};
        for (const key of Object.keys(availability)) {
          availMap[parseInt(key, 10)] = availability[key];
        }

        setData(seatMap);
        setUnavailableMap(availMap);
      } catch (err) {
        console.error("[useGoogleSheet] 오류:", err);
        setError(err instanceof Error ? err.message : "알 수 없는 오류");
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [sheetName, dayGroup]);

  return { data, unavailableMap, dayGroup, loading, error };
}
