/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client.js": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/public/client.js","vendors~client.js"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/components/index.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/components/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.story-board-header {\\r\\n  background: rgb(255, 102, 0);\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.sm {\\r\\n  /* float: left; */\\r\\n  display: inline-block;\\r\\n  width: 20%;\\r\\n}\\r\\n\\r\\n.sm-2 {\\r\\n  width: 74%;\\r\\n  margin-left: 2em;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.domain-name,\\r\\nspan i,\\r\\n.date {\\r\\n  color: #828282;\\r\\n}\\r\\n.comments,\\r\\n.likes-container {\\r\\n  font-weight: 700;\\r\\n  width: 50%;\\r\\n  display: inline-block;\\r\\n  text-align: right;\\r\\n}\\r\\n\\r\\n.story-row {\\r\\n  padding: 0.5em 1em;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  color: orange;\\r\\n}\\r\\n\\r\\n.hide-container {\\r\\n  display: inline-block;\\r\\n  margin-left: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.more-stories {\\r\\n  margin: 20px 5%;\\r\\n  color: orange;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.upvote-button {\\r\\n  color: #ccccccab;\\r\\n}\\r\\n\\r\\n.story-title,\\r\\n.author-name {\\r\\n  font-weight: 800;\\r\\n}\\r\\n\\r\\n.story-row:nth-child(even) {\\r\\n  background: #ccccccab;\\r\\n}\\r\\n.story-row > span,\\r\\n.story-row > div > span {\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.upvote-button {\\r\\n  margin-left: 0.8em;\\r\\n}\\r\\n\\r\\n@media (max-width: 600px) {\\r\\n  .story-container {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .story-row {\\r\\n    padding: 10px 3%;\\r\\n    /* width: 80%; */\\r\\n    display: flex;\\r\\n    flex-direction: column-reverse;\\r\\n  }\\r\\n\\r\\n  .sm-2 {\\r\\n    width: 90%;\\r\\n    margin-left: unset;\\r\\n  }\\r\\n  .story-row .hide-container,\\r\\n  .sm {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .story-row .hide-container {\\r\\n    display: inline-block;\\r\\n    margin: 0 0em;\\r\\n    padding: 5px;\\r\\n    vertical-align: baseline;\\r\\n    width: unset;\\r\\n  }\\r\\n\\r\\n  .comments,\\r\\n  .likes-container,\\r\\n  .hide-story {\\r\\n    width: unset;\\r\\n    margin-top: 15px;\\r\\n  }\\r\\n\\r\\n  .like-comment-container {\\r\\n    display: flex;\\r\\n    width: 57%;\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n  .width {\\r\\n    width: -webkit-fill-available;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/public/components/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/public/client.js":
/*!******************************!*\
  !*** ./src/public/client.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_HackerBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HackerBoard */ \"./src/public/components/HackerBoard.js\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HackerBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./src/public/client.js?");

/***/ }),

