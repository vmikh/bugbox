// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

import Widget from "./components/widget/widget.js";
import ButtonFloat from "./components/buttonFloat/buttonFloat.js";


// Create widget
const widget = new Widget(
    window.bagboxSettings.googleSheetsLink,
    window.bagboxSettings.stylesLink,
);
const buttonFloat = new ButtonFloat(widget.buttonFloat, widget.widgetCard);


// Send form button
widget.buttonSend.addEventListener( "click" , event => {
    event.preventDefault();

    fetch(widget.googleLink, {
        method: 'post',
        mode: 'no-cors',
        body: widget.formSerialize
    });
});


// Open widget on button click
widget.buttonFloat.addEventListener( "click" , event => {
    event.preventDefault();
    buttonFloat.click();
});


// Open settings
widget.buttonSettings.addEventListener( "click" , event => {
    event.preventDefault();
    widget.widgetCard.classList.add('turned');
});


// Close settings
widget.buttonClose.addEventListener( "click" , event => {
    event.preventDefault();
    widget.widgetCard.classList.remove('turned');
});