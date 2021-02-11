"use strict";

// Main Widget Class

class Widget {
    constructor(googleSheetLink) {

        let widgetSection = document.createElement("section");
            widgetSection.className = "bugbox"
            widgetSection.innerHTML = '<h1>' + googleSheetLink + '</h1>'; 

        document.body.appendChild(widgetSection);

        this.addStyles();
        this.googleSheetLink = googleSheetLink;
    }

    addStyles() {
        let head  = document.getElementsByTagName('head')[0];
        let link  = document.createElement('link');

        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'app.css';
        link.media = 'all';

        head.appendChild(link);
    }
};

export default Widget;