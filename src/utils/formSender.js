// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Form sender class

"use strict";

class FormSender {
    constructor(fieldProblem, fieldScreenshot, googleLink) {
        this.fieldProblem = fieldProblem;
        this.fieldScreenshot = fieldScreenshot;
        this.googleLink = googleLink;
    }

    send() {
        const headArray = [
            'Status',
            'Date&Time',
            'Problem',
            'Screenshot URL',
            'Browser',
            'Browser Ver',
            'OS',
            'Is Mobile',
            'Screen Width',
            'Screen Height',
            'Browser Width',
            'Browser Height',
            'URL',
            'Actual Result',
            'Expected Result',
            'Priority',
            'Assignee'
        ];
    
        const bodyArray = [
            '',
            'My Date&Time',
            'My Problem',
            'My Screenshot URL',
            'My Browser',
            'My Browser Ver',
            'My OS',
            'My Is Mobile',
            'My Screen Width',
            'My Screen Height',
            'My Browser Width',
            'My Browser Height',
            'My URL',
            '',
            '',
            '',
            ''
        ];
    
        fetch(this.googleLink, {
            method: 'post',
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                headArray: headArray,
                bodyArray: bodyArray
            })
        });
    }
};

export default FormSender;