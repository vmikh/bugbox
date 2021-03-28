# bugbox
Bug report system at google sheets

### Quick Install
Just paste this script into your site source

`<!--bugbox--><script> window.bagboxSettings = {googleSheetsLink: 'https://script.google.com/macros/s/AKfycby8BLqrHjPQc0hGvz5stcIj2EKNxnfNcL4kMLd-3fFlJVHnG0fmzhFwi8qOWzvRUuAB/exec', stylesLink: 'https://vmikh.github.io/bugbox/dist/app-min.css'}; (function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.type="module";s.src=u; var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x); })('https://vmikh.github.io/bugbox/dist/app-min.js');</script><!--bugbox-->`

### Full Manual Install

##### Copy this sheets
https://docs.google.com/spreadsheets/d/1_kvDjJZzX6IsPl4UebSAprOuuZR-vnpHZa3lvoVknbU/edit?usp=sharing

![Copy_sheets](https://habrastorage.org/webt/bz/g7/_h/bzg7_htj7o72pdya0gibrit5hfo.png)

##### Publish sheet's script<br>
1. Tools > Script Editor<br>
2. Deploy > New deployment<br>
3. Fill the description > Deploy<br>
4. Give the application read and write permissions
5. Copy web app url

![Script_editor](https://habrastorage.org/webt/jb/ma/fm/jbmafm8so779b2cyvlrdq-mi4xe.png)

![New_deployment](https://habrastorage.org/webt/rc/0y/1l/rc0y1lla-9ksyio5chlahdllua0.png)

![Deploy](https://habrastorage.org/webt/l6/ec/qi/l6ecqiwifkixlepjdk98quffnru.png)

![Permissions](https://habrastorage.org/webt/j7/za/bf/j7zabfzgbijkguhskfl8ahgmjsg.png)

![Copy_link](https://habrastorage.org/webt/mn/qh/cz/mnqhcznbrq4amj2aktbhpifamsg.png)

##### Insert your sheets link into script to 'googleSheetsLink' parameter
![Insert_link](https://habrastorage.org/webt/rb/ou/-g/rbou-g5nycqqb0vkounwisdktfo.png)

### Sheets Settings
You can edit 'Priority', 'Assignee' and 'Status' fields on the 'libraries' sheet

![Sheets settings](https://habrastorage.org/webt/ao/sf/ze/aosfzej9ibj8s3euy84zxre4ihy.png)
