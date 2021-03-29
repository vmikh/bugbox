// Copyright © 2021 Vladislav Mikhailov
// Contacts: <vladi.mikh.vm@gmail.com>
// License: http://opensource.org/licenses/MIT

// Main Widget Class

"use strict";

class Widget {
    constructor(googleSheetLink, stylesLink, platformName) {

        // Create widget section
        const widgetSection = document.createElement("section");
        widgetSection.className = "bugbox__widget";

        // Initial styles
        widgetSection.style.display = "none";
        widgetSection.style.opacity = "0";
        widgetSection.style.transition = "opacity .2s";

        // Create shadow root
        this.shadowHost = widgetSection.attachShadow({mode: 'open'});
        this.stylesLink = stylesLink;

        // Add platform info
        this.platformName = platformName;
        
        // Add html to shadow root
        this.createHtml(this.shadowHost);
        document.body.appendChild(widgetSection);

        // Add styles
        this.createStyles(this.shadowHost, this.stylesLink);
        this.googleSheetLink = googleSheetLink;

        // Save link to main section
        this.widgetSection = widgetSection;

        // Remove initial styles
        setTimeout(() => {
            widgetSection.style.display = "initial";
            setTimeout(() => {
                widgetSection.style.opacity = "1";
            }, 10);
        }, 300);
    }


    // Add styles func
    createStyles(shadowHost, stylesLink) {
        const link  = document.createElement('link');

        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = stylesLink;
        link.media = 'all';

        shadowHost.appendChild(link);
    }

    open() {
        this.widgetCard.classList.add('open');
    }

    close() {
        this.widgetCard.classList.remove('open');
    }

    turnOn() {
        this.widgetCard.classList.add('turned');
    }

    turnOff() {
        this.widgetCard.classList.remove('turned');
    }

    addSheetUrl(url) {
        const link = document.createElement('li');
        link.classList.add('menu__item');
        link.innerHTML = `<a href="${url}" target="_blank">connected sheets</a>`;

        this.menu.prepend(link);
    }

    // Getters
    get widgetCard() {
        return this.shadowHost.getElementById('widget_card');
    }

    get buttonFloat() {
        return this.shadowHost.getElementById('button_float');
    }

    get buttonInfo() {
        return this.shadowHost.getElementById('button_info');
    }

    get buttonClose() {
        return this.shadowHost.getElementById('button_close');
    }

    get buttonSend() {
        return this.shadowHost.getElementById('button_send');
    }

    get buttonSendText() {
        return this.shadowHost.getElementById('button_send__text');
    }

    get fieldProblem() {
        return this.shadowHost.getElementById('field_problem');
    }

    get fieldScreenshot() {
        return this.shadowHost.getElementById('field_screenshot');
    }

    get menu() {
        return this.shadowHost.getElementById('menu');
    }

    get formSerialize() {
        return new FormData(this.shadowHost.getElementById('form'));
    }

    get googleLink() {
        return this.googleSheetLink;
    }

