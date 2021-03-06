// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Info Button component

"use strict";

class ButtonInfo {
    constructor(buttonInfo) {
        this.buttonInfo = buttonInfo;
    }

    visible() {
        this.buttonInfo.classList.add('visible');
    }

    invisible() {
        this.buttonInfo.classList.remove('visible');
    }

    open() {
        this.buttonInfo.classList.add('active');
    }

    close() {
        this.buttonInfo.classList.remove('active');
    }

    get isActive() {
        if (this.buttonInfo.classList.contains('active')) return true;
    }
};

export default ButtonInfo;