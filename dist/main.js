/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/fonts/spacegrotesk/SpaceGrotesk-Light.otf */ "./dist/fonts/spacegrotesk/SpaceGrotesk-Light.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/fonts/spacegrotesk/SpaceGrotesk-Medium.otf */ "./dist/fonts/spacegrotesk/SpaceGrotesk-Medium.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/fonts/spacegrotesk/SpaceGrotesk-Bold.otf */ "./dist/fonts/spacegrotesk/SpaceGrotesk-Bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/fonts/spacegrotesk/SpaceGrotesk-Regular.otf */ "./dist/fonts/spacegrotesk/SpaceGrotesk-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: SGL;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: SGM;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n  font-family: SGB;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n  font-family: SGR;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  background-color: black;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/*Header styling*/\nheader {\n  gap: 0.5rem;\n  align-items: center;\n  position: sticky;\n  top: 0px;\n  padding: 0.5rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  border-bottom: 1px solid #292524;\n  background-color: black;\n  z-index: 999;\n}\n\n#company-header {\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-left: 0rem;\n  font-family: SGB;\n  color: white;\n  text-decoration: none;\n}\n\n#company-header > img {\n  width: 3rem;\n  border-radius: 10rem;\n}\n\n#company-name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#center-links {\n  display: flex;\n  gap: 2rem;\n  margin-left: 2rem;\n}\n\n#center-links > a {\n  text-decoration: none;\n  font-family: SGL;\n  font-size: 1.4rem;\n  color: white;\n  border-bottom: 1px solid black;\n}\n\n#right-links {\n  display: flex;\n  gap: 0.5rem;\n}\n\n#right-links > a {\n  border: none;\n  border-radius: 0.5rem;\n  padding: 0.5rem 0.8rem;\n  font-family: SGM;\n  background-color: #292524;\n  color: #fafaf9;\n}\n\n#right-links > a:last-child {\n  background-color: #fafaf9;\n}\n\n#right-links > a {\n  text-decoration: none;\n  color: #fafaf9;\n  font-size: 1rem;\n}\n\n#right-links > a:last-child {\n  color: black;\n}\n\n/*Header wide-screen styling*/\n@media (min-width: 1200px) {\n  header {\n    height: 5rem;\n  }\n\n  #company-header {\n    font-size: 1.8rem;\n  }\n\n  #company-header > img {\n    width: 4.5rem;\n    border-radius: 10rem;\n  }\n\n  #right-links > a {\n    font-size: 1.4rem;\n  }\n}\n\n/*Header mobile styling*/\n@media (max-width: 1200px) {\n  #company-name {\n    display: none;\n  }\n\n  #center-links {\n    display: none;\n  }\n\n}\n\n/*Footer styling*/\nfooter {\n  padding: 0.5rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: black;\n  border-top: 1px solid #292524;\n}\n\n#footer-logos {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n#footer-logos > img {\n  transition: 0.4s;\n  width: 1.5rem;\n  cursor: pointer;\n}\n\n#company-footer {\n  font-family: SGB;\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: white;\n}\n\n/*Footer wide-screen styling*/\n@media (min-width: 1000px) {\n  footer {\n    font-size: 1.2rem;\n  }\n\n  #company-footer {\n    font-size: 1.4rem;\n  }\n\n  #footer-logos > img {\n    width: 1.8rem;\n  }\n}\n\n/*Content styling*/\n#main-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n#video-box {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\nvideo {\n  width: inherit;\n}\n\n#text-over-video {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 4rem;\n  font-family: SGB;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n#text-over-video > p {\n  text-align: center;\n}\n\n#text-over-video > a {\n  font-size: 1.8rem;\n  font-family: SGL;\n  border-radius: 5rem;\n  padding: 1rem 4rem;\n  background-color: black;\n  color: white;\n  border-color: black;\n  opacity: 0.7;\n  text-decoration: none;\n  margin-top: 1rem;\n}\n\n#overview,\n#advantages,\n#utilities,\n#roadmap {\n  line-height: 1.5;\n}\n\n#overview {\n  z-index: 1;\n  color: white;\n  padding: 0 2rem 2rem;\n  margin-top: 1rem;\n  box-shadow: 0 -5rem 5rem 5rem black;\n}\n\n#overview > div {\n  font-family: SGB;\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n}\n\n#overview > p {\n  font-size: 1.2rem;\n  font-family: SGL;\n}\n\n#advantages {\n  color: black;\n  background-color: #d1d5db;\n  padding: 2rem 2rem;\n}\n\n#advantages > div {\n  font-family: SGB;\n  font-size: 2.5rem;\n}\n\n#advantages > ul {\n  text-decoration: none;\n  margin: 0;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nli > div:first-child {\n  font-size: 1.4rem;\n  font-family: SGB;\n}\n\nli > div:last-child {\n  font-family: SGL;\n  font-size: 1.2rem;\n}\n\n#utilities {\n  color: white;\n  padding: 2rem;\n}\n\n#utilities > div {\n  font-size: 2.5rem;\n  font-family: SGB;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n#utilities > p {\n  font-family: SGB;\n  font-size: 1.2rem;\n  border: 2px solid white;\n  border-radius: 1rem;\n  text-align: center;\n  padding: 1rem;\n}\n\n#roadmap {\n  color: black;\n  background-color: #d1d5db;\n  padding: 2rem;\n}\n\n#roadmap > div:first-child {\n  font-size: 2.5rem;\n  font-family: SGB;\n  margin-bottom: 2rem;\n}\n\n#roadmap > div {\n  font-size: 1.4rem;\n  font-family: SGB;\n}\n\n#roadmap > p {\n  font-family: SGL;\n  font-size: 1.2rem;\n}\n\n/*Content wide-screen styling*/\n@media (min-width: 1200px) {\n  #video-box {\n    width: 100%;\n    height: 100vh;\n  }\n\n  #text-over-video {\n    font-size: 4rem;\n    top: 20vh;\n  }\n\n  #overview {\n    padding: 4rem 12rem 8rem;\n    min-height: 70vh;\n  }\n\n  #advantages,\n  #utilities,\n  #roadmap {\n    padding: 8rem 12rem;\n  }\n\n  #overview > div,\n  #advantages > div {\n    font-family: SGB;\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n\n  #overview > p {\n    font-size: 1.6rem;\n    font-family: SGL;\n  }\n\n  li > div:first-child {\n    font-size: 1.8rem;\n    font-family: SGB;\n  }\n\n  li > div:last-child {\n    font-family: SGL;\n    font-size: 1.6rem;\n  }\n\n  #utilities > div {\n    font-size: 4rem;\n    font-family: SGB;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n\n  #utilities > p {\n    font-family: SGB;\n    font-size: 1.6rem;\n    border: 2px solid white;\n    border-radius: 1rem;\n    text-align: center;\n    margin-top: 3rem;\n  }\n\n  #roadmap > div:first-child {\n    font-size: 4rem;\n    font-family: SGB;\n    margin-bottom: 2rem;\n  }\n\n  #roadmap > div {\n    font-size: 1.8rem;\n    font-family: SGB;\n  }\n\n  #roadmap > p {\n    font-family: SGL;\n    font-size: 1.6rem;\n  }\n}\n\n/*Content mobile styling*/\n@media (max-width: 1200px) {\n  #video-box {\n    height: 95vh;\n    width: 100%;\n  }\n\n  video {\n   width: auto;\n  }\n\n  #text-over-video {\n    font-size: 2.5rem;\n    top: 17vh;\n  }\n\n \n\n  \n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: SGL;\n  src: url(../dist/fonts/spacegrotesk/SpaceGrotesk-Light.otf);\n}\n\n@font-face {\n  font-family: SGM;\n  src: url(../dist/fonts/spacegrotesk/SpaceGrotesk-Medium.otf);\n}\n\n@font-face {\n  font-family: SGB;\n  src: url(../dist/fonts/spacegrotesk/SpaceGrotesk-Bold.otf);\n}\n\n@font-face {\n  font-family: SGR;\n  src: url(../dist/fonts/spacegrotesk/SpaceGrotesk-Regular.otf);\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  margin: 0;\n  background-color: black;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/*Header styling*/\nheader {\n  gap: 0.5rem;\n  align-items: center;\n  position: sticky;\n  top: 0px;\n  padding: 0.5rem 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  border-bottom: 1px solid #292524;\n  background-color: black;\n  z-index: 999;\n}\n\n#company-header {\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-left: 0rem;\n  font-family: SGB;\n  color: white;\n  text-decoration: none;\n}\n\n#company-header > img {\n  width: 3rem;\n  border-radius: 10rem;\n}\n\n#company-name {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#center-links {\n  display: flex;\n  gap: 2rem;\n  margin-left: 2rem;\n}\n\n#center-links > a {\n  text-decoration: none;\n  font-family: SGL;\n  font-size: 1.4rem;\n  color: white;\n  border-bottom: 1px solid black;\n}\n\n#right-links {\n  display: flex;\n  gap: 0.5rem;\n}\n\n#right-links > a {\n  border: none;\n  border-radius: 0.5rem;\n  padding: 0.5rem 0.8rem;\n  font-family: SGM;\n  background-color: #292524;\n  color: #fafaf9;\n}\n\n#right-links > a:last-child {\n  background-color: #fafaf9;\n}\n\n#right-links > a {\n  text-decoration: none;\n  color: #fafaf9;\n  font-size: 1rem;\n}\n\n#right-links > a:last-child {\n  color: black;\n}\n\n/*Header wide-screen styling*/\n@media (min-width: 1200px) {\n  header {\n    height: 5rem;\n  }\n\n  #company-header {\n    font-size: 1.8rem;\n  }\n\n  #company-header > img {\n    width: 4.5rem;\n    border-radius: 10rem;\n  }\n\n  #right-links > a {\n    font-size: 1.4rem;\n  }\n}\n\n/*Header mobile styling*/\n@media (max-width: 1200px) {\n  #company-name {\n    display: none;\n  }\n\n  #center-links {\n    display: none;\n  }\n\n}\n\n/*Footer styling*/\nfooter {\n  padding: 0.5rem;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: black;\n  border-top: 1px solid #292524;\n}\n\n#footer-logos {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n#footer-logos > img {\n  transition: 0.4s;\n  width: 1.5rem;\n  cursor: pointer;\n}\n\n#company-footer {\n  font-family: SGB;\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: white;\n}\n\n/*Footer wide-screen styling*/\n@media (min-width: 1000px) {\n  footer {\n    font-size: 1.2rem;\n  }\n\n  #company-footer {\n    font-size: 1.4rem;\n  }\n\n  #footer-logos > img {\n    width: 1.8rem;\n  }\n}\n\n/*Content styling*/\n#main-container {\n  color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n#video-box {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\nvideo {\n  width: inherit;\n}\n\n#text-over-video {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 4rem;\n  font-family: SGB;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n#text-over-video > p {\n  text-align: center;\n}\n\n#text-over-video > a {\n  font-size: 1.8rem;\n  font-family: SGL;\n  border-radius: 5rem;\n  padding: 1rem 4rem;\n  background-color: black;\n  color: white;\n  border-color: black;\n  opacity: 0.7;\n  text-decoration: none;\n  margin-top: 1rem;\n}\n\n#overview,\n#advantages,\n#utilities,\n#roadmap {\n  line-height: 1.5;\n}\n\n#overview {\n  z-index: 1;\n  color: white;\n  padding: 0 2rem 2rem;\n  margin-top: 1rem;\n  box-shadow: 0 -5rem 5rem 5rem black;\n}\n\n#overview > div {\n  font-family: SGB;\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n}\n\n#overview > p {\n  font-size: 1.2rem;\n  font-family: SGL;\n}\n\n#advantages {\n  color: black;\n  background-color: #d1d5db;\n  padding: 2rem 2rem;\n}\n\n#advantages > div {\n  font-family: SGB;\n  font-size: 2.5rem;\n}\n\n#advantages > ul {\n  text-decoration: none;\n  margin: 0;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nli > div:first-child {\n  font-size: 1.4rem;\n  font-family: SGB;\n}\n\nli > div:last-child {\n  font-family: SGL;\n  font-size: 1.2rem;\n}\n\n#utilities {\n  color: white;\n  padding: 2rem;\n}\n\n#utilities > div {\n  font-size: 2.5rem;\n  font-family: SGB;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n#utilities > p {\n  font-family: SGB;\n  font-size: 1.2rem;\n  border: 2px solid white;\n  border-radius: 1rem;\n  text-align: center;\n  padding: 1rem;\n}\n\n#roadmap {\n  color: black;\n  background-color: #d1d5db;\n  padding: 2rem;\n}\n\n#roadmap > div:first-child {\n  font-size: 2.5rem;\n  font-family: SGB;\n  margin-bottom: 2rem;\n}\n\n#roadmap > div {\n  font-size: 1.4rem;\n  font-family: SGB;\n}\n\n#roadmap > p {\n  font-family: SGL;\n  font-size: 1.2rem;\n}\n\n/*Content wide-screen styling*/\n@media (min-width: 1200px) {\n  #video-box {\n    width: 100%;\n    height: 100vh;\n  }\n\n  #text-over-video {\n    font-size: 4rem;\n    top: 20vh;\n  }\n\n  #overview {\n    padding: 4rem 12rem 8rem;\n    min-height: 70vh;\n  }\n\n  #advantages,\n  #utilities,\n  #roadmap {\n    padding: 8rem 12rem;\n  }\n\n  #overview > div,\n  #advantages > div {\n    font-family: SGB;\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n\n  #overview > p {\n    font-size: 1.6rem;\n    font-family: SGL;\n  }\n\n  li > div:first-child {\n    font-size: 1.8rem;\n    font-family: SGB;\n  }\n\n  li > div:last-child {\n    font-family: SGL;\n    font-size: 1.6rem;\n  }\n\n  #utilities > div {\n    font-size: 4rem;\n    font-family: SGB;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n\n  #utilities > p {\n    font-family: SGB;\n    font-size: 1.6rem;\n    border: 2px solid white;\n    border-radius: 1rem;\n    text-align: center;\n    margin-top: 3rem;\n  }\n\n  #roadmap > div:first-child {\n    font-size: 4rem;\n    font-family: SGB;\n    margin-bottom: 2rem;\n  }\n\n  #roadmap > div {\n    font-size: 1.8rem;\n    font-family: SGB;\n  }\n\n  #roadmap > p {\n    font-family: SGL;\n    font-size: 1.6rem;\n  }\n}\n\n/*Content mobile styling*/\n@media (max-width: 1200px) {\n  #video-box {\n    height: 95vh;\n    width: 100%;\n  }\n\n  video {\n   width: auto;\n  }\n\n  #text-over-video {\n    font-size: 2.5rem;\n    top: 17vh;\n  }\n\n \n\n  \n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./dist/fonts/spacegrotesk/SpaceGrotesk-Bold.otf":
/*!*******************************************************!*\
  !*** ./dist/fonts/spacegrotesk/SpaceGrotesk-Bold.otf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84491a7b22b78320f103.otf";

/***/ }),

