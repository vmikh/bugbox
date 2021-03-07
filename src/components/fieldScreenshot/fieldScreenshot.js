// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Screenshot field component

"use strict";

class FieldScreenshot {
    constructor(fieldScreenshot) {
        this.fieldScreenshot = fieldScreenshot;
    }

    setDisabled() {
        this.fieldScreenshot.disabled = true;
    }

    removeDisabled() {
        this.fieldScreenshot.disabled = false;
    }

    setInvalid() {
        this.fieldScreenshot.classList.add('invalid');
    }

    setValid() {
        this.fieldScreenshot.classList.remove('invalid');
    }

    isValid() {
        if (this.fieldScreenshot.value === '') {
            this.setInvalid();
            return false;
        }
        return true;
    }
};

export default FieldScreenshot;