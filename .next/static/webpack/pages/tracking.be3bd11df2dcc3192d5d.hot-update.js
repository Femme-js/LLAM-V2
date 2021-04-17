webpackHotUpdate_N_E("pages/tracking",{

/***/ "./pages/tracking/index.js":
/*!*********************************!*\
  !*** ./pages/tracking/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jappanjeetsingh_Desktop_web_projects_LLAM_LLAM_V2_LLAM_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var _components_LottieAnimations_pageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LottieAnimations/pageLoader/PageLoader */ \"./components/LottieAnimations/pageLoader/PageLoader.js\");\n/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-gauge-chart */ \"./node_modules/react-gauge-chart/dist/index.js\");\n/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_gauge_chart__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UI/Footer/Footer */ \"./components/UI/Footer/Footer.js\");\n/* harmony import */ var _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tracking.module.scss */ \"./pages/tracking/tracking.module.scss\");\n/* harmony import */ var _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tracking_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/jappanjeetsingh/Desktop/web/projects/LLAM/LLAM-V2/LLAM/pages/tracking/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jappanjeetsingh_Desktop_web_projects_LLAM_LLAM_V2_LLAM_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Tracking = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Tracking/Tracking */ \"./components/Tracking/Tracking.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../components/Tracking/Tracking */ \"./components/Tracking/Tracking.js\")];\n    },\n    modules: ['../../components/Tracking/Tracking']\n  }\n});\n_c2 = Tracking;\n\nvar Tracker = function Tracker() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      pageLoading = _useState[0],\n      setPageLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      longitude = _useState2[0],\n      setLongitude = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      latitude = _useState3[0],\n      setLatitude = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPageLoading(true);\n    setTimeout(function () {\n      setPageLoading(false);\n    }, 5000);\n  }, []);\n  var SEO = {\n    title: \"Locust Locator\",\n    description: \"track locusts here\",\n    openGraph: {\n      title: \"Locust Locator\",\n      description: \"track locusts here\"\n    }\n  };\n  var prevLat = usePrevious(latitude);\n  var prevLong = usePrevious(longitude);\n\n  var onFormSubmitHandler = function onFormSubmitHandler(event) {\n    event.preventDefault();\n    console.log(\"Longitude: \" + longitude);\n    console.log(\"Latitude: \" + latitude);\n    var lat = latitude;\n    var _long = longitude;\n\n    if (lat === \"\" && _long === \"\") {\n      setPredictedData({\n        risk: NaN\n      });\n    } else if (prevLat === lat && prevLong === _long) {\n      console.log(\"lat and long matched with prev values\");\n    } else {\n      var data = \"lat-\".concat(lat, \"-long-\").concat(_long);\n      setLoading(true);\n      axios.post(\"https://landcoverapi.azurewebsites.net/predict/\".concat(data)).then(function (response) {// plotPredictedPoint(longitude, latitude)\n      });\n    }\n  };\n\n  var onResetHandler = function onResetHandler(event) {\n    event.preventDefault(); // setDisplayMessage(\"\")\n\n    setLongitude(\"\");\n    setLatitude(\"\"); // setLoading(false)\n    // setPredictedData(null)\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"NextSeo\"], _objectSpread({}, SEO), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Tracking feature goes here!!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.MetricsContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Predict Probability of Locust Attack\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Form,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.FormEntity,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"longitude\",\n              children: \"longitude: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              name: \"long\",\n              value: longitude,\n              onChange: function onChange(e) {\n                return setLongitude(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.FormEntity,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"latitude\",\n              children: \"latitude: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              name: \"lat\",\n              value: latitude,\n              onChange: function onChange(e) {\n                return setLatitude(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.ButtonsContainer,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: onFormSubmitHandler,\n              children: \"Predict\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: onResetHandler,\n              children: \"Reset\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.GuageContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_gauge_chart__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          id: \"gauge-chart2\",\n          nrOfLevels: 420,\n          arcsLength: [0.2, 0.5, 0.2],\n          colors: ['#5BE12C', '#F5CD19', '#EA4228'],\n          percent: 0.37,\n          arcPadding: 0.02\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tracker, \"Ar+goTOfcjRZ4FnyeOQMWHa2yvc=\", true);\n\n_c3 = Tracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tracker);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Tracking$dynamic\");\n$RefreshReg$(_c2, \"Tracking\");\n$RefreshReg$(_c3, \"Tracker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhY2tpbmcvaW5kZXguanM/NDQxOSJdLCJuYW1lcyI6WyJUcmFja2luZyIsImR5bmFtaWMiLCJzc3IiLCJUcmFja2VyIiwidXNlU3RhdGUiLCJwYWdlTG9hZGluZyIsInNldFBhZ2VMb2FkaW5nIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJzZXRMYXRpdHVkZSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJTRU8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3BlbkdyYXBoIiwicHJldkxhdCIsInVzZVByZXZpb3VzIiwicHJldkxvbmciLCJvbkZvcm1TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJsYXQiLCJsb25nIiwic2V0UHJlZGljdGVkRGF0YSIsInJpc2siLCJOYU4iLCJkYXRhIiwic2V0TG9hZGluZyIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsIm9uUmVzZXRIYW5kbGVyIiwiY2xhc3NlcyIsIk1ldHJpY3NDb250YWluZXIiLCJDb250ZW50IiwiRm9ybSIsIkZvcm1FbnRpdHkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJCdXR0b25zQ29udGFpbmVyIiwiR3VhZ2VDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSw0SkFBTjtBQUFBLENBQUQsRUFBcUQ7QUFDekVDLEtBQUcsRUFBRSxLQURvRTtBQUFBO0FBQUE7QUFBQSxrQ0FBdkMsNkVBQXVDO0FBQUE7QUFBQSxjQUF2QyxvQ0FBdUM7QUFBQTtBQUFBLENBQXJELENBQXhCO01BQU1GLFE7O0FBSU4sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFB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LG9CQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FGaEI7QUFHSSxnQkFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FIWjtBQUlJLGlCQUFPLEVBQUUsSUFKYjtBQUtJLG9CQUFVLEVBQUU7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEosZUEyQ0kscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNDSjtBQUFBLGtCQURKO0FBK0NILENBeEdEOztHQUFNM0MsTzs7TUFBQUEsTztBQTBHU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy90cmFja2luZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiXG5pbXBvcnQgUGFnZUxvYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb3R0aWVBbmltYXRpb25zL3BhZ2VMb2FkZXIvUGFnZUxvYWRlclwiXG5pbXBvcnQgR2F1Z2VDaGFydCBmcm9tICdyZWFjdC1nYXVnZS1jaGFydCdcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvRm9vdGVyL0Zvb3RlclwiXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi90cmFja2luZy5tb2R1bGUuc2Nzc1wiXG5cbmNvbnN0IFRyYWNraW5nID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvVHJhY2tpbmcvVHJhY2tpbmcnKSwge1xuICAgIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgVHJhY2tlciA9ICgpID0+IHtcbiAgICBjb25zdCBbcGFnZUxvYWRpbmcsIHNldFBhZ2VMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtsb25naXR1ZGUsIHNldExvbmdpdHVkZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtsYXRpdHVkZSwgc2V0TGF0aXR1ZGVdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFBhZ2VMb2FkaW5nKHRydWUpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0UGFnZUxvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0sIDUwMDApO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgU0VPID0ge1xuICAgICAgICB0aXRsZTogXCJMb2N1c3QgTG9jYXRvclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ0cmFjayBsb2N1c3RzIGhlcmVcIixcblxuICAgICAgICBvcGVuR3JhcGg6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvY3VzdCBMb2NhdG9yXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0cmFjayBsb2N1c3RzIGhlcmVcIixcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2TGF0ID0gdXNlUHJldmlvdXMobGF0aXR1ZGUpO1xuICAgIGNvbnN0IHByZXZMb25nID0gdXNlUHJldmlvdXMobG9uZ2l0dWRlKTtcblxuICAgIGNvbnN0IG9uRm9ybVN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb25naXR1ZGU6IFwiICsgbG9uZ2l0dWRlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhdGl0dWRlOiBcIiArIGxhdGl0dWRlKVxuICAgICAgICBsZXQgbGF0ID0gbGF0aXR1ZGVcbiAgICAgICAgbGV0IGxvbmcgPSBsb25naXR1ZGVcblxuICAgICAgICBpZiAobGF0ID09PSBcIlwiICYmIGxvbmcgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHNldFByZWRpY3RlZERhdGEoeyByaXNrOiBOYU4gfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcmV2TGF0ID09PSBsYXQgJiYgcHJldkxvbmcgPT09IGxvbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGF0IGFuZCBsb25nIG1hdGNoZWQgd2l0aCBwcmV2IHZhbHVlc1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBgbGF0LSR7bGF0fS1sb25nLSR7bG9uZ31gXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL2xhbmRjb3ZlcmFwaS5henVyZXdlYnNpdGVzLm5ldC9wcmVkaWN0LyR7ZGF0YX1gKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGxvdFByZWRpY3RlZFBvaW50KGxvbmdpdHVkZSwgbGF0aXR1ZGUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uUmVzZXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHNldERpc3BsYXlNZXNzYWdlKFwiXCIpXG4gICAgICAgIHNldExvbmdpdHVkZShcIlwiKVxuICAgICAgICBzZXRMYXRpdHVkZShcIlwiKVxuICAgICAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAvLyBzZXRQcmVkaWN0ZWREYXRhKG51bGwpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOZXh0U2VvIHsuLi5TRU99IC8+XG4gICAgICAgICAgICB7Lyoge3BhZ2VMb2FkaW5nID9cbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nLW92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCJjYWxjKDhweCArIDAuOHZ3KVwiLCBjb2xvcjogXCJyZ2IoMjI4LCAyMjcsIDIyNylcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkRpc2NsYWltZXI6IFRvIGdldCB0aGUgYmVzdCBncHUgcGVyZm9ybWFuY2UgdXNlIHRoZSBkZXNrdG9wIGFwcC48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IG51bGx9ICovfVxuICAgICAgICAgICAgey8qIDxUcmFja2luZyAvPiAqL31cbiAgICAgICAgICAgIDxoMT5UcmFja2luZyBmZWF0dXJlIGdvZXMgaGVyZSEhPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk1ldHJpY3NDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8aDE+UHJlZGljdCBQcm9iYWJpbGl0eSBvZiBMb2N1c3QgQXR0YWNrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3JtRW50aXR5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvbmdpdHVkZVwiPmxvbmdpdHVkZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibG9uZ1wiIHZhbHVlPXtsb25naXR1ZGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9uZ2l0dWRlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybUVudGl0eX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXRpdHVkZVwiPmxhdGl0dWRlOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXRcIiB2YWx1ZT17bGF0aXR1ZGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGF0aXR1ZGUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5CdXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRm9ybVN1Ym1pdEhhbmRsZXJ9PlByZWRpY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzZXRIYW5kbGVyfT5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuR3VhZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8R2F1Z2VDaGFydCBpZD1cImdhdWdlLWNoYXJ0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuck9mTGV2ZWxzPXs0MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmNzTGVuZ3RoPXtbMC4yLCAwLjUsIDAuMl19XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM9e1snIzVCRTEyQycsICcjRjVDRDE5JywgJyNFQTQyMjgnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9ezAuMzd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmNQYWRkaW5nPXswLjAyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tracking/index.js\n");

/***/ })

})