// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Google scripts

const doPost = (event) => {


    // Parse json
    const json = JSON.parse(event.postData.contents);


    // Connect spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheets()[0];


    // Create arrays
    const dataCells = json.bodyArray;
    const headCells = json.headArray;


    // Add checkbox func
    const addCheckbox = (sheet, cell) => {
        const innerCell = sheet.getRange(cell);
        const criteria = SpreadsheetApp.DataValidationCriteria.CHECKBOX;
        const rule = SpreadsheetApp.newDataValidation()
            .requireCheckbox()
            .build();
        innerCell.setDataValidation(rule);
    } ;


    // Insert row func
    const insertData = (sheet, rowData, optIndex) => {
        const index = optIndex || 1;
        sheet.insertRowBefore(index).getRange(index, 1, 1, rowData.length).setValues([rowData]);

        // sheet.insertRowBefore(index).getRange(index, 2, 1, rowData.length).setValues([rowData]);
        // addCheckbox(sheet, 'A2');
    }


    // Upd headers func
    const insertHeader = (sheet, rowData) => {
        sheet.getRange(1, 1, 1, rowData.length).setValues([rowData]);
    }


    // Insert data and headers
    insertData(sheet, dataCells, 2);
    insertHeader(sheet, headCells);
};