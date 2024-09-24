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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _hooks_useSearchModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useSearchModal */ \"(app-pages-browser)/./app/hooks/useSearchModal.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Categories = ()=>{\n    _s();\n    const searchModal = (0,_hooks_useSearchModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const _setCategory = (categoryKey)=>{\n        setCategory(categoryKey);\n        const query = {\n            country: searchModal.query.country,\n            checkIn: searchModal.query.checkIn,\n            checkOut: searchModal.query.checkOut,\n            guests: searchModal.query.guests,\n            bedrooms: searchModal.query.bedrooms,\n            bathrooms: searchModal.query.bathrooms,\n            category: categoryKey\n        };\n        console.log(\"Query being sent: \", query);\n        searchModal.setQuery(query);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-around py-4 bg-gray-100 rounded-lg shadow-lg\",\n        children: [\n            {\n                name: \"All\",\n                category: \"\",\n                icon: \"/farm.png\"\n            },\n            {\n                name: \"Beach\",\n                category: \"beach\",\n                icon: \"/beach.png\"\n            },\n            {\n                name: \"Golfing\",\n                category: \"golfing\",\n                icon: \"/golf.png\"\n            },\n            {\n                name: \"Cabins\",\n                category: \"cabins\",\n                icon: \"/cabin.png\"\n            },\n            {\n                name: \"Farm\",\n                category: \"farm\",\n                icon: \"/farm.png\"\n            },\n            {\n                name: \"Lake\",\n                category: \"lakeView\",\n                icon: \"/lake.png\"\n            },\n            {\n                name: \"Pool\",\n                category: \"pool\",\n                icon: \"/pool.png\"\n            },\n            {\n                name: \"Houseboat\",\n                category: \"houseboat\",\n                icon: \"/houseboat.png\"\n            },\n            {\n                name: \"Barn\",\n                category: \"barn\",\n                icon: \"/barn.png\"\n            },\n            {\n                name: \"Island\",\n                category: \"island\",\n                icon: \"/island.png\"\n            },\n            {\n                name: \"Desert\",\n                category: \"desert\",\n                icon: \"/desert.png\"\n            },\n            {\n                name: \"Cave\",\n                category: \"cave\",\n                icon: \"/cave.png\"\n            },\n            {\n                name: \"Tropical\",\n                category: \"cave\",\n                icon: \"/cave.png\"\n            }\n        ].map((param)=>{\n            let { name, category: categoryKey, icon } = param;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>_setCategory(categoryKey),\n                className: \"flex flex-col items-center space-y-2 cursor-pointer transition-all duration-300 \\n            p-4 rounded-lg \\n            \".concat(category === categoryKey ? \"bg-airbnb text-white\" : \"bg-white text-gray-700\", \"\\n            shadow-md hover:shadow-lg \\n            transform hover:scale-105\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: icon,\n                        alt: \"Category - \".concat(name),\n                        width: 30,\n                        height: 30\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\Categories.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm font-semibold\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\Categories.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, categoryKey, true, {\n                fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\Categories.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\SEM 4\\\\VacyStay\\\\vacystay\\\\app\\\\components\\\\Categories.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"aZ1GZlqP351VrXnucV6TyoOrh/Y=\", false, function() {\n    return [\n        _hooks_useSearchModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhdGVnb3JpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRWlDO0FBQ0Y7QUFDdUM7QUFFdEUsTUFBTUcsYUFBYTs7SUFDakIsTUFBTUMsY0FBY0YsaUVBQWNBO0lBQ2xDLE1BQU0sQ0FBQ0csVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNTyxlQUFlLENBQUNDO1FBQ3BCRixZQUFZRTtRQUVaLE1BQU1DLFFBQXFCO1lBQ3pCQyxTQUFTTixZQUFZSyxLQUFLLENBQUNDLE9BQU87WUFDbENDLFNBQVNQLFlBQVlLLEtBQUssQ0FBQ0UsT0FBTztZQUNsQ0MsVUFBVVIsWUFBWUssS0FBSyxDQUFDRyxRQUFRO1lBQ3BDQyxRQUFRVCxZQUFZSyxLQUFLLENBQUNJLE1BQU07WUFDaENDLFVBQVVWLFlBQVlLLEtBQUssQ0FBQ0ssUUFBUTtZQUNwQ0MsV0FBV1gsWUFBWUssS0FBSyxDQUFDTSxTQUFTO1lBQ3RDVixVQUFVRztRQUNaO1FBQ0FRLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JSO1FBQ2xDTCxZQUFZYyxRQUFRLENBQUNUO0lBQ3ZCO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7a0JBQ1o7WUFDQztnQkFBRUMsTUFBTTtnQkFBT2hCLFVBQVU7Z0JBQUlpQixNQUFNO1lBQVk7WUFDL0M7Z0JBQUVELE1BQU07Z0JBQVNoQixVQUFVO2dCQUFTaUIsTUFBTTtZQUFhO1lBQ3ZEO2dCQUFFRCxNQUFNO2dCQUFXaEIsVUFBVTtnQkFBV2lCLE1BQU07WUFBWTtZQUMxRDtnQkFBRUQsTUFBTTtnQkFBVWhCLFVBQVU7Z0JBQVVpQixNQUFNO1lBQWE7WUFDekQ7Z0JBQUVELE1BQU07Z0JBQVFoQixVQUFVO2dCQUFRaUIsTUFBTTtZQUFZO1lBQ3BEO2dCQUFFRCxNQUFNO2dCQUFRaEIsVUFBVTtnQkFBWWlCLE1BQU07WUFBWTtZQUN4RDtnQkFBRUQsTUFBTTtnQkFBUWhCLFVBQVU7Z0JBQVFpQixNQUFNO1lBQVk7WUFDcEQ7Z0JBQUVELE1BQU07Z0JBQWFoQixVQUFVO2dCQUFhaUIsTUFBTTtZQUFpQjtZQUNuRTtnQkFBRUQsTUFBTTtnQkFBUWhCLFVBQVU7Z0JBQVFpQixNQUFNO1lBQVk7WUFDcEQ7Z0JBQUVELE1BQU07Z0JBQVVoQixVQUFVO2dCQUFVaUIsTUFBTTtZQUFjO1lBQzFEO2dCQUFFRCxNQUFNO2dCQUFVaEIsVUFBVTtnQkFBVWlCLE1BQU07WUFBYztZQUMxRDtnQkFBRUQsTUFBTTtnQkFBUWhCLFVBQVU7Z0JBQVFpQixNQUFNO1lBQVk7WUFDcEQ7Z0JBQUVELE1BQU07Z0JBQVloQixVQUFVO2dCQUFRaUIsTUFBTTtZQUFZO1NBQ3pELENBQUNDLEdBQUcsQ0FBQztnQkFBQyxFQUFFRixJQUFJLEVBQUVoQixVQUFVRyxXQUFXLEVBQUVjLElBQUksRUFBRTtpQ0FDMUMsOERBQUNIO2dCQUVDSyxTQUFTLElBQU1qQixhQUFhQztnQkFDNUJZLFdBQVcsOEhBRXNFLE9BQTdFZixhQUFhRyxjQUFjLHlCQUF5QiwwQkFBeUI7O2tDQUlqRiw4REFBQ1Asa0RBQUtBO3dCQUFDd0IsS0FBS0g7d0JBQU1JLEtBQUssY0FBbUIsT0FBTEw7d0JBQVFNLE9BQU87d0JBQUlDLFFBQVE7Ozs7OztrQ0FDaEUsOERBQUNDO3dCQUFLVCxXQUFVO2tDQUF5QkM7Ozs7Ozs7ZUFUcENiOzs7Ozs7Ozs7OztBQWNmO0dBcERNTDs7UUFDZ0JELDZEQUFjQTs7O0tBRDlCQztBQXNETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9DYXRlZ29yaWVzLnRzeD83NGJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB1c2VTZWFyY2hNb2RhbCwgeyBTZWFyY2hRdWVyeSB9IGZyb20gXCIuLi9ob29rcy91c2VTZWFyY2hNb2RhbFwiO1xyXG5cclxuY29uc3QgQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hNb2RhbCA9IHVzZVNlYXJjaE1vZGFsKCk7XHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgX3NldENhdGVnb3J5ID0gKGNhdGVnb3J5S2V5OiBzdHJpbmcpID0+IHtcclxuICAgIHNldENhdGVnb3J5KGNhdGVnb3J5S2V5KTtcclxuXHJcbiAgICBjb25zdCBxdWVyeTogU2VhcmNoUXVlcnkgPSB7XHJcbiAgICAgIGNvdW50cnk6IHNlYXJjaE1vZGFsLnF1ZXJ5LmNvdW50cnksXHJcbiAgICAgIGNoZWNrSW46IHNlYXJjaE1vZGFsLnF1ZXJ5LmNoZWNrSW4sXHJcbiAgICAgIGNoZWNrT3V0OiBzZWFyY2hNb2RhbC5xdWVyeS5jaGVja091dCxcclxuICAgICAgZ3Vlc3RzOiBzZWFyY2hNb2RhbC5xdWVyeS5ndWVzdHMsXHJcbiAgICAgIGJlZHJvb21zOiBzZWFyY2hNb2RhbC5xdWVyeS5iZWRyb29tcyxcclxuICAgICAgYmF0aHJvb21zOiBzZWFyY2hNb2RhbC5xdWVyeS5iYXRocm9vbXMsXHJcbiAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeUtleSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhcIlF1ZXJ5IGJlaW5nIHNlbnQ6IFwiLCBxdWVyeSk7XHJcbiAgICBzZWFyY2hNb2RhbC5zZXRRdWVyeShxdWVyeSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1hcm91bmQgcHktNCBiZy1ncmF5LTEwMCByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICB7W1xyXG4gICAgICAgIHsgbmFtZTogXCJBbGxcIiwgY2F0ZWdvcnk6IFwiXCIsIGljb246IFwiL2Zhcm0ucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiQmVhY2hcIiwgY2F0ZWdvcnk6IFwiYmVhY2hcIiwgaWNvbjogXCIvYmVhY2gucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiR29sZmluZ1wiLCBjYXRlZ29yeTogXCJnb2xmaW5nXCIsIGljb246IFwiL2dvbGYucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiQ2FiaW5zXCIsIGNhdGVnb3J5OiBcImNhYmluc1wiLCBpY29uOiBcIi9jYWJpbi5wbmdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJGYXJtXCIsIGNhdGVnb3J5OiBcImZhcm1cIiwgaWNvbjogXCIvZmFybS5wbmdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJMYWtlXCIsIGNhdGVnb3J5OiBcImxha2VWaWV3XCIsIGljb246IFwiL2xha2UucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiUG9vbFwiLCBjYXRlZ29yeTogXCJwb29sXCIsIGljb246IFwiL3Bvb2wucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiSG91c2Vib2F0XCIsIGNhdGVnb3J5OiBcImhvdXNlYm9hdFwiLCBpY29uOiBcIi9ob3VzZWJvYXQucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiQmFyblwiLCBjYXRlZ29yeTogXCJiYXJuXCIsIGljb246IFwiL2Jhcm4ucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiSXNsYW5kXCIsIGNhdGVnb3J5OiBcImlzbGFuZFwiLCBpY29uOiBcIi9pc2xhbmQucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiRGVzZXJ0XCIsIGNhdGVnb3J5OiBcImRlc2VydFwiLCBpY29uOiBcIi9kZXNlcnQucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiQ2F2ZVwiLCBjYXRlZ29yeTogXCJjYXZlXCIsIGljb246IFwiL2NhdmUucG5nXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiVHJvcGljYWxcIiwgY2F0ZWdvcnk6IFwiY2F2ZVwiLCBpY29uOiBcIi9jYXZlLnBuZ1wiIH0sXHJcbiAgICAgIF0ubWFwKCh7IG5hbWUsIGNhdGVnb3J5OiBjYXRlZ29yeUtleSwgaWNvbiB9KSA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtjYXRlZ29yeUtleX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IF9zZXRDYXRlZ29yeShjYXRlZ29yeUtleSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTIgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIFxyXG4gICAgICAgICAgICBwLTQgcm91bmRlZC1sZyBcclxuICAgICAgICAgICAgJHtjYXRlZ29yeSA9PT0gY2F0ZWdvcnlLZXkgPyBcImJnLWFpcmJuYiB0ZXh0LXdoaXRlXCIgOiBcImJnLXdoaXRlIHRleHQtZ3JheS03MDBcIn1cclxuICAgICAgICAgICAgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZyBcclxuICAgICAgICAgICAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aWNvbn0gYWx0PXtgQ2F0ZWdvcnkgLSAke25hbWV9YH0gd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkXCI+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJbWFnZSIsInVzZVNlYXJjaE1vZGFsIiwiQ2F0ZWdvcmllcyIsInNlYXJjaE1vZGFsIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIl9zZXRDYXRlZ29yeSIsImNhdGVnb3J5S2V5IiwicXVlcnkiLCJjb3VudHJ5IiwiY2hlY2tJbiIsImNoZWNrT3V0IiwiZ3Vlc3RzIiwiYmVkcm9vbXMiLCJiYXRocm9vbXMiLCJjb25zb2xlIiwibG9nIiwic2V0UXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwiaWNvbiIsIm1hcCIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Categories.tsx\n"));

/***/ })

});