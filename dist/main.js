/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropdown-menu.js":
/*!******************************!*\
  !*** ./src/dropdown-menu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideDropDown: () => (/* binding */ hideDropDown),\n/* harmony export */   toggleDropdown: () => (/* binding */ toggleDropdown)\n/* harmony export */ });\n// cache DOM\n// const hamburgerBtns = document.querySelectorAll('.hamburger');\nconst dropdownMenus = document.querySelectorAll('.dropdown-menu');\n\n// add event listeners\n// hamburgerBtns.forEach(btn => btn.addEventListener('click', toggleDropdown));\n// document.addEventListener('click', hideDropDown);\n\n// toggle matching dropdown menu on hamburger button click\nfunction toggleDropdown(e) {\n  dropdownMenus.forEach(menu => {\n    if (datasetsMatch(e.target, menu)) menu.classList.toggle('visible');\n  });\n}\n\n// hide dropdown menu when anything other than matching hamburger button is clicked\nfunction hideDropDown(e) {\n  dropdownMenus.forEach(menu => {\n    if (!datasetsMatch(e.target, menu)) menu.classList.remove('visible');\n  });\n}\n\n// return whether event target's dataset.for matches menu's dataset.id\nfunction datasetsMatch(eventTarget, menu) {\n  return (eventTarget.dataset.for === menu.dataset.id);\n}\n\n\n\n//# sourceURL=webpack://dynamic-ui-dropdown-menu/./src/dropdown-menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-menu.js */ \"./src/dropdown-menu.js\");\n\n\nconst hamburgerBtns = document.querySelectorAll('.hamburger');\n\nhamburgerBtns.forEach(btn => btn.addEventListener('click', _dropdown_menu_js__WEBPACK_IMPORTED_MODULE_0__.toggleDropdown));\ndocument.addEventListener('click', _dropdown_menu_js__WEBPACK_IMPORTED_MODULE_0__.hideDropDown);\n\n//# sourceURL=webpack://dynamic-ui-dropdown-menu/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;