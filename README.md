# Bug report system based on Google Sheets
Easy way to collect and manage your web project bugs

### Manual Install

1. <a href="https://docs.google.com/spreadsheets/d/1XRShdYtaYBdfg1YhK2AoEbYpesyFh-0WsDDtisj6M_0/copy" target="_blank">Copy this sheet</a><br>
![Copy_sheets](https://habrastorage.org/webt/sv/ys/ve/svysvel-ukghvh8qakb5x1mpfeq.png)

2. Tools > Script Editor<br>
![Script_editor](https://habrastorage.org/webt/bg/rc/ks/bgrcksqf0yxzfu2rxbzhu0ochwu.png)

3. Deploy > New deployment<br>
![New_deployment](https://habrastorage.org/webt/kl/ka/7t/klka7ttwe1jheaxba6i_erb9vgi.png)

4. Fill the description > Deploy<br>
![Deploy](https://habrastorage.org/webt/fa/jo/oc/fajoochr2ce-gvyvjza_wjalogw.png)

5. Give the application read and write permissions<br>
![Permissions](https://habrastorage.org/webt/n1/qy/lt/n1qyltifpaueoxig-n0fe7cbl4o.png)
![Permissions](https://habrastorage.org/webt/mp/if/a-/mpifa-uhp3rjzdc604urqfubgiy.png)
![Permissions](https://habrastorage.org/webt/lk/h7/f8/lkh7f8b1t4pa5rnmr-3k1sxp4fo.png)
![Permissions](https://habrastorage.org/webt/va/xw/wf/vaxwwfgw3q9z_zk8irujig200yw.png)

6. Copy web app url<br>
![Copy_link](https://habrastorage.org/webt/g1/9x/rf/g19xrfjje1qrib2kgvjmwdyt8cq.png)


7. Copy and paste this script into your site source and insert your app url into script to 'googleSheetsLink' parameter<br><br>
`<!--bugbox-->`<br><br>
`<script>window.bagboxSettings = {googleSheetsLink: 'YOUR_GOOGLE_SHEET', stylesLink: 'https://vmikh.github.io/bugbox/dist/app-min.css'}; (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/app-min.js');</script>`<br><br>
`<!--bugbox-->`<br><br>
![Insert_link](https://habrastorage.org/webt/ov/yb/7l/ovyb7lboysvym3qppng8ume_yd8.png)



### Sheet Settings
You can edit 'Priority', 'Assignee' and 'Status' fields at the 'libraries' sheet

![Sheets settings](https://habrastorage.org/webt/5c/xp/ea/5cxpeayjclg9cqnz3yrrwnprzju.png)

## Credits
[Platform.js v1.3.6](https://github.com/bestiejs/platform.js/)

## Contacts
[bugbox.io](https://bugbox.io/)

[info@bugbox.io](info@bugbox.io)
