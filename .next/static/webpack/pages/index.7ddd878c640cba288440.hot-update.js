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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _home_skamy_proyectos_eth_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_skamy_proyectos_eth_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_skamy_proyectos_eth_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_skamy_proyectos_eth_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"./node_modules/@material-ui/core/esm/CssBaseline/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_WhiteTextTypography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WhiteTextTypography */ \"./components/WhiteTextTypography.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/skamy/proyectos/eth/website/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {\n  return {\n    icon: {\n      marginRight: theme.spacing(2)\n    },\n    heroContent: {\n      backgroundColor: theme.palette.background[\"default\"],\n      padding: theme.spacing(8, 0, 6)\n    },\n    paragraph: {\n      marginTop: theme.spacing(5)\n    }\n  };\n});\nvar cards = [1, 2];\nfunction Index() {\n  _s();\n\n  var classes = useStyles();\n\n  function loadBlockChain() {\n    return _loadBlockChain.apply(this, arguments);\n  }\n\n  function _loadBlockChain() {\n    _loadBlockChain = (0,_home_skamy_proyectos_eth_website_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_home_skamy_proyectos_eth_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var provider, currentAccount, network;\n      return _home_skamy_proyectos_eth_website_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(window.ethereum);\n              _context.next = 3;\n              return provider.getSigner();\n\n            case 3:\n              currentAccount = _context.sent;\n              _context.next = 6;\n              return provider.getNetwork();\n\n            case 6:\n              network = _context.sent;\n              console.log(network);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _loadBlockChain.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Container, {\n        maxWidth: \"md\",\n        style: {\n          marginTop: \"50px\"\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n          container: true,\n          height: \"50%\",\n          spacing: 2,\n          justifyContent: \"space-between\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n            item: true,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_WhiteTextTypography__WEBPACK_IMPORTED_MODULE_3__.default, {\n              component: \"h3\",\n              variant: \"h3\",\n              align: \"left\",\n              color: \"textPrimary\",\n              children: \"rLOOT\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_WhiteTextTypography__WEBPACK_IMPORTED_MODULE_3__.default, {\n              variant: \"h6\",\n              align: \"left\",\n              color: \"textSecondary\",\n              gutterBottom: true,\n              children: \"random loot minting system\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n            item: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {\n              variant: \"contained\",\n              onClick: loadBlockChain,\n              children: \" Connect \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n            container: true,\n            spacing: 2,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n              item: true,\n              xs: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                variant: \"contained\",\n                children: \"Buy ticket\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n              item: true,\n              xs: 2,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Chip, {\n                label: \"Current raffle  0\",\n                variant: \"outlined\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Index, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURixlQVlFLDhEQUFDLG9EQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFnQixtQkFBTyxFQUFFLENBQXpCO0FBQUEsb0NBQ0UsOERBQUMsb0RBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxDQUFmO0FBQUEscUNBQ0UsOERBQUMsc0RBQUQ7QUFBUSx1QkFBTyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFLDhEQUFDLG9EQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLGdCQUFFLEVBQUUsQ0FBZjtBQUFBLHFDQUNFLDhEQUFDLG9EQUFEO0FBQU0scUJBQUssRUFBQyxtQkFBWjtBQUFnQyx1QkFBTyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBOEJJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBNUN1QkY7VUFDTmI7OztLQURNYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgQnV0dG9uLCBDaGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5pbXBvcnQgV2hpdGVUZXh0VHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1doaXRlVGV4dFR5cG9ncmFwaHknO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaWNvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBoZXJvQ29udGVudDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgfSxcbiAgcGFyYWdyYXBoOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxuICB9XG59KSk7XG5cbmNvbnN0IGNhcmRzID0gWzEsIDJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvYWRCbG9ja0NoYWluKCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSlcbiAgICBjb25zdCBjdXJyZW50QWNjb3VudCA9ICBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBuZXR3b3JrID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpXG4gICAgY29uc29sZS5sb2cobmV0d29yaykgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiNTBweFwifX0+XG5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaGVpZ2h0PVwiNTAlXCIgc3BhY2luZz17Mn0ganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICA8V2hpdGVUZXh0VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoM1wiIGFsaWduPVwibGVmdFwiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICByTE9PVFxuICAgICAgICAgICAgICA8L1doaXRlVGV4dFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxXaGl0ZVRleHRUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGFsaWduPVwibGVmdFwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICByYW5kb20gbG9vdCBtaW50aW5nIHN5c3RlbVxuICAgICAgICAgICAgICA8L1doaXRlVGV4dFR5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtsb2FkQmxvY2tDaGFpbn0+IENvbm5lY3QgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPkJ1eSB0aWNrZXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cbiAgICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD1cIkN1cnJlbnQgcmFmZmxlICAwXCIgdmFyaWFudD1cIm91dGxpbmVkXCIvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ3NzQmFzZWxpbmUiLCJtYWtlU3R5bGVzIiwiQ29udGFpbmVyIiwiR3JpZCIsIkJ1dHRvbiIsIkNoaXAiLCJldGhlcnMiLCJXaGl0ZVRleHRUeXBvZ3JhcGh5IiwiSGVhZGVyIiwiRm9vdGVyIiwidXNlU3R5bGVzIiwidGhlbWUiLCJpY29uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaGVyb0NvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJwYXJhZ3JhcGgiLCJtYXJnaW5Ub3AiLCJjYXJkcyIsIkluZGV4IiwiY2xhc3NlcyIsImxvYWRCbG9ja0NoYWluIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImdldFNpZ25lciIsImN1cnJlbnRBY2NvdW50IiwiZ2V0TmV0d29yayIsIm5ldHdvcmsiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});