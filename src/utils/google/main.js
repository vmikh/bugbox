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
  const domain = json.domain;


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
    const decoded     = Utilities.base64Decode(dataCells[1][0]);
    const fileName    = dataCells[1][1];

    const blob        = Utilities.newBlob(decoded, MimeType.JPEG, fileName);
    const file        = bugboxFolder.createFile(blob);
    const cellFormula = '=hyperlink("' + file.getUrl() + '";"' + file.getName() + '")';
    
    // Upd data array
    dataCells[1][0] = cellFormula;
  }


  // Set ID
  const setID = () => {
    // Get ID column
    const columnID = 1;
    
    // Get ID ranges
    const columnIDRange = sheet.getRange(2, columnID, sheet.getLastRow() - 1, 1);
    const ids = columnIDRange.getValues().flat();
    
    // Get previus ID
    const previusID = Math.max.apply(null, ids);
    const id = Number(previusID) + 1;

    dataCells[0] = id;
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
  setID();
  if (dataCells[1][0] !== '') uploadScreenshot();
  else dataCells[1][0] = dataCells[1][1];
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

  let data = [],
      range = 'A:P', // диапазон ячеек, который хотим выгружать
      values = sheet.getRange(range).getValues(),
      last_row = parseInt(sheet.getLastRow());

  for (let i = 0; i < last_row; i++) {
      data.push(values[i]);
  }

  let currentUrl = '';
  currentUrl += ss.getUrl();
  currentUrl += '#gid=';
  currentUrl += sheet.getSheetId(); 

  const result = {
    'url': currentUrl,
    'version': '1.2',
    'result': data
  };

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}