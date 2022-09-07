# Bug report system based on Google Sheets
Easy way to collect and manage your web project bugs

### Manual Install

1. Copy <a href="https://docs.google.com/spreadsheets/d/1LypOCr8bA5WoSZPJF7C9ccuZR01zYfJO07qHg24L1Bw/copy" target="_blank">this sheet</a><br>
2. Extensions > Apps Script<br>
3. Deploy > New deployment<br>
4. Fill the description > Deploy<br>
5. Give the application read and write permissions<br>
6. Copy web app url<br>
7. Copy and paste this script into your site source and insert your app url into script to 'googleSheetsLink' parameter<br><br>
`<!--bugbox-->`<br>
`<script>window.bagboxSettings = {googleSheetsLink: 'YOUR_GOOGLE_SHEET', stylesLink: 'https://vmikh.github.io/bugbox/dist/v1.00/app-min.css'}; (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/v1.00/app-min.js');</script>`<br>
`<!--bugbox-->`<br><br>

[![Watch Manual Install](https://habrastorage.org/webt/jr/mc/pw/jrmcpwevamxcy6cljii54szep90.png)](https://vmikh.github.io/bugbox/tutorial)<br><br>

### Sheet Settings
You can edit 'Priority', 'Assignee' and 'Status' fields at the 'libraries' sheet

## Widget Params

| Param            | Type             | Description                                                                            |
| ---------------- | ---------------- | -------------------------------------------------------------------------------------- |
| isHidden         | Bool             | Enables hidden mode. Three fast clicks in bottom right corner of screen to open widget |

## Credits
[Platform.js v1.3.6](https://github.com/bestiejs/platform.js/)

## Contacts
[bugbox.io](https://bugbox.io/)<br>
[info@bugbox.io](info@bugbox.io)
