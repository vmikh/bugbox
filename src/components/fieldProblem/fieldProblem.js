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

    setInvalid() {
        this.fieldProblem.classList.add('invalid');
    }

    setValid() {
        this.fieldProblem.classList.remove('invalid');
    }

    isValid() {
        if (this.fieldProblem.value === '') {
            this.setInvalid();
            return false;
        }
        return true;
    }
};

export default FieldProblem;