# Bug report system based on Google Sheets
Easy way to collect and manage your web project bugs

### Manual Install

##### Copy and paste this script into your site source

`<!--bugbox-->`

`<script>window.bagboxSettings = {googleSheetsLink: 'YOUR_GOOGLE_SHEET', stylesLink: 'https://vmikh.github.io/bugbox/dist/app-min.css'}; (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/app-min.js');</script>`

`<!--bugbox-->`

##### Copy this sheet
https://docs.google.com/spreadsheets/d/1XRShdYtaYBdfg1YhK2AoEbYpesyFh-0WsDDtisj6M_0/copy

![Copy_sheets](https://habrastorage.org/webt/mc/lz/xa/mclzxayq6ee7tv2tnql11ax-hos.png)

##### Publish sheet's script<br>
1. Tools > Script Editor<br>
2. Deploy > New deployment<br>
3. Fill the description > Deploy<br>
4. Give the application read and write permissions
5. Copy web app url
6. Insert your app url into script to 'googleSheetsLink' parameter

![Script_editor](https://habrastorage.org/webt/1w/sy/9w/1wsy9wkozgdxrtldx824qomvhow.png)

![New_deployment](https://habrastorage.org/webt/pc/0o/ae/pc0oaekamh8hbjuw6zorrtzipu0.png)

![Deploy](https://habrastorage.org/webt/ib/u7/uy/ibu7uyhzculab6u-ffj0zatsbs0.png)

![Permissions](https://habrastorage.org/webt/u4/is/cp/u4iscpwkwk4esxk2-wg32lt62kc.png)

![Copy_link](https://habrastorage.org/webt/-x/zs/iq/-xzsiqeimuvfo9rqpg-3ryvuueo.png)

![Insert_link](https://habrastorage.org/webt/1s/j2/fd/1sj2fdillg3k-q6m_rjxlhjgwkw.png)

### Sheet Settings
You can edit 'Priority', 'Assignee' and 'Status' fields at the 'libraries' sheet

![Sheets settings](https://habrastorage.org/webt/xp/6e/qj/xp6eqjz56qblyuzsbsoxitd4gls.png)

## Credits
[Platform.js v1.3.6](https://github.com/bestiejs/platform.js/)

## Contacts
[bugbox.io](https://bugbox.io/)

[info@bugbox.io](info@bugbox.io)
