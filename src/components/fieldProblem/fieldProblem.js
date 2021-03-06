// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Problem field component

"use strict";

class FieldProblem {
    constructor(fieldProblem) {
        this.fieldProblem = fieldProblem;
    }
    setDisabled() {
        this.fieldProblem.disabled = true;
    }
    removeDisabled() {
        this.fieldProblem.disabled = false;
    }
};

export default FieldProblem;