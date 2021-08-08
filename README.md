# Bug report system based on Google Sheets
Easy way to collect and manage your web project bugs

### Manual Install

1. Copy <a href="https://docs.google.com/spreadsheets/d/1XRShdYtaYBdfg1YhK2AoEbYpesyFh-0WsDDtisj6M_0/copy" target="_blank">this sheet</a><br>
![Copy_sheets](https://habrastorage.org/webt/fx/wi/by/fxwiby4chrzf1zvrhbkddto0-do.png)

2. Tools > Script Editor<br>
![Script_editor](https://habrastorage.org/webt/oy/m4/ux/oym4uxrwl15lyjuvq10kttixuae.png)

3. Deploy > New deployment<br>
![New_deployment](https://habrastorage.org/webt/fq/rx/7e/fqrx7erhgzs2bpe-uieu09xpeg0.png)

4. Fill the description > Deploy<br>
![Deploy](https://habrastorage.org/webt/us/fn/6t/usfn6tmznm6nd6kijpjqti2cx2m.png)

5. Give the application read and write permissions<br>
![Permissions](https://habrastorage.org/webt/5e/ux/gn/5euxgnaiylkembip6tv7zhzgwyk.png)
![Permissions](https://habrastorage.org/webt/j8/_v/73/j8_v73wgp-ilm3umn8odwnmdxji.png)
![Permissions](https://habrastorage.org/webt/c6/ef/jn/c6efjnepsxagoj-jhlvhlhkyudw.png)
![Permissions](https://habrastorage.org/webt/cq/or/rx/cqorrxwzitkl1tp-k_erugsrcm0.png)

6. Copy web app url<br>
![Copy_link](https://habrastorage.org/webt/ql/fz/mk/qlfzmkjsb0adomo6hix4-q2aehi.png)


7. Copy and paste this script into your site source and insert your app url into script to 'googleSheetsLink' parameter<br><br>
`<!--bugbox-->`<br><br>
`<script>window.bagboxSettings = {googleSheetsLink: 'YOUR_GOOGLE_SHEET', stylesLink: 'https://vmikh.github.io/bugbox/dist/app-min.css'}; (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/app-min.js');</script>`<br><br>
`<!--bugbox-->`<br><br>
![Insert_link](https://habrastorage.org/webt/hl/nj/ka/hlnjkaalewtccgyh6heqccp-2au.png)



### Sheet Settings
You can edit 'Priority', 'Assignee' and 'Status' fields at the 'libraries' sheet

![Sheets settings](https://habrastorage.org/webt/5c/xp/ea/5cxpeayjclg9cqnz3yrrwnprzju.png)

## Credits
[Platform.js v1.3.6](https://github.com/bestiejs/platform.js/)

## Contacts
[bugbox.io](https://bugbox.io/)

[info@bugbox.io](info@bugbox.io)
