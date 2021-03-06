// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Button float component

"use strict";

class ButtonFloat {
    constructor(buttonFloat) {
        this.buttonFloat = buttonFloat;
    }

    open() {
        this.buttonFloat.classList.add('active');
    }

    close() {
        this.buttonFloat.classList.remove('active');
    }
};

export default ButtonFloat;