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
    click() {
        // Toggle class "open"
        if (this.widgetCard.classList.contains('open')) {
            this.widgetCard.classList.remove('open');
        }
        else {
            this.widgetCard.classList.add('open');
        }
    }
};

export default ButtonFloat;