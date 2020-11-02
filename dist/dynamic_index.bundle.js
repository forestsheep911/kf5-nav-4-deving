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
/******/ 		"dynamic_index": 0
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
/******/ 	deferredModules.push(["./src/dynamic_index/index.js","react_main","vendor_libarys"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dynamic_index/css/dynamic_index_style.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dynamic_index/css/dynamic_index_style.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\r\\nhtml{scroll-behavior:smooth;}\\r\\n\\r\\n\\r\\n.dynamic_index_root {\\r\\n  position: fixed;\\r\\n  margin: auto;\\r\\n  right: 0;\\r\\n  top: 80px;\\r\\n  bottom: 0;\\r\\n  /* max-height: 80%; */\\r\\n  display: flex;\\r\\n  overflow: hidden;\\r\\n  background-color: #fdfdfd;\\r\\n  opacity: 0.8;\\r\\n  border-top-left-radius: 5px;\\r\\n  border-bottom-left-radius: 5px;\\r\\n}\\r\\n\\r\\n@media (max-width:1380px){\\r\\n  .dynamic_index_root {\\r\\n    display:none;\\r\\n  }\\r\\n}\\r\\n.dynamic_index_ul {\\r\\n  width: 20px;\\r\\n  z-index: 1200;\\r\\n  padding: 0px;\\r\\n  overflow: hidden;\\r\\n  transition: width 0.35s;\\r\\n  -webkit-transition: width 0.35s;\\r\\n}\\r\\n\\r\\n.dynamic_index_ul_expand {\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.dynamic_index_li {\\r\\n  display: flex;\\r\\n  line-height: 24px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.dynamic_index_li a{\\r\\n  display: inline-block;\\r\\n  flex: 1 1 auto;\\r\\n  -webkit-box-flex: 1 1 auto;\\r\\n  opacity: 0;\\r\\n  color: #8a8a8a;\\r\\n  font-size: 12px;\\r\\n  text-decoration: none;\\r\\n  overflow: hidden;\\r\\n\\ttext-overflow: ellipsis;\\r\\n  white-space: nowrap;\\r\\n}\\r\\n\\r\\n.dynamic_index_li a:hover {\\r\\n  color: #000000;\\r\\n}\\r\\n\\r\\n.dynamic_index_li a:active {\\r\\n  color: #8a8a8a;\\r\\n}\\r\\n\\r\\n.dynamic_index_li:before {\\r\\n  content: \\\"\\\";\\r\\n  flex: 0 0 auto;\\r\\n  -webkit-box-flex: 0 0 auto;\\r\\n  height: 2px;\\r\\n  width: 15px;\\r\\n  margin-left: 5px;\\r\\n  background: #d8d8d8;\\r\\n  position: absolute;\\r\\n}\\r\\n\\r\\n.dynamic_index_li_expand {\\r\\n  display: flex;\\r\\n  margin-bottom: 8px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.dynamic_index_ul_expand a{\\r\\n  opacity: 1;\\r\\n  transition:opacity 0.35s;\\r\\n  -webkit-transition: opacity 0.35s; \\r\\n}\\r\\n\\r\\n.dynamic_index_ul_expand:before {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.dynamic_index_li_secondleve {\\r\\n  padding-left: 15px;\\r\\n}\\r\\n\\r\\n.dynamic_index_li_selected:before {\\r\\n  height: 2px;\\r\\n  width: 20px;\\r\\n  margin-left: 0;\\r\\n  background: #000000;\\r\\n}\\r\\n\\r\\n.dynamic_index_li_selected a{\\r\\n  color: #000000;\\r\\n}\\r\\n\\r\\n\\r\\n.cus_h {\\r\\n  position: relative;\\r\\n  z-index: -1;\\r\\n}\\r\\n\\r\\n.cus_h:before {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  height: 70px;\\r\\n  margin-top: -70px;\\r\\n  visibility: hidden;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/dynamic_index/css/dynamic_index_style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/dynamic_index/components/DynamicIndex.js":
/*!******************************************************!*\
  !*** ./src/dynamic_index/components/DynamicIndex.js ***!
  \******************************************************/
/*! exports provided: DynamicIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DynamicIndex\", function() { return DynamicIndex; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/util.js */ \"./src/util/util.js\");\n\n\n\nvar dynamicIndexObject = [];\nvar dynamicIndexPosition = {\n  position: 0\n};\nfunction DynamicIndex() {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState, 2),\n      expand = _React$useState2[0],\n      setExpand = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState4 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState3, 2),\n      dynamicIndex = _React$useState4[0],\n      updateIndex = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState6 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState5, 2),\n      positionD = _React$useState6[0],\n      updatePosition = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState8 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState7, 2),\n      isInit = _React$useState8[0],\n      setInit = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState10 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_React$useState9, 2),\n      isAdjust = _React$useState10[0],\n      finishAdjust = _React$useState10[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    if (!isInit) {\n      return;\n    }\n\n    var scrollFun = Object(_util_util_js__WEBPACK_IMPORTED_MODULE_2__[\"throttle\"])(drawProfileIndex, 100);\n    window.addEventListener('scroll', scrollFun);\n    initDynamicIndex();\n    setInit(false);\n  });\n\n  var drawProfileIndex = function drawProfileIndex() {\n    dynamicIndexObject.map(function (item, idx) {\n      var current_page_TY = typeof window.scrollY === 'undefined' ? document.documentElement.scrollTop : window.scrollY;\n      var refer_v_p = current_page_TY - dynamicIndexObject[dynamicIndexPosition.position].elm.offsetTop;\n      var refer_v_n = current_page_TY - item.elm.offsetTop;\n\n      if (refer_v_n <= 0 && refer_v_p <= 0 || refer_v_n > 0 && refer_v_p > 0) {\n        return;\n      }\n\n      if (Math.abs(refer_v_p) > Math.abs(refer_v_n)) {\n        dynamicIndexPosition.position = idx;\n        updatePosition(idx);\n        return;\n      }\n    });\n  };\n\n  var initDynamicIndex = function initDynamicIndex() {\n    var h1 = document.createElement('h1').nodeName;\n    var h2 = document.createElement('h2').nodeName;\n    var h3 = document.createElement('h3').nodeName;\n    var original_content = jQuery('.original-content').children();\n    original_content.map(function (idx) {\n      var elm_dom_obj = original_content.get(idx);\n\n      if (elm_dom_obj.nodeName === h1 || elm_dom_obj.nodeName === h2 || elm_dom_obj.nodeName === h3) {\n        var index_item = {};\n\n        if (elm_dom_obj.getAttribute('id') !== null && elm_dom_obj.getAttribute('id').length > 0) {\n          index_item.id = elm_dom_obj.getAttribute('id');\n        } else {\n          index_item.id = 'dynamicidx' + idx;\n          elm_dom_obj.setAttribute('id', 'dynamicidx' + idx);\n        }\n\n        elm_dom_obj.classList.add('cus_h');\n        elm_dom_obj.style.backgroundPositionY = '70px';\n        index_item.title = elm_dom_obj.innerText;\n        index_item.second_level = elm_dom_obj.nodeName === h3 ? true : false;\n        index_item.elm = elm_dom_obj;\n        dynamicIndexObject.push(index_item);\n      }\n    });\n    updateIndex(dynamicIndexObject);\n  };\n\n  var expandIndex = function expandIndex() {\n    if (!isAdjust) {\n      var new_dynamic_index = [];\n      var is_need_adjust = false;\n      dynamicIndexObject.map(function (item, idx) {\n        var index_item = item;\n\n        if (item.id !== item.elm.getAttribute('id')) {\n          index_item.id = item.elm.getAttribute('id');\n          is_need_adjust = true;\n        }\n\n        new_dynamic_index.push(index_item);\n      });\n      finishAdjust(true);\n\n      if (is_need_adjust) {\n        updateIndex(new_dynamic_index);\n      }\n    }\n\n    setExpand(true);\n  };\n\n  var closeIndex = function closeIndex() {\n    setExpand(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"dynamic_index_root\",\n    onMouseOver: function onMouseOver() {\n      return expandIndex();\n    },\n    onMouseOut: function onMouseOut() {\n      return closeIndex();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    className: \"dynamic_index_ul  \".concat(expand ? 'dynamic_index_ul_expand' : '')\n  }, dynamicIndex.map(function (item, idx) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n      key: idx,\n      id: item.id,\n      className: \"dynamic_index_li \".concat(expand ? 'dynamic_index_ul_expand' : '', \" \").concat(expand & item.second_level ? 'dynamic_index_li_secondleve' : '', \" \").concat(positionD === idx ? 'dynamic_index_li_selected' : ''),\n      onMouseEnter: function onMouseEnter() {\n        return expandIndex();\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      href: '#' + item.id\n    }, item.title));\n  })));\n}\n\n//# sourceURL=webpack:///./src/dynamic_index/components/DynamicIndex.js?");

/***/ }),

