// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

import Widget from "./components/widget/widget.js";

const bugbox = new Widget(window.bagboxSettings.googleSheetsLink);

// Add listner on send button
bugbox.button.addEventListener( "click" , event => {
    event.preventDefault();

    fetch('/send', {
        method: 'POST',
        body: bugbox.formSerialize
    });
});