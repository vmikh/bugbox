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

    get buttonWidget() {
        return this.shadowHost.getElementById('button_widget');
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
            <button class="button_widget" type="button" id="button_widget">open</button>

            <section class="widget_card" id="widget_card">
                <section class="widget_front">
                    <form id="form">
                        <textarea class="textarea" name="problem_or_idea" placeholder="Problem or idea"></textarea>
                        <input class="input" name="screenshot_link" placeholder="Screenshot link" type="text">
                        <div>
                            <button class="button_settings" type="button" id="button_settigns">x</button>
                            <button class="button_main" type="button" id="button_send">Send</button>
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