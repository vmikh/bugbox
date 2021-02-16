// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

import Widget from "./components/widget/widget.js";


// Create widget
const bugbox = new Widget(window.bagboxSettings.googleSheetsLink);


// Send form button
bugbox.buttonSend.addEventListener( "click" , event => {
    event.preventDefault();

    fetch('/send', {
        method: 'POST',
        body: bugbox.formSerialize
    });
});


// Open widget on button click
bugbox.buttonWidget.addEventListener( "click" , event => {
    event.preventDefault();

    // Toggle class "open"
    if (bugbox.widgetCard.classList.contains('open')) {
        bugbox.widgetCard.classList.remove('open');
    }
    else {
        bugbox.widgetCard.classList.add('open');
    }
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