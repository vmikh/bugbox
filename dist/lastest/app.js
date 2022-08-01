"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict'; // Copyright © 2021 Vladislav Mikhailov

  var Widget = /*#__PURE__*/function () {
    function Widget(googleSheetLink, stylesLink, isHidden, platformName) {
      _classCallCheck(this, Widget);

      // Create widget section
      var widgetSection = document.createElement("section");
      widgetSection.className = "bugbox__widget"; // Initial styles

      widgetSection.style.display = "none";
      widgetSection.style.opacity = "0";
      widgetSection.style.transition = "opacity .2s"; // Hidden indicator

      this.isHidden = isHidden; // Create shadow root

      this.shadowHost = widgetSection.attachShadow({
        mode: 'open'
      });
      this.stylesLink = stylesLink; // Add platform info

      this.platformName = platformName; // Add html to shadow root

      this.createHtml(this.shadowHost);
      document.body.after(widgetSection); // Add styles

      this.createStyles(this.shadowHost, this.stylesLink);
      this.googleSheetLink = googleSheetLink; // Save link to main section

      this.widgetSection = widgetSection; // Remove initial styles

      setTimeout(function () {
        widgetSection.style.display = "initial";
        setTimeout(function () {
          widgetSection.style.opacity = "1";
        }, 10);
      }, 1000);
    } // Add styles func


    _createClass(Widget, [{
      key: "createStyles",
      value: function createStyles(shadowHost, stylesLink) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = stylesLink;
        link.media = 'all';
        shadowHost.appendChild(link);
      }
    }, {
      key: "open",
      value: function open() {
        this.widgetCard.classList.add('open');
      }
    }, {
      key: "close",
      value: function close() {
        this.widgetCard.classList.remove('open');
      }
    }, {
      key: "turnOn",
      value: function turnOn() {
        this.widgetCard.classList.add('turned');
      }
    }, {
      key: "turnOff",
      value: function turnOff() {
        this.widgetCard.classList.remove('turned');
      }
    }, {
      key: "addSheetUrl",
      value: function addSheetUrl(url) {
        var link = document.createElement('li');
        link.classList.add('menu__item');
        link.innerHTML = "<a href=\"".concat(url, "\" target=\"_blank\">connected sheet</a>");
        this.menu.prepend(link);
      } // Getters

    }, {
      key: "widgetCard",
      get: function get() {
        return this.shadowHost.getElementById('widget_card');
      }
    }, {
      key: "buttonFloat",
      get: function get() {
        return this.shadowHost.getElementById('button_float');
      }
    }, {
      key: "buttonInfo",
      get: function get() {
        return this.shadowHost.getElementById('button_info');
      }
    }, {
      key: "buttonClose",
      get: function get() {
        return this.shadowHost.getElementById('button_close');
      }
    }, {
      key: "buttonSend",
      get: function get() {
        return this.shadowHost.getElementById('button_send');
      }
    }, {
      key: "buttonSendText",
      get: function get() {
        return this.shadowHost.getElementById('button_send__text');
      }
    }, {
      key: "fieldProblem",
      get: function get() {
        return this.shadowHost.getElementById('field_problem');
      }
    }, {
      key: "screenshotInfo",
      get: function get() {
        return this.shadowHost.getElementById('screenshot_info');
      }
    }, {
      key: "attachScreenshot",
      get: function get() {
        return this.shadowHost.getElementById('attach_screenshot');
      }
    }, {
      key: "takeScreenshot",
      get: function get() {
        return this.shadowHost.getElementById('take_screenshot');
      }
    }, {
      key: "fieldScreenshotName",
      get: function get() {
        return this.shadowHost.getElementById('fieldScreenshot__name');
      }
    }, {
      key: "fieldScreenshot",
      get: function get() {
        return this.shadowHost.getElementById('field_screenshot');
      }
    }, {
      key: "buttonScreenshotDelete",
      get: function get() {
        return this.shadowHost.getElementById('screenshot__button_delete');
      }
    }, {
      key: "menu",
      get: function get() {
        return this.shadowHost.getElementById('menu');
      }
    }, {
      key: "formSerialize",
      get: function get() {
        return new FormData(this.shadowHost.getElementById('form'));
      }
    }, {
      key: "googleLink",
      get: function get() {
        return this.googleSheetLink;
      }
    }, {
      key: "isOpen",
      get: function get() {
        if (this.widgetCard.classList.contains('open')) return true;
      } // Add html to shadow root

    }, {
      key: "createHtml",
      value: function createHtml(shadowHost) {
        var animationStyle = this.platformName === 'Chrome' || this.platformName === 'Firefox' ? 'animated' : 'static';
        var hiddenStyle = this.isHidden ? 'isHidden' : '';
        var floatButton; // Create float button

        if (!this.isHidden) {
          floatButton = "\n                <button class=\"button_float\" type=\"button\" id=\"button_float\">\n                    <svg class=\"button_float__cross\" width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0.34459 0.34459C-0.114838 0.804018 -0.114889 1.54896 0.34459 2.00844L5.33615 7L0.34459 11.9916C-0.114838 12.451 -0.114889 13.1959 0.34459 13.6554C0.804069 14.1149 1.54901 14.1148 2.00844 13.6554L7 8.66385L11.9916 13.6554C12.451 14.1149 13.196 14.1148 13.6554 13.6554C14.1148 13.196 14.1149 12.451 13.6554 11.9916L8.66385 7L13.6554 2.00844C14.1148 1.54901 14.1149 0.804069 13.6554 0.34459C13.1959 -0.114889 12.451 -0.114838 11.9916 0.34459L7 5.33615L2.00844 0.34459C1.54896 -0.114889 0.804018 -0.114838 0.34459 0.34459Z\"/></svg>\n                    <svg class=\"button_float__logo\" width=\"22\" height=\"19\" viewBox=\"0 0 22 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.1749 4.97177C6.92527 4.97177 6.7229 4.7694 6.7229 4.51977V4.27759C6.7229 1.915 8.63815 -0.000244141 11.0007 -0.000244141C13.3633 -0.000244141 15.2786 1.915 15.2786 4.27758V4.51977C15.2786 4.7694 15.0762 4.97177 14.8266 4.97177H7.1749ZM2.11744 5.02486L4.88892 7.84342V9.94361H0.932253C0.417384 9.94361 0 10.361 0 10.8759C0 11.3907 0.417383 11.8081 0.932252 11.8081H4.88892V12.533C4.88892 13.1422 4.97804 13.7305 5.14397 14.2857L5.14207 14.2876L2.11718 17.3639C1.7592 17.7279 1.7592 18.3182 2.11718 18.6823C2.47517 19.0464 3.05558 19.0464 3.41356 18.6823L6.0018 16.0501C6.99763 17.4627 8.57716 18.4343 10.3896 18.6141V9.31143C10.3896 8.97392 10.6632 8.70031 11.0007 8.70031C11.3382 8.70031 11.6118 8.97392 11.6118 9.31143V18.6139C13.4126 18.435 14.9834 17.4743 15.98 16.076L18.5864 18.7267C18.9444 19.0908 19.5248 19.0908 19.8828 18.7267C20.2408 18.3626 20.2408 17.7724 19.8828 17.4083L16.8579 14.332L16.8459 14.32C17.0184 13.7548 17.1113 13.1547 17.1113 12.533V11.8081H21.0677C21.5825 11.8081 21.9999 11.3907 21.9999 10.8759C21.9999 10.361 21.5825 9.94361 21.0677 9.94361H17.1113V7.8441L19.8833 5.02502C20.2412 4.66095 20.2412 4.07068 19.8833 3.70662C19.5253 3.34255 18.9449 3.34255 18.5869 3.70662L16.1137 6.22182C16.0703 6.21675 16.0261 6.21415 15.9813 6.21415H6.01892C5.97433 6.21415 5.93034 6.21673 5.8871 6.22176L3.41381 3.70645C3.05583 3.34238 2.47542 3.34238 2.11744 3.70645C1.75945 4.07052 1.75945 4.66079 2.11744 5.02486Z\"/></svg>\n                </button>\n            ";
        } else floatButton = "<button class=\"button_float_hidden\" type=\"button\" id=\"button_float\"></button>";

        shadowHost.innerHTML = "\n            ".concat(floatButton, "\n\n            <button class=\"button_info ").concat(hiddenStyle, "\" type=\"button\" id=\"button_info\">\n                <svg class=\"button_info__info\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM9 10C9 9.44772 9.44771 9 10 9C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15C9.44771 15 9 14.5523 9 14V10ZM10 4.59985C9.17157 4.59985 8.5 5.27143 8.5 6.09985C8.5 6.92828 9.17157 7.59985 10 7.59985C10.8284 7.59985 11.5 6.92828 11.5 6.09985C11.5 5.27143 10.8284 4.59985 10 4.59985Z\"/></svg>\n                <svg class=\"button_info__back\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 6.22222L7.11111 0V3.63911C16 5.77422 16 16 16 16C16 16 12.9062 8.812 7.11111 8.812V12.4444L0 6.22222Z\"/></svg>\n            </button>\n\n            <section class=\"widget_card ").concat(animationStyle, "\" id=\"widget_card\">\n                <section class=\"widget_front\">\n                    <form id=\"form\">\n                        <label class=\"field_problem\" for=\"field_problem\">\n                            <textarea class=\"field_problem__input\" id=\"field_problem\" placeholder=\"&nbsp;\"></textarea>\n                            <span class=\"field_problem__label\">Problem or idea</span>\n                        </label>\n\n                        <div class=\"fieldScreenshot\">\n                            <div class=\"screenshot_info\" id=\"screenshot_info\">\n                                <input id=\"field_screenshot\" type=\"hidden\">\n                                <p class=\"fieldScreenshot__name\" id=\"fieldScreenshot__name\"></p>\n                                <button class=\"screenshot__button_delete\" type=\"button\" id=\"screenshot__button_delete\">\n                                    <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0.34459 0.34459C-0.114838 0.804018 -0.114889 1.54896 0.34459 2.00844L5.33615 7L0.34459 11.9916C-0.114838 12.451 -0.114889 13.1959 0.34459 13.6554C0.804069 14.1149 1.54901 14.1148 2.00844 13.6554L7 8.66385L11.9916 13.6554C12.451 14.1149 13.196 14.1148 13.6554 13.6554C14.1148 13.196 14.1149 12.451 13.6554 11.9916L8.66385 7L13.6554 2.00844C14.1148 1.54901 14.1149 0.804069 13.6554 0.34459C13.1959 -0.114889 12.451 -0.114838 11.9916 0.34459L7 5.33615L2.00844 0.34459C1.54896 -0.114889 0.804018 -0.114838 0.34459 0.34459Z\"/></svg>\n                                </button>\n                            </div>\n                            <label class=\"attach_screenshot\" for=\"attach_screenshot\">\n                                <input id=\"attach_screenshot\" type=\"file\">\n                                Attach Screenshot\n                            </label>\n                        </div>\n\n                        <button class=\"take_screenshot\" type=\"button\" id=\"take_screenshot\">\n                                Take Screenshot\n                            </button>\n                        \n                        <button class=\"button_send\" type=\"button\" id=\"button_send\">\n                            <svg class=\"button_send__icon\"width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM14.0303 6.53033L12.9697 5.46967L7.5 10.9393L5.03033 8.46967L3.96967 9.53033L6.96967 12.5303L7.5 13.0607L8.03033 12.5303L14.0303 6.53033Z\"/></svg>\n                            <span id=\"button_send__text\">Send<span>\n                        </button>\n                    </form>\n                </section>\n                <section class=\"widget_back\">\n                    <svg class=\"widget_back__logo\" width=\"125\" height=\"25\" viewBox=\"0 0 123 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.95801 4.58126C7.95801 4.83428 8.16312 5.03939 8.41613 5.03939H16.5128C16.7658 5.03939 16.9709 4.83428 16.9709 4.58126V4.50644C16.9709 2.0176 14.9533 0 12.4644 0C9.97561 0 7.95801 2.0176 7.95801 4.50644V4.58126ZM6.02666 7.95041L3.10681 5.09338C2.72969 4.72438 2.72969 4.12612 3.10681 3.75711C3.48392 3.38811 4.09535 3.38811 4.47246 3.75711L7.07464 6.3033C7.10673 6.3006 7.13919 6.29922 7.17198 6.29922H17.7569C17.7897 6.29922 17.8221 6.3006 17.8542 6.3033L20.4564 3.75711C20.8335 3.38811 21.4449 3.38811 21.8221 3.75711C22.1992 4.12611 22.1992 4.72438 21.8221 5.09338L18.9022 7.95041V10.0787H23.1076C23.6294 10.0787 24.0524 10.5018 24.0524 11.0236C24.0524 11.5455 23.6294 11.9685 23.1076 11.9685H18.9022V12.4599C18.9022 13.1642 18.7891 13.842 18.5801 14.4762C18.5991 14.4921 18.6176 14.5089 18.6356 14.5264L21.8221 17.6444C22.1992 18.0134 22.1992 18.6117 21.8221 18.9807C21.445 19.3497 20.8336 19.3497 20.4564 18.9807L17.6675 16.2518C16.6157 17.6927 14.9799 18.6801 13.1082 18.8659V9.46268C13.1082 9.10713 12.82 8.81891 12.4644 8.81891C12.1089 8.81891 11.8207 9.10713 11.8207 9.46268V18.8659C9.9377 18.679 8.29341 17.6807 7.24232 16.2256L4.47246 18.9359C4.09534 19.3049 3.48392 19.3049 3.1068 18.9359C2.72969 18.5669 2.72969 17.9686 3.1068 17.5996L6.29334 14.4816C6.30766 14.4676 6.32232 14.4541 6.3373 14.4412C6.13562 13.817 6.02666 13.1512 6.02666 12.4599V11.9685H1.82135C1.2995 11.9685 0.876465 11.5455 0.876465 11.0236C0.876465 10.5018 1.2995 10.0787 1.82135 10.0787H6.02666V7.95041ZM31.6083 7.69141C32.7169 6.18162 34.2851 5.42673 36.3401 5.42673C38.2057 5.42673 39.774 6.10074 41.0989 7.47572C42.4238 8.85071 43.0727 10.5223 43.0727 12.5173C43.0727 14.4854 42.4238 16.1839 41.0989 17.5589C39.774 18.9339 38.2057 19.6079 36.3401 19.6079C34.2851 19.6079 32.7169 18.853 31.6083 17.3163V19.2574H28.6881V0.385132H31.6083V7.69141ZM31.6083 12.5173C31.6083 13.7575 32.0139 14.782 32.825 15.6178C33.6362 16.4266 34.6637 16.831 35.8804 16.831C37.0971 16.831 38.1246 16.4266 38.9358 15.6178C39.7469 14.782 40.1525 13.7575 40.1525 12.5173C40.1525 11.2771 39.7469 10.2526 38.9358 9.44384C38.1246 8.60806 37.0971 8.20366 35.8804 8.20366C34.6637 8.20366 33.6362 8.60806 32.825 9.44384C32.0139 10.2526 31.6083 11.2771 31.6083 12.5173ZM51.3974 16.8849C53.4523 16.8849 54.8313 15.6178 54.8313 13.0026V5.77722H57.7515V19.2574H54.8313V17.532C53.939 18.9069 52.5601 19.6079 50.6403 19.6079C47.5309 19.6079 45.4489 17.505 45.4489 14.0541V5.77722H48.3691V13.7575C48.3691 15.7795 49.5317 16.8849 51.3974 16.8849ZM71.9276 7.77229C70.819 6.20858 69.2507 5.42673 67.2228 5.42673C65.3031 5.42673 63.7078 6.10074 62.3829 7.47572C61.058 8.82374 60.4091 10.4683 60.4091 12.3825C60.4091 14.2967 61.058 15.9413 62.3829 17.3163C63.7078 18.6643 65.3031 19.3383 67.2228 19.3383C69.2507 19.3383 70.819 18.5565 71.9276 16.9928V18.6373C71.9276 20.9829 70.4134 22.3579 67.8988 22.3579C65.979 22.3579 64.6542 21.6569 63.9512 20.2819L61.4366 21.7378C62.5992 23.9216 64.7353 25 67.8447 25C69.7645 25 71.4138 24.4608 72.7657 23.3554C74.1177 22.25 74.7936 20.6863 74.7936 18.6373V5.77722H71.9276V7.77229ZM64.546 15.4021C63.7348 14.5933 63.3293 13.5957 63.3293 12.3825C63.3293 11.1693 63.7348 10.1718 64.546 9.36295C65.3842 8.55414 66.4117 8.14973 67.6284 8.14973C68.8451 8.14973 69.8726 8.55414 70.6838 9.36295C71.522 10.1718 71.9276 11.1693 71.9276 12.3825C71.9276 13.5957 71.522 14.5933 70.6838 15.4021C69.8726 16.2109 68.8451 16.6153 67.6284 16.6153C66.4117 16.6153 65.3842 16.2109 64.546 15.4021ZM81.1175 7.69141C82.2261 6.18162 83.7943 5.42673 85.8493 5.42673C87.7149 5.42673 89.2832 6.10074 90.6081 7.47572C91.933 8.85071 92.5819 10.5223 92.5819 12.5173C92.5819 14.4854 91.933 16.1839 90.6081 17.5589C89.2832 18.9339 87.7149 19.6079 85.8493 19.6079C83.7943 19.6079 82.2261 18.853 81.1175 17.3163V19.2574H78.1973V0.385132H81.1175V7.69141ZM81.1175 12.5173C81.1175 13.7575 81.5231 14.782 82.3343 15.6178C83.1454 16.4266 84.1729 16.831 85.3896 16.831C86.6064 16.831 87.6338 16.4266 88.445 15.6178C89.2561 14.782 89.6617 13.7575 89.6617 12.5173C89.6617 11.2771 89.2561 10.2526 88.445 9.44384C87.6338 8.60806 86.6064 8.20366 85.3896 8.20366C84.1729 8.20366 83.1454 8.60806 82.3343 9.44384C81.5231 10.2526 81.1175 11.2771 81.1175 12.5173ZM101.61 19.6079C103.61 19.6079 105.287 18.9339 106.666 17.5589C108.045 16.1839 108.748 14.5124 108.748 12.5173C108.748 10.5223 108.045 8.85071 106.666 7.47572C105.287 6.10074 103.61 5.42673 101.61 5.42673C99.6358 5.42673 97.9324 6.10074 96.5534 7.47572C95.1744 8.85071 94.4714 10.5223 94.4714 12.5173C94.4714 14.5124 95.1744 16.1839 96.5534 17.5589C97.9324 18.9339 99.6358 19.6079 101.61 19.6079ZM98.6084 15.5639C97.7972 14.755 97.3916 13.7305 97.3916 12.5173C97.3916 11.3041 97.7972 10.2796 98.6084 9.4708C99.4195 8.66198 100.42 8.25758 101.61 8.25758C102.799 8.25758 103.8 8.66198 104.611 9.4708C105.422 10.2796 105.828 11.3041 105.828 12.5173C105.828 13.7305 105.422 14.755 104.611 15.5639C103.8 16.3727 102.799 16.7771 101.61 16.7771C100.42 16.7771 99.4195 16.3727 98.6084 15.5639ZM122.254 5.77722L117.441 12.3556L122.498 19.2574H119.118L115.765 14.6472L112.385 19.2574H108.978L114.062 12.3286L109.249 5.77722H112.629L115.738 10.037L118.847 5.77722H122.254Z\"/></svg>\n\n                    <h2 class=\"widget_back__headline\">Bug report system based</br>on Google Sheets</h2>\n                    <ul class=\"menu\" id=\"menu\">\n                        <li class=\"menu__item\"><a href=\"https://github.com/vmikh/bugbox\" target=\"_blank\">full manual</a></li>\n                        <li class=\"menu__item\"><a href=\"mailto:info@bugbox.io\">info@bugbox.io</a></li>\n                    </ul>\n                    <a href=\"https://yoomoney.ru/to/41001838339242\" class=\"widget_back__date_button\" target=\"_blank\">Donate</a>\n                </section>\n            </section>\n        ");
      }
    }]);

    return Widget;
  }(); // Copyright © 2021 Vladislav Mikhailov


  var FieldProblem = /*#__PURE__*/function () {
    function FieldProblem(fieldProblem) {
      _classCallCheck(this, FieldProblem);

      this.fieldProblem = fieldProblem;
    }

    _createClass(FieldProblem, [{
      key: "setDisabled",
      value: function setDisabled() {
        this.fieldProblem.disabled = true;
      }
    }, {
      key: "removeDisabled",
      value: function removeDisabled() {
        this.fieldProblem.disabled = false;
      }
    }, {
      key: "setInvalid",
      value: function setInvalid() {
        this.fieldProblem.classList.add('invalid');
      }
    }, {
      key: "setValid",
      value: function setValid() {
        this.fieldProblem.classList.remove('invalid');
      }
    }, {
      key: "setEmpty",
      value: function setEmpty() {
        this.fieldProblem.value = '';
      }
    }, {
      key: "isValid",
      value: function isValid() {
        if (this.fieldProblem.value === '') {
          this.setInvalid();
          return false;
        }

        return true;
      }
    }]);

    return FieldProblem;
  }(); // Copyright © 2021 Vladislav Mikhailov
  // Screenshot Class


  var FieldScreenshot = /*#__PURE__*/function () {
    function FieldScreenshot(attachScreenshot, screenshotInfo, fieldScreenshot, fieldScreenshotName, buttonScreenshotDelete) {
      _classCallCheck(this, FieldScreenshot);

      this.attachScreenshot = attachScreenshot;
      this.screenshotInfo = screenshotInfo;
      this.fieldScreenshot = fieldScreenshot;
      this.fieldScreenshotName = fieldScreenshotName;
      this.buttonScreenshotDelete = buttonScreenshotDelete;
    }

    _createClass(FieldScreenshot, [{
      key: "takeScreenshot",
      value: function takeScreenshot() {
        // docs: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
        // see: https://www.webrtc-experiment.com/Pluginfree-Screen-Sharing/#20893521368186473
        // see: https://github.com/muaz-khan/WebRTC-Experiment/blob/master/Pluginfree-Screen-Sharing/conference.js
        function getDisplayMedia(options) {
          if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
            return navigator.mediaDevices.getDisplayMedia(options);
          }

          if (navigator.getDisplayMedia) {
            return navigator.getDisplayMedia(options);
          }

          if (navigator.webkitGetDisplayMedia) {
            return navigator.webkitGetDisplayMedia(options);
          }

          if (navigator.mozGetDisplayMedia) {
            return navigator.mozGetDisplayMedia(options);
          }

          throw new Error('getDisplayMedia is not defined');
        }

        function getUserMedia(options) {
          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            return navigator.mediaDevices.getUserMedia(options);
          }

          if (navigator.getUserMedia) {
            return navigator.getUserMedia(options);
          }

          if (navigator.webkitGetUserMedia) {
            return navigator.webkitGetUserMedia(options);
          }

          if (navigator.mozGetUserMedia) {
            return navigator.mozGetUserMedia(options);
          }

          throw new Error('getUserMedia is not defined');
        }

        function takeScreenshotStream() {
          return _takeScreenshotStream.apply(this, arguments);
        }

        function _takeScreenshotStream() {
          _takeScreenshotStream = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var width, height, errors, stream, _console;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // see: https://developer.mozilla.org/en-US/docs/Web/API/Window/screen
                    width = screen.width * (window.devicePixelRatio || 1);
                    height = screen.height * (window.devicePixelRatio || 1);
                    errors = [];
                    _context.prev = 3;
                    _context.next = 6;
                    return getDisplayMedia({
                      audio: false,
                      // see: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/video
                      video: {
                        width: width,
                        height: height,
                        frameRate: 1
                      }
                    });

                  case 6:
                    stream = _context.sent;
                    _context.next = 12;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](3);
                    errors.push(_context.t0);

                  case 12:
                    if (!(navigator.userAgent.indexOf('Electron') >= 0)) {
                      _context.next = 22;
                      break;
                    }

                    _context.prev = 13;
                    _context.next = 16;
                    return getUserMedia({
                      audio: false,
                      video: {
                        mandatory: {
                          chromeMediaSource: 'desktop',
                          // chromeMediaSourceId: source.id,
                          minWidth: width,
                          maxWidth: width,
                          minHeight: height,
                          maxHeight: height
                        }
                      }
                    });

                  case 16:
                    stream = _context.sent;
                    _context.next = 22;
                    break;

                  case 19:
                    _context.prev = 19;
                    _context.t1 = _context["catch"](13);
                    errors.push(_context.t1);

                  case 22:
                    if (!errors.length) {
                      _context.next = 26;
                      break;
                    }

                    (_console = console).debug.apply(_console, errors);

                    if (stream) {
                      _context.next = 26;
                      break;
                    }

                    throw errors[errors.length - 1];

                  case 26:
                    return _context.abrupt("return", stream);

                  case 27:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[3, 9], [13, 19]]);
          }));
          return _takeScreenshotStream.apply(this, arguments);
        }

        function takeScreenshotCanvas() {
          return _takeScreenshotCanvas.apply(this, arguments);
        } // from: https://stackoverflow.com/a/46182044/5221762


        function _takeScreenshotCanvas() {
          _takeScreenshotCanvas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var stream, video, result;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return takeScreenshotStream();

                  case 2:
                    stream = _context2.sent;
                    // from: https://stackoverflow.com/a/57665309/5221762
                    video = document.createElement('video');
                    _context2.next = 6;
                    return new Promise(function (resolve, reject) {
                      video.onloadedmetadata = function () {
                        video.play();
                        video.pause(); // from: https://github.com/kasprownik/electron-screencapture/blob/master/index.js

                        var canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        var context = canvas.getContext('2d'); // see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement

                        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                        resolve(canvas);
                      };

                      video.srcObject = stream;
                    });

                  case 6:
                    result = _context2.sent;
                    stream.getTracks().forEach(function (track) {
                      track.stop();
                    });

                    if (!(result == null)) {
                      _context2.next = 10;
                      break;
                    }

                    throw new Error('Cannot take canvas screenshot');

                  case 10:
                    return _context2.abrupt("return", result);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          return _takeScreenshotCanvas.apply(this, arguments);
        }

        function getJpegBlob(canvas) {
          return new Promise(function (resolve, reject) {
            // docs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
            canvas.toBlob(function (blob) {
              return resolve(blob);
            }, 'image/jpeg', 0.95);
          });
        }

        function takeScreenshotJpegBlob() {
          return _takeScreenshotJpegBlob.apply(this, arguments);
        }

        function _takeScreenshotJpegBlob() {
          _takeScreenshotJpegBlob = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var canvas;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return takeScreenshotCanvas();

                  case 2:
                    canvas = _context3.sent;
                    return _context3.abrupt("return", getJpegBlob(canvas));

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
          return _takeScreenshotJpegBlob.apply(this, arguments);
        }

        function setScreenshot() {
          return _setScreenshot.apply(this, arguments);
        }

        function _setScreenshot() {
          _setScreenshot = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var blob, reader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return takeScreenshotJpegBlob();

                  case 2:
                    blob = _context4.sent;
                    // var previewCanvas = await blobToCanvas(blob, window.width*2, window.height*2)
                    // previewCanvas.style.position = 'fixed';
                    // document.appendChild(previewCanvas);
                    reader = new FileReader();
                    reader.readAsDataURL(blob);

                    reader.onloadend = function () {
                      var base64data = reader.result;
                      fieldScreenshot.value = base64data.replace('data:image/jpeg;base64,', '');
                    };

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
          return _setScreenshot.apply(this, arguments);
        }

        var fieldScreenshot = this.fieldScreenshot;
        setScreenshot();
      }
    }, {
      key: "setScreenshot",
      value: function setScreenshot() {
        var _this = this;

        var file = this.attachScreenshot.files[0];
        var fileFormat = file.type;
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
          var blob = reader.result;

          if (fileFormat === 'image/png') {
            _this.fieldScreenshot.value = blob.replace('data:image/png;base64,', '');
          } else _this.fieldScreenshot.value = blob.replace('data:image/jpeg;base64,', '');

          _this.attachScreenshot.value = '';
        };

        reader.onerror = function (error) {
          _this.attachScreenshot.value = '';
        };
      }
    }, {
      key: "setInvalid",
      value: function setInvalid() {
        var _this2 = this;

        this.attachScreenshot.parentNode.classList.add('invalid');
        setTimeout(function () {
          _this2.attachScreenshot.parentNode.classList.remove('invalid');
        }, 2000);
      }
    }, {
      key: "setFilled",
      value: function setFilled() {
        this.screenshotInfo.classList.add('show');
        this.attachScreenshot.parentNode.classList.add('hide');
      }
    }, {
      key: "setScreenshotName",
      value: function setScreenshotName(name) {
        this.fieldScreenshotName.innerText = name;
      }
    }, {
      key: "setDisabled",
      value: function setDisabled() {
        this.buttonScreenshotDelete.disabled = true;
      }
    }, {
      key: "removeDisabled",
      value: function removeDisabled() {
        this.buttonScreenshotDelete.disabled = false;
      }
    }, {
      key: "resetField",
      value: function resetField() {
        this.fieldScreenshot.value = '';
        this.screenshotInfo.classList.remove('show');
        this.attachScreenshot.parentNode.classList.remove('hide');
        this.fieldScreenshotName.innerText = '';
      }
    }]);

    return FieldScreenshot;
  }(); // Copyright © 2021 Vladislav Mikhailov


  var ButtonSend = /*#__PURE__*/function () {
    function ButtonSend(buttonSend, buttonSendText) {
      _classCallCheck(this, ButtonSend);

      this.buttonSend = buttonSend;
      this.buttonSendText = buttonSendText;
    }

    _createClass(ButtonSend, [{
      key: "setLoad",
      value: function setLoad() {
        this.buttonSend.classList.add('loading');
      }
    }, {
      key: "removeLoad",
      value: function removeLoad() {
        this.buttonSend.classList.remove('loading');
        this.buttonSend.blur();
      }
    }, {
      key: "setDisabled",
      value: function setDisabled(disabledText) {
        this.buttonSend.setAttribute('disabled', true);
        this.buttonSendText.innerText = disabledText;
      }
    }, {
      key: "setError",
      value: function setError(errorText) {
        var _this3 = this;

        this.removeLoad();
        this.buttonSend.classList.add('invalid');
        this.buttonSendText.innerText = errorText;
        setTimeout(function () {
          _this3.setStatic();
        }, 3000);
      }
    }, {
      key: "setSuccess",
      value: function setSuccess(succesText) {
        var _this4 = this;

        this.removeLoad();
        this.buttonSend.classList.add('success');
        this.buttonSendText.innerText = succesText;
        setTimeout(function () {
          _this4.setStatic();
        }, 3000);
      }
    }, {
      key: "setStatic",
      value: function setStatic() {
        this.buttonSend.classList.remove('invalid');
        this.buttonSend.classList.remove('success');
        this.buttonSendText.innerText = 'Send';
      }
    }]);

    return ButtonSend;
  }(); // Copyright © 2021 Vladislav Mikhailov


  var ButtonFloat = /*#__PURE__*/function () {
    function ButtonFloat(buttonFloat) {
      _classCallCheck(this, ButtonFloat);

      this.buttonFloat = buttonFloat;
    }

    _createClass(ButtonFloat, [{
      key: "open",
      value: function open() {
        this.buttonFloat.classList.add('active');
      }
    }, {
      key: "close",
      value: function close() {
        this.buttonFloat.classList.remove('active');
      }
    }]);

    return ButtonFloat;
  }(); // Copyright © 2021 Vladislav Mikhailov


  var ButtonInfo = /*#__PURE__*/function () {
    function ButtonInfo(buttonInfo) {
      _classCallCheck(this, ButtonInfo);

      this.buttonInfo = buttonInfo;
    }

    _createClass(ButtonInfo, [{
      key: "visible",
      value: function visible() {
        this.buttonInfo.classList.add('visible');
      }
    }, {
      key: "invisible",
      value: function invisible() {
        this.buttonInfo.classList.remove('visible');
      }
    }, {
      key: "open",
      value: function open() {
        this.buttonInfo.classList.add('active');
      }
    }, {
      key: "close",
      value: function close() {
        this.buttonInfo.classList.remove('active');
      }
    }, {
      key: "isActive",
      get: function get() {
        if (this.buttonInfo.classList.contains('active')) return true;
      }
    }]);

    return ButtonInfo;
  }(); // Copyright © 2021 Vladislav Mikhailov


  var MetaData = /*#__PURE__*/function () {
    function MetaData(fieldProblem, fieldScreenshot, platformName, platformVersion) {
      _classCallCheck(this, MetaData);

      this.fieldProblem = fieldProblem;
      this.fieldScreenshot = fieldScreenshot;
      this.platformName = platformName;
      this.platformVersion = platformVersion;
    } // Create header row


    _createClass(MetaData, [{
      key: "headArray",
      get: function get() {
        return ['Date&Time', 'Problem', 'Screenshot', 'Actual Result', 'Expected Result', 'Priority', 'Assignee', 'Status', 'URL', 'Browser', 'OS', 'Device Type', 'Screen ⥗', 'Screen ⥔', 'Browser ⥗', 'Browser ⥔'];
      } // Create body row

    }, {
      key: "bodyArray",
      get: function get() {
        return [this.date, // Date&Time
        this.fieldProblem.value, // Problem
        this.fieldScreenshot.value, // Screenshot
        '', // Actual Result
        '', // Expected Result
        '', // Priority
        '', // Assignee
        '', // Status
        window.location.href, // URL
        this.browser, // Browser
        this.os, // OS
        this.deviceType, // Device Type
        window.screen.width, // Screen Width
        window.screen.height, // Screen Height
        window.innerWidth, // Browser Width
        window.innerHeight // Browser Height
        ];
      } // Return OS name

    }, {
      key: "os",
      get: function get() {
        var userDeviceArray = [{
          device: 'Android',
          platform: /Android/
        }, {
          device: 'iOS',
          platform: /iPhone/
        }, {
          device: 'iOS',
          platform: /iPad/
        }, {
          device: 'Symbian',
          platform: /Symbian/
        }, {
          device: 'Windows Phone',
          platform: /Windows Phone/
        }, {
          device: 'Tablet OS',
          platform: /Tablet OS/
        }, {
          device: 'Linux',
          platform: /Linux/
        }, {
          device: 'Windows',
          platform: /Windows NT/
        }, {
          device: 'Mac OS',
          platform: /Macintosh/
        }];
        var platform = navigator.userAgent;

        for (var i in userDeviceArray) {
          if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
          }
        }

        return 'Unknown platform! ' + platform;
      } // Return device type

    }, {
      key: "deviceType",
      get: function get() {
        if (this.os === 'Android' || this.os === 'iOS' || this.os === 'Symbian' || this.os === 'Windows Phone') {
          return 'Mobile/Tablet';
        } else return 'Desktop';
      } // Return date and time in format dd.mm.yyyy hh.mm

    }, {
      key: "date",
      get: function get() {
        var date = new Date();
        var day = date.getDate();
        var month = (date.getMonth().toString().length == 1 ? "0" : '') + date.getMonth();
        var year = date.getFullYear();
        var hours = (date.getHours().toString().length == 1 ? '0' : '') + "" + date.getHours();
        var mins = (date.getMinutes().toString().length == 1 ? '0' : '') + "" + date.getMinutes();
        return "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hours, ":").concat(mins);
      } // Return browser name and version

    }, {
      key: "browser",
      get: function get() {
        return this.platformName + ' v' + parseFloat(this.platformVersion);
      }
    }]);

    return MetaData;
  }();
  /*!
   * Platform.js
   * Copyright 2014-2020 Benjamin Tan
   * Copyright 2011-2013 John-David Dalton
   * Available under MIT license
   */


  var Platform = /*#__PURE__*/function () {
    function Platform() {
      _classCallCheck(this, Platform);

      this.info = this.getPlatform();
    }

    _createClass(Platform, [{
      key: "getPlatform",
      value: function getPlatform() {
        (function () {
          /** Used to determine if values are of the language type `Object`. */
          var objectTypes = {
            'function': true,
            'object': true
          };
          /** Used as a reference to the global object. */

          var root = objectTypes[typeof window === "undefined" ? "undefined" : _typeof(window)] && window || this;
          /** Detect free variable `exports`. */

          var freeExports = objectTypes[typeof exports === "undefined" ? "undefined" : _typeof(exports)] && exports;
          /** Detect free variable `module`. */

          var freeModule = objectTypes[typeof module === "undefined" ? "undefined" : _typeof(module)] && module && !module.nodeType && module;
          /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */

          var freeGlobal = freeExports && freeModule && (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global;

          if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
            root = freeGlobal;
          }
          /**
           * Used as the maximum length of an array-like object.
           * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
           * for more details.
           */


          var maxSafeInteger = Math.pow(2, 53) - 1;
          /** Regular expression to detect Opera. */

          var reOpera = /\bOpera/;
          /** Used for native method references. */

          var objectProto = Object.prototype;
          /** Used to check for own properties of an object. */

          var hasOwnProperty = objectProto.hasOwnProperty;
          /** Used to resolve the internal `[[Class]]` of values. */

          var toString = objectProto.toString;
          /*--------------------------------------------------------------------------*/

          /**
           * Capitalizes a string value.
           *
           * @private
           * @param {string} string The string to capitalize.
           * @returns {string} The capitalized string.
           */

          function capitalize(string) {
            string = String(string);
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
          /**
           * A utility function to clean up the OS name.
           *
           * @private
           * @param {string} os The OS name to clean up.
           * @param {string} [pattern] A `RegExp` pattern matching the OS name.
           * @param {string} [label] A label for the OS.
           */


          function cleanupOS(os, pattern, label) {
            // Platform tokens are defined at:
            // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
            // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
            var data = {
              '10.0': '10',
              '6.4': '10 Technical Preview',
              '6.3': '8.1',
              '6.2': '8',
              '6.1': 'Server 2008 R2 / 7',
              '6.0': 'Server 2008 / Vista',
              '5.2': 'Server 2003 / XP 64-bit',
              '5.1': 'XP',
              '5.01': '2000 SP1',
              '5.0': '2000',
              '4.0': 'NT',
              '4.90': 'ME'
            }; // Detect Windows version from platform tokens.

            if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) && (data = data[/[\d.]+$/.exec(os)])) {
              os = 'Windows ' + data;
            } // Correct character case and cleanup string.


            os = String(os);

            if (pattern && label) {
              os = os.replace(RegExp(pattern, 'i'), label);
            }

            os = format(os.replace(/ ce$/i, ' CE').replace(/\bhpw/i, 'web').replace(/\bMacintosh\b/, 'Mac OS').replace(/_PowerPC\b/i, ' OS').replace(/\b(OS X) [^ \d]+/i, '$1').replace(/\bMac (OS X)\b/, '$1').replace(/\/(\d)/, ' $1').replace(/_/g, '.').replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '').replace(/\bx86\.64\b/gi, 'x86_64').replace(/\b(Windows Phone) OS\b/, '$1').replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1').split(' on ')[0]);
            return os;
          }
          /**
           * An iteration utility for arrays and objects.
           *
           * @private
           * @param {Array|Object} object The object to iterate over.
           * @param {Function} callback The function called per iteration.
           */


          function each(object, callback) {
            var index = -1,
                length = object ? object.length : 0;

            if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
              while (++index < length) {
                callback(object[index], index, object);
              }
            } else {
              forOwn(object, callback);
            }
          }
          /**
           * Trim and conditionally capitalize string values.
           *
           * @private
           * @param {string} string The string to format.
           * @returns {string} The formatted string.
           */


          function format(string) {
            string = trim(string);
            return /^(?:webOS|i(?:OS|P))/.test(string) ? string : capitalize(string);
          }
          /**
           * Iterates over an object's own properties, executing the `callback` for each.
           *
           * @private
           * @param {Object} object The object to iterate over.
           * @param {Function} callback The function executed per own property.
           */


          function forOwn(object, callback) {
            for (var key in object) {
              if (hasOwnProperty.call(object, key)) {
                callback(object[key], key, object);
              }
            }
          }
          /**
           * Gets the internal `[[Class]]` of a value.
           *
           * @private
           * @param {*} value The value.
           * @returns {string} The `[[Class]]`.
           */


          function getClassOf(value) {
            return value == null ? capitalize(value) : toString.call(value).slice(8, -1);
          }
          /**
           * Host objects can return type values that are different from their actual
           * data type. The objects we are concerned with usually return non-primitive
           * types of "object", "function", or "unknown".
           *
           * @private
           * @param {*} object The owner of the property.
           * @param {string} property The property to check.
           * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
           */


          function isHostType(object, property) {
            var type = object != null ? _typeof(object[property]) : 'number';
            return !/^(?:boolean|number|string|undefined)$/.test(type) && (type == 'object' ? !!object[property] : true);
          }
          /**
           * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
           *
           * @private
           * @param {string} string The string to qualify.
           * @returns {string} The qualified string.
           */


          function qualify(string) {
            return String(string).replace(/([ -])(?!$)/g, '$1?');
          }
          /**
           * A bare-bones `Array#reduce` like utility function.
           *
           * @private
           * @param {Array} array The array to iterate over.
           * @param {Function} callback The function called per iteration.
           * @returns {*} The accumulated result.
           */


          function reduce(array, callback) {
            var accumulator = null;
            each(array, function (value, index) {
              accumulator = callback(accumulator, value, index, array);
            });
            return accumulator;
          }
          /**
           * Removes leading and trailing whitespace from a string.
           *
           * @private
           * @param {string} string The string to trim.
           * @returns {string} The trimmed string.
           */


          function trim(string) {
            return String(string).replace(/^ +| +$/g, '');
          }
          /*--------------------------------------------------------------------------*/

          /**
           * Creates a new platform object.
           *
           * @memberOf platform
           * @param {Object|string} [ua=navigator.userAgent] The user agent string or
           *  context object.
           * @returns {Object} A platform object.
           */


          function parse(ua) {
            /** The environment context object. */
            var context = root;
            /** Used to flag when a custom context is provided. */

            var isCustomContext = ua && _typeof(ua) == 'object' && getClassOf(ua) != 'String'; // Juggle arguments.

            if (isCustomContext) {
              context = ua;
              ua = null;
            }
            /** Browser navigator object. */


            var nav = context.navigator || {};
            /** Browser user agent string. */

            var userAgent = nav.userAgent || '';
            ua || (ua = userAgent);
            /** Used to detect if browser is like Chrome. */

            var likeChrome = isCustomContext ? !!nav.likeChrome : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());
            /** Internal `[[Class]]` value shortcuts. */

            var objectClass = 'Object',
                airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
                enviroClass = isCustomContext ? objectClass : 'Environment',
                javaClass = isCustomContext && context.java ? 'JavaPackage' : getClassOf(context.java),
                phantomClass = isCustomContext ? objectClass : 'RuntimeObject';
            /** Detect Java environments. */

            var java = /\bJava/.test(javaClass) && context.java;
            /** Detect Rhino. */

            var rhino = java && getClassOf(context.environment) == enviroClass;
            /** A character to represent alpha. */

            var alpha = java ? 'a' : "\u03B1";
            /** A character to represent beta. */

            var beta = java ? 'b' : "\u03B2";
            /** Browser document object. */

            var doc = context.document || {};
            /**
             * Detect Opera browser (Presto-based).
             * http://www.howtocreate.co.uk/operaStuff/operaObject.html
             * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
             */

            var opera = context.operamini || context.opera;
            /** Opera `[[Class]]`. */

            var operaClass = reOpera.test(operaClass = isCustomContext && opera ? opera['[[Class]]'] : getClassOf(opera)) ? operaClass : opera = null;
            /*------------------------------------------------------------------------*/

            /** Temporary variable used over the script's lifetime. */

            var data;
            /** The CPU architecture. */

            var arch = ua;
            /** Platform description array. */

            var description = [];
            /** Platform alpha/beta indicator. */

            var prerelease = null;
            /** A flag to indicate that environment features should be used to resolve the platform. */

            var useFeatures = ua == userAgent;
            /** The browser/environment version. */

            var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();
            /** A flag to indicate if the OS ends with "/ Version" */

            var isSpecialCasedOS;
            /* Detectable layout engines (order is important). */

            var layout = getLayout([{
              'label': 'EdgeHTML',
              'pattern': 'Edge'
            }, 'Trident', {
              'label': 'WebKit',
              'pattern': 'AppleWebKit'
            }, 'iCab', 'Presto', 'NetFront', 'Tasman', 'KHTML', 'Gecko']);
            /* Detectable browser names (order is important). */

            var name = getName(['Adobe AIR', 'Arora', 'Avant Browser', 'Breach', 'Camino', 'Electron', 'Epiphany', 'Fennec', 'Flock', 'Galeon', 'GreenBrowser', 'iCab', 'Iceweasel', 'K-Meleon', 'Konqueror', 'Lunascape', 'Maxthon', {
              'label': 'Microsoft Edge',
              'pattern': '(?:Edge|Edg|EdgA|EdgiOS)'
            }, 'Midori', 'Nook Browser', 'PaleMoon', 'PhantomJS', 'Raven', 'Rekonq', 'RockMelt', {
              'label': 'Samsung Internet',
              'pattern': 'SamsungBrowser'
            }, 'SeaMonkey', {
              'label': 'Silk',
              'pattern': '(?:Cloud9|Silk-Accelerated)'
            }, 'Sleipnir', 'SlimBrowser', {
              'label': 'SRWare Iron',
              'pattern': 'Iron'
            }, 'Sunrise', 'Swiftfox', 'Vivaldi', 'Waterfox', 'WebPositive', {
              'label': 'Yandex Browser',
              'pattern': 'YaBrowser'
            }, {
              'label': 'UC Browser',
              'pattern': 'UCBrowser'
            }, 'Opera Mini', {
              'label': 'Opera Mini',
              'pattern': 'OPiOS'
            }, 'Opera', {
              'label': 'Opera',
              'pattern': 'OPR'
            }, 'Chromium', 'Chrome', {
              'label': 'Chrome',
              'pattern': '(?:HeadlessChrome)'
            }, {
              'label': 'Chrome',
              'pattern': '(?:CriOS|CrMo)'
            }, {
              'label': 'Firefox',
              'pattern': '(?:Firefox|Minefield)'
            }, {
              'label': 'Firefox',
              'pattern': 'FxiOS'
            }, {
              'label': 'IE',
              'pattern': 'IEMobile'
            }, {
              'label': 'IE',
              'pattern': 'MSIE'
            }, 'Safari']);
            /* Detectable products (order is important). */

            var product = getProduct([{
              'label': 'BlackBerry',
              'pattern': 'BB10'
            }, 'BlackBerry', {
              'label': 'Galaxy S',
              'pattern': 'GT-I9000'
            }, {
              'label': 'Galaxy S2',
              'pattern': 'GT-I9100'
            }, {
              'label': 'Galaxy S3',
              'pattern': 'GT-I9300'
            }, {
              'label': 'Galaxy S4',
              'pattern': 'GT-I9500'
            }, {
              'label': 'Galaxy S5',
              'pattern': 'SM-G900'
            }, {
              'label': 'Galaxy S6',
              'pattern': 'SM-G920'
            }, {
              'label': 'Galaxy S6 Edge',
              'pattern': 'SM-G925'
            }, {
              'label': 'Galaxy S7',
              'pattern': 'SM-G930'
            }, {
              'label': 'Galaxy S7 Edge',
              'pattern': 'SM-G935'
            }, 'Google TV', 'Lumia', 'iPad', 'iPod', 'iPhone', 'Kindle', {
              'label': 'Kindle Fire',
              'pattern': '(?:Cloud9|Silk-Accelerated)'
            }, 'Nexus', 'Nook', 'PlayBook', 'PlayStation Vita', 'PlayStation', 'TouchPad', 'Transformer', {
              'label': 'Wii U',
              'pattern': 'WiiU'
            }, 'Wii', 'Xbox One', {
              'label': 'Xbox 360',
              'pattern': 'Xbox'
            }, 'Xoom']);
            /* Detectable manufacturers. */

            var manufacturer = getManufacturer({
              'Apple': {
                'iPad': 1,
                'iPhone': 1,
                'iPod': 1
              },
              'Alcatel': {},
              'Archos': {},
              'Amazon': {
                'Kindle': 1,
                'Kindle Fire': 1
              },
              'Asus': {
                'Transformer': 1
              },
              'Barnes & Noble': {
                'Nook': 1
              },
              'BlackBerry': {
                'PlayBook': 1
              },
              'Google': {
                'Google TV': 1,
                'Nexus': 1
              },
              'HP': {
                'TouchPad': 1
              },
              'HTC': {},
              'Huawei': {},
              'Lenovo': {},
              'LG': {},
              'Microsoft': {
                'Xbox': 1,
                'Xbox One': 1
              },
              'Motorola': {
                'Xoom': 1
              },
              'Nintendo': {
                'Wii U': 1,
                'Wii': 1
              },
              'Nokia': {
                'Lumia': 1
              },
              'Oppo': {},
              'Samsung': {
                'Galaxy S': 1,
                'Galaxy S2': 1,
                'Galaxy S3': 1,
                'Galaxy S4': 1
              },
              'Sony': {
                'PlayStation': 1,
                'PlayStation Vita': 1
              },
              'Xiaomi': {
                'Mi': 1,
                'Redmi': 1
              }
            });
            /* Detectable operating systems (order is important). */

            var os = getOS(['Windows Phone', 'KaiOS', 'Android', 'CentOS', {
              'label': 'Chrome OS',
              'pattern': 'CrOS'
            }, 'Debian', {
              'label': 'DragonFly BSD',
              'pattern': 'DragonFly'
            }, 'Fedora', 'FreeBSD', 'Gentoo', 'Haiku', 'Kubuntu', 'Linux Mint', 'OpenBSD', 'Red Hat', 'SuSE', 'Ubuntu', 'Xubuntu', 'Cygwin', 'Symbian OS', 'hpwOS', 'webOS ', 'webOS', 'Tablet OS', 'Tizen', 'Linux', 'Mac OS X', 'Macintosh', 'Mac', 'Windows 98;', 'Windows ']);
            /*------------------------------------------------------------------------*/

            /**
             * Picks the layout engine from an array of guesses.
             *
             * @private
             * @param {Array} guesses An array of guesses.
             * @returns {null|string} The detected layout engine.
             */

            function getLayout(guesses) {
              return reduce(guesses, function (result, guess) {
                return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
              });
            }
            /**
             * Picks the manufacturer from an array of guesses.
             *
             * @private
             * @param {Array} guesses An object of guesses.
             * @returns {null|string} The detected manufacturer.
             */


            function getManufacturer(guesses) {
              return reduce(guesses, function (result, value, key) {
                // Lookup the manufacturer by product or scan the UA for the manufacturer.
                return result || (value[product] || value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] || RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)) && key;
              });
            }
            /**
             * Picks the browser name from an array of guesses.
             *
             * @private
             * @param {Array} guesses An array of guesses.
             * @returns {null|string} The detected browser name.
             */


            function getName(guesses) {
              return reduce(guesses, function (result, guess) {
                return result || RegExp('\\b' + (guess.pattern || qualify(guess)) + '\\b', 'i').exec(ua) && (guess.label || guess);
              });
            }
            /**
             * Picks the OS name from an array of guesses.
             *
             * @private
             * @param {Array} guesses An array of guesses.
             * @returns {null|string} The detected OS name.
             */


            function getOS(guesses) {
              return reduce(guesses, function (result, guess) {
                var pattern = guess.pattern || qualify(guess);

                if (!result && (result = RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua))) {
                  result = cleanupOS(result, pattern, guess.label || guess);
                }

                return result;
              });
            }
            /**
             * Picks the product name from an array of guesses.
             *
             * @private
             * @param {Array} guesses An array of guesses.
             * @returns {null|string} The detected product name.
             */


            function getProduct(guesses) {
              return reduce(guesses, function (result, guess) {
                var pattern = guess.pattern || qualify(guess);

                if (!result && (result = RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) || RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) || RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua))) {
                  // Split by forward slash and append product version if needed.
                  if ((result = String(guess.label && !RegExp(pattern, 'i').test(guess.label) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
                    result[0] += ' ' + result[1];
                  } // Correct character case and cleanup string.


                  guess = guess.label || guess;
                  result = format(result[0].replace(RegExp(pattern, 'i'), guess).replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ').replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
                }

                return result;
              });
            }
            /**
             * Resolves the version using an array of UA patterns.
             *
             * @private
             * @param {Array} patterns An array of UA patterns.
             * @returns {null|string} The detected version.
             */


            function getVersion(patterns) {
              return reduce(patterns, function (result, pattern) {
                return result || (RegExp(pattern + '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
              });
            }
            /**
             * Returns `platform.description` when the platform object is coerced to a string.
             *
             * @name toString
             * @memberOf platform
             * @returns {string} Returns `platform.description` if available, else an empty string.
             */


            function toStringPlatform() {
              return this.description || '';
            }
            /*------------------------------------------------------------------------*/
            // Convert layout to an array so we can add extra details.


            layout && (layout = [layout]); // Detect Android products.
            // Browsers on Android devices typically provide their product IDS after "Android;"
            // up to "Build" or ") AppleWebKit".
            // Example:
            // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
            // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"

            if (/\bAndroid\b/.test(os) && !product && (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
              product = trim(data[1]) // Replace any language codes (eg. "en-US").
              .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '') || null;
            } // Detect product names that contain their manufacturer's name.


            if (manufacturer && !product) {
              product = getProduct([manufacturer]);
            } else if (manufacturer && product) {
              product = product.replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ').replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
            } // Clean up Google TV.


            if (data = /\bGoogle TV\b/.exec(product)) {
              product = data[0];
            } // Detect simulators.


            if (/\bSimulator\b/i.test(ua)) {
              product = (product ? product + ' ' : '') + 'Simulator';
            } // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.


            if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
              description.push('running in Turbo/Uncompressed mode');
            } // Detect IE Mobile 11.


            if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
              data = parse(ua.replace(/like iPhone OS/, ''));
              manufacturer = data.manufacturer;
              product = data.product;
            } // Detect iOS.
            else if (/^iP/.test(product)) {
                name || (name = 'Safari');
                os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua)) ? ' ' + data[1].replace(/_/g, '.') : '');
              } // Detect Kubuntu.
              else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
                  os = 'Kubuntu';
                } // Detect Android browsers.
                else if (manufacturer && manufacturer != 'Google' && (/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua) || /\bVita\b/.test(product)) || /\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua)) {
                    name = 'Android Browser';
                    os = /\bAndroid\b/.test(os) ? os : 'Android';
                  } // Detect Silk desktop/accelerated modes.
                  else if (name == 'Silk') {
                      if (!/\bMobi/i.test(ua)) {
                        os = 'Android';
                        description.unshift('desktop mode');
                      }

                      if (/Accelerated *= *true/i.test(ua)) {
                        description.unshift('accelerated');
                      }
                    } // Detect UC Browser speed mode.
                    else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
                        description.push('speed mode');
                      } // Detect PaleMoon identifying as Firefox.
                      else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
                          description.push('identifying as Firefox ' + data[1]);
                        } // Detect Firefox OS and products running Firefox.
                        else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
                            os || (os = 'Firefox OS');
                            product || (product = data[1]);
                          } // Detect false positives for Firefox/Safari.
                          else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
                              // Escape the `/` for Firefox 1.
                              if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
                                // Clear name of false positives.
                                name = null;
                              } // Reassign a generic name.


                              if ((data = product || manufacturer || os) && (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
                                name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
                              }
                            } // Add Chrome version to description for Electron.
                            else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
                                description.push('Chromium ' + data);
                              } // Detect non-Opera (Presto-based) versions (order is important).


            if (!version) {
              version = getVersion(['(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)', 'Version', qualify(name), '(?:Firefox|Minefield|NetFront)']);
            } // Detect stubborn layout engines.


            if (data = layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' || /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') || /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' || !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') || layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront') {
              layout = [data];
            } // Detect Windows Phone 7 desktop mode.


            if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
              // name += ' Mobile';
              os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
              description.unshift('desktop mode');
            } // Detect Windows Phone 8.x desktop mode.
            else if (/\bWPDesktop\b/i.test(ua)) {
                name = 'IE Mobile';
                os = 'Windows Phone 8.x';
                description.unshift('desktop mode');
                version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
              } // Detect IE 11 identifying as other browsers.
              else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
                  if (name) {
                    description.push('identifying as ' + name + (version ? ' ' + version : ''));
                  }

                  name = 'IE';
                  version = data[1];
                } // Leverage environment features.


            if (useFeatures) {
              // Detect server-side environments.
              // Rhino has a global function while others have a global object.
              if (isHostType(context, 'global')) {
                if (java) {
                  data = java.lang.System;
                  arch = data.getProperty('os.arch');
                  os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
                }

                if (rhino) {
                  try {
                    version = context.require('ringo/engine').version.join('.');
                    name = 'RingoJS';
                  } catch (e) {
                    if ((data = context.system) && data.global.system == context.system) {
                      name = 'Narwhal';
                      os || (os = data[0].os || null);
                    }
                  }

                  if (!name) {
                    name = 'Rhino';
                  }
                } else if (_typeof(context.process) == 'object' && !context.process.browser && (data = context.process)) {
                  if (_typeof(data.versions) == 'object') {
                    if (typeof data.versions.electron == 'string') {
                      description.push('Node ' + data.versions.node);
                      name = 'Electron';
                      version = data.versions.electron;
                    } else if (typeof data.versions.nw == 'string') {
                      description.push('Chromium ' + version, 'Node ' + data.versions.node);
                      name = 'NW.js';
                      version = data.versions.nw;
                    }
                  }

                  if (!name) {
                    name = 'Node.js';
                    arch = data.arch;
                    os = data.platform;
                    version = /[\d.]+/.exec(data.version);
                    version = version ? version[0] : null;
                  }
                }
              } // Detect Adobe AIR.
              else if (getClassOf(data = context.runtime) == airRuntimeClass) {
                  name = 'Adobe AIR';
                  os = data.flash.system.Capabilities.os;
                } // Detect PhantomJS.
                else if (getClassOf(data = context.phantom) == phantomClass) {
                    name = 'PhantomJS';
                    version = (data = data.version || null) && data.major + '.' + data.minor + '.' + data.patch;
                  } // Detect IE compatibility modes.
                  else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
                      // We're in compatibility mode when the Trident version + 4 doesn't
                      // equal the document mode.
                      version = [version, doc.documentMode];

                      if ((data = +data[1] + 4) != version[1]) {
                        description.push('IE ' + version[1] + ' mode');
                        layout && (layout[1] = '');
                        version[1] = data;
                      }

                      version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
                    } // Detect IE 11 masking as other browsers.
                    else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
                        description.push('masking as ' + name + ' ' + version);
                        name = 'IE';
                        version = '11.0';
                        layout = ['Trident'];
                        os = 'Windows';
                      }

              os = os && format(os);
            } // Detect prerelease phases.


            if (version && (data = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) || /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) || /\bMinefield\b/i.test(ua) && 'a')) {
              prerelease = /b/i.test(data) ? 'beta' : 'alpha';
              version = version.replace(RegExp(data + '\\+?$'), '') + (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
            } // Detect Firefox Mobile.


            if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
              name = 'Firefox';
            } // Obscure Maxthon's unreliable version.
            else if (name == 'Maxthon' && version) {
                version = version.replace(/\.[\d.]+/, '.x');
              } // Detect Xbox 360 and Xbox One.
              else if (/\bXbox\b/i.test(product)) {
                  if (product == 'Xbox 360') {
                    os = null;
                  }

                  if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
                    description.unshift('mobile mode');
                  }
                } // Add mobile postfix.
                else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) && (os == 'Windows CE' || /Mobi/i.test(ua))) ; // Detect IE platform preview.
                  else if (name == 'IE' && useFeatures) {
                      try {
                        if (context.external === null) {
                          description.unshift('platform preview');
                        }
                      } catch (e) {
                        description.unshift('embedded');
                      }
                    } // Detect BlackBerry OS version.
                    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
                    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data = (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] || version)) {
                        data = [data, /BB10/.test(ua)];
                        os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
                        version = null;
                      } // Detect Opera identifying/masking itself as another browser.
                      // http://www.opera.com/support/kb/view/843/
                      else if (this != forOwn && product != 'Wii' && (useFeatures && opera || /Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua) || name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os) || name == 'IE' && (os && !/^Win/.test(os) && version > 5.5 || /\bWindows XP\b/.test(os) && version > 8 || version == 8 && !/\bTrident\b/.test(ua))) && !reOpera.test(data = parse.call(forOwn, ua.replace(reOpera, '') + ';')) && data.name) {
                          // When "identifying", the UA contains both Opera and the other browser's name.
                          data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');

                          if (reOpera.test(name)) {
                            if (/\bIE\b/.test(data) && os == 'Mac OS') {
                              os = null;
                            }

                            data = 'identify' + data;
                          } // When "masking", the UA contains only the other browser's name.
                          else {
                              data = 'mask' + data;

                              if (operaClass) {
                                name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
                              } else {
                                name = 'Opera';
                              }

                              if (/\bIE\b/.test(data)) {
                                os = null;
                              }

                              if (!useFeatures) {
                                version = null;
                              }
                            }

                          layout = ['Presto'];
                          description.push(data);
                        } // Detect WebKit Nightly and approximate Chrome/Safari versions.


            if (data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1]) {
              // Correct build number for numeric comparison.
              // (e.g. "532.5" becomes "532.05")
              data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data]; // Nightly builds are postfixed with a "+".

              if (name == 'Safari' && data[1].slice(-1) == '+') {
                name = 'WebKit Nightly';
                prerelease = 'alpha';
                version = data[1].slice(0, -1);
              } // Clear incorrect browser versions.
              else if (version == data[1] || version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
                  version = null;
                } // Use the full Chrome version when available.


              data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1]; // Detect Blink layout engine.

              if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
                layout = ['Blink'];
              } // Detect JavaScriptCore.
              // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi


              if (!useFeatures || !likeChrome && !data[1]) {
                layout && (layout[1] = 'like Safari');
                data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
              } else {
                layout && (layout[1] = 'like Chrome');
                data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
              } // Add the postfix of ".x" or "+" for approximate versions.


              layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+')); // Obscure version for some Safari 1-2 releases.

              if (name == 'Safari' && (!version || parseInt(version) > 45)) {
                version = data;
              } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
                description.unshift('headless');
              }
            } // Detect Opera desktop modes.


            if (name == 'Opera' && (data = /\bzbov|zvav$/.exec(os))) {
              name += ' ';
              description.unshift('desktop mode');

              if (data == 'zvav') {
                name += 'Mini';
                version = null;
              }

              os = os.replace(RegExp(' *' + data + '$'), '');
            } // Detect Chrome desktop mode.
            else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
                description.unshift('desktop mode');
                name = 'Chrome';
                version = null;

                if (/\bOS X\b/.test(os)) {
                  manufacturer = 'Apple';
                  os = 'iOS 4.3+';
                } else {
                  os = null;
                }
              } // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
              else if (/\bSRWare Iron\b/.test(name) && !version) {
                  version = getVersion('Chrome');
                } // Strip incorrect OS versions.


            if (version && version.indexOf(data = /[\d.]+$/.exec(os)) == 0 && ua.indexOf('/' + data + '-') > -1) {
              os = trim(os.replace(data, ''));
            } // Ensure OS does not include the browser name.


            if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
              os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
            } // Add layout engine.


            if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (/Browser|Lunascape|Maxthon/.test(name) || name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
              // Don't add layout details to description if they are falsey.
              (data = layout[layout.length - 1]) && description.push(data);
            } // Combine contextual information.


            if (description.length) {
              description = ['(' + description.join('; ') + ')'];
            } // Append manufacturer to description.


            if (manufacturer && product && product.indexOf(manufacturer) < 0) {
              description.push('on ' + manufacturer);
            } // Append product to description.


            if (product) {
              description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
            } // Parse the OS into an object.


            if (os) {
              data = / ([\d.+]+)$/.exec(os);
              isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
              os = {
                'architecture': 32,
                'family': data && !isSpecialCasedOS ? os.replace(data[0], '') : os,
                'version': data ? data[1] : null,
                'toString': function toString() {
                  var version = this.version;
                  return this.family + (version && !isSpecialCasedOS ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
                }
              };
            } // Add browser/OS architecture.


            if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
              if (os) {
                os.architecture = 64;
                os.family = os.family.replace(RegExp(' *' + data), '');
              }

              if (name && (/\bWOW64\b/i.test(ua) || useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua))) {
                description.unshift('32-bit');
              }
            } // Chrome 39 and above on OS X is always 64-bit.
            else if (os && /^OS X/.test(os.family) && name == 'Chrome' && parseFloat(version) >= 39) {
                os.architecture = 64;
              }

            ua || (ua = null);
            /*------------------------------------------------------------------------*/

            /**
                * The platform object.
                *
                * @name platform
                * @type Object
                */

            var platform = {};
            /**
                * The platform description.
                *
                * @memberOf platform
                * @type string|null
                */

            platform.description = ua;
            /**
                * The name of the browser's layout engine.
                *
                * The list of common layout engines include:
                * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
                *
                * @memberOf platform
                * @type string|null
                */

            platform.layout = layout && layout[0];
            /**
                * The name of the product's manufacturer.
                *
                * The list of manufacturers include:
                * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
                * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
                * "Nokia", "Samsung" and "Sony"
                *
                * @memberOf platform
                * @type string|null
                */

            platform.manufacturer = manufacturer;
            /**
                * The name of the browser/environment.
                *
                * The list of common browser names include:
                * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
                * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
                * "Opera Mini" and "Opera"
                *
                * Mobile versions of some browsers have "Mobile" appended to their name:
                * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
                *
                * @memberOf platform
                * @type string|null
                */

            platform.name = name;
            /**
                * The alpha/beta release indicator.
                *
                * @memberOf platform
                * @type string|null
                */

            platform.prerelease = prerelease;
            /**
                * The name of the product hosting the browser.
                *
                * The list of common products include:
                *
                * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
                * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
                *
                * @memberOf platform
                * @type string|null
                */

            platform.product = product;
            /**
                * The browser's user agent string.
                *
                * @memberOf platform
                * @type string|null
                */

            platform.ua = ua;
            /**
                * The browser/environment version.
                *
                * @memberOf platform
                * @type string|null
                */

            platform.version = name && version;
            /**
                * The name of the operating system.
                *
                * @memberOf platform
                * @type Object
                */

            platform.os = os || {
              /**
                  * The CPU architecture the OS is built for.
                  *
                  * @memberOf platform.os
                  * @type number|null
                  */
              'architecture': null,

              /**
                  * The family of the OS.
                  *
                  * Common values include:
                  * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
                  * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
                  * "SuSE", "Android", "iOS" and "Windows Phone"
                  *
                  * @memberOf platform.os
                  * @type string|null
                  */
              'family': null,

              /**
                  * The version of the OS.
                  *
                  * @memberOf platform.os
                  * @type string|null
                  */
              'version': null,

              /**
                  * Returns the OS string.
                  *
                  * @memberOf platform.os
                  * @returns {string} The OS string.
                  */
              'toString': function toString() {
                return 'null';
              }
            };
            platform.parse = parse;
            platform.toString = toStringPlatform;

            if (platform.version) {
              description.unshift(version);
            }

            if (platform.name) {
              description.unshift(name);
            }

            if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
              description.push(product ? '(' + os + ')' : 'on ' + os);
            }

            if (description.length) {
              platform.description = description.join(' ');
            }

            return platform;
          }
          /*--------------------------------------------------------------------------*/
          // Export platform.


          var platform = parse(); // Some AMD build optimizers, like r.js, check for condition patterns like the following:

          if (typeof define == 'function' && _typeof(define.amd) == 'object' && define.amd) {
            // Expose platform on the global object to prevent errors when platform is
            // loaded by a script tag in the presence of an AMD loader.
            // See http://requirejs.org/docs/errors.html#mismatch for more details.
            root.platform = platform; // Define as an anonymous module so platform can be aliased through path mapping.

            define(function () {
              return platform;
            });
          } // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
          else if (freeExports && freeModule) {
              // Export for CommonJS support.
              forOwn(platform, function (value, key) {
                freeExports[key] = value;
              });
            } else {
              // Export to the global object.
              root.platform = platform;
            }
        }).call(this);
        return platform;
      }
    }]);

    return Platform;
  }(); // Copyright © 2021 Vladislav Mikhailov


  var Ananytics = /*#__PURE__*/function () {
    function Ananytics(googleSheetsLink) {
      _classCallCheck(this, Ananytics);

      this.googleSheetsLink = googleSheetsLink;
      this.siteUrl = window.location.host;
      this.sessionUrl = 'https://backend.bugbox.io/addsession.php';
      this.bugUrl = 'https://backend.bugbox.io/addbug.php';
    }

    _createClass(Ananytics, [{
      key: "sendSession",
      value: function sendSession() {
        fetch(this.sessionUrl, {
          method: 'post',
          mode: 'no-cors',
          body: JSON.stringify({
            siteUrl: this.siteUrl,
            tableUrl: this.googleSheetsLink
          })
        });
        localStorage.setItem('sendSessionTime', new Date().getTime());
      }
    }, {
      key: "sendBug",
      value: function sendBug() {
        fetch(this.bugUrl, {
          method: 'post',
          mode: 'no-cors',
          body: JSON.stringify({
            siteUrl: this.siteUrl,
            tableUrl: this.googleSheetsLink
          })
        });
      }
    }]);

    return Ananytics;
  }(); // Copyright © 2021 Vladislav Mikhailov
  // Create platform checker class


  var platform$1 = new Platform(); // Create widget

  var widget = new Widget(window.bagboxSettings.googleSheetsLink, window.bagboxSettings.stylesLink, window.bagboxSettings.isHidden, platform$1.info.name); // Create problem field actions class

  var fieldProblem = new FieldProblem(widget.fieldProblem); // Create screenshot class

  var fieldScreenshot = new FieldScreenshot(widget.attachScreenshot, widget.screenshotInfo, widget.fieldScreenshot, widget.fieldScreenshotName, widget.buttonScreenshotDelete); // Create float button actions class

  var buttonSend = new ButtonSend(widget.buttonSend, widget.buttonSendText); // Create float button actions class

  var buttonFloat = new ButtonFloat(widget.buttonFloat); // Create button info actions class

  var buttonInfo = new ButtonInfo(widget.buttonInfo); // Create form sender class

  var metaData = new MetaData(widget.fieldProblem, widget.fieldScreenshot, platform$1.info.name, platform$1.info.version); // Create analytics class

  var analytics = new Ananytics(widget.googleSheetLink); // Set error if googleSheetsLink is empty

  if ('' === window.bagboxSettings.googleSheetsLink || 'YOUR_GOOGLE_SHEET' === window.bagboxSettings.googleSheetsLink || undefined === window.bagboxSettings.googleSheetsLink) {
    buttonSend.setDisabled('Sheets isn`t connect');
  } // Attach screenshot event


  widget.attachScreenshot.addEventListener("change", function (event) {
    var file = fieldScreenshot.attachScreenshot.files[0];
    var fileFormat = file.type;

    if (fileFormat !== 'image/png' && fileFormat !== 'image/jpeg') {
      fieldScreenshot.setInvalid();
      fieldScreenshot.attachScreenshot.value = '';
    } else {
      fieldScreenshot.setScreenshotName(file.name);
      fieldScreenshot.setScreenshot();
      fieldScreenshot.setFilled();
    }
  });
  widget.takeScreenshot.addEventListener("click", function (event) {
    fieldScreenshot.takeScreenshot();
  }); // Reset screenshot to default state

  widget.buttonScreenshotDelete.addEventListener("click", function (event) {
    event.preventDefault();
    fieldScreenshot.resetField();
  }); // Create screenshot and send form button

  widget.buttonSend.addEventListener("click", function (event) {
    event.preventDefault();

    if (!fieldProblem.isValid()) {
      widget.buttonSend.blur();
      return false;
    } // Set form disabled


    buttonSend.setLoad();
    fieldProblem.setDisabled();
    fieldScreenshot.setDisabled();
    var isError = false; // Send arrays to google sheets

    fetch(widget.googleLink, {
      method: 'post',
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        headArray: metaData.headArray,
        bodyArray: metaData.bodyArray
      })
    }).then(function (response) {
      // Remove form disabled
      if (response.status != 404) {
        analytics.sendBug();
      }

      return response.json();
    }).then(function (data) {// console.log(data);
    })["catch"](function (err) {
      // Remove form disabled
      isError = true;
      setTimeout(function () {
        buttonSend.setError('Something went wrong');
        fieldProblem.removeDisabled();
        fieldScreenshot.removeDisabled();
      }, 1000);
    });
    setTimeout(function () {
      if (!isError) {
        buttonSend.setSuccess('Sent Success');
        fieldProblem.removeDisabled();
        fieldProblem.setEmpty();
        fieldScreenshot.resetField();
        fieldScreenshot.removeDisabled();
      }
    }, 1500);
  }); // Getting Connected Sheets URL

  fetch(widget.googleLink).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (undefined !== data.url) widget.addSheetUrl(data.url);
  }); // Open widget func

  var openWidget = function openWidget() {
    if (widget.isOpen) {
      buttonFloat.close();
      buttonInfo.invisible();
      widget.close(); // if info is open

      buttonInfo.close();
      widget.turnOff();
    } else {
      buttonFloat.open();
      buttonInfo.visible();
      widget.open();
    }
  }; // Open widget on button click


  if (!widget.isHidden) {
    widget.buttonFloat.addEventListener("click", function (event) {
      event.preventDefault();
      openWidget();
    });
  } // If widget is hidden
  else {
      var counter = 0;
      var timeout = false; // Open widget on 3 fast click

      widget.buttonFloat.addEventListener("click", function (event) {
        event.preventDefault();
        counter++;

        if (!timeout) {
          timeout = true;
          setTimeout(function () {
            counter = 0;
            timeout = false;
          }, 500);
        }

        if (counter === 3) {
          openWidget();
        }
      });
    } // Close widget on click out widget


  document.addEventListener('click', function (event) {
    var target = event.target;
    var isWidgetSection = target == widget.widgetSection;

    if (widget.isOpen && !isWidgetSection) {
      buttonFloat.close();
      buttonInfo.invisible();
      widget.close(); // if info is open

      buttonInfo.close();
      widget.turnOff();
    }
  }); // Close widget on click ESC

  document.onkeydown = function (event) {
    event = event || window.event;
    var isEscape = false;
    if ("key" in event) isEscape = event.key === "Escape" || event.key === "Esc";else isEscape = event.keyCode === 27;

    if (isEscape && widget.isOpen) {
      buttonFloat.close();
      buttonInfo.invisible();
      widget.close(); // if info is open

      buttonInfo.close();
      widget.turnOff();
    }
  }; // Open & Close settings


  widget.buttonInfo.addEventListener("click", function (event) {
    event.preventDefault();

    if (buttonInfo.isActive) {
      buttonInfo.close();
      widget.turnOff();
    } else {
      buttonInfo.open();
      widget.turnOn();
    }
  }); // Remove invalid class from problem field on keyup

  widget.fieldProblem.addEventListener('keyup', function (event) {
    event.preventDefault();
    fieldProblem.setValid();
  }); // Analytics

  if (localStorage.sendSessionTime) {
    var now = new Date().getTime();

    if (Number(now) - Number(localStorage.sendSessionTime) > 1000 * 60 * 60 * 12) {
      analytics.sendSession();
    }
  } else analytics.sendSession();
});