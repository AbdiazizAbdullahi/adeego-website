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

/***/ "(app-pages-browser)/./src/app/components/Features/Features.jsx":
/*!**************************************************!*\
  !*** ./src/app/components/Features/Features.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data */ \"(app-pages-browser)/./src/app/components/Data.js\");\n/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/carousel */ \"(app-pages-browser)/./src/components/ui/carousel.jsx\");\n/* harmony import */ var _FeatureCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureCard */ \"(app-pages-browser)/./src/app/components/Features/FeatureCard.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import {\n//   ArrowBigLeft,\n//   ArrowBigRight,\n//   ArrowLeft,\n//   ArrowRight,\n// } from \"lucide-react\";\n// import { features } from \"../Data\";\n// import FeatureCard from \"./FeatureCard\";\n// import { AnimatePresence, motion } from \"framer-motion\";\n// import { useState } from \"react\";\n// const Features = () => {\n//   const [activeIndex, setActiveIndex] = useState(0);\n//   const moveForward = () =>\n//     setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);\n//   const moveBackward = () =>\n//     setActiveIndex(\n//       (prevIndex) => (prevIndex - 1 + features.length) % features.length\n//     );\n//   return (\n//     <>\n//       <main className=\"w-full flex flex-col gap-10 max-w-7xl m-auto\">\n//         <div className=\"w-full h-[80vh]\">\n//           <AnimatePresence>\n//             {features.map(\n//               (feature, i) =>\n//                 i === activeIndex && (\n//                   <motion.div className=\"w-full h-full\" key={i}>\n//                     <FeatureCard activeIndex={activeIndex} feature={feature} />\n//                   </motion.div>\n//                 )\n//             )}\n//           </AnimatePresence>\n//         </div>\n//         <div className=\"flex gap-2 items-center justify-end px-8\">\n//           <button\n//             onClick={(e) => {\n//               // e.preventDefault();\n//               moveBackward();\n//             }}\n//             className=\"size-16 md:size-20 rounded-full border border-green-600 text-black grid place-items-center\"\n//           >\n//             <ArrowLeft />\n//           </button>\n//           <button\n//             onClick={(e) => {\n//               // e.preventDefault();\n//               moveForward();\n//             }}\n//             className=\"size-16 md:size-20 rounded-full border border-green-600 text-black grid place-items-center\"\n//           >\n//             <ArrowRight />\n//           </button>\n//         </div>\n//       </main>\n//     </>\n//   );\n// };\n// export default Features;\n\n\n\n\n\nconst FeaturesCarousel = ()=>{\n    _s();\n    const [api, setApi] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!api) {\n            return;\n        }\n        setCount(api.scrollSnapList().length);\n        setCurrent(api.selectedScrollSnap() + 1);\n        api.on(\"select\", ()=>{\n            setCurrent(api.selectedScrollSnap() + 1);\n        });\n    }, [\n        api\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full flex flex-col gap-10 max-w-7xl m-auto lg:h-screen justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n            setApi: setApi,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselContent, {\n                    children: _Data__WEBPACK_IMPORTED_MODULE_1__.features.map((feature, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FeatureCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                feature: feature\n                            }, i, false, {\n                                fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n                            lineNumber: 107,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselPrevious, {\n                            className: \"size-20 border bg- border-DeepGreen hover:bg-DarkGrey\"\n                        }, void 0, false, {\n                            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__.CarouselNext, {\n                            className: \"size-20 border border-DeepGreen hover:bg-DarkGrey\"\n                        }, void 0, false, {\n                            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-1 w-full justify-center mt-6\",\n                    children: _Data__WEBPACK_IMPORTED_MODULE_1__.features.map((feature, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\".concat(i + 1 === current ? \"w-10\" : \"w-2\", \" h-2 rounded-full bg-DeepGreen transition-all duration-200\")\n                        }, void 0, false, {\n                            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/Features/Features.jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FeaturesCarousel, \"xFYzdWafWLdwWG2x54690V46Ld8=\");\n_c = FeaturesCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturesCarousel);\nvar _c;\n$RefreshReg$(_c, \"FeaturesCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9GZWF0dXJlcy9GZWF0dXJlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsc0NBQXNDO0FBQ3RDLDJDQUEyQztBQUMzQywyREFBMkQ7QUFDM0Qsb0NBQW9DO0FBRXBDLDJCQUEyQjtBQUMzQix1REFBdUQ7QUFFdkQsOEJBQThCO0FBQzlCLHdFQUF3RTtBQUN4RSwrQkFBK0I7QUFDL0Isc0JBQXNCO0FBQ3RCLDJFQUEyRTtBQUMzRSxTQUFTO0FBQ1QsYUFBYTtBQUNiLFNBQVM7QUFDVCx3RUFBd0U7QUFDeEUsNENBQTRDO0FBQzVDLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLHlDQUF5QztBQUN6QyxtRUFBbUU7QUFDbkUsa0ZBQWtGO0FBQ2xGLGtDQUFrQztBQUNsQyxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLCtCQUErQjtBQUMvQixpQkFBaUI7QUFFakIscUVBQXFFO0FBQ3JFLG9CQUFvQjtBQUNwQixnQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLGdDQUFnQztBQUNoQyxpQkFBaUI7QUFDakIscUhBQXFIO0FBQ3JILGNBQWM7QUFDZCw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQixnQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakIscUhBQXFIO0FBQ3JILGNBQWM7QUFDZCw2QkFBNkI7QUFDN0Isc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsVUFBVTtBQUNWLE9BQU87QUFDUCxLQUFLO0FBRUwsMkJBQTJCO0FBT0w7QUFDYTtBQU9EO0FBQ007QUFDSTtBQUU1QyxNQUFNYSxtQkFBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHSCwrQ0FBUUE7SUFDOUIsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNHLEtBQUs7WUFDUjtRQUNGO1FBRUFLLFNBQVNMLElBQUlNLGNBQWMsR0FBR0MsTUFBTTtRQUNwQ0osV0FBV0gsSUFBSVEsa0JBQWtCLEtBQUs7UUFFdENSLElBQUlTLEVBQUUsQ0FBQyxVQUFVO1lBQ2ZOLFdBQVdILElBQUlRLGtCQUFrQixLQUFLO1FBQ3hDO0lBQ0YsR0FBRztRQUFDUjtLQUFJO0lBRVIscUJBQ0UsOERBQUNVO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNwQiw2REFBUUE7WUFBQ1UsUUFBUUE7OzhCQUNoQiw4REFBQ1Qsb0VBQWVBOzhCQUNiRiwyQ0FBUUEsQ0FBQ3NCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQzt3QkFDdEIscUJBQ0UsOERBQUNyQixpRUFBWUE7c0NBQ1gsNEVBQUNHLG9EQUFXQTtnQ0FBQ2lCLFNBQVNBOytCQUFjQzs7Ozs7Ozs7OztvQkFHMUM7Ozs7Ozs4QkFFRiw4REFBQ0M7O3NDQUNDLDhEQUFDcEIscUVBQWdCQTs0QkFBQ2dCLFdBQVU7Ozs7OztzQ0FDNUIsOERBQUNqQixpRUFBWUE7NEJBQUNpQixXQUFVOzs7Ozs7Ozs7Ozs7OEJBRTFCLDhEQUFDSTtvQkFBSUosV0FBVTs4QkFDWnJCLDJDQUFRQSxDQUFDc0IsR0FBRyxDQUFDLENBQUNDLFNBQVNDO3dCQUN0QixxQkFDRSw4REFBQ0M7NEJBQ0NKLFdBQVcsR0FFVixPQURDRyxJQUFJLE1BQU1aLFVBQVUsU0FBUyxPQUM5Qjs7Ozs7O29CQUdQOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBaERNSDtLQUFBQTtBQWtETiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9GZWF0dXJlcy9GZWF0dXJlcy5qc3g/MWUwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gaW1wb3J0IHtcbi8vICAgQXJyb3dCaWdMZWZ0LFxuLy8gICBBcnJvd0JpZ1JpZ2h0LFxuLy8gICBBcnJvd0xlZnQsXG4vLyAgIEFycm93UmlnaHQsXG4vLyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbi8vIGltcG9ydCB7IGZlYXR1cmVzIH0gZnJvbSBcIi4uL0RhdGFcIjtcbi8vIGltcG9ydCBGZWF0dXJlQ2FyZCBmcm9tIFwiLi9GZWF0dXJlQ2FyZFwiO1xuLy8gaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gY29uc3QgRmVhdHVyZXMgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbi8vICAgY29uc3QgbW92ZUZvcndhcmQgPSAoKSA9PlxuLy8gICAgIHNldEFjdGl2ZUluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIGZlYXR1cmVzLmxlbmd0aCk7XG4vLyAgIGNvbnN0IG1vdmVCYWNrd2FyZCA9ICgpID0+XG4vLyAgICAgc2V0QWN0aXZlSW5kZXgoXG4vLyAgICAgICAocHJldkluZGV4KSA9PiAocHJldkluZGV4IC0gMSArIGZlYXR1cmVzLmxlbmd0aCkgJSBmZWF0dXJlcy5sZW5ndGhcbi8vICAgICApO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtMTAgbWF4LXctN3hsIG0tYXV0b1wiPlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs4MHZoXVwiPlxuLy8gICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4vLyAgICAgICAgICAgICB7ZmVhdHVyZXMubWFwKFxuLy8gICAgICAgICAgICAgICAoZmVhdHVyZSwgaSkgPT5cbi8vICAgICAgICAgICAgICAgICBpID09PSBhY3RpdmVJbmRleCAmJiAoXG4vLyAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIga2V5PXtpfT5cbi8vICAgICAgICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH0gZmVhdHVyZT17ZmVhdHVyZX0gLz5cbi8vICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbi8vICAgICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICApfVxuLy8gICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuLy8gICAgICAgICA8L2Rpdj5cblxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHB4LThcIj5cbi8vICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuLy8gICAgICAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICAgIG1vdmVCYWNrd2FyZCgpO1xuLy8gICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtMTYgbWQ6c2l6ZS0yMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1ncmVlbi02MDAgdGV4dC1ibGFjayBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiXG4vLyAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgPEFycm93TGVmdCAvPlxuLy8gICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4vLyAgICAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgICAgbW92ZUZvcndhcmQoKTtcbi8vICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLTE2IG1kOnNpemUtMjAgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZ3JlZW4tNjAwIHRleHQtYmxhY2sgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcIlxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IC8+XG4vLyAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgPC9tYWluPlxuLy8gICAgIDwvPlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXM7XG5cbmltcG9ydCB7XG4gIEFycm93QmlnTGVmdCxcbiAgQXJyb3dCaWdSaWdodCxcbiAgQXJyb3dMZWZ0LFxuICBBcnJvd1JpZ2h0LFxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBmZWF0dXJlcyB9IGZyb20gXCIuLi9EYXRhXCI7XG5pbXBvcnQge1xuICBDYXJvdXNlbCxcbiAgQ2Fyb3VzZWxDb250ZW50LFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsTmV4dCxcbiAgQ2Fyb3VzZWxQcmV2aW91cyxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJvdXNlbFwiO1xuaW1wb3J0IEZlYXR1cmVDYXJkIGZyb20gXCIuL0ZlYXR1cmVDYXJkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZlYXR1cmVzQ2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGNvbnN0IFthcGksIHNldEFwaV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXBpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0Q291bnQoYXBpLnNjcm9sbFNuYXBMaXN0KCkubGVuZ3RoKTtcbiAgICBzZXRDdXJyZW50KGFwaS5zZWxlY3RlZFNjcm9sbFNuYXAoKSArIDEpO1xuXG4gICAgYXBpLm9uKFwic2VsZWN0XCIsICgpID0+IHtcbiAgICAgIHNldEN1cnJlbnQoYXBpLnNlbGVjdGVkU2Nyb2xsU25hcCgpICsgMSk7XG4gICAgfSk7XG4gIH0sIFthcGldKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC0xMCBtYXgtdy03eGwgbS1hdXRvIGxnOmgtc2NyZWVuIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8Q2Fyb3VzZWwgc2V0QXBpPXtzZXRBcGl9PlxuICAgICAgICA8Q2Fyb3VzZWxDb250ZW50PlxuICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVDYXJkIGZlYXR1cmU9e2ZlYXR1cmV9IGtleT17aX0gLz5cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0Nhcm91c2VsQ29udGVudD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Q2Fyb3VzZWxQcmV2aW91cyBjbGFzc05hbWU9XCJzaXplLTIwIGJvcmRlciBiZy0gYm9yZGVyLURlZXBHcmVlbiBob3ZlcjpiZy1EYXJrR3JleVwiIC8+XG4gICAgICAgICAgPENhcm91c2VsTmV4dCBjbGFzc05hbWU9XCJzaXplLTIwIGJvcmRlciBib3JkZXItRGVlcEdyZWVuIGhvdmVyOmJnLURhcmtHcmV5XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdy1mdWxsIGp1c3RpZnktY2VudGVyIG10LTZcIj5cbiAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgIGkgKyAxID09PSBjdXJyZW50ID8gXCJ3LTEwXCIgOiBcInctMlwiXG4gICAgICAgICAgICAgICAgfSBoLTIgcm91bmRlZC1mdWxsIGJnLURlZXBHcmVlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDBgfVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXNDYXJvdXNlbDtcbiJdLCJuYW1lcyI6WyJBcnJvd0JpZ0xlZnQiLCJBcnJvd0JpZ1JpZ2h0IiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCIsImZlYXR1cmVzIiwiQ2Fyb3VzZWwiLCJDYXJvdXNlbENvbnRlbnQiLCJDYXJvdXNlbEl0ZW0iLCJDYXJvdXNlbE5leHQiLCJDYXJvdXNlbFByZXZpb3VzIiwiRmVhdHVyZUNhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZlYXR1cmVzQ2Fyb3VzZWwiLCJhcGkiLCJzZXRBcGkiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImNvdW50Iiwic2V0Q291bnQiLCJzY3JvbGxTbmFwTGlzdCIsImxlbmd0aCIsInNlbGVjdGVkU2Nyb2xsU25hcCIsIm9uIiwibWFpbiIsImNsYXNzTmFtZSIsIm1hcCIsImZlYXR1cmUiLCJpIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Features/Features.jsx\n"));

/***/ })

});