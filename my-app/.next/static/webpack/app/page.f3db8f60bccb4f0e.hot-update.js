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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Page = ()=>{\n    _s();\n    const [viewCount, setViewCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [likeCount, setLikeCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleImageClick = ()=>{\n        setViewCount(viewCount + 1);\n    };\n    const handleLikeClick = ()=>{\n        setLikeCount(likeCount + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/laptop.jpg\",\n                alt: \" LAPTOP\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abc\\\\Desktop\\\\my-app\\\\app\\\\page.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleImageClick,\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abc\\\\Desktop\\\\my-app\\\\app\\\\page.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    viewCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abc\\\\Desktop\\\\my-app\\\\app\\\\page.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLikeClick,\n                children: \"Like\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abc\\\\Desktop\\\\my-app\\\\app\\\\page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Like: \",\n                    likeCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abc\\\\Desktop\\\\my-app\\\\app\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abc\\\\Desktop\\\\my-app\\\\app\\\\page.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"jLlLHZFmZJcg+vp32OYrFoEZyEs=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN3QztBQUV4QyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFFM0MsTUFBTU0sbUJBQW1CO1FBQ3ZCSCxhQUFhRCxZQUFZO0lBQzNCO0lBRUEsTUFBTUssa0JBQWtCO1FBQ3RCRixhQUFhRCxZQUFZO0lBQzNCO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7Z0JBRURDLEtBQUk7Z0JBQ0hDLEtBQUk7Ozs7OzswQkFFTCw4REFBQ0M7Z0JBQU9DLFNBQVNQOzBCQUFrQjs7Ozs7OzBCQUNuQyw4REFBQ1E7O29CQUFFO29CQUFFWjs7Ozs7OzswQkFFTCw4REFBQ1U7Z0JBQU9DLFNBQVNOOzBCQUFpQjs7Ozs7OzBCQUNsQyw4REFBQ087O29CQUFFO29CQUFPVjs7Ozs7Ozs7Ozs7OztBQUloQjtHQTNCTUg7S0FBQUE7QUE2Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdmlld0NvdW50LCBzZXRWaWV3Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsaWtlQ291bnQsIHNldExpa2VDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVJbWFnZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFZpZXdDb3VudCh2aWV3Q291bnQgKyAxKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVMaWtlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TGlrZUNvdW50KGxpa2VDb3VudCArIDEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbWcgXG5cbiAgICAgIHNyYz0nL2ltYWdlcy9sYXB0b3AuanBnJ1xuICAgICAgIGFsdD0nIExBUFRPUCcvPlxuICAgICBcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSW1hZ2VDbGlja30+VmlldzwvYnV0dG9uPlxuICAgICAgPHA+IHt2aWV3Q291bnR9PC9wPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxpa2VDbGlja30+TGlrZTwvYnV0dG9uPlxuICAgICAgPHA+TGlrZToge2xpa2VDb3VudH08L3A+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUGFnZSIsInZpZXdDb3VudCIsInNldFZpZXdDb3VudCIsImxpa2VDb3VudCIsInNldExpa2VDb3VudCIsImhhbmRsZUltYWdlQ2xpY2siLCJoYW5kbGVMaWtlQ2xpY2siLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});