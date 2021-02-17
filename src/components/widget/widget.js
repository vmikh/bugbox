// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Main Widget Class

"use strict";

class Widget {
    constructor(googleSheetLink) {

        // Create widget section
        const widgetSection = document.createElement("section");
        widgetSection.className = "bugbox__widget";

        // Create shadow root
        this.shadowHost = widgetSection.attachShadow({mode: 'open'});
        
        // Add html to shadow root
        this.createHtml(this.shadowHost);
        document.body.appendChild(widgetSection);

        // Add styles
        this.createStyles(this.shadowHost);
        this.googleSheetLink = googleSheetLink;
    }


    // Add styles func
    createStyles(shadowHost) {
        const link  = document.createElement('link');

        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'app.css';
        link.media = 'all';

        shadowHost.appendChild(link);
    }


    // Getters
    get widgetCard() {
        return this.shadowHost.getElementById('widget_card');
    }

    get buttonFloat() {
        return this.shadowHost.getElementById('button_float');
    }

    get buttonSettings() {
        return this.shadowHost.getElementById('button_settigns');
    }

    get buttonClose() {
        return this.shadowHost.getElementById('button_close');
    }

    get buttonSend() {
        return this.shadowHost.getElementById('button_send');
    }

    get formSerialize() {
        return new FormData(this.shadowHost.getElementById('form'));
    }

