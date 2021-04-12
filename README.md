# Bug report system based on Google Sheets
Easy way to collect and manage your web project bugs

### Manual Install

##### Copy this and paste this script into your site source

`<!--bugbox--><script> window.bagboxSettings = {googleSheetsLink: 'YOUR_GOOGLE_SHEET', stylesLink: 'https://vmikh.github.io/bugbox/dist/app-min.css'}; (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/app-min.js');</script><!--bugbox-->`

##### Copy this sheet
https://docs.google.com/spreadsheets/d/1XRShdYtaYBdfg1YhK2AoEbYpesyFh-0WsDDtisj6M_0/copy

![Copy_sheets](https://habrastorage.org/webt/ao/hz/af/aohzafey9stzqsulermavx3u-ig.png)

##### Publish sheet's script<br>
1. Tools > Script Editor<br>
2. Deploy > New deployment<br>
3. Fill the description > Deploy<br>
4. Give the application read and write permissions
5. Copy web app url
6. Insert your web app url into script to 'googleSheetsLink' parameter

![Script_editor](https://habrastorage.org/webt/hk/l0/ep/hkl0epnooo2daq0h2bzrwp8kqd4.png)

![New_deployment](https://habrastorage.org/webt/-h/w1/eq/-hw1eqvqev_js6swidnigmjxbnw.png)

![Deploy](https://habrastorage.org/webt/fh/nw/-h/fhnw-htjitmxn45x1iko8bld21c.png)

![Permissions](https://habrastorage.org/webt/s8/ek/st/s8ekstngfy1qb4sngh26ptixcny.png)

![Copy_link](https://habrastorage.org/webt/fw/tw/mp/fwtwmpkicrxa8vmk-47mwpiwxr0.png)

![Insert_link](https://habrastorage.org/webt/1s/j2/fd/1sj2fdillg3k-q6m_rjxlhjgwkw.png)

### Sheet Settings
You can edit 'Priority', 'Assignee' and 'Status' fields at the 'libraries' sheet

![Sheets settings](https://habrastorage.org/webt/ks/pi/qc/kspiqcyyiahm9ikvupjev6hmulk.png)

## Credits
[Platform.js v1.3.6](https://github.com/bestiejs/platform.js/)

## Contacts
[bugbox.io](https://bugbox.io/)

[info@bugbox.io](info@bugbox.io)
