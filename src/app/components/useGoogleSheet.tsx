import { useState, useEffect } from "react";

const SHEET_ID = "1GZRZ31mAZ2jGK9FBum9s_1skQjY50RYyQ-PSy3MXfXg";

export interface SeatData {
  seatNumber: number;
  studentId: string;
  name: string;
  periods: string[];
}

// 글로벌 콜백 카운터 (중복 방지)
let callbackCounter = 0;

/**
 * JSONP 방식으로 Google Visualization API에서 데이터를 가져옵니다.
 * <script> 태그를 삽입하여 CORS를 완전히 우회합니다.
 */
function fetchViaJsonp(sheetName: string): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    const callbackName = `__gvizCallback_${Date.now()}_${callbackCounter++}`;
    const timeoutMs = 15000;

    // 타임아웃 설정
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`시트 "${sheetName}" 데이터 로드 시간 초과 (${timeoutMs / 1000}초)`));
    }, timeoutMs);

    // 정리 함수
    const cleanup = () => {
      clearTimeout(timer);
      delete (window as Record<string, unknown>)[callbackName];
      const script = document.getElementById(callbackName);
      if (script) script.remove();
    };

    // 글로벌 콜백 함수 등록
    (window as Record<string, unknown>)[callbackName] = (response: {
      status?: string;
      errors?: { reason?: string; message?: string; detailed_message?: string }[];
      table?: {
        cols: { label?: string }[];
        rows: { c: ({ v?: string | number | null; f?: string } | null)[] }[];
      };
    }) => {
      cleanup();

      try {
        console.log("[useGoogleSheet] JSONP 응답 수신!", response);

        if (response.status === "error") {
          const errMsg = response.errors?.map((e) => e.detailed_message || e.message).join(", ");
          reject(new Error(`구글 시트 오류: ${errMsg}`));
          return;
        }

        const table = response.table;
        if (!table || !table.cols || !table.rows) {
          reject(new Error("테이블 데이터가 없습니다."));
          return;
        }

        // 헤더 추출
        const headers: string[] = table.cols.map((col) => col.label || "");
        const rows: string[][] = [headers];

        // 데이터 행 추출
        for (const row of table.rows) {
          const cells: string[] = row.c.map((cell) => {
            if (!cell) return "";
            if (cell.f !== undefined && cell.f !== null) return String(cell.f);
            if (cell.v !== undefined && cell.v !== null) return String(cell.v);
            return "";
          });
          rows.push(cells);
        }

        resolve(rows);
      } catch (parseErr) {
        reject(parseErr);
      }
    };

    // <script> 태그 생성 및 삽입 (JSONP 호출)
    const script = document.createElement("script");
    script.id = callbackName;
    script.src = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=responseHandler:${callbackName}&sheet=${encodeURIComponent(sheetName)}`;
    script.onerror = () => {
      cleanup();
      reject(new Error(`스크립트 로드 실패. 시트 ID 또는 네트워크를 확인해주세요.`));
    };

    console.log(`[useGoogleSheet] JSONP 스크립트 삽입 (${sheetName}):`, script.src);
    document.head.appendChild(script);
  });
}

function findColumnIndex(headers: string[], candidates: string[]): number {
  for (const candidate of candidates) {
    const idx = headers.findIndex(
      (h) => h.toLowerCase().replace(/\s/g, "") === candidate.toLowerCase().replace(/\s/g, "")
    );
    if (idx !== -1) return idx;
  }
  return -1;
}

export function useGoogleSheet(sheetName: string) {
  const [data, setData] = useState<Record<number, SeatData>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log(`[useGoogleSheet] JSONP 방식으로 시트 "${sheetName}" 로드 시작`);

        const rows = await fetchViaJsonp(sheetName);

        console.log("[useGoogleSheet] 파싱된 행 수:", rows.length);
        if (rows.length > 0) console.log("[useGoogleSheet] 헤더:", rows[0]);
        if (rows.length > 1) console.log("[useGoogleSheet] 첫 번째 데이터:", rows[1]);

        if (rows.length < 2) {
          throw new Error(`시트 "${sheetName}"에 데이터가 없습니다. 탭 이름을 확인해주세요.`);
        }

        const headers = rows[0];

        // 컬럼 인덱스 자동 탐색
        const seatIdx = findColumnIndex(headers, ["좌석번호", "좌석", "seat", "seatnumber", "자리"]);
        const idIdx = findColumnIndex(headers, ["학번", "studentid", "id"]);
        const nameIdx = findColumnIndex(headers, ["이름", "name", "성명", "학생이름"]);
        const periodIdxs = [
          findColumnIndex(headers, ["1교시"]),
          findColumnIndex(headers, ["2교시"]),
          findColumnIndex(headers, ["3교시"]),
          findColumnIndex(headers, ["4교시"]),
        ];

        console.log("[useGoogleSheet] 컬럼 인덱스 - 좌석:", seatIdx, "학번:", idIdx, "이름:", nameIdx, "교시:", periodIdxs);

        // Fallback: 컬럼 순서 (좌석번호, 학번, 이름, 1교시, 2교시, 3교시, 4교시)
        const finalSeatIdx = seatIdx !== -1 ? seatIdx : 0;
        const finalIdIdx = idIdx !== -1 ? idIdx : 1;
        const finalNameIdx = nameIdx !== -1 ? nameIdx : 2;
        const finalPeriodIdxs = periodIdxs.map((idx, i) => idx !== -1 ? idx : 3 + i);

        const seatMap: Record<number, SeatData> = {};

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const seatNum = parseInt(row[finalSeatIdx], 10);
          if (!isNaN(seatNum)) {
            seatMap[seatNum] = {
              seatNumber: seatNum,
              studentId: row[finalIdIdx] || "",
              name: row[finalNameIdx] || "",
              periods: finalPeriodIdxs.map((idx) => (row[idx] || "").trim().toUpperCase()),
            };
          }
        }

        console.log("[useGoogleSheet] 로드된 좌석 수:", Object.keys(seatMap).length);
        console.log("[useGoogleSheet] 좌석 데이터 샘플:", Object.values(seatMap).slice(0, 3));

        setData(seatMap);
      } catch (err) {
        console.error("[useGoogleSheet] 최종 에러:", err);
        setError(err instanceof Error ? err.message : "알 수 없는 오류");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetName]);

  return { data, loading, error };
}
