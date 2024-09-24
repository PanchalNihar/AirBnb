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

/***/ "(app-pages-browser)/./app/components/Categories.tsx":
/*!***************************************!*\
  !*** ./app/components/Categories.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _hooks_useSearchModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSearchModal */ \"(app-pages-browser)/./app/hooks/useSearchModal.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Categories = ()=>{\n    _s();\n    const searchModal = (0,_hooks_useSearchModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const _setCategory = (categoryKey)=>{\n        setCategory(categoryKey);\n        const query = {\n            country: searchModal.query.country,\n            checkIn: searchModal.query.checkIn,\n            checkOut: searchModal.query.checkOut,\n            guests: searchModal.query.guests,\n            bedrooms: searchModal.query.bedrooms,\n            bathrooms: searchModal.query.bathrooms,\n            category: categoryKey\n        };\n        console.log(\"Query being sent: \", query);\n        searchModal.setQuery(query);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-around py-4 bg-gray-100 rounded-lg shadow-lg\",\n        children: [\n            {\n                name: \"All\",\n                category: \"\",\n                icon: \"/farm.png\"\n            },\n            {\n                name: \"Beach\",\n                category: \"beach\",\n                icon: \"/beach.png\"\n            },\n            {\n                name: \"Golfing\",\n                category: \"golfing\",\n                icon: \"/golf.png\"\n            },\n            {\n                name: \"Cabins\",\n                category: \"cabins\",\n                icon: \"/cabin.png\"\n            },\n            {\n                name: \"Farm\",\n                category: \"farm\",\n                icon: \"/farm.png\"\n            },\n            {\n                name: \"Lake\",\n                category: \"lakeView\",\n                icon: \"/lake.png\"\n            },\n            {\n                name: \"Pool\",\n                category: \"pool\",\n                icon: \"/pool.png\"\n            },\n            {\n                name: \"Houseboat\",\n                category: \"houseboat\",\n                icon: \"/houseboat.png\"\n            },\n            {\n                name: \"Barn\",\n                category: \"barn\",\n                icon: \"/barn.png\"\n            },\n            {\n                name: \"Island\",\n                category: \"island\",\n                icon: \"/island.png\"\n            },\n            {\n                name: \"Desert\",\n                category: \"desert\",\n                icon: \"/desert.png\"\n            }\n        ].map((param)=>{\n            let { name, category: categoryKey, icon } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>_setCategory(categoryKey),\n                className: \"flex flex-col items-center space-y-2 cursor-pointer transition-all duration-300 \\n            p-4 rounded-lg \\n            \".concat(category === categoryKey ? \"bg-airbnb text-white\" : \"bg-white text-gray-700\", \"\\n            shadow-md hover:shadow-lg \\n            transform hover:scale-105\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: icon,\n                        alt: \"Category - \".concat(name),\n                        width: 30,\n                        height: 30\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\Categories.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm font-semibold\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\Categories.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, categoryKey, true, {\n                fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\Categories.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\Categories.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"aZ1GZlqP351VrXnucV6TyoOrh/Y=\", false, function() {\n    return [\n        _hooks_useSearchModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhdGVnb3JpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRWlDO0FBQ0Y7QUFDdUM7QUFFdEUsTUFBTUcsYUFBYTs7SUFDakIsTUFBTUMsY0FBY0YsaUVBQWNBO0lBQ2xDLE1BQU0sQ0FBQ0csVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNTyxlQUFlLENBQUNDO1FBQ3BCRixZQUFZRTtRQUVaLE1BQU1DLFFBQXFCO1lBQ3pCQyxTQUFTTixZQUFZSyxLQUFLLENBQUNDLE9BQU87WUFDbENDLFNBQVNQLFlBQVlLLEtBQUssQ0FBQ0UsT0FBTztZQUNsQ0MsVUFBVVIsWUFBWUssS0FBSyxDQUFDRyxRQUFRO1lBQ3BDQyxRQUFRVCxZQUFZSyxLQUFLLENBQUNJLE1BQU07WUFDaENDLFVBQVVWLFlBQVlLLEtBQUssQ0FBQ0ssUUFBUTtZQUNwQ0MsV0FBV1gsWUFBWUssS0FBSyxDQUFDTSxTQUFTO1lBQ3RDVixVQUFVRztRQUNaO1FBQ0FRLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JSO1FBQ2xDTCxZQUFZYyxRQUFRLENBQUNUO0lBQ3ZCO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ1o7WUFDQztnQkFBRUMsTUFBTTtnQkFBT2hCLFVBQVU7Z0JBQUlpQixNQUFNO1lBQVk7WUFDL0M7Z0JBQUVELE1BQU07Z0JBQVNoQixVQUFVO2dCQUFTaUIsTUFBTTtZQUFhO1lBQ3ZEO2dCQUFFRCxNQUFNO2dCQUFXaEIsVUFBVTtnQkFBV2lCLE1BQU07WUFBWTtZQUMxRDtnQkFBRUQsTUFBTTtnQkFBVWhCLFVBQVU7Z0JBQVVpQixNQUFNO1lBQWE7WUFDekQ7Z0JBQUVELE1BQU07Z0JBQVFoQixVQUFVO2dCQUFRaUIsTUFBTTtZQUFZO1lBQ3BEO2dCQUFFRCxNQUFNO2dCQUFRaEIsVUFBVTtnQkFBWWlCLE1BQU07WUFBWTtZQUN4RDtnQkFBRUQsTUFBTTtnQkFBUWhCLFVBQVU7Z0JBQVFpQixNQUFNO1lBQVk7WUFDcEQ7Z0JBQUVELE1BQU07Z0JBQWFoQixVQUFVO2dCQUFhaUIsTUFBTTtZQUFpQjtZQUNuRTtnQkFBRUQsTUFBTTtnQkFBUWhCLFVBQVU7Z0JBQVFpQixNQUFNO1lBQVk7WUFDcEQ7Z0JBQUVELE1BQU07Z0JBQVVoQixVQUFVO2dCQUFVaUIsTUFBTTtZQUFjO1lBQzFEO2dCQUFFRCxNQUFNO2dCQUFVaEIsVUFBVTtnQkFBVWlCLE1BQU07WUFBYztTQUMzRCxDQUFDQyxHQUFHLENBQUM7Z0JBQUMsRUFBRUYsSUFBSSxFQUFFaEIsVUFBVUcsV0FBVyxFQUFFYyxJQUFJLEVBQUU7aUNBQzFDLDhEQUFDSDtnQkFFQ0ssU0FBUyxJQUFNakIsYUFBYUM7Z0JBQzVCWSxXQUFXLDhIQUVzRSxPQUE3RWYsYUFBYUcsY0FBYyx5QkFBeUIsMEJBQXlCOztrQ0FJakYsOERBQUNQLGtEQUFLQTt3QkFBQ3dCLEtBQUtIO3dCQUFNSSxLQUFLLGNBQW1CLE9BQUxMO3dCQUFRTSxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ2hFLDhEQUFDQzt3QkFBS1QsV0FBVTtrQ0FBeUJDOzs7Ozs7O2VBVHBDYjs7Ozs7Ozs7Ozs7QUFjZjtHQWxETUw7O1FBQ2dCRCw2REFBY0E7OztLQUQ5QkM7QUFvRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ2F0ZWdvcmllcy50c3g/NzRiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgdXNlU2VhcmNoTW9kYWwsIHsgU2VhcmNoUXVlcnkgfSBmcm9tIFwiLi4vaG9va3MvdXNlU2VhcmNoTW9kYWxcIjtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoTW9kYWwgPSB1c2VTZWFyY2hNb2RhbCgpO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IF9zZXRDYXRlZ29yeSA9IChjYXRlZ29yeUtleTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRDYXRlZ29yeShjYXRlZ29yeUtleSk7XHJcblxyXG4gICAgY29uc3QgcXVlcnk6IFNlYXJjaFF1ZXJ5ID0ge1xyXG4gICAgICBjb3VudHJ5OiBzZWFyY2hNb2RhbC5xdWVyeS5jb3VudHJ5LFxyXG4gICAgICBjaGVja0luOiBzZWFyY2hNb2RhbC5xdWVyeS5jaGVja0luLFxyXG4gICAgICBjaGVja091dDogc2VhcmNoTW9kYWwucXVlcnkuY2hlY2tPdXQsXHJcbiAgICAgIGd1ZXN0czogc2VhcmNoTW9kYWwucXVlcnkuZ3Vlc3RzLFxyXG4gICAgICBiZWRyb29tczogc2VhcmNoTW9kYWwucXVlcnkuYmVkcm9vbXMsXHJcbiAgICAgIGJhdGhyb29tczogc2VhcmNoTW9kYWwucXVlcnkuYmF0aHJvb21zLFxyXG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcnlLZXksXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coXCJRdWVyeSBiZWluZyBzZW50OiBcIiwgcXVlcnkpO1xyXG4gICAgc2VhcmNoTW9kYWwuc2V0UXVlcnkocXVlcnkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktYXJvdW5kIHB5LTQgYmctZ3JheS0xMDAgcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cclxuICAgICAge1tcclxuICAgICAgICB7IG5hbWU6IFwiQWxsXCIsIGNhdGVnb3J5OiBcIlwiLCBpY29uOiBcIi9mYXJtLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkJlYWNoXCIsIGNhdGVnb3J5OiBcImJlYWNoXCIsIGljb246IFwiL2JlYWNoLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkdvbGZpbmdcIiwgY2F0ZWdvcnk6IFwiZ29sZmluZ1wiLCBpY29uOiBcIi9nb2xmLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkNhYmluc1wiLCBjYXRlZ29yeTogXCJjYWJpbnNcIiwgaWNvbjogXCIvY2FiaW4ucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiRmFybVwiLCBjYXRlZ29yeTogXCJmYXJtXCIsIGljb246IFwiL2Zhcm0ucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiTGFrZVwiLCBjYXRlZ29yeTogXCJsYWtlVmlld1wiLCBpY29uOiBcIi9sYWtlLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIlBvb2xcIiwgY2F0ZWdvcnk6IFwicG9vbFwiLCBpY29uOiBcIi9wb29sLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkhvdXNlYm9hdFwiLCBjYXRlZ29yeTogXCJob3VzZWJvYXRcIiwgaWNvbjogXCIvaG91c2Vib2F0LnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkJhcm5cIiwgY2F0ZWdvcnk6IFwiYmFyblwiLCBpY29uOiBcIi9iYXJuLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIklzbGFuZFwiLCBjYXRlZ29yeTogXCJpc2xhbmRcIiwgaWNvbjogXCIvaXNsYW5kLnBuZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIkRlc2VydFwiLCBjYXRlZ29yeTogXCJkZXNlcnRcIiwgaWNvbjogXCIvZGVzZXJ0LnBuZ1wiIH0sXHJcbiAgICAgIF0ubWFwKCh7IG5hbWUsIGNhdGVnb3J5OiBjYXRlZ29yeUtleSwgaWNvbiB9KSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtjYXRlZ29yeUtleX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IF9zZXRDYXRlZ29yeShjYXRlZ29yeUtleSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTIgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIFxyXG4gICAgICAgICAgICBwLTQgcm91bmRlZC1sZyBcclxuICAgICAgICAgICAgJHtjYXRlZ29yeSA9PT0gY2F0ZWdvcnlLZXkgPyBcImJnLWFpcmJuYiB0ZXh0LXdoaXRlXCIgOiBcImJnLXdoaXRlIHRleHQtZ3JheS03MDBcIn1cclxuICAgICAgICAgICAgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZyBcclxuICAgICAgICAgICAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aWNvbn0gYWx0PXtgQ2F0ZWdvcnkgLSAke25hbWV9YH0gd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsInVzZVNlYXJjaE1vZGFsIiwiQ2F0ZWdvcmllcyIsInNlYXJjaE1vZGFsIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIl9zZXRDYXRlZ29yeSIsImNhdGVnb3J5S2V5IiwicXVlcnkiLCJjb3VudHJ5IiwiY2hlY2tJbiIsImNoZWNrT3V0IiwiZ3Vlc3RzIiwiYmVkcm9vbXMiLCJiYXRocm9vbXMiLCJjb25zb2xlIiwibG9nIiwic2V0UXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwiaWNvbiIsIm1hcCIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Categories.tsx\n"));

/***/ })

});