/***/ "./src/public/components/HackerBoard.js":
/*!**********************************************!*\
  !*** ./src/public/components/HackerBoard.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hackernews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hackernews */ \"./src/public/components/Hackernews.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar StoryBoard = /*#__PURE__*/function (_React$Component) {\n  _inherits(StoryBoard, _React$Component);\n\n  var _super = _createSuper(StoryBoard);\n\n  function StoryBoard(props) {\n    var _this;\n\n    _classCallCheck(this, StoryBoard);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      stories: [],\n      currentPage: 0,\n      totalPages: 0\n    };\n    return _this;\n  }\n\n  _createClass(StoryBoard, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      sessionStorage.getItem(\"stories\") ? this.setState(function (prevState) {\n        return _objectSpread(_objectSpread({}, prevState), {}, {\n          stories: JSON.parse(sessionStorage.getItem(\"stories\")),\n          totalPages: JSON.parse(sessionStorage.getItem(\"totalPages\"))\n        });\n      }) : this.fetchResults();\n    }\n  }, {\n    key: \"fetchResults\",\n    value: function fetchResults() {\n      var _this2 = this;\n\n      fetch(\"http://hn.algolia.com/api/v1/search?tags=story\").then(function (res) {\n        return res.json();\n      }).then(function (_ref) {\n        var hits = _ref.hits,\n            page = _ref.page,\n            totalPages = _ref.nbPages;\n\n        _this2.setState({\n          stories: hits,\n          currentPage: page,\n          totalPages: totalPages\n        });\n\n        sessionStorage.setItem(\"stories\", JSON.stringify(hits));\n        sessionStorage.setItem(\"totalPages\", JSON.stringify(totalPages));\n      })[\"catch\"](function (e) {\n        return console.error(e);\n      });\n    }\n  }, {\n    key: \"fetchNextResults\",\n    value: function fetchNextResults() {\n      var _this3 = this;\n\n      window.scrollTo(0, 0);\n      var currentPage = this.state.currentPage;\n\n      if (currentPage + 1 <= this.state.totalPages) {\n        fetch(\"http://hn.algolia.com/api/v1/search?tags=story&page=\".concat(currentPage + 1)).then(function (res) {\n          return res.json();\n        }).then(function (_ref2) {\n          var hits = _ref2.hits;\n          return _this3.setState(function (prevState, currentProps) {\n            return {\n              stories: _toConsumableArray(hits),\n              currentPage: prevState.currentPage + 1\n            };\n          });\n        })[\"catch\"](function (e) {\n          return console.error(e);\n        });\n      }\n    }\n  }, {\n    key: \"fetchPreviousResults\",\n    value: function fetchPreviousResults() {\n      var _this4 = this;\n\n      window.scrollTo(0, 0);\n      var currentPage = this.state.currentPage;\n\n      if (currentPage + 1 <= this.state.totalPages) {\n        fetch(\"http://hn.algolia.com/api/v1/search?tags=story&page=\".concat(currentPage - 1)).then(function (res) {\n          return res.json();\n        }).then(function (_ref3) {\n          var hits = _ref3.hits;\n          return _this4.setState(function (prevState, currentProps) {\n            return {\n              stories: _toConsumableArray(hits),\n              currentPage: prevState.currentPage + 1\n            };\n          });\n        })[\"catch\"](function (e) {\n          return console.error(e);\n        });\n      }\n    }\n  }, {\n    key: \"hideStory\",\n    value: function hideStory(id) {\n      var index = this.state.stories.findIndex(function (item) {\n        return item.objectID === id;\n      });\n      this.setState(function (prevState, currentProps) {\n        var updatedStories = prevState.stories.splice(index, 1);\n        sessionStorage.setItem(\"stories\", JSON.stringify(prevState.stories));\n        return {\n          stories: prevState.stories\n        };\n      });\n      sessionStorage.removeItem(id);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this5 = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"story-board-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        style: {\n          width: \"-webkit-fill-available\"\n        },\n        className: \"stories-container width\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", {\n        className: \"story-board-header\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        key: \"head\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Comments\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Vote counts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"UpVote\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Name Details\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, this.state.stories && this.state.stories.map(function (story, index) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hackernews__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          key: index,\n          story: story,\n          hideStory: function hideStory() {\n            return _this5.hideStory(story.objectID);\n          }\n        });\n      }))), this.state.stories.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"more-stories\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        onClick: function onClick() {\n          return _this5.fetchPreviousResults();\n        }\n      }, \"Previous page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        onClick: function onClick() {\n          return _this5.fetchNextResults();\n        }\n      }, \"Next page\")) : null);\n    }\n  }]);\n\n  return StoryBoard;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoryBoard);\n\n//# sourceURL=webpack:///./src/public/components/HackerBoard.js?");

/***/ }),

/***/ "./src/public/components/Hackernews.js":
/*!*********************************************!*\
  !*** ./src/public/components/Hackernews.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/public/components/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Hackernews = function Hackernews(props) {\n  var story = props.story;\n  var objectID = story.objectID,\n      author = story.author,\n      title = story.title,\n      url = story.url,\n      createdAt = story.created_at,\n      likes = story.points,\n      totalComments = story.num_comments,\n      points = story.points;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(likes),\n      _useState2 = _slicedToArray(_useState, 2),\n      totalLikes = _useState2[0],\n      setLikes = _useState2[1];\n\n  totalLikes = sessionStorage.getItem(objectID) ? JSON.parse(sessionStorage.getItem(objectID)).likes : likes;\n  var domainName = url && new URL(url).hostname;\n  var date = new Date(createdAt).toDateString();\n\n  var upvote = function upvote(objectID, points) {\n    sessionStorage.setItem(objectID, JSON.stringify({\n      likes: points + 1\n    }));\n    setLikes(points + 1);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: \"story-row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, totalComments), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, totalLikes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"upvote-button\",\n    onClick: function onClick() {\n      return upvote(objectID, totalLikes);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-caret-up\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"sm-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"story-title\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"domain-name\"\n  }, \"(\", domainName, \")\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"author-name\"\n  }, \" by \", author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"date\"\n  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"hide-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"hide-story\",\n    onClick: props.hideStory\n  }, \"[ Hide ]\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hackernews);\n\n//# sourceURL=webpack:///./src/public/components/Hackernews.js?");

/***/ }),

/***/ "./src/public/components/index.css":
/*!*****************************************!*\
  !*** ./src/public/components/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/public/components/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/public/components/index.css?");

/***/ })

/******/ });