"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){var t=function(){function t(e,n){_classCallCheck(this,t);var s=document.createElement("section");s.className="bugbox__widget",s.style.display="none",s.style.opacity="0",s.style.transition="opacity .2s",this.shadowHost=s.attachShadow({mode:"open"}),this.stylesLink=n,this.createHtml(this.shadowHost),document.body.appendChild(s),this.createStyles(this.shadowHost,this.stylesLink),this.googleSheetLink=e,setTimeout(function(){s.style.display="initial",setTimeout(function(){s.style.opacity="1"},10)},1e3)}return _createClass(t,[{key:"createStyles",value:function(t,e){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=e,n.media="all",t.appendChild(n)}},{key:"widgetCard",get:function(){return this.shadowHost.getElementById("widget_card")}},{key:"buttonFloat",get:function(){return this.shadowHost.getElementById("button_float")}},{key:"buttonSettings",get:function(){return this.shadowHost.getElementById("button_settigns")}},{key:"buttonClose",get:function(){return this.shadowHost.getElementById("button_close")}},{key:"buttonSend",get:function(){return this.shadowHost.getElementById("button_send")}},{key:"fieldProblem",get:function(){return this.shadowHost.getElementById("field_problem")}},{key:"fieldScreenshot",get:function(){return this.shadowHost.getElementById("field_screenshot")}},{key:"formSerialize",get:function(){return new FormData(this.shadowHost.getElementById("form"))}},{key:"googleLink",get:function(){return this.googleSheetLink}},{key:"createHtml",value:function(t){t.innerHTML='\n            <button class="button_float" type="button" id="button_float">\n                <svg class="button_float__cross" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.34459 0.34459C-0.114838 0.804018 -0.114889 1.54896 0.34459 2.00844L5.33615 7L0.34459 11.9916C-0.114838 12.451 -0.114889 13.1959 0.34459 13.6554C0.804069 14.1149 1.54901 14.1148 2.00844 13.6554L7 8.66385L11.9916 13.6554C12.451 14.1149 13.196 14.1148 13.6554 13.6554C14.1148 13.196 14.1149 12.451 13.6554 11.9916L8.66385 7L13.6554 2.00844C14.1148 1.54901 14.1149 0.804069 13.6554 0.34459C13.1959 -0.114889 12.451 -0.114838 11.9916 0.34459L7 5.33615L2.00844 0.34459C1.54896 -0.114889 0.804018 -0.114838 0.34459 0.34459Z"/></svg>\n                <svg class="button_float__logo" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.1749 4.97177C6.92527 4.97177 6.7229 4.7694 6.7229 4.51977V4.27759C6.7229 1.915 8.63815 -0.000244141 11.0007 -0.000244141C13.3633 -0.000244141 15.2786 1.915 15.2786 4.27758V4.51977C15.2786 4.7694 15.0762 4.97177 14.8266 4.97177H7.1749ZM2.11744 5.02486L4.88892 7.84342V9.94361H0.932253C0.417384 9.94361 0 10.361 0 10.8759C0 11.3907 0.417383 11.8081 0.932252 11.8081H4.88892V12.533C4.88892 13.1422 4.97804 13.7305 5.14397 14.2857L5.14207 14.2876L2.11718 17.3639C1.7592 17.7279 1.7592 18.3182 2.11718 18.6823C2.47517 19.0464 3.05558 19.0464 3.41356 18.6823L6.0018 16.0501C6.99763 17.4627 8.57716 18.4343 10.3896 18.6141V9.31143C10.3896 8.97392 10.6632 8.70031 11.0007 8.70031C11.3382 8.70031 11.6118 8.97392 11.6118 9.31143V18.6139C13.4126 18.435 14.9834 17.4743 15.98 16.076L18.5864 18.7267C18.9444 19.0908 19.5248 19.0908 19.8828 18.7267C20.2408 18.3626 20.2408 17.7724 19.8828 17.4083L16.8579 14.332L16.8459 14.32C17.0184 13.7548 17.1113 13.1547 17.1113 12.533V11.8081H21.0677C21.5825 11.8081 21.9999 11.3907 21.9999 10.8759C21.9999 10.361 21.5825 9.94361 21.0677 9.94361H17.1113V7.8441L19.8833 5.02502C20.2412 4.66095 20.2412 4.07068 19.8833 3.70662C19.5253 3.34255 18.9449 3.34255 18.5869 3.70662L16.1137 6.22182C16.0703 6.21675 16.0261 6.21415 15.9813 6.21415H6.01892C5.97433 6.21415 5.93034 6.21673 5.8871 6.22176L3.41381 3.70645C3.05583 3.34238 2.47542 3.34238 2.11744 3.70645C1.75945 4.07052 1.75945 4.66079 2.11744 5.02486Z"/></svg>\n            </button>\n\n            <section class="widget_card" id="widget_card">\n                <section class="widget_front">\n                    <form id="form">\n                        <label class="field_problem" for="field_problem">\n                            <textarea class="field_problem__input" id="field_problem" placeholder="&nbsp;"></textarea>\n                            <span class="field_problem__label">Problem or idea</span>\n                        </label>\n\n                        <label class="field_screenshot" for="field_screenshot">\n                            <input class="field_screenshot__input" type="text" id="field_screenshot" placeholder="&nbsp;">\n                            <span class="field_screenshot__label">Screenshot link</span>\n                        </label>\n\n                        <div class="card_buttons">\n                            <button class="button_settings" type="button" id="button_settigns">\n                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2814 9.73647C15.1364 10.4638 15.3279 11.243 15.7074 11.4681C16.0875 11.6921 16.0987 12.4169 15.7328 13.079L15.3374 13.7941C14.9726 14.4555 14.3687 14.8161 13.9957 14.5959C13.6215 14.3768 12.846 14.5849 12.2704 15.0596L10.9587 15.862C10.2793 16.1555 9.72423 16.7553 9.72423 17.197C9.72423 17.6388 9.12261 18 8.38724 18H7.61356C6.87818 18 6.27656 17.6443 6.27656 17.2104C6.27656 16.7754 5.71796 16.1872 5.0362 15.9022L3.66739 15.1011C3.09347 14.6245 2.33393 14.4055 1.97979 14.6154C1.62625 14.8235 1.03759 14.4543 0.67285 13.7929L0.278645 13.0778C-0.0860973 12.4163 -0.0937574 11.7037 0.261557 11.4938C0.617461 11.2826 0.783038 10.5016 0.630424 9.75722V9.03478C0.630424 8.28122 0.643977 8.21776 0.643977 8.21776C0.804251 7.47519 0.638084 6.69112 0.275699 6.47634C-0.0866865 6.26217 -0.0849188 5.54522 0.280413 4.88441L0.674617 4.1699C1.03995 3.50847 1.64216 3.14786 2.01456 3.36692C2.38578 3.58658 3.16005 3.3779 3.73515 2.90319L5.0362 2.16488C5.71855 1.88298 6.27774 1.28014 6.27774 0.826169C6.27774 0.371593 6.87936 0 7.61474 0H8.38842C9.1232 0 9.72541 0.377085 9.72541 0.838983C9.72541 1.30088 10.2822 1.91532 10.9616 2.20576L12.205 2.9459C12.7812 3.41878 13.5738 3.61647 13.965 3.38705C14.3575 3.15641 14.9768 3.50847 15.3409 4.17051L15.7357 4.88502C16.1004 5.54583 16.0822 6.27376 15.6956 6.50258C15.3091 6.732 15.1194 7.52827 15.2755 8.27207C15.2755 8.27207 15.2814 8.30136 15.2814 9.036V9.73647ZM3.18892 8.96278C3.18892 11.6738 5.31079 13.8716 7.92939 13.8716C10.5474 13.8716 12.6705 11.6744 12.6699 8.96278C12.6699 6.25241 10.5474 4.05397 7.92939 4.05397C5.31138 4.05397 3.18892 6.2518 3.18892 8.96278ZM9.95524 8.91405C9.95524 10.045 9.06988 10.9618 7.97773 10.9618C6.88559 10.9618 6.00023 10.045 6.00023 8.91405C6.00023 7.78312 6.88559 6.86633 7.97773 6.86633C9.06988 6.86633 9.95524 7.78312 9.95524 8.91405Z"/></svg>\n                            </button>\n                            <button class="button_send" type="button" id="button_send">\n                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM14.0303 6.53033L12.9697 5.46967L7.5 10.9393L5.03033 8.46967L3.96967 9.53033L6.96967 12.5303L7.5 13.0607L8.03033 12.5303L14.0303 6.53033Z"/></svg>\n                                Send\n                            </button>\n                        </div>\n                    </form>\n                </section>\n                <section class="widget_back">\n                    <button class="button_close" type="button" id="button_close">\n                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.246136 0.246136C-0.0820271 0.574299 -0.0820634 1.1064 0.246136 1.4346L3.81153 5L0.246136 8.5654C-0.0820271 8.89356 -0.0820634 9.42566 0.246136 9.75386C0.574335 10.0821 1.10644 10.082 1.4346 9.75386L5 6.18847L8.5654 9.75386C8.8936 10.0821 9.4257 10.082 9.75386 9.75386C10.082 9.4257 10.0821 8.8936 9.75386 8.5654L6.18847 5L9.75386 1.4346C10.082 1.10644 10.0821 0.574335 9.75386 0.246136C9.42566 -0.0820634 8.89356 -0.0820271 8.5654 0.246136L5 3.81153L1.4346 0.246136C1.1064 -0.0820634 0.574299 -0.0820271 0.246136 0.246136Z"/></svg>\n                    </button>\n                    <svg class="widget_back__logo" width="150" height="25" viewBox="0 0 150 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.4161 5.03939C21.1631 5.03939 20.958 4.83428 20.958 4.58126V4.50644C20.958 2.0176 22.9756 0 25.4645 0C27.9533 0 29.9709 2.0176 29.9709 4.50644V4.58126C29.9709 4.83428 29.7658 5.03939 29.5128 5.03939H21.4161ZM16.1068 5.09338L19.0267 7.95041V10.0787H14.8214C14.2995 10.0787 13.8765 10.5018 13.8765 11.0236C13.8765 11.5455 14.2995 11.9685 14.8214 11.9685H19.0267V12.4599C19.0267 13.1512 19.1356 13.817 19.3373 14.4412C19.3223 14.4541 19.3077 14.4676 19.2933 14.4816L16.1068 17.5996C15.7297 17.9686 15.7297 18.5669 16.1068 18.9359C16.4839 19.3049 17.0953 19.3049 17.4725 18.9359L20.2423 16.2256C21.2934 17.6807 22.9377 18.679 24.8207 18.8659V9.46268C24.8207 9.10713 25.1089 8.81891 25.4644 8.81891C25.82 8.81891 26.1082 9.10713 26.1082 9.46268V18.8659C27.9799 18.6801 29.6157 17.6927 30.6675 16.2518L33.4564 18.9807C33.8336 19.3497 34.445 19.3497 34.8221 18.9807C35.1992 18.6117 35.1992 18.0134 34.8221 17.6444L31.6356 14.5264C31.6176 14.5089 31.5991 14.4921 31.5801 14.4762C31.7891 13.842 31.9022 13.1642 31.9022 12.4599V11.9685H36.1076C36.6294 11.9685 37.0524 11.5455 37.0524 11.0236C37.0524 10.5018 36.6294 10.0787 36.1076 10.0787H31.9022V7.95041L34.8221 5.09338C35.1992 4.72438 35.1992 4.12611 34.8221 3.75711C34.445 3.38811 33.8335 3.38811 33.4564 3.75711L30.8542 6.3033C30.8221 6.3006 30.7897 6.29922 30.7569 6.29922H20.172C20.1392 6.29922 20.1067 6.3006 20.0746 6.3033L17.4725 3.75711C17.0954 3.38811 16.4839 3.38811 16.1068 3.75711C15.7297 4.12612 15.7297 4.72438 16.1068 5.09338ZM150 9.68333V12.1417L139.7 16.6898V14.7514C139.7 14.2289 140.017 13.7586 140.503 13.5619L147.043 10.9125L140.503 8.26312C140.017 8.06648 139.7 7.59614 139.7 7.07369V5.13529L150 9.68333ZM0 12.1418V9.68335L10.3004 5.13532V7.07372C10.3004 7.59617 9.98291 8.06651 9.49748 8.26314L2.95683 10.9126L9.49748 13.562C9.98291 13.7586 10.3004 14.2289 10.3004 14.7514V16.6898L0 12.1418ZM44.6083 7.69141C45.7169 6.18162 47.2851 5.42673 49.3401 5.42673C51.2057 5.42673 52.774 6.10074 54.0989 7.47572C55.4238 8.85071 56.0727 10.5223 56.0727 12.5173C56.0727 14.4854 55.4238 16.1839 54.0989 17.5589C52.774 18.9339 51.2057 19.6079 49.3401 19.6079C47.2851 19.6079 45.7169 18.853 44.6083 17.3163V19.2574H41.6881V0.385132H44.6083V7.69141ZM44.6083 12.5173C44.6083 13.7575 45.0139 14.782 45.825 15.6178C46.6362 16.4266 47.6637 16.831 48.8804 16.831C50.0971 16.831 51.1246 16.4266 51.9358 15.6178C52.7469 14.782 53.1525 13.7575 53.1525 12.5173C53.1525 11.2771 52.7469 10.2526 51.9358 9.44384C51.1246 8.60806 50.0971 8.20366 48.8804 8.20366C47.6637 8.20366 46.6362 8.60806 45.825 9.44384C45.0139 10.2526 44.6083 11.2771 44.6083 12.5173ZM64.3974 16.8849C66.4523 16.8849 67.8313 15.6178 67.8313 13.0026V5.77722H70.7515V19.2574H67.8313V17.532C66.939 18.9069 65.5601 19.6079 63.6403 19.6079C60.5309 19.6079 58.4489 17.505 58.4489 14.0541V5.77722H61.3691V13.7575C61.3691 15.7795 62.5317 16.8849 64.3974 16.8849ZM84.9276 7.77229C83.819 6.20858 82.2507 5.42673 80.2228 5.42673C78.3031 5.42673 76.7078 6.10074 75.3829 7.47572C74.058 8.82374 73.4091 10.4683 73.4091 12.3825C73.4091 14.2967 74.058 15.9413 75.3829 17.3163C76.7078 18.6643 78.3031 19.3383 80.2228 19.3383C82.2507 19.3383 83.819 18.5565 84.9276 16.9928V18.6373C84.9276 20.9829 83.4134 22.3579 80.8988 22.3579C78.9791 22.3579 77.6542 21.6569 76.9512 20.2819L74.4366 21.7378C75.5992 23.9216 77.7353 25 80.8447 25C82.7645 25 84.4138 24.4608 85.7657 23.3554C87.1177 22.25 87.7936 20.6863 87.7936 18.6373V5.77722H84.9276V7.77229ZM77.546 15.4021C76.7348 14.5933 76.3293 13.5957 76.3293 12.3825C76.3293 11.1693 76.7348 10.1718 77.546 9.36295C78.3842 8.55414 79.4117 8.14973 80.6284 8.14973C81.8451 8.14973 82.8726 8.55414 83.6838 9.36295C84.522 10.1718 84.9276 11.1693 84.9276 12.3825C84.9276 13.5957 84.522 14.5933 83.6838 15.4021C82.8726 16.2109 81.8451 16.6153 80.6284 16.6153C79.4117 16.6153 78.3842 16.2109 77.546 15.4021ZM94.1175 7.69141C95.2261 6.18162 96.7943 5.42673 98.8493 5.42673C100.715 5.42673 102.283 6.10074 103.608 7.47572C104.933 8.85071 105.582 10.5223 105.582 12.5173C105.582 14.4854 104.933 16.1839 103.608 17.5589C102.283 18.9339 100.715 19.6079 98.8493 19.6079C96.7943 19.6079 95.2261 18.853 94.1175 17.3163V19.2574H91.1973V0.385132H94.1175V7.69141ZM94.1175 12.5173C94.1175 13.7575 94.5231 14.782 95.3343 15.6178C96.1454 16.4266 97.1729 16.831 98.3896 16.831C99.6064 16.831 100.634 16.4266 101.445 15.6178C102.256 14.782 102.662 13.7575 102.662 12.5173C102.662 11.2771 102.256 10.2526 101.445 9.44384C100.634 8.60806 99.6064 8.20366 98.3896 8.20366C97.1729 8.20366 96.1454 8.60806 95.3343 9.44384C94.5231 10.2526 94.1175 11.2771 94.1175 12.5173ZM114.61 19.6079C116.61 19.6079 118.287 18.9339 119.666 17.5589C121.045 16.1839 121.748 14.5124 121.748 12.5173C121.748 10.5223 121.045 8.85071 119.666 7.47572C118.287 6.10074 116.61 5.42673 114.61 5.42673C112.636 5.42673 110.932 6.10074 109.553 7.47572C108.174 8.85071 107.471 10.5223 107.471 12.5173C107.471 14.5124 108.174 16.1839 109.553 17.5589C110.932 18.9339 112.636 19.6079 114.61 19.6079ZM111.608 15.5639C110.797 14.755 110.392 13.7305 110.392 12.5173C110.392 11.3041 110.797 10.2796 111.608 9.4708C112.42 8.66198 113.42 8.25758 114.61 8.25758C115.799 8.25758 116.8 8.66198 117.611 9.4708C118.422 10.2796 118.828 11.3041 118.828 12.5173C118.828 13.7305 118.422 14.755 117.611 15.5639C116.8 16.3727 115.799 16.7771 114.61 16.7771C113.42 16.7771 112.42 16.3727 111.608 15.5639ZM135.254 5.77722L130.441 12.3556L135.498 19.2574H132.118L128.765 14.6472L125.385 19.2574H121.978L127.062 12.3286L122.249 5.77722H125.629L128.738 10.037L131.847 5.77722H135.254Z"/></svg>\n                    <h2 class="widget_back__headline">Bug report system based</br>on google sheets</h2>\n                    <ul class="menu">\n                        <li class="menu__item"><a href="https://bugbox.io/manual" target="_blanc">full manual</a></li>\n                        <li class="menu__item"><a href="https://bugbox.io" target="_blanc">bugbox.io</a></li>\n                        <li class="menu__item"><a href="mailto:help@bugbox.io">help@bugbox.io</a></li>\n                    </ul>\n                </section>\n            </section>\n        '}}]),t}(),e=function(){function t(e,n){_classCallCheck(this,t),this.buttonFloat=e,this.widgetCard=n}return _createClass(t,[{key:"click",value:function(){this.widgetCard.classList.contains("open")?(this.widgetCard.classList.remove("open"),this.buttonFloat.classList.remove("active")):(this.widgetCard.classList.add("open"),this.buttonFloat.classList.add("active"))}}]),t}(),n=function(){function t(e,n,s){_classCallCheck(this,t),this.fieldProblem=e,this.fieldScreenshot=n,this.googleLink=s}return _createClass(t,[{key:"send",value:function(){var t=[this.titles.status,this.titles.priority,this.titles.date,this.titles.problem,this.titles.url,this.titles.screenshot,this.titles.browser,this.titles.os,this.titles.isMoblile,this.titles.scrnW,this.titles.scrnH,this.titles.browserW,this.titles.browserH,this.titles.actualResult,this.titles.expectedResult,this.titles.assignee,this.titles.total],e=["","",this.date,this.fieldProblem.value,window.location.href,this.fieldScreenshot.value,this.browser,this.os,this.isMobile,window.screen.width,window.screen.height,window.innerWidth,window.innerHeight,"","","",this.total];fetch(this.googleLink,{method:"post",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({headArray:t,bodyArray:e})})}},{key:"os",get:function(){var t=[{device:"Android",platform:/Android/},{device:"iOS",platform:/iPhone/},{device:"iOS",platform:/iPad/},{device:"Symbian",platform:/Symbian/},{device:"Windows Phone",platform:/Windows Phone/},{device:"Tablet OS",platform:/Tablet OS/},{device:"Linux",platform:/Linux/},{device:"Windows",platform:/Windows NT/},{device:"Mac OS",platform:/Macintosh/}],e=navigator.userAgent;for(var n in t)if(t[n].platform.test(e))return t[n].device;return"Unknown platform! "+e}},{key:"isMobile",get:function(){return"Android"===this.os||"iOS"===this.os||"Symbian"===this.os||"Windows Phone"===this.os?"+":"-"}},{key:"date",get:function(){var t=new Date,e=t.getDate(),n=(1==t.getMonth().toString().length?"0":"")+t.getMonth(),s=t.getFullYear(),i=(1==t.getHours().toString().length?"0":"")+t.getHours(),o=(1==t.getMinutes().toString().length?"0":"")+t.getMinutes();return"".concat(e,".").concat(n,".").concat(s," ").concat(i,":").concat(o)}},{key:"browser",get:function(){var t,e=navigator.userAgent,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?{name:"IE",version:(t=/\brv[ :]+(\d+)/g.exec(e)||[])[1]||""}:"Chrome"===n[1]&&null!=(t=e.match(/\bOPR|Edge\/(\d+)/))?{name:"Opera",version:t[1]}:(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(t=e.match(/version\/(\d+)/i))&&n.splice(1,1,t[1]),n[0]+" v"+n[1])}},{key:"total",get:function(){return"".concat(this.titles.date,": ").concat(this.date,",\n").concat(this.titles.problem,": ").concat(this.fieldProblem.value,",\n").concat(this.titles.screenshot,": ").concat(this.fieldScreenshot.value)}},{key:"titles",get:function(){return{status:"Status",priority:"Priority",date:"Date&Time",problem:"Problem",url:"URL",screenshot:"Screenshot URL",browser:"Browser",os:"OS",isMoblile:"Is Mobile",scrnW:"Screen W",scrnH:"Screen H",browserW:"Browser W",browserH:"Browser H",actualResult:"Actual Result",expectedResult:"Expected Result",assignee:"Assignee",total:"Total"}}}]),t}(),s=new t(window.bagboxSettings.googleSheetsLink,window.bagboxSettings.stylesLink),i=new e(s.buttonFloat,s.widgetCard),o=new n(s.fieldProblem,s.fieldScreenshot,s.googleLink);s.buttonSend.addEventListener("click",function(t){t.preventDefault(),o.send()}),s.buttonFloat.addEventListener("click",function(t){t.preventDefault(),i.click()}),s.buttonSettings.addEventListener("click",function(t){t.preventDefault(),s.widgetCard.classList.add("turned")}),s.buttonClose.addEventListener("click",function(t){t.preventDefault(),s.widgetCard.classList.remove("turned")})});