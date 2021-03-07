// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Meta Data Class

"use strict";

class MetaData {
    constructor(fieldProblem, fieldScreenshot) {
        this.fieldProblem = fieldProblem;
        this.fieldScreenshot = fieldScreenshot;
    }

    // Create header row
    get headArray() {
        return [
            'Status',
            'Priority',
            'Date&Time',
            'Problem',
            'URL',
            'Screenshot URL',
            'Browser',
            'OS',
            'Is Mobile',
            'Screen W',
            'Screen H',
            'Browser W',
            'Browser H',
            'Actual Result',
            'Expected Result',
            'Assignee'
        ]
    }

    // Create body row
    get bodyArray() {
        return [
            '',                           // Status
            '',                           // Priority
            this.date,                    // Date&Time
            this.fieldProblem.value,      // Problem
            window.location.href,         // URL
            this.fieldScreenshot.value,   // Screenshot URL
            this.browser,                 // Browser
            this.os,                      // OS
            this.isMobile,                // Is Mobile
            window.screen.width,          // Screen Width
            window.screen.height,         // Screen Height
            window.innerWidth,            // Browser Width
            window.innerHeight,           // Browser Height
            '',                           // Actual Result
            '',                           // Expected Result
            ''                            // Assignee
        ]
    }


    // Return OS name
    get os() {
        const userDeviceArray = [
            {device: 'Android', platform: /Android/},
            {device: 'iOS', platform: /iPhone/},
            {device: 'iOS', platform: /iPad/},
            {device: 'Symbian', platform: /Symbian/},
            {device: 'Windows Phone', platform: /Windows Phone/},
            {device: 'Tablet OS', platform: /Tablet OS/},
            {device: 'Linux', platform: /Linux/},
            {device: 'Windows', platform: /Windows NT/},
            {device: 'Mac OS', platform: /Macintosh/}
        ];
        
        const platform = navigator.userAgent;
        for (let i in userDeviceArray) {
            if (userDeviceArray[i].platform.test(platform)) {
                return userDeviceArray[i].device;
            }
        }
        return 'Unknown platform! ' + platform;
    }


    // Return '+' if mobile
    get isMobile() {
        if (this.os === 'Android' || this.os === 'iOS' || this.os === 'Symbian' || this.os === 'Windows Phone') {
            return '+';
        }
    }


    // Return date and time in format dd.mm.yyyy hh.mm
    get date() {
        const date = new Date();

        const day = date.getDate();
        const month = (date.getMonth().toString().length == 1? "0":'' ) + date.getMonth();
        const year = date.getFullYear();
        const hours = ((date.getHours()).toString().length == 1?'0':'') + "" + (date.getHours());
        const mins = ((date.getMinutes()).toString().length == 1?'0':'') + "" + (date.getMinutes());

        return `${day}.${month}.${year} ${hours}:${mins}`;
    }


    // Return browser name and version
    get browser() {
        let ua = navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
            return {name:'IE',version:(tem[1]||'')};
        }   
        if (M[1]==='Chrome') {
            tem=ua.match(/\bOPR|Edge\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if ((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        
        return M[0] + ' v' + M[1];
    }


    // Return concatinated all rows
    // get total() {
    //     return `${this.titles.date}: ${this.date},\n${this.titles.problem}: ${this.fieldProblem.value},\n${this.titles.screenshot}: ${this.fieldScreenshot.value}`
    // }
};

export default MetaData;