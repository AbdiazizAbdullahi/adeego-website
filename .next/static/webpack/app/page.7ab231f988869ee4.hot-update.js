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

/***/ "(app-pages-browser)/./src/app/components/WordAnim.jsx":
/*!*****************************************!*\
  !*** ./src/app/components/WordAnim.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst categories = [\n    {\n        label: \"Drinks\",\n        color: \"#017449\"\n    },\n    {\n        label: \"Dairy\",\n        color: \"#017449\"\n    },\n    {\n        label: \"Personal Care\",\n        color: \"#017449\"\n    },\n    {\n        label: \"Snacks\",\n        color: \"#017449\"\n    },\n    {\n        label: \"Cleaning Essentials\",\n        color: \"#017449\"\n    },\n    {\n        label: \"Dry Foods\",\n        color: \"#017449\"\n    }\n];\nconst WordAnim = ()=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const animateWord = ()=>{\n            const timeoutId = setTimeout(()=>{\n                setActiveIndex((prevIndex)=>(prevIndex + 1) % categories.length);\n            }, 2500);\n            return ()=>clearTimeout(timeoutId); // Cleanup timeout\n        };\n        animateWord();\n    }, [\n        activeIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden  h-10 md:h-14 lg:h-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n            mode: \"wait\",\n            initial: false,\n            children: categories.map((category, i)=>i === activeIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    initial: {\n                        y: \"90%\",\n                        opacity: 0\n                    },\n                    animate: {\n                        y: 0,\n                        opacity: 1\n                    },\n                    exit: {\n                        y: \"-80%\",\n                        opacity: 0\n                    },\n                    transition: {\n                        duration: 0.25\n                    },\n                    className: \"font-vest-b text-4xl md:text-3xl lg:text-5xl tracking-tighter\",\n                    style: {\n                        color: category.color\n                    },\n                    children: category.label\n                }, i, false, {\n                    fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined) : null)\n        }, void 0, false, {\n            fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/abdiaziz/Development/STARTUPS/adeego-website/src/app/components/WordAnim.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WordAnim, \"16En7kR7TbAJMjBrm+xutVNIc5Q=\");\n_c = WordAnim;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordAnim);\nvar _c;\n$RefreshReg$(_c, \"WordAnim\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Xb3JkQW5pbS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFd0Q7QUFDWjtBQUU1QyxNQUFNSSxhQUFhO0lBQ2pCO1FBQUVDLE9BQU87UUFBVUMsT0FBTztJQUFVO0lBQ3BDO1FBQUVELE9BQU87UUFBU0MsT0FBTztJQUFVO0lBQ25DO1FBQUVELE9BQU87UUFBaUJDLE9BQU87SUFBVTtJQUMzQztRQUFFRCxPQUFPO1FBQVVDLE9BQU87SUFBVTtJQUNwQztRQUFFRCxPQUFPO1FBQXVCQyxPQUFPO0lBQVU7SUFDakQ7UUFBRUQsT0FBTztRQUFhQyxPQUFPO0lBQVU7Q0FDeEM7QUFFRCxNQUFNQyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxjQUFjO1lBQ2xCLE1BQU1DLFlBQVlDLFdBQVc7Z0JBQzNCSCxlQUFlLENBQUNJLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLVCxXQUFXVSxNQUFNO1lBQ25FLEdBQUc7WUFFSCxPQUFPLElBQU1DLGFBQWFKLFlBQVksa0JBQWtCO1FBQzFEO1FBRUFEO0lBQ0YsR0FBRztRQUFDRjtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDakIsMERBQWVBO1lBQUNrQixNQUFLO1lBQU9DLFNBQVM7c0JBQ25DZixXQUFXZ0IsR0FBRyxDQUFDLENBQUNDLFVBQVVDLElBQ3pCQSxNQUFNZCw0QkFDSiw4REFBQ1AsaURBQU1BLENBQUNlLEdBQUc7b0JBRVRHLFNBQVM7d0JBQ1BJLEdBQUc7d0JBQ0hDLFNBQVM7b0JBQ1g7b0JBQ0FDLFNBQVM7d0JBQ1BGLEdBQUc7d0JBQ0hDLFNBQVM7b0JBQ1g7b0JBQ0FFLE1BQU07d0JBQ0pILEdBQUc7d0JBQ0hDLFNBQVM7b0JBQ1g7b0JBQ0FHLFlBQVk7d0JBQ1ZDLFVBQVU7b0JBQ1o7b0JBQ0FYLFdBQVU7b0JBQ1ZZLE9BQU87d0JBQ0x2QixPQUFPZSxTQUFTZixLQUFLO29CQUN2Qjs4QkFFQ2UsU0FBU2hCLEtBQUs7bUJBckJWaUI7Ozs7Z0NBdUJMOzs7Ozs7Ozs7OztBQUtkO0dBakRNZjtLQUFBQTtBQW1ETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvV29yZEFuaW0uanN4PzEzNTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgeyBsYWJlbDogXCJEcmlua3NcIiwgY29sb3I6IFwiIzAxNzQ0OVwiIH0sXG4gIHsgbGFiZWw6IFwiRGFpcnlcIiwgY29sb3I6IFwiIzAxNzQ0OVwiIH0sXG4gIHsgbGFiZWw6IFwiUGVyc29uYWwgQ2FyZVwiLCBjb2xvcjogXCIjMDE3NDQ5XCIgfSxcbiAgeyBsYWJlbDogXCJTbmFja3NcIiwgY29sb3I6IFwiIzAxNzQ0OVwiIH0sXG4gIHsgbGFiZWw6IFwiQ2xlYW5pbmcgRXNzZW50aWFsc1wiLCBjb2xvcjogXCIjMDE3NDQ5XCIgfSxcbiAgeyBsYWJlbDogXCJEcnkgRm9vZHNcIiwgY29sb3I6IFwiIzAxNzQ0OVwiIH0sXG5dO1xuXG5jb25zdCBXb3JkQW5pbSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGVXb3JkID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUluZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggKyAxKSAlIGNhdGVnb3JpZXMubGVuZ3RoKTtcbiAgICAgIH0sIDI1MDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7IC8vIENsZWFudXAgdGltZW91dFxuICAgIH07XG5cbiAgICBhbmltYXRlV29yZCgpO1xuICB9LCBbYWN0aXZlSW5kZXhdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuICBoLTEwIG1kOmgtMTQgbGc6aC0yMFwiPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaSkgPT5cbiAgICAgICAgICBpID09PSBhY3RpdmVJbmRleCA/IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgICAgIHk6IFwiOTAlXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZXhpdD17e1xuICAgICAgICAgICAgICAgIHk6IFwiLTgwJVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4yNSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC12ZXN0LWIgdGV4dC00eGwgbWQ6dGV4dC0zeGwgbGc6dGV4dC01eGwgdHJhY2tpbmctdGlnaHRlclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IGNhdGVnb3J5LmNvbG9yLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnkubGFiZWx9XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZEFuaW07XG4iXSwibmFtZXMiOlsiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjYXRlZ29yaWVzIiwibGFiZWwiLCJjb2xvciIsIldvcmRBbmltIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImFuaW1hdGVXb3JkIiwidGltZW91dElkIiwic2V0VGltZW91dCIsInByZXZJbmRleCIsImxlbmd0aCIsImNsZWFyVGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsIm1vZGUiLCJpbml0aWFsIiwibWFwIiwiY2F0ZWdvcnkiLCJpIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/WordAnim.jsx\n"));

/***/ })

});