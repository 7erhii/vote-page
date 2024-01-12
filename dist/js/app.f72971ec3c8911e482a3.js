/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/main.js":
/*!**************************!*\
  !*** ./src/core/main.js ***!
  \**************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  const quizLine = document.querySelector(".main__progress-line");
  const questionBtnNext = document.querySelectorAll(".question-btn-next");
  const firstQuestion = document.querySelector("#question-first");
  const secondQuestion = document.querySelector("#question-second");
  const thirdQuestion = document.querySelector("#review-js");
  questionBtnNext.forEach(e => {
    if (quizLine) {
      quizLine.style.setProperty("--progress-width", "20%");
    }

    e.addEventListener("click", () => {
      if (firstQuestion.classList.contains("showed")) {
        firstQuestion.classList.remove("showed");
        secondQuestion.classList.add("showed");

        if (quizLine) {
          quizLine.style.setProperty("--progress-width", "40%");
        }

        console.log(23);
      } else if (secondQuestion.classList.contains("showed")) {
        firstQuestion.classList.remove("showed");
        secondQuestion.classList.remove("showed");
        secondQuestion.classList.remove("showed");
        thirdQuestion.classList.add("showed");
        console.log(23);
        checkPass();

        if (quizLine) {
          quizLine.style.setProperty("--progress-width", "60%");
        }
      } else if (thirdQuestion.classList.contains("showed")) {
        const reviewOne = document.querySelector(".main__review-one");
        reviewOne.classList.add("showed");
      } else {
        console.log("??");
      }
    });
  });

  function checkPass() {
    if (thirdQuestion.classList.contains("showed")) {
      const reviewOne = document.querySelector(".main__review-one");
      reviewOne.classList.add("showed");
      switchSlide();
    } else {
      console.log("NO");
    }
  }

  function switchSlide() {
    const reviewOne = document.querySelector("#review-js");
    const reviewDone = document.querySelector("#reviewDone-js");

    if (reviewOne.classList.contains("showed")) {
      const reviewTwo = document.querySelector("#reviewTwo-js");
      const firstSlide = document.querySelector(".main__review-one");
      setTimeout(function () {
        // reviewOne.classList.remove("showed");
        reviewTwo.classList.add("showed");
        firstSlide.classList.remove("showed");
        quizLine.style.setProperty("--progress-width", "80%");
        setTimeout(function () {
          reviewTwo.classList.remove("showed");
          reviewDone.classList.add("showed");
          quizLine.style.setProperty("--progress-width", "100%");
        }, 1500);
      }, 1500);
    }
  }
});

/***/ }),

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["image"] = pug_interp = function(file){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${file}`), true, true)+" alt=\"\"") + "\u003E";
};




pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F6.5.1\u002Fcss\u002Ffontawesome.min.css\"\u003E\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F6.5.1\u002Fjs\u002Fall.min.js\"\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cheader class=\"header\"\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"header__sponsor\"\u003E\u003Cspan\u003ESponsored Post\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__content\"\u003E\u003Cdiv class=\"header__logo\"\u003E";
pug_mixins["image"]("with-US.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__actions\"\u003E\u003Cdiv class=\"header__text\"\u003E\u003Cspan\u003ECall Before 17:00\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__button\"\u003E\u003Ca class=\"main-btn\" href=\"tel:+18557582260\"\u003E\u003Cspan class=\"fas fa-phone-alt\"\u003E\u003C\u002Fspan\u003E\u003Cspan\u003E(855) 758-2260\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Cmain class=\"main\"\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"main__title\"\u003E\u003Cspan\u003EAmericans With Over $10,000 In Credit Card Debt Could Qualify For $1,000s Back In Their Pockets, Through Program Savings!\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__image\"\u003E";
pug_mixins["image"]('main-img.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__descr\"\u003E\u003Cspan\u003ETake The Short Quiz To See If You Qualify For A Free Debt Review\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__qiuz\"\u003E\u003Cdiv class=\"main__progress\"\u003E\u003Cdiv class=\"main__progress-step\"\u003E\u003Cp\u003Estep\u003Cspan\u003E1\u003C\u002Fspan\u003Eof 5\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__progress-line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__question showed\" id=\"question-first\"\u003E\u003Cspan\u003EDo You Live In The United States?\u003C\u002Fspan\u003E\u003Cdiv class=\"question-btn question-btn-next\"\u003E\u003Cspan\u003EYes\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"question-btn question-btn-next\"\u003E\u003Cspan\u003ENo\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__question\" id=\"question-second\"\u003E\u003Cspan\u003EDo you have over $10,000 In Credit Card Debt?\u003C\u002Fspan\u003E\u003Cdiv class=\"question-btn question-btn-next\"\u003E\u003Cspan\u003EYes\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"question-btn question-btn-next\"\u003E\u003Cspan\u003ENo\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__review\" id=\"review-js\"\u003E\u003Cdiv class=\"main__review-one\"\u003E\u003Cspan\u003EReviewing your answer\u003C\u002Fspan\u003E\u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" style=\"margin: auto; background: none; display: block; shape-rendering: auto;\" width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\"\u003E\n\u003Cg transform=\"rotate(0 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(30 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(60 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(90 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(120 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(150 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(180 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(210 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(240 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(270 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(300 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(330 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\n\u003C!-- [ldio] generated by https:\u002F\u002Floading.io\u002F --\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__review-two\" id=\"reviewTwo-js\"\u003E\u003Cspan\u003EMatching with best option\u003C\u002Fspan\u003E\u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\n\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" style=\"margin: auto; background: none; display: block; shape-rendering: auto;\" width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\"\u003E\n\u003Cg transform=\"rotate(0 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(30 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(60 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(90 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(120 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(150 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(180 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(210 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(240 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(270 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(300 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\u003Cg transform=\"rotate(330 50 50)\"\u003E\n  \u003Crect x=\"48.5\" y=\"24\" rx=\"1.5\" ry=\"2.04\" width=\"3\" height=\"12\" fill=\"#0a0a0a\"\u003E\n    \u003Canimate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"\u003E\u003C\u002Fanimate\u003E\n  \u003C\u002Frect\u003E\n\u003C\u002Fg\u003E\n\u003C!-- [ldio] generated by https:\u002F\u002Floading.io\u002F --\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__review-finish\" id=\"reviewDone-js\"\u003E\u003Ch2\u003ECONGRATULATIONS! You pre-qualify to get $1,000s back in your pocket, through this Credit Card Debt Giveback Program.\u003C\u002Fh2\u003E\u003Ch3\u003ETAP TO CALL NOW\u003C\u002Fh3\u003E\u003Cdiv class=\"question-btn\"\u003E\u003Cspan\u003E1(855) 758-2260\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__review-timer\"\u003E\u003Cp\u003EAct fast! A Debt Specialist Is Waiting With Your Free Review\u003Cspan\u003E 1:53\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E\u003Cfooter class=\"footer-upper\"\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"footer-upper__logo\"\u003E";
pug_mixins["image"]("with-US-white.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-upper__text\"\u003E\u003Cspan\u003EWe are the go to resource for figuring out how to get your finances into check. Learn financial strategies, find resources, and more.\u003C\u002Fspan\u003E\u003Cdiv class=\"main-btn\"\u003E\u003Cspan class=\"fas fa-phone-alt\"\u003E\u003C\u002Fspan\u003E\u003Cspan\u003E(855) 758-2260\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003Cfooter class=\"footer-lower\"\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"footer-lower__content\"\u003E\u003Cspan\u003EVideos are paid actor representative testimonials. For email assistance, please contact support@thedebtbureau.org or Call (800) 541-8589 Your results will vary depending on how much debt you are starting with, the effort you put in, timeliness of your payments, and the diligence you use in following our methods. This website is intended for informational purposes and as a reference tool to match consumers with companies that may be able to assist them. The Debt Bureau is a referral company. By calling and\u002For submitting your information to the company, it will share it with or forward your call to outside affiliates that pay The Debt Bureau to match consumers with their services. Our goal is to provide exceptional service. One of our agents may reach out to you to discuss your order, ask for feedback, and \u002F or see if you need any assistance with your products, services, or plans, at the phone number you provided regardless of your do-not-call list status. You may opt out of further contact at any time by simply telling our customer service team that you would no longer like to be contacted. In the event that our team is unable to reach you by phone, they may send you a text message letting you know that we called. Both our text messages and phone calls may be sent or connected utilizing automated software. Carrier charges may apply. You may opt out of any future contact via text message by replying anytime with “STOP”.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer-lower__policy\"\u003E\u003Ca href=\"#\"\u003E Privacy Policy\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E Terms of Service\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003Cfooter class=\"footer-sticky\"\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"footer-sticky__content\"\u003E\u003Cspan\u003EStart Becoming Debt-Free. Make the 15-Minute Call\u003C\u002Fspan\u003E\u003Ca class=\"main-btn\" href=\"tel:+18557582260\"\u003E\u003Cspan class=\"fas fa-phone-alt\"\u003E\u003C\u002Fspan\u003E\u003Cspan\u003E(855) 758-2260\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C\u002Fbody\u003E\u003Cscript src=\"https:\u002F\u002Fkit.fontawesome.com\u002F23b8fb4e42.js\" crossorigin=\"anonymous\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F6.5.1\u002Fjs\u002Fall.min.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Spinner.svg": "./src/assets/images/Spinner.svg",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./main-img.png": "./src/assets/images/main-img.png",
	"./with-US-white.png": "./src/assets/images/with-US-white.png",
	"./with-US.png": "./src/assets/images/with-US.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/Spinner.svg":
/*!***************************************!*\
  !*** ./src/assets/images/Spinner.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/758bdfe301710b193300.svg";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "./src/assets/images/main-img.png":
/*!****************************************!*\
  !*** ./src/assets/images/main-img.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d1cffb2a2dd11e0edc5c.png";

/***/ }),

/***/ "./src/assets/images/with-US-white.png":
/*!*********************************************!*\
  !*** ./src/assets/images/with-US-white.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/13cefa4c9169ab973c50.png";

/***/ }),

/***/ "./src/assets/images/with-US.png":
/*!***************************************!*\
  !*** ./src/assets/images/with-US.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/689896852bdabb243766.png";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.js");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9hc3NldHMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy9pZ25vcmVkfC9Vc2Vycy83ZXJoaXkvRGVza3RvcC9XRUIvcHJvamVjdHMvdm90ZS1hbWVyL3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHF1aXpMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19wcm9ncmVzcy1saW5lXCIpO1xuXG4gIGNvbnN0IHF1ZXN0aW9uQnRuTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb24tYnRuLW5leHRcIik7XG5cbiAgY29uc3QgZmlyc3RRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3Rpb24tZmlyc3RcIik7XG4gIGNvbnN0IHNlY29uZFF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWVzdGlvbi1zZWNvbmRcIik7XG4gIGNvbnN0IHRoaXJkUXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jldmlldy1qc1wiKTtcblxuICBxdWVzdGlvbkJ0bk5leHQuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChxdWl6TGluZSkge1xuICAgICAgcXVpekxpbmUuc3R5bGUuc2V0UHJvcGVydHkoXCItLXByb2dyZXNzLXdpZHRoXCIsIFwiMjAlXCIpO1xuICAgIH1cbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoZmlyc3RRdWVzdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93ZWRcIikpIHtcbiAgICAgICAgZmlyc3RRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd2VkXCIpO1xuICAgICAgICBzZWNvbmRRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKFwic2hvd2VkXCIpO1xuICAgICAgICBpZiAocXVpekxpbmUpIHtcbiAgICAgICAgICBxdWl6TGluZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcHJvZ3Jlc3Mtd2lkdGhcIiwgXCI0MCVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygyMyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZFF1ZXN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dlZFwiKSkge1xuICAgICAgICBmaXJzdFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93ZWRcIik7XG4gICAgICAgIHNlY29uZFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93ZWRcIik7XG4gICAgICAgIHNlY29uZFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93ZWRcIik7XG4gICAgICAgIHRoaXJkUXVlc3Rpb24uY2xhc3NMaXN0LmFkZChcInNob3dlZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coMjMpO1xuICAgICAgICBjaGVja1Bhc3MoKTtcblxuICAgICAgICBpZiAocXVpekxpbmUpIHtcbiAgICAgICAgICBxdWl6TGluZS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tcHJvZ3Jlc3Mtd2lkdGhcIiwgXCI2MCVcIik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcmRRdWVzdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93ZWRcIikpIHtcbiAgICAgICAgY29uc3QgcmV2aWV3T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19yZXZpZXctb25lXCIpO1xuXG4gICAgICAgIHJldmlld09uZS5jbGFzc0xpc3QuYWRkKFwic2hvd2VkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCI/P1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tQYXNzKCkge1xuICAgIGlmICh0aGlyZFF1ZXN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dlZFwiKSkge1xuICAgICAgY29uc3QgcmV2aWV3T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19yZXZpZXctb25lXCIpO1xuICAgICAgcmV2aWV3T25lLmNsYXNzTGlzdC5hZGQoXCJzaG93ZWRcIik7XG4gICAgICBzd2l0Y2hTbGlkZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTk9cIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3dpdGNoU2xpZGUgKCkge1xuXG4gICAgY29uc3QgcmV2aWV3T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXZpZXctanNcIik7XG4gICAgY29uc3QgcmV2aWV3RG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmV2aWV3RG9uZS1qc1wiKTtcblxuICAgIGlmIChyZXZpZXdPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd2VkXCIpKSB7XG4gICAgY29uc3QgcmV2aWV3VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXZpZXdUd28tanNcIik7XG4gICAgY29uc3QgZmlyc3RTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fcmV2aWV3LW9uZVwiKTtcblxuXG4gICAgICBzZXRUaW1lb3V0IChmdW5jdGlvbigpe1xuICAgICAgICAvLyByZXZpZXdPbmUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dlZFwiKTtcbiAgICAgICAgcmV2aWV3VHdvLmNsYXNzTGlzdC5hZGQoXCJzaG93ZWRcIik7XG4gICAgICAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dlZFwiKTtcbiAgICAgICAgcXVpekxpbmUuc3R5bGUuc2V0UHJvcGVydHkoXCItLXByb2dyZXNzLXdpZHRoXCIsIFwiODAlXCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV2aWV3VHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93ZWRcIik7XG4gICAgICAgICAgcmV2aWV3RG9uZS5jbGFzc0xpc3QuYWRkKFwic2hvd2VkXCIpO1xuICAgICAgICAgIHF1aXpMaW5lLnN0eWxlLnNldFByb3BlcnR5KFwiLS1wcm9ncmVzcy13aWR0aFwiLCBcIjEwMCVcIik7XG5cbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9LCAxNTAwKVxuICAgIH1cbiAgfVxufSk7XG5cblxuIiwidmFyIGRlZmF1bHRXaWR0aCA9IDE0NDAsXG4gIGRlZmF1bHRGb250ID0gMTYsXG4gIG1vYmlsZUZvbnQgPSAxNixcbiAgbWluV2lkdGggPSA3NjgsXG4gIG1pbkhlaWdodCA9IDYwMCxcbiAgZGVmYXVsdEhlaWdodCA9IDkwMDtcblxuZnVuY3Rpb24gZlNpemUoZGV2aWNlLCB2VywgdkgpIHtcbiAgaWYgKHZXIDw9IDM3NCkge1xuICAgIHJldHVybiAxMztcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VcbiAgICA/IG1vYmlsZUZvbnRcbiAgICA6IGRlZmF1bHRGb250ICpcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgobWluV2lkdGgsIHZXKSAvIGRlZmF1bHRXaWR0aCxcbiAgICAgICAgICBNYXRoLm1heChtaW5IZWlnaHQsIHZIKSAvIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZpZXJEZXZpY2UoKSB7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgaXNNb2JpbGUgPSB3aW5kb3dXaWR0aCA8PSA3Njc7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRTaXplID1cbiAgICAgIGZTaXplKGlzTW9iaWxlLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG5tb2RpZmllckRldmljZSgpO1xuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfbWl4aW5zW1wiaW1hZ2VcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oZmlsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYXR0cmlidXRlcy5jbGFzc10sIFtmYWxzZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2ZpbGV9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVwiO1xufTtcblxuXG5cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ2xpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmNkbmpzLmNsb3VkZmxhcmUuY29tXFx1MDAyRmFqYXhcXHUwMDJGbGlic1xcdTAwMkZmb250LWF3ZXNvbWVcXHUwMDJGNi41LjFcXHUwMDJGY3NzXFx1MDAyRmZvbnRhd2Vzb21lLm1pbi5jc3NcXFwiXFx1MDAzRVxcdTAwM0NsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZjZG5qcy5jbG91ZGZsYXJlLmNvbVxcdTAwMkZhamF4XFx1MDAyRmxpYnNcXHUwMDJGZm9udC1hd2Vzb21lXFx1MDAyRjYuNS4xXFx1MDAyRmpzXFx1MDAyRmFsbC5taW4uanNcXFwiXFx1MDAzRVxcdTAwM0N0aXRsZVxcdTAwM0VFbXB0eSBQcm9qZWN0XFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRcXHUwMDNFXFx1MDAzQ2JvZHlcXHUwMDNFXFx1MDAzQ2hlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX3Nwb25zb3JcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVNwb25zb3JlZCBQb3N0XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19sb2dvXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShcIndpdGgtVVMucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUNhbGwgQmVmb3JlIDE3OjAwXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fYnV0dG9uXFxcIlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwibWFpbi1idG5cXFwiIGhyZWY9XFxcInRlbDorMTg1NTc1ODIyNjBcXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJmYXMgZmEtcGhvbmUtYWx0XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFKDg1NSkgNzU4LTIyNjBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZGVyXFx1MDAzRVxcdTAwM0NtYWluIGNsYXNzPVxcXCJtYWluXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluX190aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFQW1lcmljYW5zIFdpdGggT3ZlciAkMTAsMDAwIEluIENyZWRpdCBDYXJkIERlYnQgQ291bGQgUXVhbGlmeSBGb3IgJDEsMDAwcyBCYWNrIEluIFRoZWlyIFBvY2tldHMsIFRocm91Z2ggUHJvZ3JhbSBTYXZpbmdzIVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluX19pbWFnZVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ21haW4taW1nLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbl9fZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVRha2UgVGhlIFNob3J0IFF1aXogVG8gU2VlIElmIFlvdSBRdWFsaWZ5IEZvciBBIEZyZWUgRGVidCBSZXZpZXdcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbl9fcWl1elxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbl9fcHJvZ3Jlc3NcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX3Byb2dyZXNzLXN0ZXBcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRXN0ZXBcXHUwMDNDc3BhblxcdTAwM0UxXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRW9mIDVcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbl9fcHJvZ3Jlc3MtbGluZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbl9fcXVlc3Rpb24gc2hvd2VkXFxcIiBpZD1cXFwicXVlc3Rpb24tZmlyc3RcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRURvIFlvdSBMaXZlIEluIFRoZSBVbml0ZWQgU3RhdGVzP1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJxdWVzdGlvbi1idG4gcXVlc3Rpb24tYnRuLW5leHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVllc1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJxdWVzdGlvbi1idG4gcXVlc3Rpb24tYnRuLW5leHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRU5vXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX3F1ZXN0aW9uXFxcIiBpZD1cXFwicXVlc3Rpb24tc2Vjb25kXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VEbyB5b3UgaGF2ZSBvdmVyICQxMCwwMDAgSW4gQ3JlZGl0IENhcmQgRGVidD9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicXVlc3Rpb24tYnRuIHF1ZXN0aW9uLWJ0bi1uZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VZZXNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicXVlc3Rpb24tYnRuIHF1ZXN0aW9uLWJ0bi1uZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VOb1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluX19yZXZpZXdcXFwiIGlkPVxcXCJyZXZpZXctanNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX3Jldmlldy1vbmVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVJldmlld2luZyB5b3VyIGFuc3dlclxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCI/XFx1MDAzRVxcblxcdTAwM0NzdmcgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMTk5OVxcdTAwMkZ4bGlua1xcXCIgc3R5bGU9XFxcIm1hcmdpbjogYXV0bzsgYmFja2dyb3VuZDogbm9uZTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bztcXFwiIHdpZHRoPVxcXCIyMDBweFxcXCIgaGVpZ2h0PVxcXCIyMDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkXFxcIlxcdTAwM0VcXG5cXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSgwIDUwIDUwKVxcXCJcXHUwMDNFXFxuICBcXHUwMDNDcmVjdCB4PVxcXCI0OC41XFxcIiB5PVxcXCIyNFxcXCIgcng9XFxcIjEuNVxcXCIgcnk9XFxcIjIuMDRcXFwiIHdpZHRoPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjEyXFxcIiBmaWxsPVxcXCIjMGEwYTBhXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2FuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwib3BhY2l0eVxcXCIgdmFsdWVzPVxcXCIxOzBcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIGR1cj1cXFwiMXNcXFwiIGJlZ2luPVxcXCItMC45MTY2NjY2NjY2NjY2NjY2c1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYW5pbWF0ZVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGcmVjdFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFx1MDAzQ2cgdHJhbnNmb3JtPVxcXCJyb3RhdGUoMzAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjgzMzMzMzMzMzMzMzMzMzRzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSg2MCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuNzVzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSg5MCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuNjY2NjY2NjY2NjY2NjY2NnNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcdTAwM0NnIHRyYW5zZm9ybT1cXFwicm90YXRlKDEyMCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuNTgzMzMzMzMzMzMzMzMzNHNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcdTAwM0NnIHRyYW5zZm9ybT1cXFwicm90YXRlKDE1MCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuNXNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcdTAwM0NnIHRyYW5zZm9ybT1cXFwicm90YXRlKDE4MCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuNDE2NjY2NjY2NjY2NjY2N3NcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcdTAwM0NnIHRyYW5zZm9ybT1cXFwicm90YXRlKDIxMCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuMzMzMzMzMzMzMzMzMzMzM3NcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcdTAwM0NnIHRyYW5zZm9ybT1cXFwicm90YXRlKDI0MCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuMjVzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSgyNzAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjE2NjY2NjY2NjY2NjY2NjY2c1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYW5pbWF0ZVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGcmVjdFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFx1MDAzQ2cgdHJhbnNmb3JtPVxcXCJyb3RhdGUoMzAwIDUwIDUwKVxcXCJcXHUwMDNFXFxuICBcXHUwMDNDcmVjdCB4PVxcXCI0OC41XFxcIiB5PVxcXCIyNFxcXCIgcng9XFxcIjEuNVxcXCIgcnk9XFxcIjIuMDRcXFwiIHdpZHRoPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjEyXFxcIiBmaWxsPVxcXCIjMGEwYTBhXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2FuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwib3BhY2l0eVxcXCIgdmFsdWVzPVxcXCIxOzBcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIGR1cj1cXFwiMXNcXFwiIGJlZ2luPVxcXCItMC4wODMzMzMzMzMzMzMzMzMzM3NcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcdTAwM0NnIHRyYW5zZm9ybT1cXFwicm90YXRlKDMzMCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiMHNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0MhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczpcXHUwMDJGXFx1MDAyRmxvYWRpbmcuaW9cXHUwMDJGIC0tXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW5fX3Jldmlldy10d29cXFwiIGlkPVxcXCJyZXZpZXdUd28tanNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRU1hdGNoaW5nIHdpdGggYmVzdCBvcHRpb25cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiP1xcdTAwM0VcXG5cXHUwMDNDc3ZnIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjE5OTlcXHUwMDJGeGxpbmtcXFwiIHN0eWxlPVxcXCJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XFxcIiB3aWR0aD1cXFwiMjAwcHhcXFwiIGhlaWdodD1cXFwiMjAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCJcXHUwMDNFXFxuXFx1MDAzQ2cgdHJhbnNmb3JtPVxcXCJyb3RhdGUoMCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuOTE2NjY2NjY2NjY2NjY2NnNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcdTAwM0NnIHRyYW5zZm9ybT1cXFwicm90YXRlKDMwIDUwIDUwKVxcXCJcXHUwMDNFXFxuICBcXHUwMDNDcmVjdCB4PVxcXCI0OC41XFxcIiB5PVxcXCIyNFxcXCIgcng9XFxcIjEuNVxcXCIgcnk9XFxcIjIuMDRcXFwiIHdpZHRoPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjEyXFxcIiBmaWxsPVxcXCIjMGEwYTBhXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2FuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwib3BhY2l0eVxcXCIgdmFsdWVzPVxcXCIxOzBcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIGR1cj1cXFwiMXNcXFwiIGJlZ2luPVxcXCItMC44MzMzMzMzMzMzMzMzMzM0c1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYW5pbWF0ZVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGcmVjdFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFx1MDAzQ2cgdHJhbnNmb3JtPVxcXCJyb3RhdGUoNjAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjc1c1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYW5pbWF0ZVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGcmVjdFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFx1MDAzQ2cgdHJhbnNmb3JtPVxcXCJyb3RhdGUoOTAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjY2NjY2NjY2NjY2NjY2NjZzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSgxMjAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjU4MzMzMzMzMzMzMzMzMzRzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSgxNTAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjVzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSgxODAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjQxNjY2NjY2NjY2NjY2NjdzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSgyMTAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjMzMzMzMzMzMzMzMzMzMzNzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSgyNDAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIi0wLjI1c1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYW5pbWF0ZVxcdTAwM0VcXG4gIFxcdTAwM0NcXHUwMDJGcmVjdFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFx1MDAzQ2cgdHJhbnNmb3JtPVxcXCJyb3RhdGUoMjcwIDUwIDUwKVxcXCJcXHUwMDNFXFxuICBcXHUwMDNDcmVjdCB4PVxcXCI0OC41XFxcIiB5PVxcXCIyNFxcXCIgcng9XFxcIjEuNVxcXCIgcnk9XFxcIjIuMDRcXFwiIHdpZHRoPVxcXCIzXFxcIiBoZWlnaHQ9XFxcIjEyXFxcIiBmaWxsPVxcXCIjMGEwYTBhXFxcIlxcdTAwM0VcXG4gICAgXFx1MDAzQ2FuaW1hdGUgYXR0cmlidXRlTmFtZT1cXFwib3BhY2l0eVxcXCIgdmFsdWVzPVxcXCIxOzBcXFwiIGtleVRpbWVzPVxcXCIwOzFcXFwiIGR1cj1cXFwiMXNcXFwiIGJlZ2luPVxcXCItMC4xNjY2NjY2NjY2NjY2NjY2NnNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFuaW1hdGVcXHUwMDNFXFxuICBcXHUwMDNDXFx1MDAyRnJlY3RcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcdTAwM0NnIHRyYW5zZm9ybT1cXFwicm90YXRlKDMwMCA1MCA1MClcXFwiXFx1MDAzRVxcbiAgXFx1MDAzQ3JlY3QgeD1cXFwiNDguNVxcXCIgeT1cXFwiMjRcXFwiIHJ4PVxcXCIxLjVcXFwiIHJ5PVxcXCIyLjA0XFxcIiB3aWR0aD1cXFwiM1xcXCIgaGVpZ2h0PVxcXCIxMlxcXCIgZmlsbD1cXFwiIzBhMGEwYVxcXCJcXHUwMDNFXFxuICAgIFxcdTAwM0NhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XFxcIm9wYWNpdHlcXFwiIHZhbHVlcz1cXFwiMTswXFxcIiBrZXlUaW1lcz1cXFwiMDsxXFxcIiBkdXI9XFxcIjFzXFxcIiBiZWdpbj1cXFwiLTAuMDgzMzMzMzMzMzMzMzMzMzNzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXHUwMDNDZyB0cmFuc2Zvcm09XFxcInJvdGF0ZSgzMzAgNTAgNTApXFxcIlxcdTAwM0VcXG4gIFxcdTAwM0NyZWN0IHg9XFxcIjQ4LjVcXFwiIHk9XFxcIjI0XFxcIiByeD1cXFwiMS41XFxcIiByeT1cXFwiMi4wNFxcXCIgd2lkdGg9XFxcIjNcXFwiIGhlaWdodD1cXFwiMTJcXFwiIGZpbGw9XFxcIiMwYTBhMGFcXFwiXFx1MDAzRVxcbiAgICBcXHUwMDNDYW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVxcXCJvcGFjaXR5XFxcIiB2YWx1ZXM9XFxcIjE7MFxcXCIga2V5VGltZXM9XFxcIjA7MVxcXCIgZHVyPVxcXCIxc1xcXCIgYmVnaW49XFxcIjBzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhbmltYXRlXFx1MDAzRVxcbiAgXFx1MDAzQ1xcdTAwMkZyZWN0XFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDIS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6XFx1MDAyRlxcdTAwMkZsb2FkaW5nLmlvXFx1MDAyRiAtLVxcdTAwM0VcXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluX19yZXZpZXctZmluaXNoXFxcIiBpZD1cXFwicmV2aWV3RG9uZS1qc1xcXCJcXHUwMDNFXFx1MDAzQ2gyXFx1MDAzRUNPTkdSQVRVTEFUSU9OUyEgWW91IHByZS1xdWFsaWZ5IHRvIGdldCAkMSwwMDBzIGJhY2sgaW4geW91ciBwb2NrZXQsIHRocm91Z2ggdGhpcyBDcmVkaXQgQ2FyZCBEZWJ0IEdpdmViYWNrIFByb2dyYW0uXFx1MDAzQ1xcdTAwMkZoMlxcdTAwM0VcXHUwMDNDaDNcXHUwMDNFVEFQIFRPIENBTEwgTk9XXFx1MDAzQ1xcdTAwMkZoM1xcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJxdWVzdGlvbi1idG5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTEoODU1KSA3NTgtMjI2MFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluX19yZXZpZXctdGltZXJcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUFjdCBmYXN0ISBBIERlYnQgU3BlY2lhbGlzdCBJcyBXYWl0aW5nIFdpdGggWW91ciBGcmVlIFJldmlld1xcdTAwM0NzcGFuXFx1MDAzRSAxOjUzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRm1haW5cXHUwMDNFXFx1MDAzQ2Zvb3RlciBjbGFzcz1cXFwiZm9vdGVyLXVwcGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXItdXBwZXJfX2xvZ29cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwid2l0aC1VUy13aGl0ZS5wbmdcIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXItdXBwZXJfX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVdlIGFyZSB0aGUgZ28gdG8gcmVzb3VyY2UgZm9yIGZpZ3VyaW5nIG91dCBob3cgdG8gZ2V0IHlvdXIgZmluYW5jZXMgaW50byBjaGVjay4gTGVhcm4gZmluYW5jaWFsIHN0cmF0ZWdpZXMsIGZpbmQgcmVzb3VyY2VzLCBhbmQgbW9yZS5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJmYXMgZmEtcGhvbmUtYWx0XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFKDg1NSkgNzU4LTIyNjBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZmb290ZXJcXHUwMDNFXFx1MDAzQ2Zvb3RlciBjbGFzcz1cXFwiZm9vdGVyLWxvd2VyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXItbG93ZXJfX2NvbnRlbnRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVZpZGVvcyBhcmUgcGFpZCBhY3RvciByZXByZXNlbnRhdGl2ZSB0ZXN0aW1vbmlhbHMuIEZvciBlbWFpbCBhc3Npc3RhbmNlLCBwbGVhc2UgY29udGFjdCBzdXBwb3J0QHRoZWRlYnRidXJlYXUub3JnIG9yIENhbGwgKDgwMCkgNTQxLTg1ODkgWW91ciByZXN1bHRzIHdpbGwgdmFyeSBkZXBlbmRpbmcgb24gaG93IG11Y2ggZGVidCB5b3UgYXJlIHN0YXJ0aW5nIHdpdGgsIHRoZSBlZmZvcnQgeW91IHB1dCBpbiwgdGltZWxpbmVzcyBvZiB5b3VyIHBheW1lbnRzLCBhbmQgdGhlIGRpbGlnZW5jZSB5b3UgdXNlIGluIGZvbGxvd2luZyBvdXIgbWV0aG9kcy4gVGhpcyB3ZWJzaXRlIGlzIGludGVuZGVkIGZvciBpbmZvcm1hdGlvbmFsIHB1cnBvc2VzIGFuZCBhcyBhIHJlZmVyZW5jZSB0b29sIHRvIG1hdGNoIGNvbnN1bWVycyB3aXRoIGNvbXBhbmllcyB0aGF0IG1heSBiZSBhYmxlIHRvIGFzc2lzdCB0aGVtLiBUaGUgRGVidCBCdXJlYXUgaXMgYSByZWZlcnJhbCBjb21wYW55LiBCeSBjYWxsaW5nIGFuZFxcdTAwMkZvciBzdWJtaXR0aW5nIHlvdXIgaW5mb3JtYXRpb24gdG8gdGhlIGNvbXBhbnksIGl0IHdpbGwgc2hhcmUgaXQgd2l0aCBvciBmb3J3YXJkIHlvdXIgY2FsbCB0byBvdXRzaWRlIGFmZmlsaWF0ZXMgdGhhdCBwYXkgVGhlIERlYnQgQnVyZWF1IHRvIG1hdGNoIGNvbnN1bWVycyB3aXRoIHRoZWlyIHNlcnZpY2VzLiBPdXIgZ29hbCBpcyB0byBwcm92aWRlIGV4Y2VwdGlvbmFsIHNlcnZpY2UuIE9uZSBvZiBvdXIgYWdlbnRzIG1heSByZWFjaCBvdXQgdG8geW91IHRvIGRpc2N1c3MgeW91ciBvcmRlciwgYXNrIGZvciBmZWVkYmFjaywgYW5kIFxcdTAwMkYgb3Igc2VlIGlmIHlvdSBuZWVkIGFueSBhc3Npc3RhbmNlIHdpdGggeW91ciBwcm9kdWN0cywgc2VydmljZXMsIG9yIHBsYW5zLCBhdCB0aGUgcGhvbmUgbnVtYmVyIHlvdSBwcm92aWRlZCByZWdhcmRsZXNzIG9mIHlvdXIgZG8tbm90LWNhbGwgbGlzdCBzdGF0dXMuIFlvdSBtYXkgb3B0IG91dCBvZiBmdXJ0aGVyIGNvbnRhY3QgYXQgYW55IHRpbWUgYnkgc2ltcGx5IHRlbGxpbmcgb3VyIGN1c3RvbWVyIHNlcnZpY2UgdGVhbSB0aGF0IHlvdSB3b3VsZCBubyBsb25nZXIgbGlrZSB0byBiZSBjb250YWN0ZWQuIEluIHRoZSBldmVudCB0aGF0IG91ciB0ZWFtIGlzIHVuYWJsZSB0byByZWFjaCB5b3UgYnkgcGhvbmUsIHRoZXkgbWF5IHNlbmQgeW91IGEgdGV4dCBtZXNzYWdlIGxldHRpbmcgeW91IGtub3cgdGhhdCB3ZSBjYWxsZWQuIEJvdGggb3VyIHRleHQgbWVzc2FnZXMgYW5kIHBob25lIGNhbGxzIG1heSBiZSBzZW50IG9yIGNvbm5lY3RlZCB1dGlsaXppbmcgYXV0b21hdGVkIHNvZnR3YXJlLiBDYXJyaWVyIGNoYXJnZXMgbWF5IGFwcGx5LiBZb3UgbWF5IG9wdCBvdXQgb2YgYW55IGZ1dHVyZSBjb250YWN0IHZpYSB0ZXh0IG1lc3NhZ2UgYnkgcmVwbHlpbmcgYW55dGltZSB3aXRoIOKAnFNUT1DigJ0uXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlci1sb3dlcl9fcG9saWN5XFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgUHJpdmFjeSBQb2xpY3lcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFRlcm1zIG9mIFNlcnZpY2VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZmb290ZXJcXHUwMDNFXFx1MDAzQ2Zvb3RlciBjbGFzcz1cXFwiZm9vdGVyLXN0aWNreVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyLXN0aWNreV9fY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFU3RhcnQgQmVjb21pbmcgRGVidC1GcmVlLiBNYWtlIHRoZSAxNS1NaW51dGUgQ2FsbFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwibWFpbi1idG5cXFwiIGhyZWY9XFxcInRlbDorMTg1NTc1ODIyNjBcXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJmYXMgZmEtcGhvbmUtYWx0XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFKDg1NSkgNzU4LTIyNjBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZm9vdGVyXFx1MDAzRVxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDc2NyaXB0IHNyYz1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZraXQuZm9udGF3ZXNvbWUuY29tXFx1MDAyRjIzYjhmYjRlNDIuanNcXFwiIGNyb3Nzb3JpZ2luPVxcXCJhbm9ueW1vdXNcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGc2NyaXB0XFx1MDAzRVxcdTAwM0NzY3JpcHQgc3JjPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmNkbmpzLmNsb3VkZmxhcmUuY29tXFx1MDAyRmFqYXhcXHUwMDJGbGlic1xcdTAwMkZmb250LWF3ZXNvbWVcXHUwMDJGNi41LjFcXHUwMDJGanNcXHUwMDJGYWxsLm1pbi5qc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL1NwaW5uZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9TcGlubmVyLnN2Z1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9tYWluLWltZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL21haW4taW1nLnBuZ1wiLFxuXHRcIi4vd2l0aC1VUy13aGl0ZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3dpdGgtVVMtd2hpdGUucG5nXCIsXG5cdFwiLi93aXRoLVVTLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvd2l0aC1VUy5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIG5weCBwcmV0dGllciAtLXdyaXRlIFwiKiovKi5wdWdcIlxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvcmUvcmVzaXplclwiO1xuaW1wb3J0IFwiLi9jb3JlL21haW5cIjtcbmltcG9ydCBcIi4vdmlld3MvaW5kZXgucHVnXCI7XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVpekxpbmUiLCJxdWVyeVNlbGVjdG9yIiwicXVlc3Rpb25CdG5OZXh0IiwicXVlcnlTZWxlY3RvckFsbCIsImZpcnN0UXVlc3Rpb24iLCJzZWNvbmRRdWVzdGlvbiIsInRoaXJkUXVlc3Rpb24iLCJmb3JFYWNoIiwiZSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja1Bhc3MiLCJyZXZpZXdPbmUiLCJzd2l0Y2hTbGlkZSIsInJldmlld0RvbmUiLCJyZXZpZXdUd28iLCJmaXJzdFNsaWRlIiwic2V0VGltZW91dCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRGb250IiwibW9iaWxlRm9udCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImZTaXplIiwiZGV2aWNlIiwidlciLCJ2SCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJib2R5IiwiZm9udFNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJvbmxvYWQiLCJvbnJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=