    get isOpen() {
        if (this.widgetCard.classList.contains('open')) return true;
    }

    
    // Add html to shadow root
    createHtml(shadowHost) {
        const animationStyle = (this.platformName === 'Chrome' || this.platformName === 'Firefox') ? 'animated' : 'static';
        console.log(this.platformName);

        shadowHost.innerHTML = `
            <button class="button_float" type="button" id="button_float">
                <svg class="button_float__cross" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.34459 0.34459C-0.114838 0.804018 -0.114889 1.54896 0.34459 2.00844L5.33615 7L0.34459 11.9916C-0.114838 12.451 -0.114889 13.1959 0.34459 13.6554C0.804069 14.1149 1.54901 14.1148 2.00844 13.6554L7 8.66385L11.9916 13.6554C12.451 14.1149 13.196 14.1148 13.6554 13.6554C14.1148 13.196 14.1149 12.451 13.6554 11.9916L8.66385 7L13.6554 2.00844C14.1148 1.54901 14.1149 0.804069 13.6554 0.34459C13.1959 -0.114889 12.451 -0.114838 11.9916 0.34459L7 5.33615L2.00844 0.34459C1.54896 -0.114889 0.804018 -0.114838 0.34459 0.34459Z"/></svg>
                <svg class="button_float__logo" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.1749 4.97177C6.92527 4.97177 6.7229 4.7694 6.7229 4.51977V4.27759C6.7229 1.915 8.63815 -0.000244141 11.0007 -0.000244141C13.3633 -0.000244141 15.2786 1.915 15.2786 4.27758V4.51977C15.2786 4.7694 15.0762 4.97177 14.8266 4.97177H7.1749ZM2.11744 5.02486L4.88892 7.84342V9.94361H0.932253C0.417384 9.94361 0 10.361 0 10.8759C0 11.3907 0.417383 11.8081 0.932252 11.8081H4.88892V12.533C4.88892 13.1422 4.97804 13.7305 5.14397 14.2857L5.14207 14.2876L2.11718 17.3639C1.7592 17.7279 1.7592 18.3182 2.11718 18.6823C2.47517 19.0464 3.05558 19.0464 3.41356 18.6823L6.0018 16.0501C6.99763 17.4627 8.57716 18.4343 10.3896 18.6141V9.31143C10.3896 8.97392 10.6632 8.70031 11.0007 8.70031C11.3382 8.70031 11.6118 8.97392 11.6118 9.31143V18.6139C13.4126 18.435 14.9834 17.4743 15.98 16.076L18.5864 18.7267C18.9444 19.0908 19.5248 19.0908 19.8828 18.7267C20.2408 18.3626 20.2408 17.7724 19.8828 17.4083L16.8579 14.332L16.8459 14.32C17.0184 13.7548 17.1113 13.1547 17.1113 12.533V11.8081H21.0677C21.5825 11.8081 21.9999 11.3907 21.9999 10.8759C21.9999 10.361 21.5825 9.94361 21.0677 9.94361H17.1113V7.8441L19.8833 5.02502C20.2412 4.66095 20.2412 4.07068 19.8833 3.70662C19.5253 3.34255 18.9449 3.34255 18.5869 3.70662L16.1137 6.22182C16.0703 6.21675 16.0261 6.21415 15.9813 6.21415H6.01892C5.97433 6.21415 5.93034 6.21673 5.8871 6.22176L3.41381 3.70645C3.05583 3.34238 2.47542 3.34238 2.11744 3.70645C1.75945 4.07052 1.75945 4.66079 2.11744 5.02486Z"/></svg>
            </button>

            <button class="button_info" type="button" id="button_info">
                <svg class="button_info__info" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM9 10C9 9.44772 9.44771 9 10 9C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V10ZM10 4.59985C9.17157 4.59985 8.5 5.27143 8.5 6.09985C8.5 6.92828 9.17157 7.59985 10 7.59985C10.8284 7.59985 11.5 6.92828 11.5 6.09985C11.5 5.27143 10.8284 4.59985 10 4.59985Z"/></svg>
                <svg class="button_info__back" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.22222L7.11111 0V3.63911C16 5.77422 16 16 16 16C16 16 12.9062 8.812 7.11111 8.812V12.4444L0 6.22222Z"/></svg>
            </button>

            <section class="widget_card `+ animationStyle +`" id="widget_card">
                <section class="widget_front">
                    <form id="form">
                        <label class="field_problem" for="field_problem">
                            <textarea class="field_problem__input" id="field_problem" placeholder="&nbsp;"></textarea>
                            <span class="field_problem__label">Problem or idea</span>
                        </label>

                        <label class="field_screenshot" for="field_screenshot">
                            <input class="field_screenshot__input" type="text" id="field_screenshot" placeholder="&nbsp;">
                            <span class="field_screenshot__label">Screenshot link</span>
                        </label>
                        
                        <button class="button_send" type="button" id="button_send">
                            <svg class="button_send__icon"width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM14.0303 6.53033L12.9697 5.46967L7.5 10.9393L5.03033 8.46967L3.96967 9.53033L6.96967 12.5303L7.5 13.0607L8.03033 12.5303L14.0303 6.53033Z"/></svg>
                            <span id="button_send__text">Send<span>
                        </button>
                    </form>
                </section>
                <section class="widget_back">
                    <svg class="widget_back__logo" width="125" height="25" viewBox="0 0 123 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95801 4.58126C7.95801 4.83428 8.16312 5.03939 8.41613 5.03939H16.5128C16.7658 5.03939 16.9709 4.83428 16.9709 4.58126V4.50644C16.9709 2.0176 14.9533 0 12.4644 0C9.97561 0 7.95801 2.0176 7.95801 4.50644V4.58126ZM6.02666 7.95041L3.10681 5.09338C2.72969 4.72438 2.72969 4.12612 3.10681 3.75711C3.48392 3.38811 4.09535 3.38811 4.47246 3.75711L7.07464 6.3033C7.10673 6.3006 7.13919 6.29922 7.17198 6.29922H17.7569C17.7897 6.29922 17.8221 6.3006 17.8542 6.3033L20.4564 3.75711C20.8335 3.38811 21.4449 3.38811 21.8221 3.75711C22.1992 4.12611 22.1992 4.72438 21.8221 5.09338L18.9022 7.95041V10.0787H23.1076C23.6294 10.0787 24.0524 10.5018 24.0524 11.0236C24.0524 11.5455 23.6294 11.9685 23.1076 11.9685H18.9022V12.4599C18.9022 13.1642 18.7891 13.842 18.5801 14.4762C18.5991 14.4921 18.6176 14.5089 18.6356 14.5264L21.8221 17.6444C22.1992 18.0134 22.1992 18.6117 21.8221 18.9807C21.445 19.3497 20.8336 19.3497 20.4564 18.9807L17.6675 16.2518C16.6157 17.6927 14.9799 18.6801 13.1082 18.8659V9.46268C13.1082 9.10713 12.82 8.81891 12.4644 8.81891C12.1089 8.81891 11.8207 9.10713 11.8207 9.46268V18.8659C9.9377 18.679 8.29341 17.6807 7.24232 16.2256L4.47246 18.9359C4.09534 19.3049 3.48392 19.3049 3.1068 18.9359C2.72969 18.5669 2.72969 17.9686 3.1068 17.5996L6.29334 14.4816C6.30766 14.4676 6.32232 14.4541 6.3373 14.4412C6.13562 13.817 6.02666 13.1512 6.02666 12.4599V11.9685H1.82135C1.2995 11.9685 0.876465 11.5455 0.876465 11.0236C0.876465 10.5018 1.2995 10.0787 1.82135 10.0787H6.02666V7.95041ZM31.6083 7.69141C32.7169 6.18162 34.2851 5.42673 36.3401 5.42673C38.2057 5.42673 39.774 6.10074 41.0989 7.47572C42.4238 8.85071 43.0727 10.5223 43.0727 12.5173C43.0727 14.4854 42.4238 16.1839 41.0989 17.5589C39.774 18.9339 38.2057 19.6079 36.3401 19.6079C34.2851 19.6079 32.7169 18.853 31.6083 17.3163V19.2574H28.6881V0.385132H31.6083V7.69141ZM31.6083 12.5173C31.6083 13.7575 32.0139 14.782 32.825 15.6178C33.6362 16.4266 34.6637 16.831 35.8804 16.831C37.0971 16.831 38.1246 16.4266 38.9358 15.6178C39.7469 14.782 40.1525 13.7575 40.1525 12.5173C40.1525 11.2771 39.7469 10.2526 38.9358 9.44384C38.1246 8.60806 37.0971 8.20366 35.8804 8.20366C34.6637 8.20366 33.6362 8.60806 32.825 9.44384C32.0139 10.2526 31.6083 11.2771 31.6083 12.5173ZM51.3974 16.8849C53.4523 16.8849 54.8313 15.6178 54.8313 13.0026V5.77722H57.7515V19.2574H54.8313V17.532C53.939 18.9069 52.5601 19.6079 50.6403 19.6079C47.5309 19.6079 45.4489 17.505 45.4489 14.0541V5.77722H48.3691V13.7575C48.3691 15.7795 49.5317 16.8849 51.3974 16.8849ZM71.9276 7.77229C70.819 6.20858 69.2507 5.42673 67.2228 5.42673C65.3031 5.42673 63.7078 6.10074 62.3829 7.47572C61.058 8.82374 60.4091 10.4683 60.4091 12.3825C60.4091 14.2967 61.058 15.9413 62.3829 17.3163C63.7078 18.6643 65.3031 19.3383 67.2228 19.3383C69.2507 19.3383 70.819 18.5565 71.9276 16.9928V18.6373C71.9276 20.9829 70.4134 22.3579 67.8988 22.3579C65.979 22.3579 64.6542 21.6569 63.9512 20.2819L61.4366 21.7378C62.5992 23.9216 64.7353 25 67.8447 25C69.7645 25 71.4138 24.4608 72.7657 23.3554C74.1177 22.25 74.7936 20.6863 74.7936 18.6373V5.77722H71.9276V7.77229ZM64.546 15.4021C63.7348 14.5933 63.3293 13.5957 63.3293 12.3825C63.3293 11.1693 63.7348 10.1718 64.546 9.36295C65.3842 8.55414 66.4117 8.14973 67.6284 8.14973C68.8451 8.14973 69.8726 8.55414 70.6838 9.36295C71.522 10.1718 71.9276 11.1693 71.9276 12.3825C71.9276 13.5957 71.522 14.5933 70.6838 15.4021C69.8726 16.2109 68.8451 16.6153 67.6284 16.6153C66.4117 16.6153 65.3842 16.2109 64.546 15.4021ZM81.1175 7.69141C82.2261 6.18162 83.7943 5.42673 85.8493 5.42673C87.7149 5.42673 89.2832 6.10074 90.6081 7.47572C91.933 8.85071 92.5819 10.5223 92.5819 12.5173C92.5819 14.4854 91.933 16.1839 90.6081 17.5589C89.2832 18.9339 87.7149 19.6079 85.8493 19.6079C83.7943 19.6079 82.2261 18.853 81.1175 17.3163V19.2574H78.1973V0.385132H81.1175V7.69141ZM81.1175 12.5173C81.1175 13.7575 81.5231 14.782 82.3343 15.6178C83.1454 16.4266 84.1729 16.831 85.3896 16.831C86.6064 16.831 87.6338 16.4266 88.445 15.6178C89.2561 14.782 89.6617 13.7575 89.6617 12.5173C89.6617 11.2771 89.2561 10.2526 88.445 9.44384C87.6338 8.60806 86.6064 8.20366 85.3896 8.20366C84.1729 8.20366 83.1454 8.60806 82.3343 9.44384C81.5231 10.2526 81.1175 11.2771 81.1175 12.5173ZM101.61 19.6079C103.61 19.6079 105.287 18.9339 106.666 17.5589C108.045 16.1839 108.748 14.5124 108.748 12.5173C108.748 10.5223 108.045 8.85071 106.666 7.47572C105.287 6.10074 103.61 5.42673 101.61 5.42673C99.6358 5.42673 97.9324 6.10074 96.5534 7.47572C95.1744 8.85071 94.4714 10.5223 94.4714 12.5173C94.4714 14.5124 95.1744 16.1839 96.5534 17.5589C97.9324 18.9339 99.6358 19.6079 101.61 19.6079ZM98.6084 15.5639C97.7972 14.755 97.3916 13.7305 97.3916 12.5173C97.3916 11.3041 97.7972 10.2796 98.6084 9.4708C99.4195 8.66198 100.42 8.25758 101.61 8.25758C102.799 8.25758 103.8 8.66198 104.611 9.4708C105.422 10.2796 105.828 11.3041 105.828 12.5173C105.828 13.7305 105.422 14.755 104.611 15.5639C103.8 16.3727 102.799 16.7771 101.61 16.7771C100.42 16.7771 99.4195 16.3727 98.6084 15.5639ZM122.254 5.77722L117.441 12.3556L122.498 19.2574H119.118L115.765 14.6472L112.385 19.2574H108.978L114.062 12.3286L109.249 5.77722H112.629L115.738 10.037L118.847 5.77722H122.254Z"/></svg>

                    <h2 class="widget_back__headline">Bug report system based</br>on google sheets</h2>
                    <ul class="menu" id="menu">
                        <li class="menu__item"><a href="https://github.com/vmikh/bugbox" target="_blanc">full manual</a></li>
                        <li class="menu__item"><a href="https://bugbox.io" target="_blanc">bugbox.io</a></li>
                        <li class="menu__item"><a href="mailto:info@bugbox.io">info@bugbox.io</a></li>
                    </ul>
                </section>
            </section>
        `;
    }
};

export default Widget;