// ============================================================
// Google Apps Script - 출석 데이터 전송용
// ============================================================
//
// [배포 방법]
// 1. Google Sheets (https://docs.google.com/spreadsheets/d/1GZRZ31mAZ2jGK9FBum9s_1skQjY50RYyQ-PSy3MXfXg)
//    에서 "확장 프로그램" → "Apps Script" 클릭
// 2. 기존 코드를 모두 삭제하고, 아래 코드를 전체 복사하여 붙여넣기
// 3. "배포" → "새 배포" 클릭
// 4. 유형: "웹 앱" 선택
//    - 실행 사용자: "나"
//    - 액세스 권한: "모든 사용자"
// 5. "배포" 버튼 클릭 → URL이 생성됩니다
// 6. 생성된 URL을 복사하여 src/app/config.ts 파일의
//    APPS_SCRIPT_URL 에 붙여넣기
//
// [시트 구조] (각 탭: 1F, 2F, 3F)
//   A열: 좌석번호 | B열: 학번 | C열: 이름 | D열: 1교시 | E열: 2교시 | F열: 3교시 | G열: 4교시
// ============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var floor = data.floor; // "1F", "2F", "3F"
    var rows = data.rows;
    var period = data.period; // 0~3 (교시 인덱스), undefined면 레거시 모드

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(floor);

    if (!sheet) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: "시트를 찾을 수 없습니다: " + floor })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: "시트에 데이터가 없습니다." })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var seatNumbers = sheet.getRange(2, 1, lastRow - 1, 1).getValues();

    if (period !== undefined && period !== null) {
      // 단일 교시 모드: 선택된 교시 열만 업데이트 (D=4, E=5, F=6, G=7)
      var column = 4 + period;
      var seatMap = {};
      for (var i = 0; i < rows.length; i++) {
        seatMap[rows[i].seatNumber] = rows[i].value;
      }

      var values = [];
      for (var j = 0; j < seatNumbers.length; j++) {
        var seatNum = parseInt(seatNumbers[j][0]);
        values.push([seatMap[seatNum] !== undefined ? seatMap[seatNum] : ""]);
      }

      if (values.length > 0) {
        sheet.getRange(2, column, values.length, 1).setValues(values);
      }

      return ContentService.createTextOutput(
        JSON.stringify({ success: true, updated: values.length, period: period + 1 })
      ).setMimeType(ContentService.MimeType.JSON);
    } else {
      // 레거시 모드: 4교시 전체 업데이트 (D~G열)
      var seatMap = {};
      for (var i = 0; i < rows.length; i++) {
        seatMap[rows[i].seatNumber] = rows[i].periods;
      }

      var attendanceData = [];
      for (var j = 0; j < seatNumbers.length; j++) {
        var seatNum = parseInt(seatNumbers[j][0]);
        if (seatMap[seatNum]) {
          attendanceData.push(seatMap[seatNum]);
        } else {
          attendanceData.push(["", "", "", ""]);
        }
      }

      if (attendanceData.length > 0) {
        sheet.getRange(2, 4, attendanceData.length, 4).setValues(attendanceData);
      }

      return ContentService.createTextOutput(
        JSON.stringify({ success: true, updated: attendanceData.length })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청 처리 (테스트용)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "출석 전송 API가 정상 작동 중입니다." })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// 매일 23:50 자동 실행: Weekly 백업 → 일일 초기화
// ============================================================
//
// [자동 실행 흐름] (매일 23:50)
//   1. 오늘이 월/화/수/금인지 확인
//   2. 월요일이면 Weekly 시트 초기화 (새로운 한 주 시작)
//   3. 월/화/수/금이면 1F/2F/3F 출석 데이터를 Weekly에 백업
//   4. 1F/2F/3F의 D~G열 출석 데이터 초기화
//
// [Weekly 시트 구조]
//   A열: 날짜 | B열: 요일 | C열: 층 | D열: 좌석번호 | E열: 학번
//   F열: 이름 | G열: 1교시 | H열: 2교시 | I열: 3교시 | J열: 4교시
//
// [트리거 설정]
//   setupDailyResetTrigger() 함수를 한 번만 수동 실행하세요.
// ============================================================

var DAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];
var YAJA_DAYS = [1, 2, 3, 5]; // 월(1), 화(2), 수(3), 금(5)
var FLOOR_SHEETS = ["1F", "2F", "3F"];
var WEEKLY_HEADERS = ["날짜", "요일", "층", "좌석번호", "학번", "이름", "1교시", "2교시", "3교시", "4교시"];

/**
 * 매일 23:50에 실행되는 메인 함수.
 * 야자 요일(월/화/수/금)이면 Weekly에 백업 후 초기화,
 * 그 외 요일이면 초기화만 수행.
 */
