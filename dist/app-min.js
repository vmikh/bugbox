"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){var e=function(){function e(t,n,i,o){_classCallCheck(this,e);var s=document.createElement("section");s.className="bugbox__widget",this.isHidden=i,s.style.display="none",s.style.opacity="0",s.style.transition="opacity .2s",this.shadowHost=s.attachShadow({mode:"open"}),this.stylesLink=n,this.platformName=o,this.createHtml(this.shadowHost),document.body.after(s),this.createStyles(this.shadowHost,this.stylesLink),this.googleSheetLink=t,this.widgetSection=s,setTimeout(function(){s.style.display="initial",setTimeout(function(){s.style.opacity="1"},10)},300)}return _createClass(e,[{key:"createStyles",value:function(e,t){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=t,n.media="all",e.appendChild(n)}},{key:"open",value:function(){this.widgetCard.classList.add("open")}},{key:"close",value:function(){this.widgetCard.classList.remove("open")}},{key:"turnOn",value:function(){this.widgetCard.classList.add("turned")}},{key:"turnOff",value:function(){this.widgetCard.classList.remove("turned")}},{key:"addSheetUrl",value:function(e){var t=document.createElement("li");t.classList.add("menu__item"),t.innerHTML='<a href="'.concat(e,'" target="_blank">connected sheet</a>'),this.menu.prepend(t)}},{key:"widgetCard",get:function(){return this.shadowHost.getElementById("widget_card")}},{key:"buttonFloat",get:function(){return this.shadowHost.getElementById("button_float")}},{key:"buttonInfo",get:function(){return this.shadowHost.getElementById("button_info")}},{key:"buttonClose",get:function(){return this.shadowHost.getElementById("button_close")}},{key:"buttonSend",get:function(){return this.shadowHost.getElementById("button_send")}},{key:"buttonSendText",get:function(){return this.shadowHost.getElementById("button_send__text")}},{key:"fieldProblem",get:function(){return this.shadowHost.getElementById("field_problem")}},{key:"screenshotInfo",get:function(){return this.shadowHost.getElementById("screenshot_info")}},{key:"attachScreenshot",get:function(){return this.shadowHost.getElementById("attach_screenshot")}},{key:"fieldScreenshotName",get:function(){return this.shadowHost.getElementById("fieldScreenshot__name")}},{key:"fieldScreenshot",get:function(){return this.shadowHost.getElementById("field_screenshot")}},{key:"buttonScreenshotDelete",get:function(){return this.shadowHost.getElementById("screenshot__button_delete")}},{key:"menu",get:function(){return this.shadowHost.getElementById("menu")}},{key:"formSerialize",get:function(){return new FormData(this.shadowHost.getElementById("form"))}},{key:"googleLink",get:function(){return this.googleSheetLink}},{key:"isOpen",get:function(){if(this.widgetCard.classList.contains("open"))return!0}},{key:"createHtml",value:function(e){var t,n="Chrome"===this.platformName||"Firefox"===this.platformName?"animated":"static",i=this.isHidden?"isHidden":"";t=this.isHidden?'<button class="button_float_hidden" type="button" id="button_float"></button>':'\n                <button class="button_float" type="button" id="button_float">\n                    <svg class="button_float__cross" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.34459 0.34459C-0.114838 0.804018 -0.114889 1.54896 0.34459 2.00844L5.33615 7L0.34459 11.9916C-0.114838 12.451 -0.114889 13.1959 0.34459 13.6554C0.804069 14.1149 1.54901 14.1148 2.00844 13.6554L7 8.66385L11.9916 13.6554C12.451 14.1149 13.196 14.1148 13.6554 13.6554C14.1148 13.196 14.1149 12.451 13.6554 11.9916L8.66385 7L13.6554 2.00844C14.1148 1.54901 14.1149 0.804069 13.6554 0.34459C13.1959 -0.114889 12.451 -0.114838 11.9916 0.34459L7 5.33615L2.00844 0.34459C1.54896 -0.114889 0.804018 -0.114838 0.34459 0.34459Z"/></svg>\n                    <svg class="button_float__logo" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.1749 4.97177C6.92527 4.97177 6.7229 4.7694 6.7229 4.51977V4.27759C6.7229 1.915 8.63815 -0.000244141 11.0007 -0.000244141C13.3633 -0.000244141 15.2786 1.915 15.2786 4.27758V4.51977C15.2786 4.7694 15.0762 4.97177 14.8266 4.97177H7.1749ZM2.11744 5.02486L4.88892 7.84342V9.94361H0.932253C0.417384 9.94361 0 10.361 0 10.8759C0 11.3907 0.417383 11.8081 0.932252 11.8081H4.88892V12.533C4.88892 13.1422 4.97804 13.7305 5.14397 14.2857L5.14207 14.2876L2.11718 17.3639C1.7592 17.7279 1.7592 18.3182 2.11718 18.6823C2.47517 19.0464 3.05558 19.0464 3.41356 18.6823L6.0018 16.0501C6.99763 17.4627 8.57716 18.4343 10.3896 18.6141V9.31143C10.3896 8.97392 10.6632 8.70031 11.0007 8.70031C11.3382 8.70031 11.6118 8.97392 11.6118 9.31143V18.6139C13.4126 18.435 14.9834 17.4743 15.98 16.076L18.5864 18.7267C18.9444 19.0908 19.5248 19.0908 19.8828 18.7267C20.2408 18.3626 20.2408 17.7724 19.8828 17.4083L16.8579 14.332L16.8459 14.32C17.0184 13.7548 17.1113 13.1547 17.1113 12.533V11.8081H21.0677C21.5825 11.8081 21.9999 11.3907 21.9999 10.8759C21.9999 10.361 21.5825 9.94361 21.0677 9.94361H17.1113V7.8441L19.8833 5.02502C20.2412 4.66095 20.2412 4.07068 19.8833 3.70662C19.5253 3.34255 18.9449 3.34255 18.5869 3.70662L16.1137 6.22182C16.0703 6.21675 16.0261 6.21415 15.9813 6.21415H6.01892C5.97433 6.21415 5.93034 6.21673 5.8871 6.22176L3.41381 3.70645C3.05583 3.34238 2.47542 3.34238 2.11744 3.70645C1.75945 4.07052 1.75945 4.66079 2.11744 5.02486Z"/></svg>\n                </button>\n            ',e.innerHTML="\n            ".concat(t,'\n\n            <button class="button_info ').concat(i,'" type="button" id="button_info">\n                <svg class="button_info__info" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM9 10C9 9.44772 9.44771 9 10 9C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V10ZM10 4.59985C9.17157 4.59985 8.5 5.27143 8.5 6.09985C8.5 6.92828 9.17157 7.59985 10 7.59985C10.8284 7.59985 11.5 6.92828 11.5 6.09985C11.5 5.27143 10.8284 4.59985 10 4.59985Z"/></svg>\n                <svg class="button_info__back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.22222L7.11111 0V3.63911C16 5.77422 16 16 16 16C16 16 12.9062 8.812 7.11111 8.812V12.4444L0 6.22222Z"/></svg>\n            </button>\n\n            <section class="widget_card ').concat(n,'" id="widget_card">\n                <section class="widget_front">\n                    <form id="form">\n                        <label class="field_problem" for="field_problem">\n                            <textarea class="field_problem__input" id="field_problem" placeholder="&nbsp;"></textarea>\n                            <span class="field_problem__label">Problem or idea</span>\n                        </label>\n\n                        <div class="fieldScreenshot">\n                            <div class="screenshot_info" id="screenshot_info">\n                                <input id="field_screenshot" type="hidden">\n                                <p class="fieldScreenshot__name" id="fieldScreenshot__name"></p>\n                                <button class="screenshot__button_delete" type="button" id="screenshot__button_delete">\n                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.34459 0.34459C-0.114838 0.804018 -0.114889 1.54896 0.34459 2.00844L5.33615 7L0.34459 11.9916C-0.114838 12.451 -0.114889 13.1959 0.34459 13.6554C0.804069 14.1149 1.54901 14.1148 2.00844 13.6554L7 8.66385L11.9916 13.6554C12.451 14.1149 13.196 14.1148 13.6554 13.6554C14.1148 13.196 14.1149 12.451 13.6554 11.9916L8.66385 7L13.6554 2.00844C14.1148 1.54901 14.1149 0.804069 13.6554 0.34459C13.1959 -0.114889 12.451 -0.114838 11.9916 0.34459L7 5.33615L2.00844 0.34459C1.54896 -0.114889 0.804018 -0.114838 0.34459 0.34459Z"/></svg>\n                                </button>\n                            </div>\n                            <label class="attach_screenshot" for="attach_screenshot">\n                                <input id="attach_screenshot" type="file">\n                                Attach Screenshot\n                            </label>\n                        </div>\n                        \n                        <button class="button_send" type="button" id="button_send">\n                            <svg class="button_send__icon"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM14.0303 6.53033L12.9697 5.46967L7.5 10.9393L5.03033 8.46967L3.96967 9.53033L6.96967 12.5303L7.5 13.0607L8.03033 12.5303L14.0303 6.53033Z"/></svg>\n                            <span id="button_send__text">Send<span>\n                        </button>\n                    </form>\n                </section>\n                <section class="widget_back">\n                    <svg class="widget_back__logo" width="125" height="25" viewBox="0 0 123 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95801 4.58126C7.95801 4.83428 8.16312 5.03939 8.41613 5.03939H16.5128C16.7658 5.03939 16.9709 4.83428 16.9709 4.58126V4.50644C16.9709 2.0176 14.9533 0 12.4644 0C9.97561 0 7.95801 2.0176 7.95801 4.50644V4.58126ZM6.02666 7.95041L3.10681 5.09338C2.72969 4.72438 2.72969 4.12612 3.10681 3.75711C3.48392 3.38811 4.09535 3.38811 4.47246 3.75711L7.07464 6.3033C7.10673 6.3006 7.13919 6.29922 7.17198 6.29922H17.7569C17.7897 6.29922 17.8221 6.3006 17.8542 6.3033L20.4564 3.75711C20.8335 3.38811 21.4449 3.38811 21.8221 3.75711C22.1992 4.12611 22.1992 4.72438 21.8221 5.09338L18.9022 7.95041V10.0787H23.1076C23.6294 10.0787 24.0524 10.5018 24.0524 11.0236C24.0524 11.5455 23.6294 11.9685 23.1076 11.9685H18.9022V12.4599C18.9022 13.1642 18.7891 13.842 18.5801 14.4762C18.5991 14.4921 18.6176 14.5089 18.6356 14.5264L21.8221 17.6444C22.1992 18.0134 22.1992 18.6117 21.8221 18.9807C21.445 19.3497 20.8336 19.3497 20.4564 18.9807L17.6675 16.2518C16.6157 17.6927 14.9799 18.6801 13.1082 18.8659V9.46268C13.1082 9.10713 12.82 8.81891 12.4644 8.81891C12.1089 8.81891 11.8207 9.10713 11.8207 9.46268V18.8659C9.9377 18.679 8.29341 17.6807 7.24232 16.2256L4.47246 18.9359C4.09534 19.3049 3.48392 19.3049 3.1068 18.9359C2.72969 18.5669 2.72969 17.9686 3.1068 17.5996L6.29334 14.4816C6.30766 14.4676 6.32232 14.4541 6.3373 14.4412C6.13562 13.817 6.02666 13.1512 6.02666 12.4599V11.9685H1.82135C1.2995 11.9685 0.876465 11.5455 0.876465 11.0236C0.876465 10.5018 1.2995 10.0787 1.82135 10.0787H6.02666V7.95041ZM31.6083 7.69141C32.7169 6.18162 34.2851 5.42673 36.3401 5.42673C38.2057 5.42673 39.774 6.10074 41.0989 7.47572C42.4238 8.85071 43.0727 10.5223 43.0727 12.5173C43.0727 14.4854 42.4238 16.1839 41.0989 17.5589C39.774 18.9339 38.2057 19.6079 36.3401 19.6079C34.2851 19.6079 32.7169 18.853 31.6083 17.3163V19.2574H28.6881V0.385132H31.6083V7.69141ZM31.6083 12.5173C31.6083 13.7575 32.0139 14.782 32.825 15.6178C33.6362 16.4266 34.6637 16.831 35.8804 16.831C37.0971 16.831 38.1246 16.4266 38.9358 15.6178C39.7469 14.782 40.1525 13.7575 40.1525 12.5173C40.1525 11.2771 39.7469 10.2526 38.9358 9.44384C38.1246 8.60806 37.0971 8.20366 35.8804 8.20366C34.6637 8.20366 33.6362 8.60806 32.825 9.44384C32.0139 10.2526 31.6083 11.2771 31.6083 12.5173ZM51.3974 16.8849C53.4523 16.8849 54.8313 15.6178 54.8313 13.0026V5.77722H57.7515V19.2574H54.8313V17.532C53.939 18.9069 52.5601 19.6079 50.6403 19.6079C47.5309 19.6079 45.4489 17.505 45.4489 14.0541V5.77722H48.3691V13.7575C48.3691 15.7795 49.5317 16.8849 51.3974 16.8849ZM71.9276 7.77229C70.819 6.20858 69.2507 5.42673 67.2228 5.42673C65.3031 5.42673 63.7078 6.10074 62.3829 7.47572C61.058 8.82374 60.4091 10.4683 60.4091 12.3825C60.4091 14.2967 61.058 15.9413 62.3829 17.3163C63.7078 18.6643 65.3031 19.3383 67.2228 19.3383C69.2507 19.3383 70.819 18.5565 71.9276 16.9928V18.6373C71.9276 20.9829 70.4134 22.3579 67.8988 22.3579C65.979 22.3579 64.6542 21.6569 63.9512 20.2819L61.4366 21.7378C62.5992 23.9216 64.7353 25 67.8447 25C69.7645 25 71.4138 24.4608 72.7657 23.3554C74.1177 22.25 74.7936 20.6863 74.7936 18.6373V5.77722H71.9276V7.77229ZM64.546 15.4021C63.7348 14.5933 63.3293 13.5957 63.3293 12.3825C63.3293 11.1693 63.7348 10.1718 64.546 9.36295C65.3842 8.55414 66.4117 8.14973 67.6284 8.14973C68.8451 8.14973 69.8726 8.55414 70.6838 9.36295C71.522 10.1718 71.9276 11.1693 71.9276 12.3825C71.9276 13.5957 71.522 14.5933 70.6838 15.4021C69.8726 16.2109 68.8451 16.6153 67.6284 16.6153C66.4117 16.6153 65.3842 16.2109 64.546 15.4021ZM81.1175 7.69141C82.2261 6.18162 83.7943 5.42673 85.8493 5.42673C87.7149 5.42673 89.2832 6.10074 90.6081 7.47572C91.933 8.85071 92.5819 10.5223 92.5819 12.5173C92.5819 14.4854 91.933 16.1839 90.6081 17.5589C89.2832 18.9339 87.7149 19.6079 85.8493 19.6079C83.7943 19.6079 82.2261 18.853 81.1175 17.3163V19.2574H78.1973V0.385132H81.1175V7.69141ZM81.1175 12.5173C81.1175 13.7575 81.5231 14.782 82.3343 15.6178C83.1454 16.4266 84.1729 16.831 85.3896 16.831C86.6064 16.831 87.6338 16.4266 88.445 15.6178C89.2561 14.782 89.6617 13.7575 89.6617 12.5173C89.6617 11.2771 89.2561 10.2526 88.445 9.44384C87.6338 8.60806 86.6064 8.20366 85.3896 8.20366C84.1729 8.20366 83.1454 8.60806 82.3343 9.44384C81.5231 10.2526 81.1175 11.2771 81.1175 12.5173ZM101.61 19.6079C103.61 19.6079 105.287 18.9339 106.666 17.5589C108.045 16.1839 108.748 14.5124 108.748 12.5173C108.748 10.5223 108.045 8.85071 106.666 7.47572C105.287 6.10074 103.61 5.42673 101.61 5.42673C99.6358 5.42673 97.9324 6.10074 96.5534 7.47572C95.1744 8.85071 94.4714 10.5223 94.4714 12.5173C94.4714 14.5124 95.1744 16.1839 96.5534 17.5589C97.9324 18.9339 99.6358 19.6079 101.61 19.6079ZM98.6084 15.5639C97.7972 14.755 97.3916 13.7305 97.3916 12.5173C97.3916 11.3041 97.7972 10.2796 98.6084 9.4708C99.4195 8.66198 100.42 8.25758 101.61 8.25758C102.799 8.25758 103.8 8.66198 104.611 9.4708C105.422 10.2796 105.828 11.3041 105.828 12.5173C105.828 13.7305 105.422 14.755 104.611 15.5639C103.8 16.3727 102.799 16.7771 101.61 16.7771C100.42 16.7771 99.4195 16.3727 98.6084 15.5639ZM122.254 5.77722L117.441 12.3556L122.498 19.2574H119.118L115.765 14.6472L112.385 19.2574H108.978L114.062 12.3286L109.249 5.77722H112.629L115.738 10.037L118.847 5.77722H122.254Z"/></svg>\n\n                    <h2 class="widget_back__headline">Bug report system based</br>on Google Sheets</h2>\n                    <ul class="menu" id="menu">\n                        <li class="menu__item"><a href="https://github.com/vmikh/bugbox" target="_blank">full manual</a></li>\n                        <li class="menu__item"><a href="mailto:info@bugbox.io">info@bugbox.io</a></li>\n                    </ul>\n                    <a href="https://yoomoney.ru/to/41001838339242" class="widget_back__date_button" target="_blank">Donate</a>\n                </section>\n            </section>\n        ')}}]),e}(),t=function(){function e(t){_classCallCheck(this,e),this.fieldProblem=t}return _createClass(e,[{key:"setDisabled",value:function(){this.fieldProblem.disabled=!0}},{key:"removeDisabled",value:function(){this.fieldProblem.disabled=!1}},{key:"setInvalid",value:function(){this.fieldProblem.classList.add("invalid")}},{key:"setValid",value:function(){this.fieldProblem.classList.remove("invalid")}},{key:"setEmpty",value:function(){this.fieldProblem.value=""}},{key:"isValid",value:function(){return""!==this.fieldProblem.value||(this.setInvalid(),!1)}}]),e}(),n=function(){function e(t,n,i,o,s){_classCallCheck(this,e),this.attachScreenshot=t,this.screenshotInfo=n,this.fieldScreenshot=i,this.fieldScreenshotName=o,this.buttonScreenshotDelete=s}return _createClass(e,[{key:"setScreenshot",value:function(){var e=this,t=this.attachScreenshot.files[0],n=t.type,i=new FileReader;i.readAsDataURL(t),i.onload=function(){var t=i.result;e.fieldScreenshot.value="image/png"===n?t.replace("data:image/png;base64,",""):t.replace("data:image/jpeg;base64,",""),e.attachScreenshot.value=""},i.onerror=function(t){e.attachScreenshot.value=""}}},{key:"setInvalid",value:function(){var e=this;this.attachScreenshot.parentNode.classList.add("invalid"),setTimeout(function(){e.attachScreenshot.parentNode.classList.remove("invalid")},2e3)}},{key:"setFilled",value:function(){this.screenshotInfo.classList.add("show"),this.attachScreenshot.parentNode.classList.add("hide")}},{key:"setScreenshotName",value:function(e){this.fieldScreenshotName.innerText=e}},{key:"setDisabled",value:function(){this.buttonScreenshotDelete.disabled=!0}},{key:"removeDisabled",value:function(){this.buttonScreenshotDelete.disabled=!1}},{key:"resetField",value:function(){this.fieldScreenshot.value="",this.screenshotInfo.classList.remove("show"),this.attachScreenshot.parentNode.classList.remove("hide"),this.fieldScreenshotName.innerText=""}}]),e}(),i=function(){function e(t,n){_classCallCheck(this,e),this.buttonSend=t,this.buttonSendText=n}return _createClass(e,[{key:"setLoad",value:function(){this.buttonSend.classList.add("loading")}},{key:"removeLoad",value:function(){this.buttonSend.classList.remove("loading"),this.buttonSend.blur()}},{key:"setError",value:function(e){var t=this;this.removeLoad(),this.buttonSend.classList.add("invalid"),this.buttonSendText.innerText=e,setTimeout(function(){t.setStatic()},3e3)}},{key:"setSuccess",value:function(e){var t=this;this.removeLoad(),this.buttonSend.classList.add("success"),this.buttonSendText.innerText=e,setTimeout(function(){t.setStatic()},3e3)}},{key:"setStatic",value:function(){this.buttonSend.classList.remove("invalid"),this.buttonSend.classList.remove("success"),this.buttonSendText.innerText="Send"}}]),e}(),o=function(){function e(t){_classCallCheck(this,e),this.buttonFloat=t}return _createClass(e,[{key:"open",value:function(){this.buttonFloat.classList.add("active")}},{key:"close",value:function(){this.buttonFloat.classList.remove("active")}}]),e}(),s=function(){function e(t){_classCallCheck(this,e),this.buttonInfo=t}return _createClass(e,[{key:"visible",value:function(){this.buttonInfo.classList.add("visible")}},{key:"invisible",value:function(){this.buttonInfo.classList.remove("visible")}},{key:"open",value:function(){this.buttonInfo.classList.add("active")}},{key:"close",value:function(){this.buttonInfo.classList.remove("active")}},{key:"isActive",get:function(){if(this.buttonInfo.classList.contains("active"))return!0}}]),e}(),a=function(){function e(t,n,i,o){_classCallCheck(this,e),this.fieldProblem=t,this.fieldScreenshot=n,this.platformName=i,this.platformVersion=o}return _createClass(e,[{key:"headArray",get:function(){return["Date&Time","Problem","Screenshot","Actual Result","Expected Result","Priority","Assignee","Status","URL","Browser","OS","Device Type","Screen ⥗","Screen ⥔","Browser ⥗","Browser ⥔"]}},{key:"bodyArray",get:function(){return[this.date,this.fieldProblem.value,this.fieldScreenshot.value,"","","","","",window.location.href,this.browser,this.os,this.deviceType,window.screen.width,window.screen.height,window.innerWidth,window.innerHeight]}},{key:"os",get:function(){var e=[{device:"Android",platform:/Android/},{device:"iOS",platform:/iPhone/},{device:"iOS",platform:/iPad/},{device:"Symbian",platform:/Symbian/},{device:"Windows Phone",platform:/Windows Phone/},{device:"Tablet OS",platform:/Tablet OS/},{device:"Linux",platform:/Linux/},{device:"Windows",platform:/Windows NT/},{device:"Mac OS",platform:/Macintosh/}],t=navigator.userAgent;for(var n in e)if(e[n].platform.test(t))return e[n].device;return"Unknown platform! "+t}},{key:"deviceType",get:function(){return"Android"===this.os||"iOS"===this.os||"Symbian"===this.os||"Windows Phone"===this.os?"Mobile/Tablet":"Desktop"}},{key:"date",get:function(){var e=new Date,t=e.getDate(),n=(1==e.getMonth().toString().length?"0":"")+e.getMonth(),i=e.getFullYear(),o=(1==e.getHours().toString().length?"0":"")+e.getHours(),s=(1==e.getMinutes().toString().length?"0":"")+e.getMinutes();return"".concat(t,".").concat(n,".").concat(i," ").concat(o,":").concat(s)}},{key:"browser",get:function(){return this.platformName+" v"+parseFloat(this.platformVersion)}}]),e}(),r=function(){function e(){_classCallCheck(this,e),this.info=this.getPlatform()}return _createClass(e,[{key:"getPlatform",value:function(){return function(){var e={function:!0,object:!0},t=e["undefined"==typeof window?"undefined":_typeof(window)]&&window||this,n=e["undefined"==typeof exports?"undefined":_typeof(exports)]&&exports,i=e["undefined"==typeof module?"undefined":_typeof(module)]&&module&&!module.nodeType&&module,o=n&&i&&"object"==("undefined"==typeof global?"undefined":_typeof(global))&&global;!o||o.global!==o&&o.window!==o&&o.self!==o||(t=o);var s=Math.pow(2,53)-1,a=/\bOpera/,r=Object.prototype,l=r.hasOwnProperty,c=r.toString;function d(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function u(e){return e=m(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:d(e)}function b(e,t){for(var n in e)l.call(e,n)&&t(e[n],n,e)}function h(e){return null==e?d(e):c.call(e).slice(8,-1)}function f(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function p(e,t){var n=null;return function(e,t){var n=-1,i=e?e.length:0;if("number"==typeof i&&i>-1&&i<=s)for(;++n<i;)t(e[n],n,e);else b(e,t)}(e,function(i,o){n=t(n,i,o,e)}),n}function m(e){return String(e).replace(/^ +| +$/g,"")}var g=function e(n){var i=t,o=n&&"object"==_typeof(n)&&"String"!=h(n);o&&(i=n,n=null);var s=i.navigator||{},r=s.userAgent||"";n||(n=r);var l,d,g,S,C,v=o?!!s.likeChrome:/\bChrome\b/.test(n)&&!/internal|\n/i.test(c.toString()),y=o?"Object":"ScriptBridgingProxyObject",w=o?"Object":"Environment",x=o&&i.java?"JavaPackage":h(i.java),k=o?"Object":"RuntimeObject",_=/\bJava/.test(x)&&i.java,L=_&&h(i.environment)==w,O=_?"a":"α",E=_?"b":"β",M=i.document||{},P=i.operamini||i.opera,B=a.test(B=o&&P?P["[[Class]]"]:h(P))?B:P=null,I=n,T=[],H=null,A=n==r,V=A&&P&&"function"==typeof P.version&&P.version(),F=p([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(e,t){return e||RegExp("\\b"+(t.pattern||f(t))+"\\b","i").exec(n)&&(t.label||t)}),W=function(e){return p(e,function(e,t){return e||RegExp("\\b"+(t.pattern||f(t))+"\\b","i").exec(n)&&(t.label||t)})}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),R=G([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),N=function(e){return p(e,function(e,t,i){return e||(t[R]||t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(R)]||RegExp("\\b"+f(i)+"(?:\\b|\\w*\\d)","i").exec(n))&&i})}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),D=function(e){return p(e,function(e,t){var i=t.pattern||f(t);return!e&&(e=RegExp("\\b"+i+"(?:/[\\d.]+|[ \\w.]*)","i").exec(n))&&(e=function(e,t,n){var i={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(i=i[/[\d.]+$/.exec(e)])&&(e="Windows "+i),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),e=u(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,i,t.label||t)),e})}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function G(e){return p(e,function(e,t){var i=t.pattern||f(t);return!e&&(e=RegExp("\\b"+i+" *\\d+[.\\w_]*","i").exec(n)||RegExp("\\b"+i+" *\\w+-[\\w]*","i").exec(n)||RegExp("\\b"+i+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(n))&&((e=String(t.label&&!RegExp(i,"i").test(t.label)?t.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),t=t.label||t,e=u(e[0].replace(RegExp(i,"i"),t).replace(RegExp("; *(?:"+t+"[_-])?","i")," ").replace(RegExp("("+t+")[-_.]?(\\w)","i"),"$1 $2"))),e})}function $(e){return p(e,function(e,t){return e||(RegExp(t+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(n)||0)[1]||null})}if(F&&(F=[F]),/\bAndroid\b/.test(D)&&!R&&(l=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(n))&&(R=m(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),N&&!R?R=G([N]):N&&R&&(R=R.replace(RegExp("^("+f(N)+")[-_.\\s]","i"),N+" ").replace(RegExp("^("+f(N)+")[-_.]?(\\w)","i"),N+" $2")),(l=/\bGoogle TV\b/.exec(R))&&(R=l[0]),/\bSimulator\b/i.test(n)&&(R=(R?R+" ":"")+"Simulator"),"Opera Mini"==W&&/\bOPiOS\b/.test(n)&&T.push("running in Turbo/Uncompressed mode"),"IE"==W&&/\blike iPhone OS\b/.test(n)?(N=(l=e(n.replace(/like iPhone OS/,""))).manufacturer,R=l.product):/^iP/.test(R)?(W||(W="Safari"),D="iOS"+((l=/ OS ([\d_]+)/i.exec(n))?" "+l[1].replace(/_/g,"."):"")):"Konqueror"==W&&/^Linux\b/i.test(D)?D="Kubuntu":N&&"Google"!=N&&(/Chrome/.test(W)&&!/\bMobile Safari\b/i.test(n)||/\bVita\b/.test(R))||/\bAndroid\b/.test(D)&&/^Chrome/.test(W)&&/\bVersion\//i.test(n)?(W="Android Browser",D=/\bAndroid\b/.test(D)?D:"Android"):"Silk"==W?(/\bMobi/i.test(n)||(D="Android",T.unshift("desktop mode")),/Accelerated *= *true/i.test(n)&&T.unshift("accelerated")):"UC Browser"==W&&/\bUCWEB\b/.test(n)?T.push("speed mode"):"PaleMoon"==W&&(l=/\bFirefox\/([\d.]+)\b/.exec(n))?T.push("identifying as Firefox "+l[1]):"Firefox"==W&&(l=/\b(Mobile|Tablet|TV)\b/i.exec(n))?(D||(D="Firefox OS"),R||(R=l[1])):!W||(l=!/\bMinefield\b/i.test(n)&&/\b(?:Firefox|Safari)\b/.exec(W))?(W&&!R&&/[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(l+"/")+8))&&(W=null),(l=R||N||D)&&(R||N||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(D))&&(W=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(D)?D:l)+" Browser")):"Electron"==W&&(l=(/\bChrome\/([\d.]+)\b/.exec(n)||0)[1])&&T.push("Chromium "+l),V||(V=$(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",f(W),"(?:Firefox|Minefield|NetFront)"])),(l=("iCab"==F&&parseFloat(V)>3?"WebKit":/\bOpera\b/.test(W)&&(/\bOPR\b/.test(n)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(n)&&!/^(?:Trident|EdgeHTML)$/.test(F)&&"WebKit"||!F&&/\bMSIE\b/i.test(n)&&("Mac OS"==D?"Tasman":"Trident")||"WebKit"==F&&/\bPlayStation\b(?! Vita\b)/i.test(W)&&"NetFront")&&(F=[l]),"IE"==W&&(l=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n)||0)[1])?(D="Windows Phone "+(/\+$/.test(l)?l:l+".x"),T.unshift("desktop mode")):/\bWPDesktop\b/i.test(n)?(W="IE Mobile",D="Windows Phone 8.x",T.unshift("desktop mode"),V||(V=(/\brv:([\d.]+)/.exec(n)||0)[1])):"IE"!=W&&"Trident"==F&&(l=/\brv:([\d.]+)/.exec(n))&&(W&&T.push("identifying as "+W+(V?" "+V:"")),W="IE",V=l[1]),A){if(S="global",C=null!=(g=i)?_typeof(g[S]):"number",/^(?:boolean|number|string|undefined)$/.test(C)||"object"==C&&!g[S])h(l=i.runtime)==y?(W="Adobe AIR",D=l.flash.system.Capabilities.os):h(l=i.phantom)==k?(W="PhantomJS",V=(l=l.version||null)&&l.major+"."+l.minor+"."+l.patch):"number"==typeof M.documentMode&&(l=/\bTrident\/(\d+)/i.exec(n))?(V=[V,M.documentMode],(l=+l[1]+4)!=V[1]&&(T.push("IE "+V[1]+" mode"),F&&(F[1]=""),V[1]=l),V="IE"==W?String(V[1].toFixed(1)):V[0]):"number"==typeof M.documentMode&&/^(?:Chrome|Firefox)\b/.test(W)&&(T.push("masking as "+W+" "+V),W="IE",V="11.0",F=["Trident"],D="Windows");else if(_&&(I=(l=_.lang.System).getProperty("os.arch"),D=D||l.getProperty("os.name")+" "+l.getProperty("os.version")),L){try{V=i.require("ringo/engine").version.join("."),W="RingoJS"}catch(e){(l=i.system)&&l.global.system==i.system&&(W="Narwhal",D||(D=l[0].os||null))}W||(W="Rhino")}else"object"==_typeof(i.process)&&!i.process.browser&&(l=i.process)&&("object"==_typeof(l.versions)&&("string"==typeof l.versions.electron?(T.push("Node "+l.versions.node),W="Electron",V=l.versions.electron):"string"==typeof l.versions.nw&&(T.push("Chromium "+V,"Node "+l.versions.node),W="NW.js",V=l.versions.nw)),W||(W="Node.js",I=l.arch,D=l.platform,V=(V=/[\d.]+/.exec(l.version))?V[0]:null));D=D&&u(D)}if(V&&(l=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(V)||/(?:alpha|beta)(?: ?\d)?/i.exec(n+";"+(A&&s.appMinorVersion))||/\bMinefield\b/i.test(n)&&"a")&&(H=/b/i.test(l)?"beta":"alpha",V=V.replace(RegExp(l+"\\+?$"),"")+("beta"==H?E:O)+(/\d+\+?/.exec(l)||"")),"Fennec"==W||"Firefox"==W&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(D))W="Firefox";else if("Maxthon"==W&&V)V=V.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(R))"Xbox 360"==R&&(D=null),"Xbox 360"==R&&/\bIEMobile\b/.test(n)&&T.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(W)&&(!W||R||/Browser|Mobi/.test(W))||"Windows CE"!=D&&!/Mobi/i.test(n))if("IE"==W&&A)try{null===i.external&&T.unshift("platform preview")}catch(e){T.unshift("embedded")}else(/\bBlackBerry\b/.test(R)||/\bBB10\b/.test(n))&&(l=(RegExp(R.replace(/ +/g," *")+"/([.\\d]+)","i").exec(n)||0)[1]||V)?(D=((l=[l,/BB10/.test(n)])[1]?(R=null,N="BlackBerry"):"Device Software")+" "+l[0],V=null):this!=b&&"Wii"!=R&&(A&&P||/Opera/.test(W)&&/\b(?:MSIE|Firefox)\b/i.test(n)||"Firefox"==W&&/\bOS X (?:\d+\.){2,}/.test(D)||"IE"==W&&(D&&!/^Win/.test(D)&&V>5.5||/\bWindows XP\b/.test(D)&&V>8||8==V&&!/\bTrident\b/.test(n)))&&!a.test(l=e.call(b,n.replace(a,"")+";"))&&l.name&&(l="ing as "+l.name+((l=l.version)?" "+l:""),a.test(W)?(/\bIE\b/.test(l)&&"Mac OS"==D&&(D=null),l="identify"+l):(l="mask"+l,W=B?u(B.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(l)&&(D=null),A||(V=null)),F=["Presto"],T.push(l));(l=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(n)||0)[1])&&(l=[parseFloat(l.replace(/\.(\d)$/,".0$1")),l],"Safari"==W&&"+"==l[1].slice(-1)?(W="WebKit Nightly",H="alpha",V=l[1].slice(0,-1)):V!=l[1]&&V!=(l[2]=(/\bSafari\/([\d.]+\+?)/i.exec(n)||0)[1])||(V=null),l[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(n)||0)[1],537.36==l[0]&&537.36==l[2]&&parseFloat(l[1])>=28&&"WebKit"==F&&(F=["Blink"]),A&&(v||l[1])?(F&&(F[1]="like Chrome"),l=l[1]||((l=l[0])<530?1:l<532?2:l<532.05?3:l<533?4:l<534.03?5:l<534.07?6:l<534.1?7:l<534.13?8:l<534.16?9:l<534.24?10:l<534.3?11:l<535.01?12:l<535.02?"13+":l<535.07?15:l<535.11?16:l<535.19?17:l<536.05?18:l<536.1?19:l<537.01?20:l<537.11?"21+":l<537.13?23:l<537.18?24:l<537.24?25:l<537.36?26:"Blink"!=F?"27":"28")):(F&&(F[1]="like Safari"),l=(l=l[0])<400?1:l<500?2:l<526?3:l<533?4:l<534?"4+":l<535?5:l<537?6:l<538?7:l<601?8:l<602?9:l<604?10:l<606?11:l<608?12:"12"),F&&(F[1]+=" "+(l+="number"==typeof l?".x":/[.+]/.test(l)?"":"+")),"Safari"==W&&(!V||parseInt(V)>45)?V=l:"Chrome"==W&&/\bHeadlessChrome/i.test(n)&&T.unshift("headless")),"Opera"==W&&(l=/\bzbov|zvav$/.exec(D))?(W+=" ",T.unshift("desktop mode"),"zvav"==l&&(W+="Mini",V=null),D=D.replace(RegExp(" *"+l+"$"),"")):"Safari"==W&&/\bChrome\b/.exec(F&&F[1])?(T.unshift("desktop mode"),W="Chrome",V=null,/\bOS X\b/.test(D)?(N="Apple",D="iOS 4.3+"):D=null):/\bSRWare Iron\b/.test(W)&&!V&&(V=$("Chrome")),V&&0==V.indexOf(l=/[\d.]+$/.exec(D))&&n.indexOf("/"+l+"-")>-1&&(D=m(D.replace(l,""))),D&&-1!=D.indexOf(W)&&!RegExp(W+" OS").test(D)&&(D=D.replace(RegExp(" *"+f(W)+" *"),"")),F&&!/\b(?:Avant|Nook)\b/.test(W)&&(/Browser|Lunascape|Maxthon/.test(W)||"Safari"!=W&&/^iOS/.test(D)&&/\bSafari\b/.test(F[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(W)&&F[1])&&(l=F[F.length-1])&&T.push(l),T.length&&(T=["("+T.join("; ")+")"]),N&&R&&R.indexOf(N)<0&&T.push("on "+N),R&&T.push((/^on /.test(T[T.length-1])?"":"on ")+R),D&&(l=/ ([\d.+]+)$/.exec(D),d=l&&"/"==D.charAt(D.length-l[0].length-1),D={architecture:32,family:l&&!d?D.replace(l[0],""):D,version:l?l[1]:null,toString:function(){var e=this.version;return this.family+(e&&!d?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(l=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I))&&!/\bi686\b/i.test(I)?(D&&(D.architecture=64,D.family=D.family.replace(RegExp(" *"+l),"")),W&&(/\bWOW64\b/i.test(n)||A&&/\w(?:86|32)$/.test(s.cpuClass||s.platform)&&!/\bWin64; x64\b/i.test(n))&&T.unshift("32-bit")):D&&/^OS X/.test(D.family)&&"Chrome"==W&&parseFloat(V)>=39&&(D.architecture=64),n||(n=null);var j={};return j.description=n,j.layout=F&&F[0],j.manufacturer=N,j.name=W,j.prerelease=H,j.product=R,j.ua=n,j.version=W&&V,j.os=D||{architecture:null,family:null,version:null,toString:function(){return"null"}},j.parse=e,j.toString=function(){return this.description||""},j.version&&T.unshift(V),j.name&&T.unshift(W),D&&W&&(D!=String(D).split(" ")[0]||D!=W.split(" ")[0]&&!R)&&T.push(R?"("+D+")":"on "+D),T.length&&(j.description=T.join(" ")),j}();"function"==typeof define&&"object"==_typeof(define.amd)&&define.amd?(t.platform=g,define(function(){return g})):n&&i?b(g,function(e,t){n[t]=e}):t.platform=g}.call(this),platform}}]),e}(),l=function(){function e(t){_classCallCheck(this,e),this.googleSheetsLink=t,this.siteUrl=window.location.host,this.sessionUrl="https://backend.bugbox.io/addsession.php",this.bugUrl="https://backend.bugbox.io/addbug.php"}return _createClass(e,[{key:"sendSession",value:function(){fetch(this.sessionUrl,{method:"post",mode:"no-cors",body:JSON.stringify({siteUrl:this.siteUrl,tableUrl:this.googleSheetsLink})}),localStorage.setItem("sendSessionTime",(new Date).getTime())}},{key:"sendBug",value:function(){fetch(this.bugUrl,{method:"post",mode:"no-cors",body:JSON.stringify({siteUrl:this.siteUrl,tableUrl:this.googleSheetsLink})})}}]),e}(),c=new r,d=new e(window.bagboxSettings.googleSheetsLink,window.bagboxSettings.stylesLink,window.bagboxSettings.isHidden,c.info.name),u=new t(d.fieldProblem),b=new n(d.attachScreenshot,d.screenshotInfo,d.fieldScreenshot,d.fieldScreenshotName,d.buttonScreenshotDelete),h=new i(d.buttonSend,d.buttonSendText),f=new o(d.buttonFloat),p=new s(d.buttonInfo),m=new a(d.fieldProblem,d.fieldScreenshot,c.info.name,c.info.version),g=new l(d.googleSheetLink);""!==window.bagboxSettings.googleSheetsLink&&void 0!==window.bagboxSettings.googleSheetsLink||h.setError("Sheets isn`t connect"),d.attachScreenshot.addEventListener("change",function(e){var t=b.attachScreenshot.files[0],n=t.type;"image/png"!==n&&"image/jpeg"!==n?(b.setInvalid(),b.attachScreenshot.value=""):(b.setScreenshotName(t.name),b.setScreenshot(),b.setFilled())}),d.buttonScreenshotDelete.addEventListener("click",function(e){e.preventDefault(),b.resetField()}),d.buttonSend.addEventListener("click",function(e){if(e.preventDefault(),!u.isValid())return d.buttonSend.blur(),!1;h.setLoad(),u.setDisabled(),b.setDisabled();var t=!1;fetch(d.googleLink,{method:"post",headers:{"Content-Type":"text/plain"},body:JSON.stringify({headArray:m.headArray,bodyArray:m.bodyArray})}).then(function(e){return 404!=e.status&&g.sendBug(),e.json()}).then(function(e){}).catch(function(e){t=!0,setTimeout(function(){h.setError("Something went wrong"),u.removeDisabled(),b.removeDisabled()},1e3)}),setTimeout(function(){t||(h.setSuccess("Sent Success"),u.removeDisabled(),u.setEmpty(),b.resetField(),b.removeDisabled())},1500)}),fetch(d.googleLink).then(function(e){return e.json()}).then(function(e){void 0!==e.url&&d.addSheetUrl(e.url)});var S=function(){d.isOpen?(f.close(),p.invisible(),d.close(),p.close(),d.turnOff()):(f.open(),p.visible(),d.open())};if(d.isHidden){var C=0,v=!1;d.buttonFloat.addEventListener("click",function(e){e.preventDefault(),C++,v||(v=!0,setTimeout(function(){C=0,v=!1},500)),3===C&&S()})}else d.buttonFloat.addEventListener("click",function(e){e.preventDefault(),S()});if(document.addEventListener("click",function(e){var t=e.target==d.widgetSection;d.isOpen&&!t&&(f.close(),p.invisible(),d.close(),p.close(),d.turnOff())}),document.onkeydown=function(e){("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode)&&d.isOpen&&(f.close(),p.invisible(),d.close(),p.close(),d.turnOff())},d.buttonInfo.addEventListener("click",function(e){e.preventDefault(),p.isActive?(p.close(),d.turnOff()):(p.open(),d.turnOn())}),d.fieldProblem.addEventListener("keyup",function(e){e.preventDefault(),u.setValid()}),localStorage.sendSessionTime){var y=(new Date).getTime();Number(y)-Number(localStorage.sendSessionTime)>432e5&&g.sendSession()}else g.sendSession()});