// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Main Widget Class

"use strict";

class Widget {
    constructor(googleSheetLink) {

        // Create widget section
        const widgetSection = document.createElement("section");
        widgetSection.className = "bugbox__widget";

        // Create shadow root
        this.shadow = widgetSection.attachShadow({mode: 'open'});

        this.createHtml(this.shadow);
        this.createStyles();

        document.body.appendChild(widgetSection);
        this.googleSheetLink = googleSheetLink;
    }


    // Add styles func
    createStyles() {
        const head  = document.getElementsByTagName('head')[0];
        const link  = document.createElement('link');

        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'app.css';
        link.media = 'all';

        head.appendChild(link);
    }

    get button() {
        return this.shadow.getElementById('button');
    }

    get link() {
        return this.googleSheetLink;
    }

    get formSerialize() {

        return new FormData(this.shadow.getElementById('form'));

    }

    
    // Add html to shadow root
    createHtml(elem) {
        elem.innerHTML = `
            <form id="form">
                <textarea name="problem" placeholder="Problem"></textarea>
                <input name="screen" placeholder="Screenshot" type="text">
                <button type="button" id="button">Send</button>
            </form>
        `;
    }
};

export default Widget;