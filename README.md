## What is bugbox?
A bug report system based on Google Sheets.<br>
Easiest way to collect and manage bugs in test versions your web projects.

## How to install
1. Copy <a href="https://docs.google.com/spreadsheets/d/1g3n8uBIR0hArriOycaj8i79fMdjN3dNmQ_KBdLsEm0g/copy">this sheet</a> (recommended open in a new tab)<br>
2. Extensions > Apps Script<br>
3. Deploy > New deployment<br>
4. Put any text in the description field  > Deploy<br>
5. Give the application read and write permissions: Anvanced > Go to bugbox<br>
6. Copy second link `web app url`<br>
7. Copy and paste this script into your site source and insert your app url into script to `googleSheetsLink` parameter replacing 'YOUR_GOOGLE_SHEET'<br>
8. Enjoy!<br>

```
<script>
    window.bagboxSettings = {
        googleSheetsLink: 'YOUR_GOOGLE_SHEET',
        isHidden: false
    };
    (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/prod/app-min.js');
</script>
```

## Widget Settings
| Param            | Type             | Description                                                                            |
| ---------------- | ---------------- | -------------------------------------------------------------------------------------- |
| googleSheetsLink | String           | Google sheet link                                                                      |
| isHidden         | Bool             | Enables hidden mode. Three fast clicks in bottom right corner of screen to open widget |

## Sheet options
#### You can
- edit Actual result,	Expected result, Priority, Assignee and Status fields
- edit lists of Priority, Assignee and Status at the 'libraries' sheet
- hide columns
- edit row and column size and stile of spreadsheet

#### Please, don't do that
- add new colomns
- delete colomns
- rename colomns
- change column order

## Automatic screenshot
In <a href="https://caniuse.com/mdn-api_mediadevices_getdisplaymedia"> modern desctop browsers</a> you can make automatic screenshot.
To take a screenshot automatically, you need to give your browser permission to record your screen.

<br><br>

[![Watch Install Manual](https://habrastorage.org/webt/jr/mc/pw/jrmcpwevamxcy6cljii54szep90.png)](https://vmikh.github.io/bugbox/tutorial)<br><br>

## Credits
[Platform.js v1.3.6](https://github.com/bestiejs/platform.js/)

## Contacts
[bugbox.io](https://bugbox.io/)<br>
[info@bugbox.io](info@bugbox.io)
