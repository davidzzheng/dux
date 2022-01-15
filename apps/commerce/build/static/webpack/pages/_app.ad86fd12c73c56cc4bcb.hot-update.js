self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "../../node_modules/next/dist/shared/lib/dynamic.js":
/*!**********************************************************!*\
  !*** ../../node_modules/next/dist/shared/lib/dynamic.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "../../node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "../../node_modules/next/dist/shared/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  var suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "../../node_modules/next/dist/shared/lib/loadable-context.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/next/dist/shared/lib/loadable-context.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = _react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "../../node_modules/next/dist/shared/lib/loadable.js":
/*!***********************************************************!*\
  !*** ../../node_modules/next/dist/shared/lib/loadable.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _classCallCheck = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "../../node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "../../node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _defineProperty = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "../../node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../../node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "../../node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "../../node_modules/next/dist/shared/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    webpack: null,
    modules: null,
    suspense: false
  }, options);

  if (opts.suspense) {
    opts.lazy = _react["default"].lazy(opts.loader);
  }

  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function' && "function" === 'function' && !opts.suspense) {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  function LoadableImpl(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription).useSubscription(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return _react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return _react["default"].createElement(resolve(state.loaded), props);
      } else {
        return null;
      }
    }, [props, state]);
  }

  _s(LoadableImpl, "JtITP7ezdiMOXETwxX2mQsR5YT8=", true);

  function LazyImpl(props, ref) {
    return _react["default"].createElement(opts.lazy, _objectSpread(_objectSpread({}, props), {}, {
      ref: ref
    }));
  }

  var LoadableComponent = opts.suspense ? LazyImpl : LoadableImpl;

  LoadableComponent.preload = function () {
    return !opts.suspense && init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return _react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts1 = this._opts;

      if (res.loading) {
        if (typeof opts1.delay === 'number') {
          if (opts1.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts1.delay);
          }
        }

        if (typeof opts1.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts1.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts1) {
  return createLoadableComponent(load, opts1);
}

_c = Loadable;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Loadable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_david_Documents_GitHub_warp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "../../node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/base.css */ "./styles/base.css");
/* harmony import */ var _styles_base_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_base_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\david\\Documents\\GitHub\\warp\\packages\\meerkats\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_david_Documents_GitHub_warp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var WalletProvider = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "contexts_MyWalletProvider_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../contexts/MyWalletProvider */ "./contexts/MyWalletProvider.tsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../contexts/MyWalletProvider */ "./contexts/MyWalletProvider.tsx")];
    },
    modules: ["_app.tsx -> " + "../contexts/MyWalletProvider"]
  }
});
_c2 = WalletProvider;

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(WalletProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_c3 = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c, _c2, _c3;

$RefreshReg$(_c, "WalletProvider$dynamic");
$RefreshReg$(_c2, "WalletProvider");
$RefreshReg$(_c3, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "../../node_modules/next/dynamic.js":
/*!******************************************!*\
  !*** ../../node_modules/next/dynamic.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "../../node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "../../node_modules/use-subscription/cjs/use-subscription.development.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "../../node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "../../node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "../../node_modules/use-subscription/index.js":
/*!****************************************************!*\
  !*** ../../node_modules/use-subscription/index.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "../../node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hZDg2ZmQxMmM3M2M1NmNjNGJjYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7Ozs7Ozs7QUFDYkEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsYUFBQSxHQUFnQkUsS0FBaEI7QUFDQUYsZUFBQSxHQUFrQkcsT0FBbEI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxnREFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLFNBQVMsR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsdUVBQUQsQ0FBUixDQUF0Qzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0csR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDLGVBQVNBO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBTUUsWUFBWSxRQUFsQjs7QUFDQSxTQUFTUixLQUFULENBQWVTLG1CQUFmLEVBQW9DQyxlQUFwQyxFQUFxRDtBQUNqRDtBQUNBLFNBQU9BLGVBQWUsQ0FBQ0MsT0FBdkI7QUFDQSxTQUFPRCxlQUFlLENBQUNFLE9BQXZCLENBSGlELENBSWpEOztBQUNBLE1BQUksQ0FBQ0osWUFBTCxFQUFtQjtBQUNmLFdBQU9DLG1CQUFtQixDQUFDQyxlQUFELENBQTFCO0FBQ0g7O0FBQ0QsTUFBTUcsT0FBTyxHQUFHSCxlQUFlLENBQUNJLE9BQWhDLENBUmlELENBU2pEOztBQUNBLFNBQU87QUFBQSxXQUFJLGFBQWNaLE1BQU0sV0FBTixDQUFlYSxhQUFmLENBQTZCRixPQUE3QixFQUFzQztBQUN2REcsTUFBQUEsS0FBSyxFQUFFLElBRGdEO0FBRXZEQyxNQUFBQSxTQUFTLEVBQUUsSUFGNEM7QUFHdkRDLE1BQUFBLFNBQVMsRUFBRSxLQUg0QztBQUl2REMsTUFBQUEsUUFB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ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS1jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSlcbiAgICA7XG59XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAoeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSk9PntcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zXG4gICAgICAgIDtcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmR5bmFtaWNPcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgY29uc3Qgc3VzcGVuc2VPcHRpb25zID0gbG9hZGFibGVPcHRpb25zO1xuICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMpIHtcbiAgICAgICAgLy8gRXJyb3IgaWYgcmVhY3Qgcm9vdCBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGFkZCBlcnJvciBkb2Mgd2hlbiB0aGlzIGZlYXR1cmUgaXMgc3RhYmxlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIHJldHVybiBsb2FkYWJsZUZuKHN1c3BlbnNlT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICAgICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Mb2FkYWJsZUNvbnRleHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgTG9hZGFibGVDb250ZXh0ID0gX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydHMuTG9hZGFibGVDb250ZXh0ID0gTG9hZGFibGVDb250ZXh0O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBMb2FkYWJsZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb250ZXh0Jztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9hZGFibGUtY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3VzZVN1YnNjcmlwdGlvbiA9IHJlcXVpcmUoXCJ1c2Utc3Vic2NyaXB0aW9uXCIpO1xudmFyIF9sb2FkYWJsZUNvbnRleHQgPSByZXF1aXJlKFwiLi9sb2FkYWJsZS1jb250ZXh0XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgQUxMX0lOSVRJQUxJWkVSUyA9IFtdO1xuY29uc3QgUkVBRFlfSU5JVElBTElaRVJTID0gW107XG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGxvYWQobG9hZGVyKSB7XG4gICAgbGV0IHByb21pc2UgPSBsb2FkZXIoKTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGxvYWRlZDogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICB9O1xuICAgIHN0YXRlLnByb21pc2UgPSBwcm9taXNlLnRoZW4oKGxvYWRlZCk9PntcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5sb2FkZWQgPSBsb2FkZWQ7XG4gICAgICAgIHJldHVybiBsb2FkZWQ7XG4gICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IGVycjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHJlc29sdmUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iai5kZWZhdWx0IDogb2JqO1xufVxuZnVuY3Rpb24gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZEZuLCBvcHRpb25zKSB7XG4gICAgbGV0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbG9hZGVyOiBudWxsLFxuICAgICAgICBsb2FkaW5nOiBudWxsLFxuICAgICAgICBkZWxheTogMjAwLFxuICAgICAgICB0aW1lb3V0OiBudWxsLFxuICAgICAgICB3ZWJwYWNrOiBudWxsLFxuICAgICAgICBtb2R1bGVzOiBudWxsLFxuICAgICAgICBzdXNwZW5zZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcbiAgICBpZiAob3B0cy5zdXNwZW5zZSkge1xuICAgICAgICBvcHRzLmxhenkgPSBfcmVhY3QuZGVmYXVsdC5sYXp5KG9wdHMubG9hZGVyKTtcbiAgICB9XG4gICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IG5ldyBMb2FkYWJsZVN1YnNjcmlwdGlvbihsb2FkRm4sIG9wdHMpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRWYWx1ZTogc3ViLmdldEN1cnJlbnRWYWx1ZS5iaW5kKHN1YiksXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlOiBzdWIuc3Vic2NyaWJlLmJpbmQoc3ViKSxcbiAgICAgICAgICAgICAgICByZXRyeTogc3ViLnJldHJ5LmJpbmQoc3ViKSxcbiAgICAgICAgICAgICAgICBwcm9taXNlOiBzdWIucHJvbWlzZS5iaW5kKHN1YilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi5wcm9taXNlKCk7XG4gICAgfVxuICAgIC8vIFNlcnZlciBvbmx5XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmICFvcHRzLnN1c3BlbnNlKSB7XG4gICAgICAgIEFMTF9JTklUSUFMSVpFUlMucHVzaChpbml0KTtcbiAgICB9XG4gICAgLy8gQ2xpZW50IG9ubHlcbiAgICBpZiAoIWluaXRpYWxpemVkICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvcHRzLndlYnBhY2sgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUucmVzb2x2ZVdlYWsgPT09ICdmdW5jdGlvbicgJiYgIW9wdHMuc3VzcGVuc2UpIHtcbiAgICAgICAgY29uc3QgbW9kdWxlSWRzID0gb3B0cy53ZWJwYWNrKCk7XG4gICAgICAgIFJFQURZX0lOSVRJQUxJWkVSUy5wdXNoKChpZHMpPT57XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIG1vZHVsZUlkcyl7XG4gICAgICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKG1vZHVsZUlkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBMb2FkYWJsZUltcGwocHJvcHMsIHJlZikge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9sb2FkYWJsZUNvbnRleHQuTG9hZGFibGVDb250ZXh0KTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSAoMCwgX3VzZVN1YnNjcmlwdGlvbikudXNlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIF9yZWFjdC5kZWZhdWx0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKT0+KHtcbiAgICAgICAgICAgICAgICByZXRyeTogc3Vic2NyaXB0aW9uLnJldHJ5XG4gICAgICAgICAgICB9KVxuICAgICAgICAsIFtdKTtcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKSB7XG4gICAgICAgICAgICBvcHRzLm1vZHVsZXMuZm9yRWFjaCgobW9kdWxlTmFtZSk9PntcbiAgICAgICAgICAgICAgICBjb250ZXh0KG1vZHVsZU5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgICAgIGlmIChzdGF0ZS5sb2FkaW5nIHx8IHN0YXRlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQob3B0cy5sb2FkaW5nLCB7XG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzogc3RhdGUubG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgcGFzdERlbGF5OiBzdGF0ZS5wYXN0RGVsYXksXG4gICAgICAgICAgICAgICAgICAgIHRpbWVkT3V0OiBzdGF0ZS50aW1lZE91dCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICAgICAgICAgICAgICAgICAgICByZXRyeTogc3Vic2NyaXB0aW9uLnJldHJ5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlc29sdmUoc3RhdGUubG9hZGVkKSwgcHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW1xuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICBzdGF0ZVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gTGF6eUltcGwocHJvcHMsIHJlZikge1xuICAgICAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChvcHRzLmxhenksIHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgcmVmXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IG9wdHMuc3VzcGVuc2UgPyBMYXp5SW1wbCA6IExvYWRhYmxlSW1wbDtcbiAgICBMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkID0gKCk9PiFvcHRzLnN1c3BlbnNlICYmIGluaXQoKVxuICAgIDtcbiAgICBMb2FkYWJsZUNvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdMb2FkYWJsZUNvbXBvbmVudCc7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoTG9hZGFibGVDb21wb25lbnQpO1xufVxuY2xhc3MgTG9hZGFibGVTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGxvYWRGbiwgb3B0cyl7XG4gICAgICAgIHRoaXMuX2xvYWRGbiA9IGxvYWRGbjtcbiAgICAgICAgdGhpcy5fb3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fZGVsYXkgPSBudWxsO1xuICAgICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXRyeSgpO1xuICAgIH1cbiAgICBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzLnByb21pc2U7XG4gICAgfVxuICAgIHJldHJ5KCkge1xuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XG4gICAgICAgIHRoaXMuX3JlcyA9IHRoaXMuX2xvYWRGbih0aGlzLl9vcHRzLmxvYWRlcik7XG4gICAgICAgIHRoaXMuX3N0YXRlID0ge1xuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IF9yZXM6IHJlcyAsIF9vcHRzOiBvcHRzMSAgfSA9IHRoaXM7XG4gICAgICAgIGlmIChyZXMubG9hZGluZykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRzMS5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0czEuZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUucGFzdERlbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZWxheSA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzdERlbGF5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0czEuZGVsYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0czEudGltZW91dCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZWRPdXQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgb3B0czEudGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVzLnByb21pc2UudGhlbigoKT0+e1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xuICAgICAgICB9KS5jYXRjaCgoX2Vycik9PntcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSh7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfdXBkYXRlKHBhcnRpYWwpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi50aGlzLl9zdGF0ZSxcbiAgICAgICAgICAgIGVycm9yOiB0aGlzLl9yZXMuZXJyb3IsXG4gICAgICAgICAgICBsb2FkZWQ6IHRoaXMuX3Jlcy5sb2FkZWQsXG4gICAgICAgICAgICBsb2FkaW5nOiB0aGlzLl9yZXMubG9hZGluZyxcbiAgICAgICAgICAgIC4uLnBhcnRpYWxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKT0+Y2FsbGJhY2soKVxuICAgICAgICApO1xuICAgIH1cbiAgICBfY2xlYXJUaW1lb3V0cygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICAgIH1cbiAgICBnZXRDdXJyZW50VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIExvYWRhYmxlKG9wdHMxKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWQsIG9wdHMxKTtcbn1cbmZ1bmN0aW9uIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKSB7XG4gICAgbGV0IHByb21pc2VzID0gW107XG4gICAgd2hpbGUoaW5pdGlhbGl6ZXJzLmxlbmd0aCl7XG4gICAgICAgIGxldCBpbml0ID0gaW5pdGlhbGl6ZXJzLnBvcCgpO1xuICAgICAgICBwcm9taXNlcy5wdXNoKGluaXQoaWRzKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKT0+e1xuICAgICAgICBpZiAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycywgaWRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuTG9hZGFibGUucHJlbG9hZEFsbCA9ICgpPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlSW5pdGlhbGl6ZXJzLCByZWplY3QpPT57XG4gICAgICAgIGZsdXNoSW5pdGlhbGl6ZXJzKEFMTF9JTklUSUFMSVpFUlMpLnRoZW4ocmVzb2x2ZUluaXRpYWxpemVycywgcmVqZWN0KTtcbiAgICB9KTtcbn07XG5Mb2FkYWJsZS5wcmVsb2FkUmVhZHkgPSAoaWRzID0gW10pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJlbG9hZCk9PntcbiAgICAgICAgY29uc3QgcmVzID0gKCk9PntcbiAgICAgICAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJlbG9hZCgpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBhbHdheXMgd2lsbCByZXNvbHZlLCBlcnJvcnMgc2hvdWxkIGJlIGhhbmRsZWQgd2l0aGluIGxvYWRpbmcgVUlzLlxuICAgICAgICBmbHVzaEluaXRpYWxpemVycyhSRUFEWV9JTklUSUFMSVpFUlMsIGlkcykudGhlbihyZXMsIHJlcyk7XG4gICAgfSk7XG59O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkgPSBMb2FkYWJsZS5wcmVsb2FkUmVhZHk7XG59XG52YXIgX2RlZmF1bHQgPSBMb2FkYWJsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9iYXNlLmNzc1wiO1xuXG5jb25zdCBXYWxsZXRQcm92aWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29udGV4dHMvTXlXYWxsZXRQcm92aWRlclwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V2FsbGV0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9XYWxsZXRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vXG4vLyBJbiBvcmRlciB0byBhdm9pZCByZW1vdmluZyBhbmQgcmUtYWRkaW5nIHN1YnNjcmlwdGlvbnMgZWFjaCB0aW1lIHRoaXMgaG9vayBpcyBjYWxsZWQsXG4vLyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBob29rIHNob3VsZCBiZSBtZW1vaXplZCBpbiBzb21lIHdheeKAk1xuLy8gZWl0aGVyIGJ5IHdyYXBwaW5nIHRoZSBlbnRpcmUgcGFyYW1zIG9iamVjdCB3aXRoIHVzZU1lbW8oKVxuLy8gb3IgYnkgd3JhcHBpbmcgdGhlIGluZGl2aWR1YWwgY2FsbGJhY2tzIHdpdGggdXNlQ2FsbGJhY2soKS5cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKF9yZWYpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IF9yZWYuZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlID0gX3JlZi5zdWJzY3JpYmU7XG5cbiAgLy8gUmVhZCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIG91ciBzdWJzY3JpcHRpb24uXG4gIC8vIFdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gYWxzbyBzdG9yZSB0aGUgaG9vayBwYXJhbXMgc28gdGhhdCB3ZSBjYW4gY2hlY2sgZm9yIHN0YWxlbmVzcy5cbiAgLy8gKFNlZSB0aGUgY29tbWVudCBpbiBjaGVja0ZvclVwZGF0ZXMoKSBiZWxvdyBmb3IgbW9yZSBpbmZvLilcbiAgdmFyIF91c2VTdGF0ZSA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiBnZXRDdXJyZW50VmFsdWUoKVxuICAgIH07XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWVUb1JldHVybiA9IHN0YXRlLnZhbHVlOyAvLyBJZiBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZCBzaW5jZSBvdXIgbGFzdCByZW5kZXIsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIGl0cyBjdXJyZW50IHZhbHVlLlxuXG4gIGlmIChzdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBzdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgIC8vIElmIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZCwgd2UnbGwgc2NoZWR1bGUgYW5vdGhlciB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIHZhbHVlVG9SZXR1cm4gPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IHZhbHVlVG9SZXR1cm5cbiAgICB9KTtcbiAgfSAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHZhbHVlIGZvciB0aGlzIGhvb2sgaW4gUmVhY3QgRGV2VG9vbHMuXG5cblxuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pOyAvLyBJdCBpcyBpbXBvcnRhbnQgbm90IHRvIHN1YnNjcmliZSB3aGlsZSByZW5kZXJpbmcgYmVjYXVzZSB0aGlzIGNhbiBsZWFkIHRvIG1lbW9yeSBsZWFrcy5cbiAgLy8gKExlYXJuIG1vcmUgYXQgcmVhY3Rqcy5vcmcvZG9jcy9zdHJpY3QtbW9kZS5odG1sI2RldGVjdGluZy11bmV4cGVjdGVkLXNpZGUtZWZmZWN0cylcbiAgLy8gSW5zdGVhZCwgd2Ugd2FpdCB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHRvIGF0dGFjaCBvdXIgaGFuZGxlci5cbiAgLy9cbiAgLy8gV2UgaW50ZW50aW9uYWxseSB1c2UgYSBwYXNzaXZlIGVmZmVjdCAodXNlRWZmZWN0KSByYXRoZXIgdGhhbiBhIHN5bmNocm9ub3VzIG9uZSAodXNlTGF5b3V0RWZmZWN0KVxuICAvLyBzbyB0aGF0IHdlIGRvbid0IHN0cmV0Y2ggdGhlIGNvbW1pdCBwaGFzZS5cbiAgLy8gVGhpcyBhbHNvIGhhcyBhbiBhZGRlZCBiZW5lZml0IHdoZW4gbXVsdGlwbGUgY29tcG9uZW50cyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc2FtZSBzb3VyY2U6XG4gIC8vIEl0IGFsbG93cyBlYWNoIG9mIHRoZSBldmVudCBoYW5kbGVycyB0byBzYWZlbHkgc2NoZWR1bGUgd29yayB3aXRob3V0IHBvdGVudGlhbGx5IHJlbW92aW5nIGFuIGFub3RoZXIgaGFuZGxlci5cbiAgLy8gKExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2sweXZyNTk3MG8pXG5cbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcblxuICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZXZlbiBhZnRlciBiZWluZyB1bnN1YnNjcmliZWQsXG4gICAgICAvLyBpZiBpdCdzIHJlbW92ZWQgYXMgYSByZXN1bHQgb2YgYSBzdWJzY3JpcHRpb24gZXZlbnQvdXBkYXRlLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBSZWFjdCB3aWxsIGxvZyBhIERFViB3YXJuaW5nIGFib3V0IGFuIHVwZGF0ZSBmcm9tIGFuIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBjYW4gYXZvaWQgdHJpZ2dlcmluZyB0aGF0IHdhcm5pbmcgd2l0aCB0aGlzIGNoZWNrLlxuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgdXNlIGEgc3RhdGUgdXBkYXRlciBmdW5jdGlvbiB0byBhdm9pZCBzY2hlZHVsaW5nIHdvcmsgZm9yIGEgc3RhbGUgc291cmNlLlxuICAgICAgLy8gSG93ZXZlciBpdCdzIGltcG9ydGFudCB0byBlYWdlcmx5IHJlYWQgdGhlIGN1cnJlbnRseSB2YWx1ZSxcbiAgICAgIC8vIHNvIHRoYXQgYWxsIHNjaGVkdWxlZCB3b3JrIHNoYXJlcyB0aGUgc2FtZSB2YWx1ZSAoaW4gdGhlIGV2ZW50IG9mIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMpLlxuICAgICAgLy8gVGhpcyBhdm9pZHMgdmlzdWFsIFwidGVhcmluZ1wiIHdoZW4gYSBtdXRhdGlvbiBoYXBwZW5zIGR1cmluZyBhIChjb25jdXJyZW50KSByZW5kZXIuXG5cblxuICAgICAgdmFyIHZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIC8vIElnbm9yZSB2YWx1ZXMgZnJvbSBzdGFsZSBzb3VyY2VzIVxuICAgICAgICAvLyBTaW5jZSB3ZSBzdWJzY3JpYmUgYW4gdW5zdWJzY3JpYmUgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGZvciBhIHN0YWxlIChwcmV2aW91cykgc3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGF2b2lkcyBzY2hlZHVsaW5nIGFuIHVwZGF0ZSBmb3IgdGhhdCBzdGFsZSBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChwcmV2U3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgcHJldlN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSAvLyBTb21lIHN1YnNjcmlwdGlvbnMgd2lsbCBhdXRvLWludm9rZSB0aGUgaGFuZGxlciwgZXZlbiBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgbm8gdXBkYXRlIGlzIG5lZWRlZC5cbiAgICAgICAgLy8gUmV0dXJuIHN0YXRlIGFzLWlzIHNvIFJlYWN0IGNhbiBiYWlsIG91dCBhbmQgYXZvaWQgYW4gdW5uZWNlc3NhcnkgcmVuZGVyLlxuXG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoY2hlY2tGb3JVcGRhdGVzKTsgLy8gQmVjYXVzZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBhbiB1cGRhdGUgaGFzIG9jY3VycmVkIGJldHdlZW4gcmVuZGVyIGFuZCBvdXIgZWZmZWN0IGhhbmRsZXIuXG4gICAgLy8gQ2hlY2sgZm9yIHRoaXMgYW5kIHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB3b3JrIGhhcyBvY2N1cnJlZC5cblxuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtnZXRDdXJyZW50VmFsdWUsIHN1YnNjcmliZV0pOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgZm9yIG91ciBjYWxsZXIgdG8gdXNlIHdoaWxlIHJlbmRlcmluZy5cblxuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cblxuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJub1NTUiIsImR5bmFtaWMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJzdXNwZW5zZU9wdGlvbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMiLCJfX05FWFRfUkVBQ1RfUk9PVCIsInN1c3BlbnNlIiwiRXJyb3IiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciIsIkxvYWRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIl91c2VTdWJzY3JpcHRpb24iLCJfbG9hZGFibGVDb250ZXh0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwibG9hZCIsInByb21pc2UiLCJzdGF0ZSIsImxvYWRlZCIsInRoZW4iLCJlcnIiLCJyZXNvbHZlIiwiY3JlYXRlTG9hZGFibGVDb21wb25lbnQiLCJsb2FkRm4iLCJvcHRzIiwiYXNzaWduIiwiZGVsYXkiLCJ0aW1lb3V0IiwibGF6eSIsInN1YnNjcmlwdGlvbiIsImluaXQiLCJzdWIiLCJMb2FkYWJsZVN1YnNjcmlwdGlvbiIsImdldEN1cnJlbnRWYWx1ZSIsImJpbmQiLCJzdWJzY3JpYmUiLCJyZXRyeSIsInB1c2giLCJyZXNvbHZlV2VhayIsIm1vZHVsZUlkcyIsImlkcyIsIm1vZHVsZUlkIiwiaW5kZXhPZiIsIkxvYWRhYmxlSW1wbCIsInByb3BzIiwicmVmIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdWJzY3JpcHRpb24iLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm1vZHVsZU5hbWUiLCJ1c2VNZW1vIiwiTGF6eUltcGwiLCJMb2FkYWJsZUNvbXBvbmVudCIsInByZWxvYWQiLCJmb3J3YXJkUmVmIiwiX2xvYWRGbiIsIl9vcHRzIiwiX2NhbGxiYWNrcyIsIlNldCIsIl9kZWxheSIsIl90aW1lb3V0IiwiX3JlcyIsIl9jbGVhclRpbWVvdXRzIiwiX3N0YXRlIiwicmVzIiwib3B0czEiLCJzZXRUaW1lb3V0IiwiX3VwZGF0ZSIsIl9lcnIiLCJwYXJ0aWFsIiwiY2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJhZGQiLCJMb2FkYWJsZSIsImZsdXNoSW5pdGlhbGl6ZXJzIiwiaW5pdGlhbGl6ZXJzIiwicHJvbWlzZXMiLCJsZW5ndGgiLCJwb3AiLCJhbGwiLCJwcmVsb2FkQWxsIiwicmVzb2x2ZUluaXRpYWxpemVycyIsInJlamVjdCIsInByZWxvYWRSZWFkeSIsInJlc29sdmVQcmVsb2FkIiwid2luZG93IiwiX19ORVhUX1BSRUxPQURSRUFEWSIsIl9kZWZhdWx0IiwiV2FsbGV0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=