// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

import Widget from "./components/widget/widget.js";
import FieldScreenshot from "./components/fieldScreenshot/fieldScreenshot.js";
import ButtonFloat from "./components/buttonFloat/buttonFloat.js";
import FormSender from "./utils/formSender.js";

// Create widget
const widget = new Widget (
    window.bagboxSettings.googleSheetsLink,
    window.bagboxSettings.stylesLink,
);

// Create screenshot field actions class
const fieldScreenshot = new FieldScreenshot (
    widget.fieldScreenshot
);

// Create float button actions class
const buttonFloat = new ButtonFloat (
    widget.buttonFloat,
    widget.widgetCard
);

// Create form sender class
const formSender = new FormSender (
    widget.fieldProblem,
    widget.fieldScreenshot,
    widget.googleLink
);


// Send form button
widget.buttonSend.addEventListener( "click" , event => {
    event.preventDefault();
    formSender.send();
});


// Open widget on button click
widget.buttonFloat.addEventListener( "click" , event => {
    event.preventDefault();
    if (widget.isOpen) buttonFloat.close();
    else buttonFloat.open();
});


// Close widget on click out widget
document.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;
    const isWidgetSection = target == widget.widgetSection;

    if (widget.isOpen && !isWidgetSection) buttonFloat.close();
});


// Close widget on click ESC
document.onkeydown = function(event) {
    event = event || window.event;
    let isEscape = false;

    if ("key" in event) isEscape = (event.key === "Escape" || event.key === "Esc");
    else isEscape = (event.keyCode === 27);

    if (isEscape && widget.isOpen) buttonFloat.close();
};


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