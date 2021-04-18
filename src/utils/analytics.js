// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Ananytics Class

"use strict";

class Ananytics {
    constructor(googleSheetsLink) {
        this.googleSheetsLink = googleSheetsLink;
        this.siteUrl = window.location.host;
        this.sessionUrl = 'https://backend.bugbox.io/addsession.php';
        this.bugUrl = 'https://backend.bugbox.io/addbug.php';
    }
    
    sendSession() {
        fetch(this.sessionUrl, {
            method: 'post',
            mode: 'no-cors',
            body: JSON.stringify({
                siteUrl: this.siteUrl,
                tableUrl: this.googleSheetsLink,
            })
        });

        localStorage.setItem('sendSessionTime', new Date().getTime());
    }

    sendBug() {
        fetch(this.bugUrl, {
            method: 'post',
            mode: 'no-cors',
            body: JSON.stringify({
                siteUrl: this.siteUrl,
                tableUrl: this.googleSheetsLink,
            })
        });
    }
};

export default Ananytics;