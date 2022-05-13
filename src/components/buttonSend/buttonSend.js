// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Send button component

"use strict";

class ButtonSend {
    constructor(buttonSend, buttonSendText) {
        this.buttonSend = buttonSend;
        this.buttonSendText = buttonSendText;
    }

    setLoad() {
        this.buttonSend.classList.add('loading');
    }

    removeLoad() {
        this.buttonSend.classList.remove('loading');
        this.buttonSend.blur();
    }

    setError(errorText) {
        this.removeLoad();
        this.buttonSend.classList.add('invalid');
        this.buttonSendText.innerText = errorText;

        setTimeout(()=>{
            this.setStatic();
        }, 3000)
    }

    setSuccess(succesText) {
        this.removeLoad();
        this.buttonSend.classList.add('success');
        this.buttonSendText.innerText = succesText;

        setTimeout(()=>{
            this.setStatic();
        }, 3000)
    }

    setStatic() {
        this.buttonSend.classList.remove('invalid');
        this.buttonSend.classList.remove('success');
        this.buttonSendText.innerText = 'Screenshot and send';
    }
};

export default ButtonSend;