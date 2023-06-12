"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpractice_oop_01_starting_setup"] = self["webpackChunkpractice_oop_01_starting_setup"] || []).push([["src_App_Tooltip_js"],{

/***/ "./src/App/Components.js":
/*!*******************************!*\
  !*** ./src/App/Components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   doSomething: () => (/* binding */ doSomething)\n/* harmony export */ });\nfunction doSomething() {}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n    constructor(id, insertBefore = false) {\r\n      if (id) {\r\n        this.hostElement = document.getElementById(id);\r\n      } else {\r\n        this.hostElement = document.body;\r\n      }\r\n      this.insertBefore = insertBefore;\r\n    }\r\n    remove() {\r\n      if (this.toolTipElment) {\r\n        this.toolTipElment.remove();\r\n      }\r\n    }\r\n    show() {\r\n      this.hostElement.insertAdjacentElement(\r\n        this.insertBefore ? \"beforebegin\" : \"beforeend\",\r\n        this.toolTipElment\r\n      );\r\n      // document.body.append(this.toolTipElment);\r\n    }\r\n  });\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/App/Components.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tooltip: () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components */ \"./src/App/Components.js\");\n \r\n\r\nconsole.log(\"Tooltip loading\")\r\nclass Tooltip extends _Components__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(settingFlaseAgain, text, hostElementId) {\r\n    super(hostElementId);\r\n    this.text = text;\r\n    this.settingFlaseAgain = settingFlaseAgain;\r\n    this.create();\r\n  }\r\n  closeToolTip = () => {\r\n    this.remove();\r\n    this.settingFlaseAgain();\r\n  };\r\n\r\n  create() {\r\n    const toolTipElment = document.createElement(\"div\");\r\n    toolTipElment.classList.add(\"card\");\r\n    // toolTipElment.textContent = this.text;\r\n\r\n    const toolTipTemplate = document.getElementById(\"toolTip\");\r\n    const toolTipBody = document.importNode(toolTipTemplate.content, true);\r\n    toolTipBody.querySelector(\"p\").textContent = this.text;\r\n    toolTipElment.append(toolTipBody);\r\n\r\n    const leftPos = this.hostElement.offsetLeft;\r\n    const topPos = this.hostElement.offsetTop;\r\n    const height = this.hostElement.clientHeight;\r\n    const scrolling = this.hostElement.parentElement.scrollTop;\r\n\r\n    const x = leftPos + 20;\r\n    const y = topPos + height - scrolling - 10;\r\n\r\n    toolTipElment.style.position = \"absolute\";\r\n    toolTipElment.style.left = x + \"px\";\r\n    toolTipElment.style.top = y + \"px\";\r\n\r\n    const hostElementLeft = this.hostElement.offsetLeft;\r\n    const hostElementTop = this.hostElement.offsetTop;\r\n\r\n    console.log(this.hostElement.getBoundingClientRect());\r\n    toolTipElment.addEventListener(\"click\", this.closeToolTip);\r\n    this.toolTipElment = toolTipElment;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/App/Tooltip.js?");

/***/ })

}]);