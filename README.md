# Bug report system based on Google Sheets
Easy way to collect and manage your web project bugs

### Manual Install

##### Copy script
Just paste this script into your site source

`<!--bugbox--><script> window.bagboxSettings = {googleSheetsLink: 'YOUR_GOOGLE_SHEET', stylesLink: 'https://vmikh.github.io/bugbox/dist/app-min.css'}; (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/app-min.js');</script><!--bugbox-->`

##### Copy this sheet
https://docs.google.com/spreadsheets/d/1XRShdYtaYBdfg1YhK2AoEbYpesyFh-0WsDDtisj6M_0/copy

![Copy_sheets](https://habrastorage.org/webt/pg/ap/e4/pgape41u1n0ffcwkvcji1eb_awo.png)

##### Publish sheet's script<br>
1. Tools > Script Editor<br>
2. Deploy > New deployment<br>
3. Fill the description > Deploy<br>
4. Give the application read and write permissions
5. Copy web app url
6. Insert your web app url into script to 'googleSheetsLink' parameter

![Script_editor](https://habrastorage.org/webt/xq/t2/o4/xqt2o40o3a-rmrstlb1snta4iwk.png)

![New_deployment](https://habrastorage.org/webt/ng/nl/sc/ngnlscmzmm8cqls6qvfjjapb9ty.png)

![Deploy](https://habrastorage.org/webt/zw/ev/og/zwevog4fgtxdg4l2vm3kk5xmhjs.png)

![Permissions](https://habrastorage.org/webt/td/ju/yz/tdjuyzeocdgisrxlinomsbghxo8.png)

![Copy_link](https://habrastorage.org/webt/fc/cr/bd/fccrbdf3ze13wy7qkfqj5lbey4o.png)

![Insert_link](https://habrastorage.org/webt/1s/j2/fd/1sj2fdillg3k-q6m_rjxlhjgwkw.png)

### Sheet Settings
You can edit 'Priority', 'Assignee' and 'Status' fields at the 'libraries' sheet

![Sheets settings](https://habrastorage.org/webt/fx/u1/oc/fxu1oci7smscf4jezjl1ro61y1q.png)

## Credits
[Platform.js v1.3.6](https://github.com/bestiejs/platform.js/)

## Contacts
[bugbox.io](https://bugbox.io/)

[info@bugbox.io](info@bugbox.io)
