import { useState, useEffect } from "react";

const PERIOD_SCHEDULE = [
  { start: [16, 40], end: [17, 30] }, // 1교시
  { start: [18, 30], end: [19, 20] }, // 2교시
  { start: [19, 30], end: [20, 30] }, // 3교시
  { start: [20, 40], end: [22, 0] },  // 4교시
];

function getCurrentPeriodIndex(): number {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();

  for (let i = 0; i < PERIOD_SCHEDULE.length; i++) {
    const s = PERIOD_SCHEDULE[i];
    const startMin = s.start[0] * 60 + s.start[1];
    const endMin = s.end[0] * 60 + s.end[1];
    if (minutes >= startMin && minutes <= endMin) return i;
  }

  return 0; // 해당 시간대가 아니면 1교시
}

/**
 * 현재 시간에 맞는 교시를 자동 선택하되, 교사가 수동 변경도 가능한 훅.
 * 매 분마다 시간을 체크하여 교시가 바뀌면 자동 전환합니다.
 * 교사가 수동으로 변경한 경우, 해당 교시 시간대가 끝날 때까지 유지됩니다.
 */
export function useAutoPeriod() {
  const [selectedPeriod, setSelectedPeriod] = useState(getCurrentPeriodIndex);
  const [manualOverride, setManualOverride] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!manualOverride) {
        setSelectedPeriod(getCurrentPeriodIndex());
      } else {
        const autoPeriod = getCurrentPeriodIndex();
        if (autoPeriod !== selectedPeriod) {
          setManualOverride(false);
          setSelectedPeriod(autoPeriod);
        }
      }
    }, 60_000);

    return () => clearInterval(interval);
  }, [manualOverride, selectedPeriod]);

  const selectPeriod = (idx: number) => {
    setSelectedPeriod(idx);
    if (idx !== getCurrentPeriodIndex()) {
      setManualOverride(true);
    } else {
      setManualOverride(false);
    }
  };

  return { selectedPeriod, setSelectedPeriod: selectPeriod };
}