function dailyRoutine() {
  var today = new Date();
  var dayOfWeek = today.getDay(); // 0=일, 1=월, ..., 6=토

  console.log("[dailyRoutine] 실행: " + today.toLocaleString() + " (" + DAY_NAMES[dayOfWeek] + "요일)");

  if (YAJA_DAYS.indexOf(dayOfWeek) !== -1) {
    // 월요일이면 Weekly 시트 초기화 (새 주 시작)
    if (dayOfWeek === 1) {
      clearWeeklySheet();
    }
    copyToWeekly(today, dayOfWeek);
  }

  resetDailyAttendance();
}

/**
 * 1F/2F/3F의 오늘 출석 데이터를 Weekly 시트에 추가합니다.
 */
function copyToWeekly(today, dayOfWeek) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var weekly = ss.getSheetByName("Weekly");

  if (!weekly) {
    weekly = ss.insertSheet("Weekly");
    weekly.appendRow(WEEKLY_HEADERS);
    weekly.getRange(1, 1, 1, WEEKLY_HEADERS.length).setFontWeight("bold");
    console.log("[copyToWeekly] Weekly 시트가 없어서 새로 생성했습니다.");
  }

  var dateStr = Utilities.formatDate(today, Session.getScriptTimeZone(), "yyyy-MM-dd");
  var dayStr = DAY_NAMES[dayOfWeek] + "요일";
  var allRows = [];

  for (var s = 0; s < FLOOR_SHEETS.length; s++) {
    var floorName = FLOOR_SHEETS[s];
    var sheet = ss.getSheetByName(floorName);
    if (!sheet) continue;

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) continue;

    // A~G열 전체 읽기 (좌석번호, 학번, 이름, 1교시~4교시)
    var data = sheet.getRange(2, 1, lastRow - 1, 7).getValues();

    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      var seatNum = row[0];
      if (!seatNum && seatNum !== 0) continue; // 빈 행 건너뛰기

      allRows.push([
        dateStr,          // 날짜
        dayStr,           // 요일
        floorName,        // 층
        row[0],           // 좌석번호
        row[1],           // 학번
        row[2],           // 이름
        row[3] || "",     // 1교시
        row[4] || "",     // 2교시
        row[5] || "",     // 3교시
        row[6] || "",     // 4교시
      ]);
    }
  }

  if (allRows.length > 0) {
    var startRow = weekly.getLastRow() + 1;
    weekly.getRange(startRow, 1, allRows.length, WEEKLY_HEADERS.length).setValues(allRows);
    console.log("[copyToWeekly] " + dateStr + " " + dayStr + " 데이터 " + allRows.length + "행 백업 완료.");
  }
}

/**
 * Weekly 시트의 데이터를 초기화합니다 (헤더 유지).
 * 매주 월요일에 자동 호출됩니다.
 */
function clearWeeklySheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var weekly = ss.getSheetByName("Weekly");
  if (!weekly) return;

  var lastRow = weekly.getLastRow();
  if (lastRow > 1) {
    weekly.getRange(2, 1, lastRow - 1, WEEKLY_HEADERS.length).clearContent();
    console.log("[clearWeeklySheet] Weekly 시트 초기화 완료 (헤더 유지).");
  }
}

/**
 * 모든 시트(1F, 2F, 3F)의 D~G열 출석 데이터를 빈 값으로 초기화합니다.
 * 좌석번호(A), 학번(B), 이름(C)은 유지됩니다.
 */
function resetDailyAttendance() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  for (var s = 0; s < FLOOR_SHEETS.length; s++) {
    var sheet = ss.getSheetByName(FLOOR_SHEETS[s]);
    if (!sheet) continue;

    var lastRow = sheet.getLastRow();
    if (lastRow < 2) continue;

    var numRows = lastRow - 1;
    var emptyData = [];
    for (var i = 0; i < numRows; i++) {
      emptyData.push(["", "", "", ""]);
    }

    sheet.getRange(2, 4, numRows, 4).setValues(emptyData);
  }

  console.log("[resetDailyAttendance] 1F/2F/3F 출석 데이터 초기화 완료: " + new Date().toLocaleString());
}

/**
 * 매일 23:50에 dailyRoutine을 실행하는 트리거를 자동 생성합니다.
 * 이 함수를 Apps Script 편집기에서 한 번만 수동 실행하면 됩니다.
 */
function setupDailyResetTrigger() {
  // 기존 트리거 중복 방지
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    var fn = triggers[i].getHandlerFunction();
    if (fn === "dailyRoutine" || fn === "resetDailyAttendance") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  ScriptApp.newTrigger("dailyRoutine")
    .timeBased()
    .everyDays(1)
    .atHour(23)
    .nearMinute(50)
    .create();

  console.log("[setupDailyResetTrigger] 매일 23:50 트리거가 설정되었습니다. (dailyRoutine)");
}