/***/ "./dist/fonts/spacegrotesk/SpaceGrotesk-Light.otf":
/*!********************************************************!*\
  !*** ./dist/fonts/spacegrotesk/SpaceGrotesk-Light.otf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f28aa818ef836a4d0bf.otf";

/***/ }),

/***/ "./dist/fonts/spacegrotesk/SpaceGrotesk-Medium.otf":
/*!*********************************************************!*\
  !*** ./dist/fonts/spacegrotesk/SpaceGrotesk-Medium.otf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cf68d36a9433d5d427e.otf";

/***/ }),

/***/ "./dist/fonts/spacegrotesk/SpaceGrotesk-Regular.otf":
/*!**********************************************************!*\
  !*** ./dist/fonts/spacegrotesk/SpaceGrotesk-Regular.otf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6feaf8c59c1d262b37e.otf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


console.log('it works')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZ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QUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBb0I7O0FBRXBCLHVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFnaWMtbWFyYmxlLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tYWdpYy1tYXJibGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hZ2ljLW1hcmJsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbWFnaWMtbWFyYmxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWFnaWMtbWFyYmxlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL21hZ2ljLW1hcmJsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tYWdpYy1tYXJibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21hZ2ljLW1hcmJsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tYWdpYy1tYXJibGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWFnaWMtbWFyYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWFnaWMtbWFyYmxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWFnaWMtbWFyYmxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21hZ2ljLW1hcmJsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tYWdpYy1tYXJibGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21hZ2ljLW1hcmJsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21hZ2ljLW1hcmJsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21hZ2ljLW1hcmJsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21hZ2ljLW1hcmJsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tYWdpYy1tYXJibGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbWFnaWMtbWFyYmxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9tYWdpYy1tYXJibGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Rpc3QvZm9udHMvc3BhY2Vncm90ZXNrL1NwYWNlR3JvdGVzay1MaWdodC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9kaXN0L2ZvbnRzL3NwYWNlZ3JvdGVzay9TcGFjZUdyb3Rlc2stTWVkaXVtLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Rpc3QvZm9udHMvc3BhY2Vncm90ZXNrL1NwYWNlR3JvdGVzay1Cb2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2Rpc3QvZm9udHMvc3BhY2Vncm90ZXNrL1NwYWNlR3JvdGVzay1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFNHTDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogU0dNO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBTR0I7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFNHUjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qSGVhZGVyIHN0eWxpbmcqL1xcbmhlYWRlciB7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI5MjUyNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4jY29tcGFueS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xcbiAgZm9udC1mYW1pbHk6IFNHQjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2NvbXBhbnktaGVhZGVyID4gaW1nIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxufVxcblxcbiNjb21wYW55LW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NlbnRlci1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcbiNjZW50ZXItbGlua3MgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBTR0w7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI3JpZ2h0LWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuI3JpZ2h0LWxpbmtzID4gYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgZm9udC1mYW1pbHk6IFNHTTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI1MjQ7XFxuICBjb2xvcjogI2ZhZmFmOTtcXG59XFxuXFxuI3JpZ2h0LWxpbmtzID4gYTpsYXN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZjk7XFxufVxcblxcbiNyaWdodC1saW5rcyA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmYWZhZjk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNyaWdodC1saW5rcyA+IGE6bGFzdC1jaGlsZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qSGVhZGVyIHdpZGUtc2NyZWVuIHN0eWxpbmcqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIGhlYWRlciB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gIH1cXG5cXG4gICNjb21wYW55LWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgfVxcblxcbiAgI2NvbXBhbnktaGVhZGVyID4gaW1nIHtcXG4gICAgd2lkdGg6IDQuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XFxuICB9XFxuXFxuICAjcmlnaHQtbGlua3MgPiBhIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxufVxcblxcbi8qSGVhZGVyIG1vYmlsZSBzdHlsaW5nKi9cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAjY29tcGFueS1uYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNjZW50ZXItbGlua3Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbn1cXG5cXG4vKkZvb3RlciBzdHlsaW5nKi9cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjkyNTI0O1xcbn1cXG5cXG4jZm9vdGVyLWxvZ29zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbiNmb290ZXItbG9nb3MgPiBpbWcge1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb21wYW55LWZvb3RlciB7XFxuICBmb250LWZhbWlseTogU0dCO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qRm9vdGVyIHdpZGUtc2NyZWVuIHN0eWxpbmcqL1xcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG4gIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgI2NvbXBhbnktZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuXFxuICAjZm9vdGVyLWxvZ29zID4gaW1nIHtcXG4gICAgd2lkdGg6IDEuOHJlbTtcXG4gIH1cXG59XFxuXFxuLypDb250ZW50IHN0eWxpbmcqL1xcbiNtYWluLWNvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3ZpZGVvLWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbnZpZGVvIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbn1cXG5cXG4jdGV4dC1vdmVyLXZpZGVvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBTR0I7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbiN0ZXh0LW92ZXItdmlkZW8gPiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RleHQtb3Zlci12aWRlbyA+IGEge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LWZhbWlseTogU0dMO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbiNvdmVydmlldyxcXG4jYWR2YW50YWdlcyxcXG4jdXRpbGl0aWVzLFxcbiNyb2FkbWFwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbiNvdmVydmlldyB7XFxuICB6LWluZGV4OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMCAycmVtIDJyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMCAtNXJlbSA1cmVtIDVyZW0gYmxhY2s7XFxufVxcblxcbiNvdmVydmlldyA+IGRpdiB7XFxuICBmb250LWZhbWlseTogU0dCO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jb3ZlcnZpZXcgPiBwIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6IFNHTDtcXG59XFxuXFxuI2FkdmFudGFnZXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcXG59XFxuXFxuI2FkdmFudGFnZXMgPiBkaXYge1xcbiAgZm9udC1mYW1pbHk6IFNHQjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4jYWR2YW50YWdlcyA+IHVsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxubGkgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogU0dCO1xcbn1cXG5cXG5saSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtZmFtaWx5OiBTR0w7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuI3V0aWxpdGllcyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4jdXRpbGl0aWVzID4gZGl2IHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFNHQjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbiN1dGlsaXRpZXMgPiBwIHtcXG4gIGZvbnQtZmFtaWx5OiBTR0I7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNyb2FkbWFwIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4jcm9hZG1hcCA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBTR0I7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jcm9hZG1hcCA+IGRpdiB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBTR0I7XFxufVxcblxcbiNyb2FkbWFwID4gcCB7XFxuICBmb250LWZhbWlseTogU0dMO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi8qQ29udGVudCB3aWRlLXNjcmVlbiBzdHlsaW5nKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAjdmlkZW8tYm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuXFxuICAjdGV4dC1vdmVyLXZpZGVvIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB0b3A6IDIwdmg7XFxuICB9XFxuXFxuICAjb3ZlcnZpZXcge1xcbiAgICBwYWRkaW5nOiA0cmVtIDEycmVtIDhyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XFxuICB9XFxuXFxuICAjYWR2YW50YWdlcyxcXG4gICN1dGlsaXRpZXMsXFxuICAjcm9hZG1hcCB7XFxuICAgIHBhZGRpbmc6IDhyZW0gMTJyZW07XFxuICB9XFxuXFxuICAjb3ZlcnZpZXcgPiBkaXYsXFxuICAjYWR2YW50YWdlcyA+IGRpdiB7XFxuICAgIGZvbnQtZmFtaWx5OiBTR0I7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gICNvdmVydmlldyA+IHAge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFNHTDtcXG4gIH1cXG5cXG4gIGxpID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBTR0I7XFxuICB9XFxuXFxuICBsaSA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgZm9udC1mYW1pbHk6IFNHTDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICB9XFxuXFxuICAjdXRpbGl0aWVzID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogU0dCO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAjdXRpbGl0aWVzID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBTR0I7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgfVxcblxcbiAgI3JvYWRtYXAgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBTR0I7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAjcm9hZG1hcCA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LWZhbWlseTogU0dCO1xcbiAgfVxcblxcbiAgI3JvYWRtYXAgPiBwIHtcXG4gICAgZm9udC1mYW1pbHk6IFNHTDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICB9XFxufVxcblxcbi8qQ29udGVudCBtb2JpbGUgc3R5bGluZyovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgI3ZpZGVvLWJveCB7XFxuICAgIGhlaWdodDogOTV2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICB2aWRlbyB7XFxuICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAjdGV4dC1vdmVyLXZpZGVvIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHRvcDogMTd2aDtcXG4gIH1cXG5cXG4gXFxuXFxuICBcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw0Q0FBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNENBQTREO0FBQzlEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRDQUEwRDtBQUM1RDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw0Q0FBNkQ7QUFDL0Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qs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QUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7R0FDQyxXQUFXO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsU0FBUztFQUNYOzs7OztBQUtGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFNHTDtcXG4gIHNyYzogdXJsKC4uL2Rpc3QvZm9udHMvc3BhY2Vncm90ZXNrL1NwYWNlR3JvdGVzay1MaWdodC5vdGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBTR007XFxuICBzcmM6IHVybCguLi9kaXN0L2ZvbnRzL3NwYWNlZ3JvdGVzay9TcGFjZUdyb3Rlc2stTWVkaXVtLm90Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFNHQjtcXG4gIHNyYzogdXJsKC4uL2Rpc3QvZm9udHMvc3BhY2Vncm90ZXNrL1NwYWNlR3JvdGVzay1Cb2xkLm90Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFNHUjtcXG4gIHNyYzogdXJsKC4uL2Rpc3QvZm9udHMvc3BhY2Vncm90ZXNrL1NwYWNlR3JvdGVzay1SZWd1bGFyLm90Zik7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKkhlYWRlciBzdHlsaW5nKi9cXG5oZWFkZXIge1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMHB4O1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyOTI1MjQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuI2NvbXBhbnktaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBTR0I7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNjb21wYW55LWhlYWRlciA+IGltZyB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbn1cXG5cXG4jY29tcGFueS1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjZW50ZXItbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG4jY2VudGVyLWxpbmtzID4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogU0dMO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNyaWdodC1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNyaWdodC1saW5rcyA+IGEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBTR007XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNTI0O1xcbiAgY29sb3I6ICNmYWZhZjk7XFxufVxcblxcbiNyaWdodC1saW5rcyA+IGE6bGFzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWY5O1xcbn1cXG5cXG4jcmlnaHQtbGlua3MgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmFmYWY5O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jcmlnaHQtbGlua3MgPiBhOmxhc3QtY2hpbGQge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKkhlYWRlciB3aWRlLXNjcmVlbiBzdHlsaW5nKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICB9XFxuXFxuICAjY29tcGFueS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG5cXG4gICNjb21wYW55LWhlYWRlciA+IGltZyB7XFxuICAgIHdpZHRoOiA0LjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgfVxcblxcbiAgI3JpZ2h0LWxpbmtzID4gYSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcbn1cXG5cXG4vKkhlYWRlciBtb2JpbGUgc3R5bGluZyovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgI2NvbXBhbnktbmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjY2VudGVyLWxpbmtzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG59XFxuXFxuLypGb290ZXIgc3R5bGluZyovXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzI5MjUyNDtcXG59XFxuXFxuI2Zvb3Rlci1sb2dvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4jZm9vdGVyLWxvZ29zID4gaW1nIHtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29tcGFueS1mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IFNHQjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKkZvb3RlciB3aWRlLXNjcmVlbiBzdHlsaW5nKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gICNjb21wYW55LWZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcblxcbiAgI2Zvb3Rlci1sb2dvcyA+IGltZyB7XFxuICAgIHdpZHRoOiAxLjhyZW07XFxuICB9XFxufVxcblxcbi8qQ29udGVudCBzdHlsaW5nKi9cXG4jbWFpbi1jb250YWluZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN2aWRlby1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG52aWRlbyB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG59XFxuXFxuI3RleHQtb3Zlci12aWRlbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogU0dCO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4jdGV4dC1vdmVyLXZpZGVvID4gcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0ZXh0LW92ZXItdmlkZW8gPiBhIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC1mYW1pbHk6IFNHTDtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjc7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jb3ZlcnZpZXcsXFxuI2FkdmFudGFnZXMsXFxuI3V0aWxpdGllcyxcXG4jcm9hZG1hcCB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4jb3ZlcnZpZXcge1xcbiAgei1pbmRleDogMTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgMnJlbSAycmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgLTVyZW0gNXJlbSA1cmVtIGJsYWNrO1xcbn1cXG5cXG4jb3ZlcnZpZXcgPiBkaXYge1xcbiAgZm9udC1mYW1pbHk6IFNHQjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI292ZXJ2aWV3ID4gcCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBTR0w7XFxufVxcblxcbiNhZHZhbnRhZ2VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XFxuICBwYWRkaW5nOiAycmVtIDJyZW07XFxufVxcblxcbiNhZHZhbnRhZ2VzID4gZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiBTR0I7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuI2FkdmFudGFnZXMgPiB1bCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbmxpID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC1mYW1pbHk6IFNHQjtcXG59XFxuXFxubGkgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICBmb250LWZhbWlseTogU0dMO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiN1dGlsaXRpZXMge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI3V0aWxpdGllcyA+IGRpdiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBTR0I7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jdXRpbGl0aWVzID4gcCB7XFxuICBmb250LWZhbWlseTogU0dCO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jcm9hZG1hcCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI3JvYWRtYXAgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LWZhbWlseTogU0dCO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuI3JvYWRtYXAgPiBkaXYge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LWZhbWlseTogU0dCO1xcbn1cXG5cXG4jcm9hZG1hcCA+IHAge1xcbiAgZm9udC1mYW1pbHk6IFNHTDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4vKkNvbnRlbnQgd2lkZS1zY3JlZW4gc3R5bGluZyovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgI3ZpZGVvLWJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcblxcbiAgI3RleHQtb3Zlci12aWRlbyB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgdG9wOiAyMHZoO1xcbiAgfVxcblxcbiAgI292ZXJ2aWV3IHtcXG4gICAgcGFkZGluZzogNHJlbSAxMnJlbSA4cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xcbiAgfVxcblxcbiAgI2FkdmFudGFnZXMsXFxuICAjdXRpbGl0aWVzLFxcbiAgI3JvYWRtYXAge1xcbiAgICBwYWRkaW5nOiA4cmVtIDEycmVtO1xcbiAgfVxcblxcbiAgI292ZXJ2aWV3ID4gZGl2LFxcbiAgI2FkdmFudGFnZXMgPiBkaXYge1xcbiAgICBmb250LWZhbWlseTogU0dCO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAjb3ZlcnZpZXcgPiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBTR0w7XFxuICB9XFxuXFxuICBsaSA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LWZhbWlseTogU0dCO1xcbiAgfVxcblxcbiAgbGkgPiBkaXY6bGFzdC1jaGlsZCB7XFxuICAgIGZvbnQtZmFtaWx5OiBTR0w7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcblxcbiAgI3V0aWxpdGllcyA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFNHQjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgI3V0aWxpdGllcyA+IHAge1xcbiAgICBmb250LWZhbWlseTogU0dCO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIH1cXG5cXG4gICNyb2FkbWFwID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LWZhbWlseTogU0dCO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgI3JvYWRtYXAgPiBkaXYge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFNHQjtcXG4gIH1cXG5cXG4gICNyb2FkbWFwID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBTR0w7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcbn1cXG5cXG4vKkNvbnRlbnQgbW9iaWxlIHN0eWxpbmcqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICN2aWRlby1ib3gge1xcbiAgICBoZWlnaHQ6IDk1dmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgdmlkZW8ge1xcbiAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgI3RleHQtb3Zlci12aWRlbyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB0b3A6IDE3dmg7XFxuICB9XFxuXFxuIFxcblxcbiAgXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcblxuY29uc29sZS5sb2coJ2l0IHdvcmtzJykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=