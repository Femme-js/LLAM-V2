webpackHotUpdate_N_E("pages/tracking",{

/***/ "./pages/tracking/index.js":
/*!*********************************!*\
  !*** ./pages/tracking/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jappanjeetsingh_Desktop_web_projects_LLAM_LLAM_V2_LLAM_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var _components_LottieAnimations_pageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LottieAnimations/pageLoader/PageLoader */ \"./components/LottieAnimations/pageLoader/PageLoader.js\");\n/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-gauge-chart */ \"./node_modules/react-gauge-chart/dist/index.js\");\n/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_gauge_chart__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Footer/Footer */ \"./components/UI/Footer/Footer.js\");\n/* harmony import */ var _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tracking.module.scss */ \"./pages/tracking/tracking.module.scss\");\n/* harmony import */ var _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tracking_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/jappanjeetsingh/Desktop/web/projects/LLAM/LLAM-V2/LLAM/pages/tracking/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jappanjeetsingh_Desktop_web_projects_LLAM_LLAM_V2_LLAM_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Tracking = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Tracking/Tracking */ \"./components/Tracking/Tracking.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../components/Tracking/Tracking */ \"./components/Tracking/Tracking.js\")];\n    },\n    modules: ['../../components/Tracking/Tracking']\n  }\n});\n_c2 = Tracking;\n\nvar Tracker = function Tracker() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      pageLoading = _useState[0],\n      setPageLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      longitude = _useState2[0],\n      setLongitude = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      latitude = _useState3[0],\n      setLatitude = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPageLoading(true);\n    setTimeout(function () {\n      setPageLoading(false);\n    }, 5000);\n  }, []);\n  var SEO = {\n    title: \"Locust Locator\",\n    description: \"track locusts here\",\n    openGraph: {\n      title: \"Locust Locator\",\n      description: \"track locusts here\"\n    }\n  };\n  var prevLat = usePrevious(latitude);\n  var prevLong = usePrevious(longitude);\n\n  var onFormSubmitHandler = function onFormSubmitHandler(event) {\n    event.preventDefault();\n    console.log(\"Longitude: \" + longitude);\n    console.log(\"Latitude: \" + latitude);\n    var lat = latitude;\n    var _long = longitude;\n\n    if (lat === \"\" && _long === \"\") {\n      setPredictedData({\n        risk: NaN\n      });\n    } else if (prevLat === lat && prevLong === _long) {\n      console.log(\"lat and long matched with prev values\");\n    } else {\n      var data = \"lat-\".concat(lat, \"-long-\").concat(_long);\n      setLoading(true);\n      axios.post(\"https://landcoverapi.azurewebsites.net/predict/\".concat(data)).then(function (response) {// plotPredictedPoint(longitude, latitude)\n      });\n    }\n  };\n\n  var onResetHandler = function onResetHandler(event) {\n    event.preventDefault(); // setDisplayMessage(\"\")\n\n    setLongitude(\"\");\n    setLatitude(\"\"); // setLoading(false)\n    // setPredictedData(null)\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"NextSeo\"], _objectSpread({}, SEO), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Tracking feature goes here!!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.MetricsContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Predict Probability of Locust Attack\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Form,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.FormEntity,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"longitude\",\n              children: \"longitude: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              name: \"long\",\n              value: longitude,\n              onChange: function onChange(e) {\n                return setLongitude(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.FormEntity,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"latitude\",\n              children: \"latitude: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              name: \"lat\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.ButtonsContainer,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              children: \"Predict\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              children: \"Reset\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.GuageContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_gauge_chart__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          id: \"gauge-chart2\",\n          nrOfLevels: 420,\n          arcsLength: [0.2, 0.5, 0.2],\n          colors: ['#5BE12C', '#F5CD19', '#EA4228'],\n          percent: 0.37,\n          arcPadding: 0.02\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tracker, \"Ar+goTOfcjRZ4FnyeOQMWHa2yvc=\", true);\n\n_c3 = Tracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tracker);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Tracking$dynamic\");\n$RefreshReg$(_c2, \"Tracking\");\n$RefreshReg$(_c3, \"Tracker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhY2tpbmcvaW5kZXguanM/NDQxOSJdLCJuYW1lcyI6WyJUcmFja2luZyIsImR5bmFtaWMiLCJzc3IiLCJUcmFja2VyIiwidXNlU3RhdGUiLCJwYWdlTG9hZGluZyIsInNldFBhZ2VMb2FkaW5nIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJzZXRMYXRpdHVkZSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3BlbkdyYXBoIiwicHJldkxhdCIsInVzZVByZXZpb3VzIiwicHJldkxvbmciLCJvbkZvcm1TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJsYXQiLCJsb25nIiwic2V0UHJlZGljdGVkRGF0YSIsInJpc2siLCJOYU4iLCJkYXRhIiwic2V0TG9hZGluZyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsIm9uUmVzZXRIYW5kbGVyIiwiY2xhc3NlcyIsIk1ldHJpY3NDb250YWluZXIiLCJDb250ZW50IiwiRm9ybSIsIkZvcm1FbnRpdHkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJCdXR0b25zQ29udGFpbmVyIiwiR3VhZ2VDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSw0SkFBTjtBQUFBLENBQUQsRUFBcUQ7QUFDekVDLEtBQUcsRUFBRSxLQURvRTtBQUFBO0FBQUE7QUFBQSxrQ0FBdkMsNkVBQXVDO0FBQUE7QUFBQSxjQUF2QyxvQ0FBdUM7QUFBQTtBQUFBLENBQXJELENBQXhCO01BQU1GLFE7O0FBSU4sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFB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O0FBQUE7QUFBQTtBQUFBLGVBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKLGVBMkNJLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQ0o7QUFBQSxrQkFESjtBQStDSCxDQXhHRDs7R0FBTTNDLE87O01BQUFBLE87QUEwR1NBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdHJhY2tpbmcvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIlxuaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG90dGllQW5pbWF0aW9ucy9wYWdlTG9hZGVyL1BhZ2VMb2FkZXJcIlxuaW1wb3J0IEdhdWdlQ2hhcnQgZnJvbSAncmVhY3QtZ2F1Z2UtY2hhcnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0Zvb3Rlci9Gb290ZXJcIlxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdHJhY2tpbmcubW9kdWxlLnNjc3NcIlxuXG5jb25zdCBUcmFja2luZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL1RyYWNraW5nL1RyYWNraW5nJyksIHtcbiAgICBzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IFRyYWNrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3BhZ2VMb2FkaW5nLCBzZXRQYWdlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRQYWdlTG9hZGluZyh0cnVlKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFBhZ2VMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9LCA1MDAwKTtcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IFNFTyA9IHtcbiAgICAgICAgdGl0bGU6IFwiTG9jdXN0IExvY2F0b3JcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwidHJhY2sgbG9jdXN0cyBoZXJlXCIsXG5cbiAgICAgICAgb3BlbkdyYXBoOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJMb2N1c3QgTG9jYXRvclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidHJhY2sgbG9jdXN0cyBoZXJlXCIsXG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgY29uc3QgcHJldkxhdCA9IHVzZVByZXZpb3VzKGxhdGl0dWRlKTtcbiAgICBjb25zdCBwcmV2TG9uZyA9IHVzZVByZXZpb3VzKGxvbmdpdHVkZSk7XG5cbiAgICBjb25zdCBvbkZvcm1TdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9uZ2l0dWRlOiBcIiArIGxvbmdpdHVkZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXRpdHVkZTogXCIgKyBsYXRpdHVkZSlcbiAgICAgICAgbGV0IGxhdCA9IGxhdGl0dWRlXG4gICAgICAgIGxldCBsb25nID0gbG9uZ2l0dWRlXG5cbiAgICAgICAgaWYgKGxhdCA9PT0gXCJcIiAmJiBsb25nID09PSBcIlwiKSB7XG4gICAgICAgICAgICBzZXRQcmVkaWN0ZWREYXRhKHsgcmlzazogTmFOIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJldkxhdCA9PT0gbGF0ICYmIHByZXZMb25nID09PSBsb25nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxhdCBhbmQgbG9uZyBtYXRjaGVkIHdpdGggcHJldiB2YWx1ZXNcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYGxhdC0ke2xhdH0tbG9uZy0ke2xvbmd9YFxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9sYW5kY292ZXJhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvcHJlZGljdC8ke2RhdGF9YClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBsb3RQcmVkaWN0ZWRQb2ludChsb25naXR1ZGUsIGxhdGl0dWRlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblJlc2V0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBzZXREaXNwbGF5TWVzc2FnZShcIlwiKVxuICAgICAgICBzZXRMb25naXR1ZGUoXCJcIilcbiAgICAgICAgc2V0TGF0aXR1ZGUoXCJcIilcbiAgICAgICAgLy8gc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgLy8gc2V0UHJlZGljdGVkRGF0YShudWxsKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmV4dFNlbyB7Li4uU0VPfSAvPlxuICAgICAgICAgICAgey8qIHtwYWdlTG9hZGluZyA/XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGluZy1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VMb2FkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgZm9udFNpemU6IFwiY2FsYyg4cHggKyAwLjh2dylcIiwgY29sb3I6IFwicmdiKDIyOCwgMjI3LCAyMjcpXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5EaXNjbGFpbWVyOiBUbyBnZXQgdGhlIGJlc3QgZ3B1IHBlcmZvcm1hbmNlIHVzZSB0aGUgZGVza3RvcCBhcHAuPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBudWxsfSAqL31cbiAgICAgICAgICAgIHsvKiA8VHJhY2tpbmcgLz4gKi99XG4gICAgICAgICAgICA8aDE+VHJhY2tpbmcgZmVhdHVyZSBnb2VzIGhlcmUhITwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5NZXRyaWNzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Db250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlByZWRpY3QgUHJvYmFiaWxpdHkgb2YgTG9jdXN0IEF0dGFjazwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybUVudGl0eX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb25naXR1ZGVcIj5sb25naXR1ZGU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxvbmdcIiB2YWx1ZT17bG9uZ2l0dWRlfSBvbkNoYW5nZT17KGUpID0+IHNldExvbmdpdHVkZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkZvcm1FbnRpdHl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGF0aXR1ZGVcIj5sYXRpdHVkZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGF0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuQnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5QcmVkaWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuR3VhZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8R2F1Z2VDaGFydCBpZD1cImdhdWdlLWNoYXJ0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuck9mTGV2ZWxzPXs0MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmNzTGVuZ3RoPXtbMC4yLCAwLjUsIDAuMl19XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM9e1snIzVCRTEyQycsICcjRjVDRDE5JywgJyNFQTQyMjgnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9ezAuMzd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmNQYWRkaW5nPXswLjAyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tracking/index.js\n");

/***/ })

})