/***/ "./src/dynamic_index/css/dynamic_index_style.css":
/*!*******************************************************!*\
  !*** ./src/dynamic_index/css/dynamic_index_style.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./dynamic_index_style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/dynamic_index/css/dynamic_index_style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/dynamic_index/css/dynamic_index_style.css?");

/***/ }),

/***/ "./src/dynamic_index/index.js":
/*!************************************!*\
  !*** ./src/dynamic_index/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_es_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es/map */ \"./node_modules/core-js/es/map/index.js\");\n/* harmony import */ var core_js_es_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_es_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es/set */ \"./node_modules/core-js/es/set/index.js\");\n/* harmony import */ var core_js_es_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es_set__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_dynamic_index_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/dynamic_index_style.css */ \"./src/dynamic_index/css/dynamic_index_style.css\");\n/* harmony import */ var _css_dynamic_index_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_dynamic_index_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_DynamicIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DynamicIndex.js */ \"./src/dynamic_index/components/DynamicIndex.js\");\n\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_DynamicIndex_js__WEBPACK_IMPORTED_MODULE_5__[\"DynamicIndex\"], null), document.getElementById('dynamic_index'));\n\n//# sourceURL=webpack:///./src/dynamic_index/index.js?");

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ \"./node_modules/@babel/runtime-corejs2/core-js/date/now.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\r\n * \r\n * @param {function} fn \r\n * @param {munber} wait \r\n */\nvar throttle = function throttle(fn, wait) {\n  var last = 0;\n  return function () {\n    var now = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();\n\n    if (now - last > wait) {\n      fn.apply(this, arguments);\n      last = now;\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/util/util.js?");

/***/ })

/******/ });