// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

import Widget from "./components/widget/widget.js";
import FieldProblem from "./components/fieldProblem/fieldProblem.js";
import FieldScreenshot from "./components/fieldScreenshot/fieldScreenshot.js";
import ButtonSend from "./components/buttonSend/buttonSend.js";
import ButtonFloat from "./components/buttonFloat/buttonFloat.js";
import ButtonInfo from "./components/buttonInfo/buttonInfo.js";
import FormSender from "./utils/formSender.js";

// Create widget
const widget = new Widget (
    window.bagboxSettings.googleSheetsLink,
    window.bagboxSettings.stylesLink,
);

// Create problem field actions class
const fieldProblem = new FieldProblem (
    widget.fieldProblem
);

// Create screenshot field actions class
const fieldScreenshot = new FieldScreenshot (
    widget.fieldScreenshot
);

// Create float button actions class
const buttonSend = new ButtonSend (
    widget.buttonSend
);

// Create float button actions class
const buttonFloat = new ButtonFloat (
    widget.buttonFloat
);

// Create button info actions class
const buttonInfo = new ButtonInfo (
    widget.buttonInfo
);

// Create form sender class
const formSender = new FormSender (
    widget.fieldProblem,
    widget.fieldScreenshot,
    widget.googleLink
);


// Set error if googleSheetsLink is empty
if ('' === window.bagboxSettings.googleSheetsLink || undefined === window.bagboxSettings.googleSheetsLink) {
    buttonSend.setError('Sheets isn`t connect');
}


// Send form button
widget.buttonSend.addEventListener( "click" , event => {
    event.preventDefault();
    buttonSend.setLoad();
    fieldProblem.setDisabled();
    fieldScreenshot.setDisabled();

    if (true === formSender.send()) {
        console.log('true');
        buttonSend.removeLoad();
        buttonSend.setSuccess('Sent Success');
        fieldProblem.removeDisabled();
        fieldScreenshot.removeDisabled();

        setTimeout(() => {
            buttonSend.removeSuccess();
        }, 3000);
    }
    else {
        buttonSend.setError('Something went wrong');
    }
});


// Open widget on button click
widget.buttonFloat.addEventListener( "click" , event => {
    event.preventDefault();
    if (widget.isOpen) {
        buttonFloat.close();
        buttonInfo.invisible();
        widget.close();

        // if info is open
        buttonInfo.close();
        widget.turnOff();
    }
    else {
        buttonFloat.open();
        buttonInfo.visible();
        widget.open();
    }
});


// Close widget on click out widget
document.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;
    const isWidgetSection = target == widget.widgetSection;

    if (widget.isOpen && !isWidgetSection) {
        buttonFloat.close();
        buttonInfo.invisible();
        widget.close();

        // if info is open
        buttonInfo.close();
        widget.turnOff();
    }
});


// Close widget on click ESC
document.onkeydown = function(event) {
    event = event || window.event;
    let isEscape = false;

    if ("key" in event) isEscape = (event.key === "Escape" || event.key === "Esc");
    else isEscape = (event.keyCode === 27);

    if (isEscape && widget.isOpen) {
        buttonFloat.close();
        buttonInfo.invisible();
        widget.close();

        // if info is open
        buttonInfo.close();
        widget.turnOff();
    }
};


// Open & Close settings
widget.buttonInfo.addEventListener( "click" , event => {
    event.preventDefault();

    if (buttonInfo.isActive) {
        buttonInfo.close();
        widget.turnOff();
    }
    else {
        buttonInfo.open();
        widget.turnOn();
    }
});