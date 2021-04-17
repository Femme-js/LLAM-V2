webpackHotUpdate_N_E("pages/tracking",{

/***/ "./pages/tracking/index.js":
/*!*********************************!*\
  !*** ./pages/tracking/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jappanjeetsingh_Desktop_web_projects_LLAM_LLAM_V2_LLAM_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_LottieAnimations_pageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LottieAnimations/pageLoader/PageLoader */ \"./components/LottieAnimations/pageLoader/PageLoader.js\");\n/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-gauge-chart */ \"./node_modules/react-gauge-chart/dist/index.js\");\n/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_gauge_chart__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/Footer/Footer */ \"./components/UI/Footer/Footer.js\");\n/* harmony import */ var _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tracking.module.scss */ \"./pages/tracking/tracking.module.scss\");\n/* harmony import */ var _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tracking_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/Users/jappanjeetsingh/Desktop/web/projects/LLAM/LLAM-V2/LLAM/pages/tracking/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jappanjeetsingh_Desktop_web_projects_LLAM_LLAM_V2_LLAM_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Tracking = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Tracking/Tracking */ \"./components/Tracking/Tracking.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../components/Tracking/Tracking */ \"./components/Tracking/Tracking.js\")];\n    },\n    modules: ['../../components/Tracking/Tracking']\n  }\n});\n_c2 = Tracking;\n\nvar Tracker = function Tracker() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      pageLoading = _useState[0],\n      setPageLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      longitude = _useState2[0],\n      setLongitude = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      latitude = _useState3[0],\n      setLatitude = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      predictedData = _useState4[0],\n      setPredicitedData = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPageLoading(true);\n    setTimeout(function () {\n      setPageLoading(false);\n    }, 5000);\n  }, []);\n  var SEO = {\n    title: \"Locust Locator\",\n    description: \"track locusts here\",\n    openGraph: {\n      title: \"Locust Locator\",\n      description: \"track locusts here\"\n    }\n  }; // const prevLat = usePrevious(latitude);\n  // const prevLong = usePrevious(longitude);\n  // const usePrevious = (value) => {\n  //     console.log(value)\n  //     const ref = useRef();\n  //     useEffect(() => {\n  //         ref.current = value;\n  //     return ref.current;\n  // }\n\n  var onFormSubmitHandler = function onFormSubmitHandler(event) {\n    event.preventDefault();\n    console.log(\"Longitude: \" + longitude);\n    console.log(\"Latitude: \" + latitude);\n    var lat = latitude;\n    var _long = longitude; // if (lat === \"\" && long === \"\") {\n    //     setPredictedData({ risk: NaN })\n    // }\n    // else if (prevLat === lat && prevLong === long) {\n    //     console.log(\"lat and long matched with prev values\")\n    // }\n    // else {\n\n    var data = \"lat-\".concat(lat, \"-long-\").concat(_long); // setLoading(true)\n\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://landcoverapi.azurewebsites.net/predict/\".concat(data)).then(function (response) {\n      // plotPredictedPoint(longitude, latitude)\n      setPredicitedData(response.data.risk.toFixed(2));\n      console.log(response.data);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  }; // }\n\n\n  var onResetHandler = function onResetHandler(event) {\n    event.preventDefault(); // setDisplayMessage(\"\")\n\n    setLongitude(\"\");\n    setLatitude(\"\"); // setLoading(false)\n    // setPredictedData(null)\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"NextSeo\"], _objectSpread({}, SEO), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Tracking feature goes here!!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.MetricsContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.Content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Predict Probability of Locust Attack\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.Form,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.FormEntity,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"longitude\",\n              children: \"longitude: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              name: \"long\",\n              value: longitude,\n              onChange: function onChange(e) {\n                return setLongitude(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.FormEntity,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"latitude\",\n              children: \"latitude: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              name: \"lat\",\n              value: latitude,\n              onChange: function onChange(e) {\n                return setLatitude(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.ButtonsContainer,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: onFormSubmitHandler,\n              children: \"Predict\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: onResetHandler,\n              children: \"Reset\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.GuageContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_gauge_chart__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          id: \"gauge-chart2\",\n          nrOfLevels: 420,\n          arcsLength: [0.2, 0.5, 0.2],\n          colors: ['#5BE12C', '#F5CD19', '#EA4228'],\n          percent: predictedData,\n          arcPadding: 0.02\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tracker, \"/HQRyz1L0nN/nRrVcud3jVu2xe4=\");\n\n_c3 = Tracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tracker);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Tracking$dynamic\");\n$RefreshReg$(_c2, \"Tracking\");\n$RefreshReg$(_c3, \"Tracker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhY2tpbmcvaW5kZXguanM/NDQxOSJdLCJuYW1lcyI6WyJUcmFja2luZyIsImR5bmFtaWMiLCJzc3IiLCJUcmFja2VyIiwidXNlU3RhdGUiLCJwYWdlTG9hZGluZyIsInNldFBhZ2VMb2FkaW5nIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJzZXRMYXRpdHVkZSIsInByZWRpY3RlZERhdGEiLCJzZXRQcmVkaWNpdGVkRGF0YSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3BlbkdyYXBoIiwib25Gb3JtU3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibGF0IiwibG9uZyIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJyaXNrIiwidG9GaXhlZCIsImVycm9yIiwib25SZXNldEhhbmRsZXIiLCJjbGFzc2VzIiwiTWV0cmljc0NvbnRhaW5lciIsIkNvbnRlbnQiLCJGb3JtIiwiRm9ybUVudGl0eSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkJ1dHRvbnNDb250YWluZXIiLCJHdWFnZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSw0SkFBTjtBQUFBLENBQUQsRUFBcUQ7QUFDekVDLEtBQUcsRUFBRSxLQURvRTtBQUFBO0FBQUE7QUFBQSxrQ0FBdkMsNkVBQXVDO0FBQUE7QUFBQSxjQUF2QyxvQ0FBdUM7QUFBQTtBQUFBLENBQXJELENBQXhCO01BQU1GLFE7O0FBSU4sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNvQkMsc0RBQVEsQ0FBQyxLQUFELENBRDVCO0FBQUEsTUFDWEMsV0FEVztBQUFBLE1BQ0VDLGNBREY7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUVYRyxTQUZXO0FBQUEsTUFFQUMsWUFGQTs7QUFBQSxtQkFHY0osc0RBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHWEssUUFIVztBQUFBLE1BR0RDLFdBSEM7O0FBQUEsbUJBSXlCTixzREFBUSxDQUFDLElBQUQsQ0FKakM7QUFBQSxNQUlYTyxhQUpXO0FBQUEsTUFJSUMsaUJBSko7O0FBTWxCQyx5REFBUyxDQUFDLFlBQU07QUFDWlAsa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQVEsY0FBVSxDQUFDLFlBQU07QUFDYlIsb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLE1BQU1TLEdBQUcsR0FBRztBQUNSQyxTQUFLLEVBQUUsZ0JBREM7QUFFUkMsZUFBVyxFQUFFLG9CQUZMO0FBSVJDLGFBQVMsRUFBRTtBQUNQRixXQUFLLEVBQUUsZ0JBREE7QUFFUEMsaUJBQVcsRUFBRTtBQUZOO0FBSkgsR0FBWixDQWJrQixDQXVCbEI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ25DQSxTQUFLLENBQUNDLGNBQU47QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQWdCaEIsU0FBNUI7QUFDQWUsV0FBTyxDQUFDQyxHQUFSLENBQVksZUFBZWQsUUFBM0I7QUFDQSxRQUFJZSxHQUFHLEdBQUdmLFFBQVY7QUFDQSxRQUFJZ0IsS0FBSSxHQUFHbEIsU0FBWCxDQUxtQyxDQU9uQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJbUIsSUFBSSxpQkFBVUYsR0FBVixtQkFBc0JDLEtBQXRCLENBQVIsQ0FkbUMsQ0FlbkM7O0FBQ0FFLGdEQUFLLENBQUNDLElBQU4sMERBQTZERixJQUE3RCxHQUNLRyxJQURMLENBQ1UsVUFBQUMsUUFBUSxFQUFJO0FBQ2Q7QUFDQWxCLHVCQUFpQixDQUFDa0IsUUFBUSxDQUFDSixJQUFULENBQWNLLElBQWQsQ0FBbUJDLE9BQW5CLENBQTJCLENBQTNCLENBQUQsQ0FBakI7QUFDQVYsYUFBTyxDQUFDQyxHQUFSLENBQVlPLFFBQVEsQ0FBQ0osSUFBckI7QUFDSCxLQUxMLFdBTVcsVUFBQU8sS0FBSyxFQUFJO0FBQ1pYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVSxLQUFaO0FBQ0gsS0FSTDtBQVNILEdBekJELENBbENrQixDQTREbEI7OztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2QsS0FBRCxFQUFXO0FBQzlCQSxTQUFLLENBQUNDLGNBQU4sR0FEOEIsQ0FFOUI7O0FBQ0FiLGdCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0FFLGVBQVcsQ0FBQyxFQUFELENBQVgsQ0FKOEIsQ0FLOUI7QUFDQTtBQUNILEdBUEQ7O0FBU0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRCxvQkFBYUssR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKLGVBY0k7QUFBSyxlQUFTLEVBQUVvQiw0REFBTyxDQUFDQyxnQkFBeEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVELDREQUFPLENBQUNFLE9BQXhCO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLG1CQUFTLEVBQUVGLDREQUFPLENBQUNHLElBQXhCO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFSCw0REFBTyxDQUFDSSxVQUF4QjtBQUFBLG9DQUNJO0FBQU8scUJBQU8sRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQUksRUFBQyxNQUF4QjtBQUErQixtQkFBSyxFQUFFaEMsU0FBdEM7QUFBaUQsc0JBQVEsRUFBRSxrQkFBQ2lDLENBQUQ7QUFBQSx1QkFBT2hDLFlBQVksQ0FBQ2dDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQW5CO0FBQUE7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFLSTtBQUFLLHFCQUFTLEVBQUVQLDREQUFPLENBQUNJLFVBQXhCO0FBQUEsb0NBQ0k7QUFBTyxxQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFPLGtCQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBSSxFQUFDLEtBQXhCO0FBQThCLG1CQUFLLEVBQUU5QixRQUFyQztBQUErQyxzQkFBUSxFQUFFLGtCQUFDK0IsQ0FBRDtBQUFBLHVCQUFPOUIsV0FBVyxDQUFDOEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixlQVNJO0FBQUsscUJBQVMsRUFBRVAsNERBQU8sQ0FBQ1EsZ0JBQXhCO0FBQUEsb0NBQ0k7QUFBUSxxQkFBTyxFQUFFeEIsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBUSxxQkFBTyxFQUFFZSxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBbUJJO0FBQUssaUJBQVMsRUFBRUMsNERBQU8sQ0FBQ1MsY0FBeEI7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFZLFlBQUUsRUFBQyxjQUFmO0FBQ0ksb0JBQVUsRUFBRSxHQURoQjtBQUVJLG9CQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FGaEI7QUFHSSxnQkFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FIWjtBQUlJLGlCQUFPLEVBQUVqQyxhQUpiO0FBS0ksb0JBQVUsRUFBRTtBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSixlQTJDSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0NKO0FBQUEsa0JBREo7QUErQ0gsQ0F0SEQ7O0dBQU1SLE87O01BQUFBLE87QUF3SFNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdHJhY2tpbmcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgUGFnZUxvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb3R0aWVBbmltYXRpb25zL3BhZ2VMb2FkZXIvUGFnZUxvYWRlclwiXG5pbXBvcnQgR2F1Z2VDaGFydCBmcm9tICdyZWFjdC1nYXVnZS1jaGFydCdcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvRm9vdGVyL0Zvb3RlclwiXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi90cmFja2luZy5tb2R1bGUuc2Nzc1wiXG5cbmNvbnN0IFRyYWNraW5nID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvVHJhY2tpbmcvVHJhY2tpbmcnKSwge1xuICAgIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgVHJhY2tlciA9ICgpID0+IHtcbiAgICBjb25zdCBbcGFnZUxvYWRpbmcsIHNldFBhZ2VMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtsb25naXR1ZGUsIHNldExvbmdpdHVkZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtsYXRpdHVkZSwgc2V0TGF0aXR1ZGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcHJlZGljdGVkRGF0YSwgc2V0UHJlZGljaXRlZERhdGFdID0gdXNlU3RhdGUobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFBhZ2VMb2FkaW5nKHRydWUpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0UGFnZUxvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0sIDUwMDApO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgU0VPID0ge1xuICAgICAgICB0aXRsZTogXCJMb2N1c3QgTG9jYXRvclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ0cmFjayBsb2N1c3RzIGhlcmVcIixcblxuICAgICAgICBvcGVuR3JhcGg6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvY3VzdCBMb2NhdG9yXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0cmFjayBsb2N1c3RzIGhlcmVcIixcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBjb25zdCBwcmV2TGF0ID0gdXNlUHJldmlvdXMobGF0aXR1ZGUpO1xuICAgIC8vIGNvbnN0IHByZXZMb25nID0gdXNlUHJldmlvdXMobG9uZ2l0dWRlKTtcblxuICAgIC8vIGNvbnN0IHVzZVByZXZpb3VzID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgIC8vICAgICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgICAvLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgLy8gICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBvbkZvcm1TdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9uZ2l0dWRlOiBcIiArIGxvbmdpdHVkZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXRpdHVkZTogXCIgKyBsYXRpdHVkZSlcbiAgICAgICAgbGV0IGxhdCA9IGxhdGl0dWRlXG4gICAgICAgIGxldCBsb25nID0gbG9uZ2l0dWRlXG5cbiAgICAgICAgLy8gaWYgKGxhdCA9PT0gXCJcIiAmJiBsb25nID09PSBcIlwiKSB7XG4gICAgICAgIC8vICAgICBzZXRQcmVkaWN0ZWREYXRhKHsgcmlzazogTmFOIH0pXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAocHJldkxhdCA9PT0gbGF0ICYmIHByZXZMb25nID09PSBsb25nKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImxhdCBhbmQgbG9uZyBtYXRjaGVkIHdpdGggcHJldiB2YWx1ZXNcIilcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgbGV0IGRhdGEgPSBgbGF0LSR7bGF0fS1sb25nLSR7bG9uZ31gXG4gICAgICAgIC8vIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9sYW5kY292ZXJhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvcHJlZGljdC8ke2RhdGF9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBwbG90UHJlZGljdGVkUG9pbnQobG9uZ2l0dWRlLCBsYXRpdHVkZSlcbiAgICAgICAgICAgICAgICBzZXRQcmVkaWNpdGVkRGF0YShyZXNwb25zZS5kYXRhLnJpc2sudG9GaXhlZCgyKSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICAvLyB9XG5cbiAgICBjb25zdCBvblJlc2V0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBzZXREaXNwbGF5TWVzc2FnZShcIlwiKVxuICAgICAgICBzZXRMb25naXR1ZGUoXCJcIilcbiAgICAgICAgc2V0TGF0aXR1ZGUoXCJcIilcbiAgICAgICAgLy8gc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgLy8gc2V0UHJlZGljdGVkRGF0YShudWxsKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmV4dFNlbyB7Li4uU0VPfSAvPlxuICAgICAgICAgICAgey8qIHtwYWdlTG9hZGluZyA/XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiY2FsYyg4cHggKyAwLjh2dylcIiwgY29sb3I6IFwicmdiKDIyOCwgMjI3LCAyMjcpXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5EaXNjbGFpbWVyOiBUbyBnZXQgdGhlIGJlc3QgZ3B1IHBlcmZvcm1hbmNlIHVzZSB0aGUgZGVza3RvcCBhcHAuPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBudWxsfSAqL31cbiAgICAgICAgICAgIHsvKiA8VHJhY2tpbmcgLz4gKi99XG4gICAgICAgICAgICA8aDE+VHJhY2tpbmcgZmVhdHVyZSBnb2VzIGhlcmUhITwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5NZXRyaWNzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Db250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlByZWRpY3QgUHJvYmFiaWxpdHkgb2YgTG9jdXN0IEF0dGFjazwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybUVudGl0eX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb25naXR1ZGVcIj5sb25naXR1ZGU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxvbmdcIiB2YWx1ZT17bG9uZ2l0dWRlfSBvbkNoYW5nZT17KGUpID0+IHNldExvbmdpdHVkZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1FbnRpdHl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGF0aXR1ZGVcIj5sYXRpdHVkZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGF0XCIgdmFsdWU9e2xhdGl0dWRlfSBvbkNoYW5nZT17KGUpID0+IHNldExhdGl0dWRlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkZvcm1TdWJtaXRIYW5kbGVyfT5QcmVkaWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblJlc2V0SGFuZGxlcn0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkd1YWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPEdhdWdlQ2hhcnQgaWQ9XCJnYXVnZS1jaGFydDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbnJPZkxldmVscz17NDIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJjc0xlbmd0aD17WzAuMiwgMC41LCAwLjJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzPXtbJyM1QkUxMkMnLCAnI0Y1Q0QxOScsICcjRUE0MjI4J119XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50PXtwcmVkaWN0ZWREYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJjUGFkZGluZz17MC4wMn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tracking/index.js\n");

/***/ })

})