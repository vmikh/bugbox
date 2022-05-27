// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

"use strict";

// Import htmlToCanvas Library
import "../../utils/htmlToCanvas.js";

// Screenshot Class
class FieldScreenshot {
    constructor(buttonScreenshot, attachScreenshot, screenshotInfo, fieldScreenshot, fieldScreenshotName, buttonScreenshotDelete) {
        this.buttonScreenshot = buttonScreenshot;
        this.attachScreenshot = attachScreenshot;
        this.screenshotInfo = screenshotInfo;
        this.fieldScreenshot = fieldScreenshot;
        this.fieldScreenshotName = fieldScreenshotName;
        this.buttonScreenshotDelete = buttonScreenshotDelete;
    }

    takeScreenshot() {
        this.setLoad();

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
            this.fieldScreenshot.value = blob.replace('data:image/jpeg;base64,', '');
            canvas.remove();

            this.removeLoad();
        });
    }

    setScreenshot() {
        const file = this.attachScreenshot.files[0];
        const fileFormat = file.type;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const blob = reader.result;

            if (fileFormat === 'image/png') {
                this.fieldScreenshot.value = blob.replace('data:image/png;base64,', '');
            }
            else this.fieldScreenshot.value = blob.replace('data:image/jpeg;base64,', '');

            this.attachScreenshot.value = '';
        }
        reader.onerror = error => {
            this.attachScreenshot.value = '';
            // console.log('Error: ', error);
        }
    }

    setFilled() {
        this.screenshotInfo.classList.add('show');
        this.buttonScreenshot.classList.add('hide');
        this.attachScreenshot.parentNode.classList.add('hide');
    }

    setScreenshotName(name) {
        this.fieldScreenshotName.innerText = name;
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
        this.attachScreenshot.parentNode.classList.remove('hide');
        this.fieldScreenshotName.innerText = '';
    }
};

export default FieldScreenshot;