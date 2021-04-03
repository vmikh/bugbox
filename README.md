# bugbox
Bug report system at google sheets

### Quick Install
Just paste this script into your site source

`<!--bugbox--><script> window.bagboxSettings = {googleSheetsLink: 'YOUR_GOOGLE_SHEET', stylesLink: 'https://vmikh.github.io/bugbox/dist/app-min.css'}; (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/app-min.js');</script><!--bugbox-->`

### Full Manual Install

##### Copy this sheets
https://docs.google.com/spreadsheets/d/1XRShdYtaYBdfg1YhK2AoEbYpesyFh-0WsDDtisj6M_0/copy

![Copy_sheets](https://habrastorage.org/webt/ur/6v/8o/ur6v8orate7t52eaxjz3a0msmpk.png)

##### Publish sheet's script<br>
1. Tools > Script Editor<br>
2. Deploy > New deployment<br>
3. Fill the description > Deploy<br>
4. Give the application read and write permissions
5. Copy web app url
6. Insert your sheets link into script to 'googleSheetsLink' parameter

![Script_editor](https://habrastorage.org/webt/j-/ns/r-/j-nsr-tgtz4lkjmuolzems-wlhg.png)

![New_deployment](https://habrastorage.org/webt/t8/oz/zv/t8ozzvnzdknez-an2f0vyikrfbi.png)

![Deploy](https://habrastorage.org/webt/vs/du/gi/vsdugiz-nxkbz_rlrq9bblwmrfo.png)

![Permissions](https://habrastorage.org/webt/mo/2a/na/mo2ana94txcaynevvgjjfo7y3dq.png)

![Copy_link](https://habrastorage.org/webt/3h/kg/g7/3hkgg7r6lho9h7kh-zoolhbmck8.png)

![Insert_link](https://habrastorage.org/webt/1s/j2/fd/1sj2fdillg3k-q6m_rjxlhjgwkw.png)

### Sheets Settings
You can edit 'Priority', 'Assignee' and 'Status' fields on the 'libraries' sheet

![Sheets settings](https://habrastorage.org/webt/fx/u1/oc/fxu1oci7smscf4jezjl1ro61y1q.png)

## Credits
[Platform.js v1.3.6](https://github.com/bestiejs/platform.js/)

## Contacts
[bugbox.io](https://bugbox.io/)

[info@bugbox.io](info@bugbox.io)
