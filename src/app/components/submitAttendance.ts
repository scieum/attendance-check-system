import { APPS_SCRIPT_URL } from "../config";

interface SubmitRow {
  seatNumber: number;
  value: string;
}

interface SubmitPayload {
  floor: string;
  period: number;
  rows: SubmitRow[];
}

/**
 * 출석 데이터를 Apps Script로 전송합니다.
 * GET + no-cors 방식 (redirect/CORS 문제 없이 가장 안정적)
 */
export async function submitAttendance(payload: SubmitPayload): Promise<void> {
  const url = new URL(APPS_SCRIPT_URL);
  url.searchParams.set("action", "submit");
  url.searchParams.set("payload", JSON.stringify(payload));

  await fetch(url.toString(), {
    method: "GET",
    mode: "no-cors",
  });
}
