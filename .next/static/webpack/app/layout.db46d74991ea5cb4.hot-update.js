"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4b8862e07688\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzM1NmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI0Yjg4NjJlMDc2ODhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/addProperty/Categories.tsx":
/*!***************************************************!*\
  !*** ./app/components/addProperty/Categories.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\nconst Categories = (param)=>{\n    let { selectedCategory, setCategory } = param;\n    const categories = [\n        {\n            name: \"Beach\",\n            key: \"beach\",\n            icon: \"/beach.png\"\n        },\n        {\n            name: \"Golfing\",\n            key: \"golfing\",\n            icon: \"/golf.png\"\n        },\n        {\n            name: \"Cabins\",\n            key: \"cabins\",\n            icon: \"/cabin.png\"\n        },\n        {\n            name: \"Farm\",\n            key: \"farm\",\n            icon: \"/farm.png\"\n        },\n        {\n            name: \"Lake\",\n            key: \"lakeView\",\n            icon: \"/lake.png\"\n        },\n        {\n            name: \"Pool\",\n            key: \"pool\",\n            icon: \"/pool.png\"\n        },\n        {\n            name: \"Houseboat\",\n            key: \"houseboat\",\n            icon: \"/houseboat.png\"\n        },\n        {\n            name: \"Barn\",\n            key: \"barn\",\n            icon: \"/barn.png\"\n        },\n        {\n            name: \"Island\",\n            key: \"island\",\n            icon: \"/island.png\"\n        },\n        {\n            name: \"Desert\",\n            key: \"desert\",\n            icon: \"/desert.png\"\n        },\n        {\n            name: \"Cave\",\n            key: \"cave\",\n            icon: \"/cave.png\"\n        },\n        {\n            name: \"Tropical\",\n            key: \"tropical\",\n            icon: \"/cave.png\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-4 pb-6 flex flex-wrap justify-center gap-4\",\n        children: categories.map((param)=>{\n            let { name, key, icon } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setCategory(key),\n                className: \"p-4 flex flex-col items-center space-y-2 rounded-lg shadow-lg \\n                        \".concat(selectedCategory === key ? \"bg-gradient-to-r from-blue-500 to-indigo-500 text-white\" : \"bg-white text-gray-700\", \" \\n                        transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-xl\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: icon,\n                        alt: \"Category - \".concat(name),\n                        width: 40,\n                        height: 40,\n                        className: \"\".concat(selectedCategory === key ? \"opacity-100\" : \"opacity-80\")\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\addProperty\\\\Categories.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm font-medium\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\addProperty\\\\Categories.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, key, true, {\n                fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\addProperty\\\\Categories.tsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\addProperty\\\\Categories.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2FkZFByb3BlcnR5L0NhdGVnb3JpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBK0I7QUFPL0IsTUFBTUMsYUFBd0M7UUFBQyxFQUMzQ0MsZ0JBQWdCLEVBQ2hCQyxXQUFXLEVBQ2Q7SUFDRyxNQUFNQyxhQUFhO1FBQ2Y7WUFBRUMsTUFBTTtZQUFTQyxLQUFLO1lBQVNDLE1BQU07UUFBYTtRQUNsRDtZQUFFRixNQUFNO1lBQVdDLEtBQUs7WUFBV0MsTUFBTTtRQUFZO1FBQ3JEO1lBQUVGLE1BQU07WUFBVUMsS0FBSztZQUFVQyxNQUFNO1FBQWE7UUFDcEQ7WUFBRUYsTUFBTTtZQUFRQyxLQUFLO1lBQVFDLE1BQU07UUFBWTtRQUMvQztZQUFFRixNQUFNO1lBQVFDLEtBQUs7WUFBWUMsTUFBTTtRQUFZO1FBQ25EO1lBQUVGLE1BQU07WUFBUUMsS0FBSztZQUFRQyxNQUFNO1FBQVk7UUFDL0M7WUFBRUYsTUFBTTtZQUFhQyxLQUFLO1lBQWFDLE1BQU07UUFBaUI7UUFDOUQ7WUFBRUYsTUFBTTtZQUFRQyxLQUFLO1lBQVFDLE1BQU07UUFBWTtRQUMvQztZQUFFRixNQUFNO1lBQVVDLEtBQUs7WUFBVUMsTUFBTTtRQUFjO1FBQ3JEO1lBQUVGLE1BQU07WUFBVUMsS0FBSztZQUFVQyxNQUFNO1FBQWM7UUFDckQ7WUFBRUYsTUFBTTtZQUFRQyxLQUFLO1lBQVFDLE1BQU07UUFBWTtRQUMvQztZQUFFRixNQUFNO1lBQVlDLEtBQUs7WUFBWUMsTUFBTTtRQUFZO0tBQzFEO0lBRUQscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1ZMLFdBQVdNLEdBQUcsQ0FBQztnQkFBQyxFQUFFTCxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO2lDQUNoQyw4REFBQ0M7Z0JBRUdHLFNBQVMsSUFBTVIsWUFBWUc7Z0JBQzNCRyxXQUFXLDJGQUMyRyxPQUFoSFAscUJBQXFCSSxNQUFNLDREQUE0RCwwQkFBeUI7O2tDQUd0SCw4REFBQ04sa0RBQUtBO3dCQUNGWSxLQUFLTDt3QkFDTE0sS0FBSyxjQUFtQixPQUFMUjt3QkFDbkJTLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JOLFdBQVcsR0FBMkQsT0FBeERQLHFCQUFxQkksTUFBTSxnQkFBZ0I7Ozs7OztrQ0FFN0QsOERBQUNVO3dCQUFLUCxXQUFVO2tDQUF1Qko7Ozs7Ozs7ZUFibENDOzs7Ozs7Ozs7OztBQWtCekI7S0F6Q01MO0FBMkNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2FkZFByb3BlcnR5L0NhdGVnb3JpZXMudHN4PzBhMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIENhdGVnb3JpZXNQcm9wcyB7XHJcbiAgICBzZWxlY3RlZENhdGVnb3J5OiBzdHJpbmc7XHJcbiAgICBzZXRDYXRlZ29yeTogKGNhdGVnb3J5OiBzdHJpbmcpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENhdGVnb3JpZXM6IFJlYWN0LkZDPENhdGVnb3JpZXNQcm9wcz4gPSAoe1xyXG4gICAgc2VsZWN0ZWRDYXRlZ29yeSxcclxuICAgIHNldENhdGVnb3J5XHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiBcIkJlYWNoXCIsIGtleTogXCJiZWFjaFwiLCBpY29uOiBcIi9iZWFjaC5wbmdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJHb2xmaW5nXCIsIGtleTogXCJnb2xmaW5nXCIsIGljb246IFwiL2dvbGYucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiQ2FiaW5zXCIsIGtleTogXCJjYWJpbnNcIiwgaWNvbjogXCIvY2FiaW4ucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiRmFybVwiLCBrZXk6IFwiZmFybVwiLCBpY29uOiBcIi9mYXJtLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkxha2VcIiwga2V5OiBcImxha2VWaWV3XCIsIGljb246IFwiL2xha2UucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiUG9vbFwiLCBrZXk6IFwicG9vbFwiLCBpY29uOiBcIi9wb29sLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkhvdXNlYm9hdFwiLCBrZXk6IFwiaG91c2Vib2F0XCIsIGljb246IFwiL2hvdXNlYm9hdC5wbmdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJCYXJuXCIsIGtleTogXCJiYXJuXCIsIGljb246IFwiL2Jhcm4ucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiSXNsYW5kXCIsIGtleTogXCJpc2xhbmRcIiwgaWNvbjogXCIvaXNsYW5kLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkRlc2VydFwiLCBrZXk6IFwiZGVzZXJ0XCIsIGljb246IFwiL2Rlc2VydC5wbmdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJDYXZlXCIsIGtleTogXCJjYXZlXCIsIGljb246IFwiL2NhdmUucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiVHJvcGljYWxcIiwga2V5OiBcInRyb3BpY2FsXCIsIGljb246IFwiL2NhdmUucG5nXCIgfSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgcGItNiBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHsgbmFtZSwga2V5LCBpY29uIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q2F0ZWdvcnkoa2V5KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0yIHJvdW5kZWQtbGcgc2hhZG93LWxnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3NlbGVjdGVkQ2F0ZWdvcnkgPT09IGtleSA/ICdiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdG8taW5kaWdvLTUwMCB0ZXh0LXdoaXRlJyA6ICdiZy13aGl0ZSB0ZXh0LWdyYXktNzAwJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGN1cnNvci1wb2ludGVyIGhvdmVyOnNoYWRvdy14bGB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgQ2F0ZWdvcnkgLSAke25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3NlbGVjdGVkQ2F0ZWdvcnkgPT09IGtleSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS04MCd9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSc+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQ2F0ZWdvcmllcyIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJuYW1lIiwia2V5IiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/addProperty/Categories.tsx\n"));

/***/ })

});