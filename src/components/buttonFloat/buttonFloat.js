// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Button float component

"use strict";

class ButtonFloat {
    constructor(buttonFloat, widgetCard) {
        this.buttonFloat = buttonFloat;
        this.widgetCard = widgetCard;
    }

    open() {
        this.widgetCard.classList.add('open');
        this.buttonFloat.classList.add('active');
    }

    close() {
        this.widgetCard.classList.remove('open');
        this.buttonFloat.classList.remove('active');
    }
};

export default ButtonFloat;