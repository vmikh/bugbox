// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

import Widget from "./components/widget/widget.js";
import FieldProblem from "./components/fieldProblem/fieldProblem.js";
import FieldScreenshot from "./components/fieldScreenshot/fieldScreenshot.js";
import ButtonSend from "./components/buttonSend/buttonSend.js";
import ButtonFloat from "./components/buttonFloat/buttonFloat.js";
import ButtonInfo from "./components/buttonInfo/buttonInfo.js";
import MetaData from "./utils/metaData.js";

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
    widget.buttonSend,
    widget.buttonSendText
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
const metaData = new MetaData (
    widget.fieldProblem,
    widget.fieldScreenshot
);


// Set error if googleSheetsLink is empty
if ('' === window.bagboxSettings.googleSheetsLink || undefined === window.bagboxSettings.googleSheetsLink) {
    buttonSend.setError('Sheets isn`t connect');
}


// Send form button
widget.buttonSend.addEventListener( "click" , event => {
    event.preventDefault();

    let errors = 0;

    if (!fieldProblem.isValid()) errors++;
    if (!fieldScreenshot.isValid()) errors++;
    if (errors > 0) {
        widget.buttonSend.blur();
        return false;
    }

    // Set form disabled
    buttonSend.setLoad();
    fieldProblem.setDisabled();
    fieldScreenshot.setDisabled();

    // Send arrows to google sheets
    fetch(widget.googleLink, {
        method: 'post',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            headArray: metaData.headArray,
            bodyArray: metaData.bodyArray
        })
    })  
    .then(  
        response => {  
            console.log(response);
            console.log('unload');

            // Remove form disabled
            buttonSend.setSuccess('Sent Success');
            fieldProblem.removeDisabled();
            fieldScreenshot.removeDisabled();
        }  
    )  
    .catch(function(err) {  
        console.log('Fetch Error :-S', err);
        console.log('unload');

        // Remove form disabled
        buttonSend.setError('Something went wrong');
        fieldProblem.removeDisabled();
        fieldScreenshot.removeDisabled();
    });
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
widget.buttonInfo.addEventListener("click", event => {
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


// Remove invalid class from problem field on keyup
widget.fieldProblem.addEventListener('keyup', event => {
    event.preventDefault();
    fieldProblem.setValid();
});


// Remove invalid class from screen field on keyup
widget.fieldScreenshot.addEventListener('keyup', event => {
    event.preventDefault();
    fieldScreenshot.setValid();
});