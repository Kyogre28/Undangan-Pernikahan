/**
 * GOOGLE APPS SCRIPT — Backend RSVP & Ucapan
 * ------------------------------------------------------------------
 * Cara pakai (ringkas, detail ada di README.md):
 * 1. Buat Google Sheet baru. Catat nama tab pertama (default "Sheet1").
 * 2. Menu  Extensions > Apps Script.  Hapus isi default, tempel kode ini.
 * 3. Klik  Deploy > New deployment > pilih "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Salin "Web app URL" (diakhiri /exec) -> tempel ke .env.local
 *      APPS_SCRIPT_URL=...
 * ------------------------------------------------------------------
 */

var SHEET_NAME = "Sheet1"; // ganti jika nama tab berbeda

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  if (sh.getLastRow() === 0) {
    sh.appendRow(["Timestamp", "Type", "Name", "Attendance", "Guests", "Message"]);
  }
  return sh;
}

// Menerima kiriman RSVP / Ucapan
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sh = getSheet_();
    sh.appendRow([
      new Date(),
      data.type || "",
      data.name || "",
      data.attendance || "",
      data.guests || "",
      data.message || "",
    ]);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Mengembalikan daftar ucapan (type == "wish")
function doGet() {
  var sh = getSheet_();
  var rows = sh.getDataRange().getValues();
  var wishes = [];
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][1] === "wish") {
      wishes.push({ name: rows[i][2], message: rows[i][5] });
    }
  }
  return ContentService.createTextOutput(
    JSON.stringify({ wishes: wishes })
  ).setMimeType(ContentService.MimeType.JSON);
}