    get googleLink() {
        return this.googleSheetLink;
    }

    
    // Add html to shadow root
    createHtml(shadowHost) {
        shadowHost.innerHTML = `
            <button class="button_float" type="button" id="button_float">
                <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.1749 4.97177C6.92527 4.97177 6.7229 4.7694 6.7229 4.51977V4.27759C6.7229 1.915 8.63815 -0.000244141 11.0007 -0.000244141C13.3633 -0.000244141 15.2786 1.915 15.2786 4.27758V4.51977C15.2786 4.7694 15.0762 4.97177 14.8266 4.97177H7.1749ZM2.11744 5.02486L4.88892 7.84342V9.94361H0.932253C0.417384 9.94361 0 10.361 0 10.8759C0 11.3907 0.417383 11.8081 0.932252 11.8081H4.88892V12.533C4.88892 13.1422 4.97804 13.7305 5.14397 14.2857L5.14207 14.2876L2.11718 17.3639C1.7592 17.7279 1.7592 18.3182 2.11718 18.6823C2.47517 19.0464 3.05558 19.0464 3.41356 18.6823L6.0018 16.0501C6.99763 17.4627 8.57716 18.4343 10.3896 18.6141V9.31143C10.3896 8.97392 10.6632 8.70031 11.0007 8.70031C11.3382 8.70031 11.6118 8.97392 11.6118 9.31143V18.6139C13.4126 18.435 14.9834 17.4743 15.98 16.076L18.5864 18.7267C18.9444 19.0908 19.5248 19.0908 19.8828 18.7267C20.2408 18.3626 20.2408 17.7724 19.8828 17.4083L16.8579 14.332L16.8459 14.32C17.0184 13.7548 17.1113 13.1547 17.1113 12.533V11.8081H21.0677C21.5825 11.8081 21.9999 11.3907 21.9999 10.8759C21.9999 10.361 21.5825 9.94361 21.0677 9.94361H17.1113V7.8441L19.8833 5.02502C20.2412 4.66095 20.2412 4.07068 19.8833 3.70662C19.5253 3.34255 18.9449 3.34255 18.5869 3.70662L16.1137 6.22182C16.0703 6.21675 16.0261 6.21415 15.9813 6.21415H6.01892C5.97433 6.21415 5.93034 6.21673 5.8871 6.22176L3.41381 3.70645C3.05583 3.34238 2.47542 3.34238 2.11744 3.70645C1.75945 4.07052 1.75945 4.66079 2.11744 5.02486Z"/></svg>
            </button>

            <section class="widget_card" id="widget_card">
                <section class="widget_front">
                    <form id="form">

                        <label class="textarea" for="problem_or_idea">
                            <textarea class="textarea__field" name="problem_or_idea" id="problem_or_idea" placeholder="&nbsp;"></textarea>
                            <span class="textarea__label">Problem or idea</span>
                        </label>

                        <label for="screenshot_link" class="input">
                            <input class="input__field" name="screenshot_link" type="text" id="screenshot_link" placeholder="&nbsp;">
                            <span class="input__label">Screenshot link</span>
                        </label>

                        <div class="card_buttons">
                            <button class="button_settings" type="button" id="button_settigns">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2814 9.73647C15.1364 10.4638 15.3279 11.243 15.7074 11.4681C16.0875 11.6921 16.0987 12.4169 15.7328 13.079L15.3374 13.7941C14.9726 14.4555 14.3687 14.8161 13.9957 14.5959C13.6215 14.3768 12.846 14.5849 12.2704 15.0596L10.9587 15.862C10.2793 16.1555 9.72423 16.7553 9.72423 17.197C9.72423 17.6388 9.12261 18 8.38724 18H7.61356C6.87818 18 6.27656 17.6443 6.27656 17.2104C6.27656 16.7754 5.71796 16.1872 5.0362 15.9022L3.66739 15.1011C3.09347 14.6245 2.33393 14.4055 1.97979 14.6154C1.62625 14.8235 1.03759 14.4543 0.67285 13.7929L0.278645 13.0778C-0.0860973 12.4163 -0.0937574 11.7037 0.261557 11.4938C0.617461 11.2826 0.783038 10.5016 0.630424 9.75722V9.03478C0.630424 8.28122 0.643977 8.21776 0.643977 8.21776C0.804251 7.47519 0.638084 6.69112 0.275699 6.47634C-0.0866865 6.26217 -0.0849188 5.54522 0.280413 4.88441L0.674617 4.1699C1.03995 3.50847 1.64216 3.14786 2.01456 3.36692C2.38578 3.58658 3.16005 3.3779 3.73515 2.90319L5.0362 2.16488C5.71855 1.88298 6.27774 1.28014 6.27774 0.826169C6.27774 0.371593 6.87936 0 7.61474 0H8.38842C9.1232 0 9.72541 0.377085 9.72541 0.838983C9.72541 1.30088 10.2822 1.91532 10.9616 2.20576L12.205 2.9459C12.7812 3.41878 13.5738 3.61647 13.965 3.38705C14.3575 3.15641 14.9768 3.50847 15.3409 4.17051L15.7357 4.88502C16.1004 5.54583 16.0822 6.27376 15.6956 6.50258C15.3091 6.732 15.1194 7.52827 15.2755 8.27207C15.2755 8.27207 15.2814 8.30136 15.2814 9.036V9.73647ZM3.18892 8.96278C3.18892 11.6738 5.31079 13.8716 7.92939 13.8716C10.5474 13.8716 12.6705 11.6744 12.6699 8.96278C12.6699 6.25241 10.5474 4.05397 7.92939 4.05397C5.31138 4.05397 3.18892 6.2518 3.18892 8.96278ZM9.95524 8.91405C9.95524 10.045 9.06988 10.9618 7.97773 10.9618C6.88559 10.9618 6.00023 10.045 6.00023 8.91405C6.00023 7.78312 6.88559 6.86633 7.97773 6.86633C9.06988 6.86633 9.95524 7.78312 9.95524 8.91405Z"/></svg>
                            </button>
                            <button class="button_send" type="button" id="button_send">Send</button>
                        </div>
                    </form>
                </section>
                <section class="widget_back">
                    <button class="button_close" type="button" id="button_close">x</button>
                    <div>LOGO</div>
                    <h2>Bug report system based</br>on google sheets</h2>
                    <ul class="menu">
                        <li class="menu_item"><a href="#">full manual</a></li>
                        <li class="menu_item"><a href="#">bugbox.io</a></li>
                        <li class="menu_item"><a href="#">help@bugbox.io</a></li>
                    </ul>
                </section>
            </section>
        `;
    }
};

export default Widget;