"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CurrentBatchLabel.js":
/*!*****************************************!*\
  !*** ./components/CurrentBatchLabel.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CurrentBatchLabel; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _WhiteTextTypography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhiteTextTypography */ \"./components/WhiteTextTypography.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/skamy/proyectos/eth/website/components/CurrentBatchLabel.js\";\n\n\n\n\n\nvar StyledBadge = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.styled)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Badge)(function (_ref) {\n  var theme = _ref.theme;\n  return {\n    '& .MuiBadge-badge': {\n      right: -20,\n      top: 16,\n      border: \"2px solid \".concat(theme.palette.background.paper),\n      padding: '0 4px',\n      marginLeft: '30px'\n    }\n  };\n});\nfunction CurrentBatchLabel() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    item: true,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledBadge, {\n      color: \"secondary\",\n      badgeContent: 10,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_WhiteTextTypography__WEBPACK_IMPORTED_MODULE_1__.default, {\n        children: \"Current Raffle\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n_c = CurrentBatchLabel;\n\nvar _c;\n\n$RefreshReg$(_c, \"CurrentBatchLabel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1cnJlbnRCYXRjaExhYmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNTSxXQUFXLEdBQUdGLGdFQUFNLENBQUNGLG9EQUFELENBQU4sQ0FBYztBQUFBLE1BQUdLLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWdCO0FBQ2hELHlCQUFxQjtBQUNuQkMsTUFBQUEsS0FBSyxFQUFFLENBQUMsRUFEVztBQUVuQkMsTUFBQUEsR0FBRyxFQUFFLEVBRmM7QUFHbkJDLE1BQUFBLE1BQU0sc0JBQWVILEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxVQUFkLENBQXlCQyxLQUF4QyxDQUhhO0FBSW5CQyxNQUFBQSxPQUFPLEVBQUUsT0FKVTtBQUtuQkMsTUFBQUEsVUFBVSxFQUFFO0FBTE87QUFEMkIsR0FBaEI7QUFBQSxDQUFkLENBQXBCO0FBVWUsU0FBU0MsaUJBQVQsR0FBNkI7QUFFMUMsc0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQSwyQkFDRSw4REFBQyxXQUFEO0FBQ0EsV0FBSyxFQUFDLFdBRE47QUFFQSxrQkFBWSxFQUFFLEVBRmQ7QUFBQSw2QkFJRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDtLQWR1QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdXJyZW50QmF0Y2hMYWJlbC5qcz8xZDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkLCBCYWRnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHN0eWxlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgV2hpdGVUZXh0VHlwb2dyYXBoeSBmcm9tICcuL1doaXRlVGV4dFR5cG9ncmFwaHknO1xuXG5cbmNvbnN0IFN0eWxlZEJhZGdlID0gc3R5bGVkKEJhZGdlKSgoeyB0aGVtZSB9KSA9PiAoe1xuICAnJiAuTXVpQmFkZ2UtYmFkZ2UnOiB7XG4gICAgcmlnaHQ6IC0yMCxcbiAgICB0b3A6IDE2LFxuICAgIGJvcmRlcjogYDJweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcn1gLFxuICAgIHBhZGRpbmc6ICcwIDRweCcsXG4gICAgbWFyZ2luTGVmdDogJzMwcHgnXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnJlbnRCYXRjaExhYmVsKCkge1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgaXRlbT5cbiAgICAgIDxTdHlsZWRCYWRnZVxuICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgYmFkZ2VDb250ZW50PXsxMH1cbiAgICAgID5cbiAgICAgICAgPFdoaXRlVGV4dFR5cG9ncmFwaHk+XG4gICAgICAgICAgQ3VycmVudCBSYWZmbGVcbiAgICAgICAgPC9XaGl0ZVRleHRUeXBvZ3JhcGh5PlxuICAgICAgPC9TdHlsZWRCYWRnZT5cbiAgICA8L0dyaWQ+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIkJhZGdlIiwibWFrZVN0eWxlcyIsInN0eWxlZCIsIldoaXRlVGV4dFR5cG9ncmFwaHkiLCJTdHlsZWRCYWRnZSIsInRoZW1lIiwicmlnaHQiLCJ0b3AiLCJib3JkZXIiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJDdXJyZW50QmF0Y2hMYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CurrentBatchLabel.js\n");

/***/ })

});