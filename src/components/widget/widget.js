"use strict";

class Widget {
    constructor(googleSheetLink) {
        this.googleSheetLink = googleSheetLink;

        let h = document.createElement("section");
        h.className = "bugbox"
        h.innerHTML = '<h1>' + googleSheetLink + '</h1>'; 
        document.body.appendChild(h);

        let head  = document.getElementsByTagName('head')[0];
        let link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'app.css';
        link.media = 'all';
        head.appendChild(link);
    }

    get link() {
        return this.googleSheetLink;
    }
};

export default Widget;