/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.scss */ \"./src/app.scss\");\n/* harmony import */ var _scss_botones_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/_botones.scss */ \"./src/scss/_botones.scss\");\n/* harmony import */ var _pages_inicio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/inicio */ \"./src/pages/inicio.js\");\n/* harmony import */ var _pages_inicio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_inicio__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_modales_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/_modales.scss */ \"./src/scss/_modales.scss\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://web_responsive/./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web_responsive/./src/app.scss?");

/***/ }),

/***/ "./src/pages/inicio.js":
/*!*****************************!*\
  !*** ./src/pages/inicio.js ***!
  \*****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n    const btnPersonas = document.getElementById(\"btn-personas\");\r\n    const btnEmpresas = document.getElementById(\"btn-empresas\");\r\n    const listaPersonas = document.getElementById(\"lista-personas\");\r\n    const listaEmpresas = document.getElementById(\"lista-empresas\");\r\n    const tablaPersonas = document.getElementById(\"tabla-personas\");\r\n    const tablaEmpresas = document.getElementById(\"tabla-empresas\");\r\n    const titulo = document.getElementById(\"contact-title\");\r\n\r\n    // Función para alternar entre vistas\r\n    const toggleView = () => {\r\n        const isMobile = window.innerWidth <= 768;\r\n\r\n        if (isMobile) {\r\n            // Vista móvil: mostrar botones desplegables y ocultar tablas\r\n            listaPersonas.style.display = \"block\";\r\n            listaEmpresas.style.display = \"none\";\r\n            tablaPersonas.style.display = \"none\";\r\n            tablaEmpresas.style.display = \"none\";\r\n        } else {\r\n            // Vista tablet/escritorio: mostrar tablas y ocultar botones desplegables\r\n            listaPersonas.style.display = \"none\";\r\n            listaEmpresas.style.display = \"none\";\r\n            tablaPersonas.style.display = \"table\";\r\n            tablaEmpresas.style.display = \"none\";\r\n        }\r\n    };\r\n\r\n    // Llamar a la función al cargar la página\r\n    toggleView();\r\n\r\n    // Llamar a la función cuando se redimensiona la ventana\r\n    window.addEventListener(\"resize\", toggleView);\r\n\r\n    // Alternar entre \"Personas\" y \"Empresas\"\r\n    btnPersonas.addEventListener(\"click\", () => {\r\n        const isMobile = window.innerWidth <= 768;\r\n\r\n        if (isMobile) {\r\n            listaPersonas.style.display = \"block\";\r\n            listaEmpresas.style.display = \"none\";\r\n        } else {\r\n            tablaPersonas.style.display = \"table\";\r\n            tablaEmpresas.style.display = \"none\";\r\n        }\r\n\r\n        titulo.textContent = \"Lista de Contactos Personas\";\r\n    });\r\n\r\n    btnEmpresas.addEventListener(\"click\", () => {\r\n        const isMobile = window.innerWidth <= 768;\r\n\r\n        if (isMobile) {\r\n            listaPersonas.style.display = \"none\";\r\n            listaEmpresas.style.display = \"block\";\r\n        } else {\r\n            tablaPersonas.style.display = \"none\";\r\n            tablaEmpresas.style.display = \"table\";\r\n        }\r\n\r\n        titulo.textContent = \"Lista de Contactos Empresas\";\r\n    });\r\n});\n\n//# sourceURL=webpack://web_responsive/./src/pages/inicio.js?");

/***/ }),

/***/ "./src/scss/_botones.scss":
/*!********************************!*\
  !*** ./src/scss/_botones.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web_responsive/./src/scss/_botones.scss?");

/***/ }),

/***/ "./src/scss/_modales.scss":
/*!********************************!*\
  !*** ./src/scss/_modales.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://web_responsive/./src/scss/_modales.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;