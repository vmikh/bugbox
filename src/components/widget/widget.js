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
                        <textarea class="textarea" name="problem_or_idea" placeholder="Problem or idea"></textarea>
                        <input class="input" name="screenshot_link" placeholder="Screenshot link" type="text">
                        <div>
                            <button class="button_settings" type="button" id="button_settigns">x</button>
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