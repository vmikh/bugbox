// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

import Widget from "./components/widget/widget.js";
import ButtonFloat from "./components/buttonFloat/buttonFloat.js";


// Create widget
const bugbox = new Widget(window.bagboxSettings.googleSheetsLink);
const buttonFloat = new ButtonFloat(bugbox.buttonFloat, bugbox.widgetCard);


// Send form button
bugbox.buttonSend.addEventListener( "click" , event => {
    event.preventDefault();

    fetch('/send', {
        method: 'POST',
        body: bugbox.formSerialize
    });
});


// Open widget on button click
bugbox.buttonFloat.addEventListener( "click" , event => {
    event.preventDefault();
    buttonFloat.click();
});


// Open settings
bugbox.buttonSettings.addEventListener( "click" , event => {
    event.preventDefault();
    bugbox.widgetCard.classList.add('turned');
});


// Close settings
bugbox.buttonClose.addEventListener( "click" , event => {
    event.preventDefault();
    bugbox.widgetCard.classList.remove('turned');
});