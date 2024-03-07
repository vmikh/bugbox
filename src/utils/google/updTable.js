// Table upd function
const updateTable = () => {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheets()[0];

  // Insert row func
  const insertData = (sheet, rowData, optIndex) => {
    console.log(rowData);
    const index = optIndex || 1;
    sheet.insertRowBefore(index).getRange(index, 1, 1, rowData.length).setValues([rowData]);
  }

  // Delete all rows
  const last_row = parseInt(sheet.getLastRow()) - 1;
  console.log(last_row);
  sheet.deleteRows(2, last_row);

  // Insert new rows
  for (let i = 0; i < defaultData.length; i++) {
    insertData(sheet, defaultData[i], 2);
  }
}


// Default Data
const defaultData = [
  [
    '1',
    'These bugs are just an example',
    '',
    '',
    '❗️ Critical',
    'Ben',
    'Need Details',
    'https://bugbox.io/',
    'Samsung Internet v17',
    'Android',
    'Mobile/Tablet',
    '412',
    '915',
    '412',
    '450',
    '12:00 02.09.2021'
  ],
  [
    '2',
    'Bug number eleven',
    '',
    '',
    '🔽 Minor',
    'Ben',
    'Need Details',
    'https://bugbox.io/',
    'Safari v15.5',
    'Android',
    'Mobile/Tablet',
    '412',
    '915',
    '412',
    '450',
    '12:00 02.09.2021'
  ],
  [
    '3',
    'Dark theme not available',
    '',
    '',
    '🔽 Minor',
    'Ben',
    'To Do',
    'https://bugbox.io/',
    'Safari v15.5',
    'Mac OS',
    'Mobile/Tablet',
    '414',
    '896',
    '414',
    '583',
    '12:00 02.09.2021'
  ],
  [
    '4',
    'No information about hidden state',
    '',
    '',
    '⚪️ Normal',
    'Max',
    'In Progress',
    'https://bugbox.io/',
    'Safari v15.5',
    'Mac OS',
    'Mobile/Tablet',
    '414',
    '896',
    '414',
    '583',
    '12:00 02.09.2021'
  ],
  [
    '5',
    '=hyperlink("https://drive.google.com/file/d/1HttHCkk_wdGNoMdux7F6DYsXu7kAgT9C/view?usp=drivesdk";"No click state on widget buttons")',
    '',
    '',
    '❗️ Critical',
    'Max',
    'In Progress',
    'https://bugbox.io/',
    'Chrome v100',
    'Mac OS',
    'Desktop',
    '1792',
    '1120',
    '1792',
    '1041',
    '12:00 02.09.2021'
  ],
  [
    '6',
    '=hyperlink("https://drive.google.com/file/d/1QjG8uVXovfsbXuoXoJXliq5RDjheS_1Q/view?usp=drivesdk";"Twitter link missing")',
    '',
    '',
    '❗️ Critical',
    'Alfred',
    'Need Review',
    'https://bugbox.io/',
    'Chrome v100',
    'Mac OS',
    'Desktop',
    '1792',
    '1120',
    '1792',
    '1041',
    '12:00 02.09.2021'
  ],
  [
    '7',
    '=hyperlink("https://drive.google.com/file/d/1rcyrttgArYB_XF87MVK1_Km4qaqAB5yK/view?usp=drivesdk";"Favicon background not needed")',
    '',
    '',
    '🔺 Major',
    'Max',
    'In Progress',
    'https://bugbox.io/',
    'Safari v15.3',
    'Mac OS',
    'Desktop',
    '1440',
    '900',
    '1440',
    '848',
    '12:00 02.09.2021'
  ],
  [
    '8',
    '=hyperlink("https://drive.google.com/file/d/16h7RLc2QKsafNEpJBT_JtcdunB6OLhlp/view?usp=drivesdk";"Table hover color too bright")',
    '',
    '',
    '⛔️ Blocker',
    'Alfred',
    'Need Review',
    'https://bugbox.io/',
    'Safari v15.3',
    'Mac OS',
    'Desktop',
    '1440',
    '900',
    '1440',
    '848',
    '12:00 02.09.2021'
  ],
  [
    '9',
    '=hyperlink("https://drive.google.com/file/d/1HttHCkk_wdGNoMdux7F6DYsXu7kAgT9C/view?usp=drivesdk";"No tracking in widget button names")',
    '',
    '',
    '🔽 Minor',
    'Max',
    'Done',
    'https://bugbox.io/',
    'Chrome v100',
    'Mac OS',
    'Desktop',
    '1792',
    '1120',
    '1792',
    '1041',
    '12:00 02.09.2021'
  ],
  [
    '10',
    '=hyperlink("https://drive.google.com/file/d/15bKY1Qt7Xcy4-4xZwKvnkHrsCH2WGZ7B/view?usp=drivesdk";"Header font garbled")',
    '',
    '',
    '🔽 Minor',
    'Max',
    'Done',
    'https://bugbox.io/',
    'Chrome v100',
    'Mac OS',
    'Desktop',
    '1792',
    '1120',
    '1920',
    '927',
    '12:00 02.09.2021'
  ],
  [
    '11',
    '=hyperlink("https://drive.google.com/file/d/1npAGj20SynTYLUUI9U9kShT-_ClbElLt/view?usp=drivesdk";"Hover color on buttons similar as inactive")',
    '',
    '',
    '⚪️ Normal',
    'Alfred',
    'Need Review',
    'https://bugbox.io/',
    'Firefox v102',
    'Windows',
    'Desktop',
    '1920',
    '1080',
    '1529',
    '889',
    '12:00 02.09.2021'
  ],
  [
    '12',
    '=hyperlink("https://drive.google.com/file/d/1Y5ye4X4CPvb_JCw0GHP37Y9xlbBDwZ5P/view?usp=drivesdk";"The logo too small")',
    '',
    '',
    '🔺 Major',
    'Ben',
    'Need Review',
    'https://bugbox.io/',
    'Firefox v102',
    'Windows',
    'Desktop',
    '1920',
    '1080',
    '1529',
    '889',
    '12:00 02.09.2021'
  ]
]