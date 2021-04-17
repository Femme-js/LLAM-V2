webpackHotUpdate_N_E("pages/tracking",{

/***/ "./pages/tracking/index.js":
/*!*********************************!*\
  !*** ./pages/tracking/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jappanjeetsingh_Desktop_web_projects_LLAM_LLAM_V2_LLAM_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_LottieAnimations_pageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LottieAnimations/pageLoader/PageLoader */ \"./components/LottieAnimations/pageLoader/PageLoader.js\");\n/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-gauge-chart */ \"./node_modules/react-gauge-chart/dist/index.js\");\n/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_gauge_chart__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/UI/Footer/Footer */ \"./components/UI/Footer/Footer.js\");\n/* harmony import */ var _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tracking.module.scss */ \"./pages/tracking/tracking.module.scss\");\n/* harmony import */ var _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tracking_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/Users/jappanjeetsingh/Desktop/web/projects/LLAM/LLAM-V2/LLAM/pages/tracking/index.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s3 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_jappanjeetsingh_Desktop_web_projects_LLAM_LLAM_V2_LLAM_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Tracking = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/Tracking/Tracking */ \"./components/Tracking/Tracking.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../components/Tracking/Tracking */ \"./components/Tracking/Tracking.js\")];\n    },\n    modules: ['../../components/Tracking/Tracking']\n  }\n});\n_c2 = Tracking;\n\nvar usePrevious = function usePrevious(value) {\n  _s();\n\n  console.log(value);\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    ref.current = value;\n    return ref.current;\n  });\n};\n\n_s(usePrevious, \"8uVE59eA/r6b92xF80p7sH8rXLk=\");\n\nvar Tracker = function Tracker() {\n  _s3();\n\n  var _s2 = $RefreshSig$();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      pageLoading = _useState[0],\n      setPageLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      longitude = _useState2[0],\n      setLongitude = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      latitude = _useState3[0],\n      setLatitude = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      predictedData = _useState4[0],\n      setPredictedData = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setPageLoading(true);\n    setTimeout(function () {\n      setPageLoading(false);\n    }, 5000);\n  }, []);\n  var SEO = {\n    title: \"Locust Locator\",\n    description: \"track locusts here\",\n    openGraph: {\n      title: \"Locust Locator\",\n      description: \"track locusts here\"\n    }\n  };\n\n  var onFormSubmitHandler = function onFormSubmitHandler(event) {\n    _s2();\n\n    var prevLat = usePrevious(latitude);\n    var prevLong = usePrevious(longitude);\n    event.preventDefault();\n    console.log(\"Longitude: \" + longitude);\n    console.log(\"Latitude: \" + latitude);\n    var lat = latitude;\n    var _long = longitude;\n\n    if (lat === 0 && _long === 0) {\n      setPredictedData(0);\n    } else if (prevLat === lat && prevLong === _long) {\n      console.log(\"lat and long matched with prev values\");\n    } else {\n      var data = \"lat-\".concat(lat, \"-long-\").concat(_long); // setLoading(true)\n\n      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(\"https://landcoverapi.azurewebsites.net/predict/\".concat(data)).then(function (response) {\n        // plotPredictedPoint(longitude, latitude)\n        setPredictedData(response.data.risk / 100);\n        console.log(response.data.risk / 100);\n      })[\"catch\"](function (error) {\n        console.log(error);\n      });\n    }\n  };\n\n  _s2(onFormSubmitHandler, \"zpkOeJ65MWqGjI72HnXv9X9Y1hY=\", false, function () {\n    return [usePrevious, usePrevious];\n  });\n\n  var onResetHandler = function onResetHandler(event) {\n    event.preventDefault(); // setDisplayMessage(\"\")\n\n    setLongitude(0);\n    setLatitude(0); // setLoading(false)\n\n    setPredictedData(null);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_4__[\"NextSeo\"], _objectSpread({}, SEO), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Tracking feature goes here!!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.MetricsContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.Content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Predict Probability of Locust Attack\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.Form,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.FormEntity,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"longitude\",\n              children: \"longitude: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              name: \"long\",\n              value: longitude,\n              onChange: function onChange(e) {\n                return setLongitude(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.FormEntity,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n              htmlFor: \"latitude\",\n              children: \"latitude: \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"text\",\n              name: \"lat\",\n              value: latitude,\n              onChange: function onChange(e) {\n                return setLatitude(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.ButtonsContainer,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: onFormSubmitHandler,\n              children: \"Predict\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              onClick: onResetHandler,\n              children: \"Reset\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _tracking_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.GuageContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_gauge_chart__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          id: \"gauge-chart2\",\n          nrOfLevels: 420,\n          arcsLength: [0.2, 0.5, 0.2],\n          colors: ['#5BE12C', '#F5CD19', '#EA4228'],\n          percent: predictedData,\n          arcPadding: 0.02\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s3(Tracker, \"7ndn6iMVWDhbuK1DIKW2Mw+h1tY=\");\n\n_c3 = Tracker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tracker);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Tracking$dynamic\");\n$RefreshReg$(_c2, \"Tracking\");\n$RefreshReg$(_c3, \"Tracker\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhY2tpbmcvaW5kZXguanM/NDQxOSJdLCJuYW1lcyI6WyJUcmFja2luZyIsImR5bmFtaWMiLCJzc3IiLCJ1c2VQcmV2aW91cyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJUcmFja2VyIiwidXNlU3RhdGUiLCJwYWdlTG9hZGluZyIsInNldFBhZ2VMb2FkaW5nIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJzZXRMYXRpdHVkZSIsInByZWRpY3RlZERhdGEiLCJzZXRQcmVkaWN0ZWREYXRhIiwic2V0VGltZW91dCIsIlNFTyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJvcGVuR3JhcGgiLCJvbkZvcm1TdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2TGF0IiwicHJldkxvbmciLCJwcmV2ZW50RGVmYXVsdCIsImxhdCIsImxvbmciLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwicmlzayIsImVycm9yIiwib25SZXNldEhhbmRsZXIiLCJjbGFzc2VzIiwiTWV0cmljc0NvbnRhaW5lciIsIkNvbnRlbnQiLCJGb3JtIiwiRm9ybUVudGl0eSIsImUiLCJ0YXJnZXQiLCJCdXR0b25zQ29udGFpbmVyIiwiR3VhZ2VDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDRKQUFOO0FBQUEsQ0FBRCxFQUFxRDtBQUN6RUMsS0FBRyxFQUFFLEtBRG9FO0FBQUE7QUFBQTtBQUFBLGtDQUF2Qyw2RUFBdUM7QUFBQTtBQUFBLGNBQXZDLG9DQUF1QztBQUFBO0FBQUEsQ0FBckQsQ0FBeEI7TUFBTUYsUTs7QUFJTixJQUFN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QS9HRDs7SUFBTVIsTzs7TUFBQUEsTztBQWlIU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy90cmFja2luZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG90dGllQW5pbWF0aW9ucy9wYWdlTG9hZGVyL1BhZ2VMb2FkZXJcIlxuaW1wb3J0IEdhdWdlQ2hhcnQgZnJvbSAncmVhY3QtZ2F1Z2UtY2hhcnQnXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0Zvb3Rlci9Gb290ZXJcIlxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdHJhY2tpbmcubW9kdWxlLnNjc3NcIlxuXG5jb25zdCBUcmFja2luZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL1RyYWNraW5nL1RyYWNraW5nJyksIHtcbiAgICBzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IHVzZVByZXZpb3VzID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgIH0pXG59XG5cbmNvbnN0IFRyYWNrZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3BhZ2VMb2FkaW5nLCBzZXRQYWdlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW3ByZWRpY3RlZERhdGEsIHNldFByZWRpY3RlZERhdGFdID0gdXNlU3RhdGUobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFBhZ2VMb2FkaW5nKHRydWUpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0UGFnZUxvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0sIDUwMDApO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgU0VPID0ge1xuICAgICAgICB0aXRsZTogXCJMb2N1c3QgTG9jYXRvclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ0cmFjayBsb2N1c3RzIGhlcmVcIixcblxuICAgICAgICBvcGVuR3JhcGg6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvY3VzdCBMb2NhdG9yXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJ0cmFjayBsb2N1c3RzIGhlcmVcIixcbiAgICAgICAgfSxcbiAgICB9XG5cblxuXG4gICAgY29uc3Qgb25Gb3JtU3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2TGF0ID0gdXNlUHJldmlvdXMobGF0aXR1ZGUpO1xuICAgICAgICBjb25zdCBwcmV2TG9uZyA9IHVzZVByZXZpb3VzKGxvbmdpdHVkZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9uZ2l0dWRlOiBcIiArIGxvbmdpdHVkZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJMYXRpdHVkZTogXCIgKyBsYXRpdHVkZSlcbiAgICAgICAgbGV0IGxhdCA9IGxhdGl0dWRlXG4gICAgICAgIGxldCBsb25nID0gbG9uZ2l0dWRlXG5cbiAgICAgICAgaWYgKGxhdCA9PT0gMCAmJiBsb25nID09PSAwKSB7XG4gICAgICAgICAgICBzZXRQcmVkaWN0ZWREYXRhKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJldkxhdCA9PT0gbGF0ICYmIHByZXZMb25nID09PSBsb25nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxhdCBhbmQgbG9uZyBtYXRjaGVkIHdpdGggcHJldiB2YWx1ZXNcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYGxhdC0ke2xhdH0tbG9uZy0ke2xvbmd9YFxuICAgICAgICAgICAgLy8gc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9sYW5kY292ZXJhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvcHJlZGljdC8ke2RhdGF9YClcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBsb3RQcmVkaWN0ZWRQb2ludChsb25naXR1ZGUsIGxhdGl0dWRlKVxuICAgICAgICAgICAgICAgICAgICBzZXRQcmVkaWN0ZWREYXRhKHJlc3BvbnNlLmRhdGEucmlzayAvIDEwMClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5yaXNrIC8gMTAwKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uUmVzZXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIHNldERpc3BsYXlNZXNzYWdlKFwiXCIpXG4gICAgICAgIHNldExvbmdpdHVkZSgwKVxuICAgICAgICBzZXRMYXRpdHVkZSgwKVxuICAgICAgICAvLyBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICBzZXRQcmVkaWN0ZWREYXRhKG51bGwpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOZXh0U2VvIHsuLi5TRU99IC8+XG4gICAgICAgICAgICB7Lyoge3BhZ2VMb2FkaW5nID9cbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nLW92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCJjYWxjKDhweCArIDAuOHZ3KVwiLCBjb2xvcjogXCJyZ2IoMjI4LCAyMjcsIDIyNylcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkRpc2NsYWltZXI6IFRvIGdldCB0aGUgYmVzdCBncHUgcGVyZm9ybWFuY2UgdXNlIHRoZSBkZXNrdG9wIGFwcC48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IG51bGx9ICovfVxuICAgICAgICAgICAgey8qIDxUcmFja2luZyAvPiAqL31cbiAgICAgICAgICAgIDxoMT5UcmFja2luZyBmZWF0dXJlIGdvZXMgaGVyZSEhPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLk1ldHJpY3NDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8aDE+UHJlZGljdCBQcm9iYWJpbGl0eSBvZiBMb2N1c3QgQXR0YWNrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb3JtRW50aXR5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvbmdpdHVkZVwiPmxvbmdpdHVkZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibG9uZ1wiIHZhbHVlPXtsb25naXR1ZGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9uZ2l0dWRlKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRm9ybUVudGl0eX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXRpdHVkZVwiPmxhdGl0dWRlOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXRcIiB2YWx1ZT17bGF0aXR1ZGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGF0aXR1ZGUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5CdXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uRm9ybVN1Ym1pdEhhbmRsZXJ9PlByZWRpY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uUmVzZXRIYW5kbGVyfT5SZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuR3VhZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8R2F1Z2VDaGFydCBpZD1cImdhdWdlLWNoYXJ0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuck9mTGV2ZWxzPXs0MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmNzTGVuZ3RoPXtbMC4yLCAwLjUsIDAuMl19XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM9e1snIzVCRTEyQycsICcjRjVDRDE5JywgJyNFQTQyMjgnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnQ9e3ByZWRpY3RlZERhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmNQYWRkaW5nPXswLjAyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tracking/index.js\n");

/***/ })

})