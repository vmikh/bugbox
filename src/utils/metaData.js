// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Meta Data Class

"use strict";

class MetaData {
    constructor(fieldProblem, fieldScreenshot, platformName, platformVersion) {
        this.fieldProblem = fieldProblem;
        this.fieldScreenshot = fieldScreenshot;
        this.platformName = platformName;
        this.platformVersion = platformVersion;
    }

    // Create header row
    get headArray() {
        return [
            'Date&Time',
            'Problem',
            'Actual Result',
            'Expected Result',
            'Priority',
            'Assignee',
            'Status',
            'URL',
            'Screenshot URL',
            'Browser',
            'OS',
            'Device Type',
            'Screen W',
            'Screen H',
            'Browser W',
            'Browser H',
        ]
    }

    // Create body row
    get bodyArray() {
        return [
            this.date,                    // Date&Time
            this.fieldProblem.value,      // Problem
            '',                           // Actual Result
            '',                           // Expected Result
            '',                           // Priority
            '',                           // Assignee
            '',                           // Status
            window.location.href,         // URL
            this.fieldScreenshot.value,   // Screenshot URL
            this.browser,                 // Browser
            this.os,                      // OS
            this.deviceType,                // Device Type
            window.screen.width,          // Screen Width
            window.screen.height,         // Screen Height
            window.innerWidth,            // Browser Width
            window.innerHeight,           // Browser Height
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


    // Return device type
    get deviceType() {
        if (this.os === 'Android' || this.os === 'iOS' || this.os === 'Symbian' || this.os === 'Windows Phone') {
            return 'Mobile/Tablet';
        }
        else return 'Desktop';
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
        return this.platformName + ' v' + parseFloat(this.platformVersion);
    }
};

export default MetaData;