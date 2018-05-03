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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/StrategyPattern.js":
/*!********************************!*\
  !*** ./src/StrategyPattern.js ***!
  \********************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\nclass StrategyPattern\n{\n\thandle()\n\t{\n\t\talert(\"Testing handle on strategy.\");\n\t}\n}\n\nfunction log(strategy)\n{\n\tstrategy.handle();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StrategyPattern);\n\n\n//# sourceURL=webpack:///./src/StrategyPattern.js?");

/***/ }),

/***/ "./src/TaskCollection.js":
/*!*******************************!*\
  !*** ./src/TaskCollection.js ***!
  \*******************************/
/*! exports provided: TaskCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TaskCollection\", function() { return TaskCollection; });\nclass TaskCollection\n{\n\tconstructor(tasks = [])\n\t{\n\t\tthis.tasks = tasks;\n\t}\n\tdump()\n\t{\n\t\tconsole.log(this.tasks);\n\t}\n\tlog()\n\t{\n\t\tthis.tasks.forEach((task) => {\n\t\t\treturn task;\n\t\t});\n\t}\n\tadd(...numbers)\n\t{\n\t\treturn numbers.reduce((prev, current) => {\n\t\t\treturn prev + current;\n\t\t});\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/TaskCollection.js?");

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\nclass User\n{\n\tconstructor(name, email)\n\t{\n\t\tthis.name = name;\n\t\tthis.email = email;\n\t}\n\tgreet()\n\t{\n\t\tconsole.log(`Hello ${this.name}, your email is ${this.email}`);\n\t}\n\tstatic register(...credentials)\n\t{\n\t\treturn new User(...credentials);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/User.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TaskCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskCollection */ \"./src/TaskCollection.js\");\n/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.js */ \"./src/User.js\");\n/* harmony import */ var _StrategyPattern_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StrategyPattern.js */ \"./src/StrategyPattern.js\");\n\n\n\n\nlet myTasks = new _TaskCollection__WEBPACK_IMPORTED_MODULE_0__[\"TaskCollection\"]([\n\t\"Go to the Store\",\n\t\"Finish Screencast\",\n\t\"Eat cake\"\n]);\n\nmyTasks.dump();\n\nconsole.log(myTasks.add(1,2,3));\n\nlet nums = [1,2,3,4];\nconsole.log(...nums);\n\nlet hello = \"Bar\";\nlet myHTML = `\n\t<div>\n\t\t<p>${hello}</p>\n\t</div>\n`;\nconsole.log(myHTML);\n\nfunction helloPerson() {\n\tlet name = \"John\";\n\tlet age = 39;\n\treturn {\n\t\tname,\n\t\tage,\n\t\tgreet() {\n\t\t\treturn `Hello ${this.name}`;\n\t\t},\n\t}\n}\nalert(helloPerson().greet());\n\nlet person = {\n\tname: \"Karen\",\n\tage: 100,\n\tgender: \"Female\",\n\tparent: true,\n};\n\nlet {name, age} = person;\n\nalert(name);\n\nfunction greetPerson( {parent, gender} ) {\n\tif (parent) {\n\t\tif (gender === \"Female\") {\n\t\t\treturn \"Hello mommy\";\n\t\t} else {\n\t\t\treturn \"Hello daddy\";\n\t\t}\n\t} else {\n\t\treturn \"Greetings\";\n\t}\n}\nconsole.log(greetPerson(person));\n\nlet newUser = _User_js__WEBPACK_IMPORTED_MODULE_1__[\"User\"].register(\"John\", \"johndoe@example.com\");\nconsole.dir(newUser);\nnewUser.greet();\nconsole.dir(newUser);\nnewUser.email = 'jeffreyway@laracasts.com';\nconsole.dir(newUser);\n\nObject(_StrategyPattern_js__WEBPACK_IMPORTED_MODULE_2__[\"log\"])(new _StrategyPattern_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map