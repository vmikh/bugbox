// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

"use strict";

// Import htmlToCanvas Library
import "../../utils/htmlToCanvas.js";

// Screenshot Class
class FieldScreenshot {
    constructor(buttonScreenshot, screenshotInfo, fieldScreenshot, buttonScreenshotDelete) {
        this.buttonScreenshot = buttonScreenshot;
        this.screenshotInfo = screenshotInfo;
        this.fieldScreenshot = fieldScreenshot;
        this.buttonScreenshotDelete = buttonScreenshotDelete;
    }

    takeScreenshot() {
        this.setLoad();

        console.log('check!');

        html2canvas(document.body, {
            // Set screenshot params
            width: window.innerWidth,
            height: window.innerHeight,
            y: window.pageYOffset,
        }).then((canvas) => {
    
            // Convert canvas to blob
            canvas.style.display = "none";
            document.body.appendChild(canvas);
            const leCanvas = document.getElementsByTagName("canvas")[0];
            const blob = leCanvas.toDataURL("image/jpeg");
    
            // Put screenshot to hidden field
            this.fieldScreenshot.value = blob.replace('data:image/jpeg;base64,', '');;
            console.log(this.fieldScreenshot.value);
            canvas.remove();

            this.screenshotInfo.classList.add('show');
            this.buttonScreenshot.classList.add('hide');

            this.removeLoad();
        });
    }

    setDisabled() {
        this.buttonScreenshotDelete.disabled = true;
    }

    removeDisabled() {
        this.buttonScreenshotDelete.disabled = false;
    }

    setLoad() {
        this.buttonScreenshot.classList.add('loading');
    }

    removeLoad() {
        this.buttonScreenshot.classList.remove('loading');
    }

    resetField() {
        this.fieldScreenshot.value = '';
        this.screenshotInfo.classList.remove('show');
        this.buttonScreenshot.classList.remove('hide');
    }
};

export default FieldScreenshot;