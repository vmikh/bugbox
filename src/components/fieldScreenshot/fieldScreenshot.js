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
};

export default FieldScreenshot;