"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Features/FeatureCard.jsx":
/*!*****************************************************!*\
  !*** ./src/app/components/Features/FeatureCard.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data */ \"(app-pages-browser)/./src/app/components/Data.js\");\n\n\nconst FeatureCard = (param)=>{\n    let { feature, activeIndex } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"p-2 flex flex-col gap-5 md:gap-110 lg:grid grid-cols-2 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[70%] h-full flex items-center justify-center lg:px-2 bg-DeepGreen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full max-w-lg h-96 md:h-[34rem] flex items-center justify-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \" rounded-2xl\",\n                        src: feature.image,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/FeatureCard.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/FeatureCard.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/FeatureCard.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-1 md:gap-2 lg:hidden\",\n                children: [\n                    [\n                        ...Array(_Data__WEBPACK_IMPORTED_MODULE_1__.features.length)\n                    ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"h-2 md:h-3 \".concat(i !== activeIndex ? \"w-2 md:w-3\" : \"w-6 md:w-10\", \" rounded-full bg-neutral-500 origin-left transition-all duration-150\")\n                        }, void 0, false, {\n                            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/FeatureCard.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined)),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/FeatureCard.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex lg:w-[70%] flex-col gap-3 md:gap-10 lg:px-2 lg:justify-center bg-DarkGrey\",\n                children: [\n                    feature.heading(),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"max-w-sm lg:max-w-md lg:px-0 lg:justify-center lg:flex\",\n                        children: feature.description\n                    }, void 0, false, {\n                        fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/FeatureCard.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/FeatureCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/FeatureCard.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FeatureCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeatureCard);\nvar _c;\n$RefreshReg$(_c, \"FeatureCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9GZWF0dXJlcy9GZWF0dXJlQ2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7OztBQUFtQztBQUVuQyxNQUFNQyxjQUFjO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxXQUFXLEVBQUU7SUFDM0MscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDRTt3QkFBSUYsV0FBVTt3QkFBZUcsS0FBS04sUUFBUU8sS0FBSzt3QkFBRUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHMUQsOERBQUNKO2dCQUFJRCxXQUFVOztvQkFDWjsyQkFBSU0sTUFBTVgsMkNBQVFBLENBQUNZLE1BQU07cUJBQUUsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNuQyw4REFBQ0M7NEJBQ0NYLFdBQVcsY0FFVixPQURDVSxNQUFNWixjQUFjLGVBQWUsZUFDcEM7Ozs7OztvQkFFRDs7Ozs7OzswQkFHTiw4REFBQ0c7Z0JBQUlELFdBQVU7O29CQUNaSCxRQUFRZSxPQUFPO2tDQUVoQiw4REFBQ0M7d0JBQUViLFdBQVU7a0NBQTBESCxRQUFRaUIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxHO0tBekJNbEI7QUEyQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0ZlYXR1cmVzL0ZlYXR1cmVDYXJkLmpzeD82NjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZlYXR1cmVzIH0gZnJvbSBcIi4uL0RhdGFcIjtcblxuY29uc3QgRmVhdHVyZUNhcmQgPSAoeyBmZWF0dXJlLCBhY3RpdmVJbmRleCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwicC0yIGZsZXggZmxleC1jb2wgZ2FwLTUgbWQ6Z2FwLTExMCBsZzpncmlkIGdyaWQtY29scy0yIGgtZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs3MCVdIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsZzpweC0yIGJnLURlZXBHcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1sZyBoLTk2IG1kOmgtWzM0cmVtXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIiByb3VuZGVkLTJ4bFwiIHNyYz17ZmVhdHVyZS5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEgbWQ6Z2FwLTIgbGc6aGlkZGVuXCI+XG4gICAgICAgIHtbLi4uQXJyYXkoZmVhdHVyZXMubGVuZ3RoKV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0yIG1kOmgtMyAke1xuICAgICAgICAgICAgICBpICE9PSBhY3RpdmVJbmRleCA/IFwidy0yIG1kOnctM1wiIDogXCJ3LTYgbWQ6dy0xMFwiXG4gICAgICAgICAgICB9IHJvdW5kZWQtZnVsbCBiZy1uZXV0cmFsLTUwMCBvcmlnaW4tbGVmdCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBgfVxuICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgKSl9e1wiIFwifVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBsZzp3LVs3MCVdIGZsZXgtY29sIGdhcC0zIG1kOmdhcC0xMCBsZzpweC0yIGxnOmp1c3RpZnktY2VudGVyIGJnLURhcmtHcmV5XCI+XG4gICAgICAgIHtmZWF0dXJlLmhlYWRpbmcoKX1cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1zbSBsZzptYXgtdy1tZCBsZzpweC0wIGxnOmp1c3RpZnktY2VudGVyIGxnOmZsZXhcIj57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlQ2FyZDtcbiJdLCJuYW1lcyI6WyJmZWF0dXJlcyIsIkZlYXR1cmVDYXJkIiwiZmVhdHVyZSIsImFjdGl2ZUluZGV4IiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiQXJyYXkiLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImJ1dHRvbiIsImhlYWRpbmciLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Features/FeatureCard.jsx\n"));

/***/ })

});