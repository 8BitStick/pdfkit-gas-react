
const doGet = (e) => {
    return HtmlService.createHtmlOutputFromFile("index.html")
      .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag("viewport", "width=device-width, initial-scale=1.0");
}

const authenticateUserLogin = (user, pass) => {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheets().filter((s) => s.getSheetId() === 0)[0];
  const dataRange = sheet.getDataRange();
  const [headers, ...dataValues] = dataRange.getValues();

  let incorrectPassword = false
  let userNotFound = false

  for(const row of dataValues) {
    const emailCol = row[headers.indexOf("Email")];
    const passCol = row[headers.indexOf("Password")];
    if (emailCol === user) {
      if (passCol === pass) {
        const userData = row.reduce((obj, v, i) => ((obj[headers[i]] = v), obj), {});
        return userData
      } else {
        incorrectPassword = true
      }
    } else {
      userNotFound = true
    }
  }
  if(incorrectPassword) throw new Error("Incorrect password")
  if(userNotFound) throw new Error("User not found");
};