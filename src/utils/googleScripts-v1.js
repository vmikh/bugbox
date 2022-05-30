function doPost(event) {
  const params = event.parameter;


  // Parse json
  const json = JSON.parse(event.postData.contents);


  // Connect spreadsheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];


  // Create arrays
  const dataCells = json.bodyArray;
  const headCells = json.headArray;
  // const dataCells = ["To do","Problem or idea","Screenshot"];
  // const headCells = ["My Problem","My Screenshot!!"];


  // Upload screenshot
  const uploadScreenshot = () => {

    // Get user's folders
    const userFolders = DriveApp.getFolders();
    let bugboxFolder  = undefined;

    // Search bugbox folder
    while (userFolders.hasNext()) {
      const folder = userFolders.next();

      if (folder.getName() === 'bugbox-screenshots')
        bugboxFolder = folder;
    }

    // Create folder if it's not exist
    if (bugboxFolder === undefined) 
      bugboxFolder = DriveApp.createFolder('bugbox-screenshots');

    // Create file
    const decoded     = Utilities.base64Decode(dataCells[2]);
    const fileName    = `screenshot_${Date.now()}.jpg`;
    const blob        = Utilities.newBlob(decoded, MimeType.JPEG, fileName);
    const file        = bugboxFolder.createFile(blob);
    const cellFormula = '=hyperlink("' + file.getUrl() + '";"' + file.getName() + '")';
    
    // Upd data array
    dataCells[2] = cellFormula;
  }


  // Insert row func
  const insertData = (sheet, rowData, optIndex) => {
    console.log(rowData);
    const index = optIndex || 1;
    sheet.insertRowBefore(index).getRange(index, 1, 1, rowData.length).setValues([rowData]);
  }


  // Upd headers func
  const insertHeader = (sheet, rowData) => {
    sheet.getRange(1, 1, 1, rowData.length).setValues([rowData]);
  }


  // Insert data and headers
  if (dataCells[2] !== '') uploadScreenshot();
  insertData(sheet, dataCells, 2);
  insertHeader(sheet, headCells);

  const result = {"response":"Success"};

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
};


// Get sheet url for widget
const doGet = () => {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();

  let currentUrl = '';
  currentUrl += ss.getUrl();
  currentUrl += '#gid=';
  currentUrl += sheet.getSheetId(); 

  const result = {"url":currentUrl};

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}