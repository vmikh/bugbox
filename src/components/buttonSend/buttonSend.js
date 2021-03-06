// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Send button component

"use strict";

class ButtonSend {
    constructor(buttonSend) {
        this.buttonSend = buttonSend;
    }

    setLoad() {
        this.buttonSend.classList.add('loading');
    }

    removeLoad() {
        this.buttonSend.classList.remove('loading');
        this.buttonSend.blur();
    }

    setError(errorText) {
        this.buttonSend.classList.add('invalid');
        this.buttonSend.innerText = errorText;
    }

    removeError() {
        this.buttonSend.classList.remove('invalid');
        this.buttonSend.innerText = 'Send';
        this.buttonSend.blur();
    }

    setSuccess(succesText) {
        this.buttonSend.classList.add('success');
        this.buttonSend.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM14.0303 6.53033L12.9697 5.46967L7.5 10.9393L5.03033 8.46967L3.96967 9.53033L6.96967 12.5303L7.5 13.0607L8.03033 12.5303L14.0303 6.53033Z"/></svg>
            ${succesText}
        `;
    }

    removeSuccess() {
        this.buttonSend.classList.remove('success');
        this.buttonSend.innerText = 'Send';
        this.buttonSend.blur();
    }
};

export default ButtonSend;