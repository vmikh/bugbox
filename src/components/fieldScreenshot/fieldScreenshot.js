// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

"use strict";

// Screenshot Class
class FieldScreenshot {
    constructor(attachScreenshot, screenshotInfo, fieldScreenshot, fieldScreenshotName, buttonScreenshotDelete) {
        this.attachScreenshot = attachScreenshot;
        this.screenshotInfo = screenshotInfo;
        this.fieldScreenshot = fieldScreenshot;
        this.fieldScreenshotName = fieldScreenshotName;
        this.buttonScreenshotDelete = buttonScreenshotDelete;
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
        }
    }

    setInvalid() {
        this.attachScreenshot.parentNode.classList.add('invalid');

        setTimeout(() => {
            this.attachScreenshot.parentNode.classList.remove('invalid');
        }, 2000);
    }

    setFilled() {
        this.screenshotInfo.classList.add('show');
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
        this.attachScreenshot.parentNode.classList.remove('hide');
        this.fieldScreenshotName.innerText = '';
    }
};

export default FieldScreenshot;