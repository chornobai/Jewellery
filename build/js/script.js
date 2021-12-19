/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/filter.js":
/*!*****************************!*\
  !*** ./source/js/filter.js ***!
  \*****************************/
/*! exports provided: initFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFilter\", function() { return initFilter; });\nfunction initFilter() {\n  var fitlerOpen = document.querySelector('.filter-open');\n  var filterClose = document.querySelector('.filter-close');\n  var filterBlock = document.querySelector('.filter');\n  var filterTriggers = filterBlock.querySelectorAll('h3');\n  fitlerOpen.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    filterBlock.classList.add('filter--active');\n  });\n  filterClose.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    filterBlock.classList.remove('filter--active');\n  }); // Accordion\n\n  filterTriggers.forEach(function (item) {\n    item.addEventListener('click', function (evt) {\n      var block = item.closest('fieldset');\n      block.classList.toggle('filter-fieldset--active');\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack:///./source/js/filter.js?");

/***/ }),

/***/ "./source/js/login.js":
/*!****************************!*\
  !*** ./source/js/login.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var LOGIN_OVERLAY = 'login-wrapper--overlay';\nvar loginLinks = document.querySelectorAll('.login-link');\nvar loginBlock = document.querySelector('.login-wrapper');\nvar loginClose = loginBlock.querySelector('.login-top-button');\nvar loginMail = loginBlock.querySelector('#emain-login');\nvar loginForm = loginBlock.querySelector('form'); // Проверка - поддерживает ли браузер запись в LocalStorage //\n\nvar isStorageSupport = true;\nvar storage = '';\n\ntry {\n  storage = localStorage.getItem('email');\n} catch (err) {\n  isStorageSupport = false;\n} // Открытие модального окна и фокус в поле Email ---\n\n\nloginLinks.forEach(function (link) {\n  link.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    loginBlock.classList.add(LOGIN_OVERLAY);\n    loginMail.focus();\n\n    if (storage) {\n      loginMail.focus();\n    }\n  });\n}); // Запись в LocalStorage ---\n\nloginForm.addEventListener('submit', function (evt) {\n  if (!loginMail.value) {\n    evt.preventDefault();\n  }\n\n  if (isStorageSupport) {\n    localStorage.setItem('email', loginMail.value);\n  }\n\n  loginForm.reset();\n}); // Закрытие модального окна ---\n// Кнопка\n\nloginClose.addEventListener('click', function (evt) {\n  evt.preventDefault();\n  loginBlock.classList.remove(LOGIN_OVERLAY);\n}); // Esc\n\ndocument.addEventListener('keydown', function (evt) {\n  if (evt.key === 'Escape' || evt.key === 'Esc') {\n    loginBlock.classList.remove(LOGIN_OVERLAY);\n  }\n}); // Overlay\n\ndocument.addEventListener('click', function (evt) {\n  if (evt.target === loginBlock) {\n    loginBlock.classList.remove(LOGIN_OVERLAY);\n  }\n}); // ---\n\n//# sourceURL=webpack:///./source/js/login.js?");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var menuButton = document.querySelector('.header-top__button');\nvar menu = document.querySelector('.header');\nmenu.classList.remove('header-nojs');\nmenuButton.addEventListener('click', function (evt) {\n  evt.preventDefault;\n  menu.classList.toggle('header-open-menu');\n});\n\n//# sourceURL=webpack:///./source/js/menu.js?");

/***/ }),

/***/ "./source/js/question-accordion.js":
/*!*****************************************!*\
  !*** ./source/js/question-accordion.js ***!
  \*****************************************/
/*! exports provided: initMainAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMainAccordion\", function() { return initMainAccordion; });\nfunction initMainAccordion() {\n  var questionTriggers = document.querySelector('.questions').querySelectorAll('h3');\n  questionTriggers.forEach(function (item) {\n    item.addEventListener('click', function (evt) {\n      var block = item.closest('li');\n      block.classList.toggle('questions-item--active');\n    });\n  });\n}\n\n\n\n//# sourceURL=webpack:///./source/js/question-accordion.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./source/js/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ \"./source/js/login.js\");\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.js */ \"./source/js/filter.js\");\n/* harmony import */ var _question_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question-accordion */ \"./source/js/question-accordion.js\");\n\n // import  './slider.js';\n\n\n\nvar MAIN_PAGE = document.querySelector('.main');\nvar CATALOG_PAGE = document.querySelector('.main-catalog');\n\nif (CATALOG_PAGE) {\n  Object(_filter_js__WEBPACK_IMPORTED_MODULE_2__[\"initFilter\"])();\n} else {\n  Object(_question_accordion__WEBPACK_IMPORTED_MODULE_3__[\"initMainAccordion\"])();\n}\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
