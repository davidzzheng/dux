"use strict";
exports.id = "contexts_MyWalletProvider_tsx";
exports.ids = ["contexts_MyWalletProvider_tsx"];
exports.modules = {

/***/ "./contexts/MyWalletProvider.tsx":
/*!***************************************!*\
  !*** ./contexts/MyWalletProvider.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "../../node_modules/@solana/wallet-adapter-react/lib/index.js");
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ "../../node_modules/@solana/wallet-adapter-wallets/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\david\\Documents\\GitHub\\warp\\packages\\meerkats\\contexts\\MyWalletProvider.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyWalletProvider(props) {
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [(0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getPhantomWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getSolflareWallet)(), (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getSolletWallet)()], []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.WalletProvider, _objectSpread({
    wallets: wallets
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyWalletProvider);

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-base/lib/adapter.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-base/lib/adapter.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitter": () => (/* reexport default from dynamic */ eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "BaseWalletAdapter": () => (/* binding */ BaseWalletAdapter),
/* harmony export */   "WalletAdapterNetwork": () => (/* binding */ WalletAdapterNetwork)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);


class BaseWalletAdapter extends (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()) {}
var WalletAdapterNetwork;

(function (WalletAdapterNetwork) {
  WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
  WalletAdapterNetwork["Testnet"] = "testnet";
  WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-base/lib/errors.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-base/lib/errors.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletError": () => (/* binding */ WalletError),
/* harmony export */   "WalletNotFoundError": () => (/* binding */ WalletNotFoundError),
/* harmony export */   "WalletNotInstalledError": () => (/* binding */ WalletNotInstalledError),
/* harmony export */   "WalletNotReadyError": () => (/* binding */ WalletNotReadyError),
/* harmony export */   "WalletConnectionError": () => (/* binding */ WalletConnectionError),
/* harmony export */   "WalletDisconnectedError": () => (/* binding */ WalletDisconnectedError),
/* harmony export */   "WalletDisconnectionError": () => (/* binding */ WalletDisconnectionError),
/* harmony export */   "WalletAccountError": () => (/* binding */ WalletAccountError),
/* harmony export */   "WalletPublicKeyError": () => (/* binding */ WalletPublicKeyError),
/* harmony export */   "WalletKeypairError": () => (/* binding */ WalletKeypairError),
/* harmony export */   "WalletNotConnectedError": () => (/* binding */ WalletNotConnectedError),
/* harmony export */   "WalletSendTransactionError": () => (/* binding */ WalletSendTransactionError),
/* harmony export */   "WalletSignMessageError": () => (/* binding */ WalletSignMessageError),
/* harmony export */   "WalletSignTransactionError": () => (/* binding */ WalletSignTransactionError),
/* harmony export */   "WalletTimeoutError": () => (/* binding */ WalletTimeoutError),
/* harmony export */   "WalletWindowBlockedError": () => (/* binding */ WalletWindowBlockedError),
/* harmony export */   "WalletWindowClosedError": () => (/* binding */ WalletWindowClosedError)
/* harmony export */ });
class WalletError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }

}
class WalletNotFoundError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotFoundError';
  }

}
class WalletNotInstalledError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotInstalledError';
  }

}
class WalletNotReadyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotReadyError';
  }

}
class WalletConnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletConnectionError';
  }

}
class WalletDisconnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectedError';
  }

}
class WalletDisconnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectionError';
  }

}
class WalletAccountError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletAccountError';
  }

}
class WalletPublicKeyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletPublicKeyError';
  }

}
class WalletKeypairError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletKeypairError';
  }

}
class WalletNotConnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotConnectedError';
  }

}
class WalletSendTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSendTransactionError';
  }

}
class WalletSignMessageError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignMessageError';
  }

}
class WalletSignTransactionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletSignTransactionError';
  }

}
class WalletTimeoutError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletTimeoutError';
  }

}
class WalletWindowBlockedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowBlockedError';
  }

}
class WalletWindowClosedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowClosedError';
  }

}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-base/lib/index.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-base/lib/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "../../node_modules/@solana/wallet-adapter-base/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "../../node_modules/@solana/wallet-adapter-base/lib/errors.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _errors__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _errors__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _poll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poll */ "../../node_modules/@solana/wallet-adapter-base/lib/poll.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _poll__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _poll__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _signer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signer */ "../../node_modules/@solana/wallet-adapter-base/lib/signer.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _signer__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _signer__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-base/lib/poll.js":
/*!******************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-base/lib/poll.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "poll": () => (/* binding */ poll),
/* harmony export */   "pollUntilReady": () => (/* binding */ pollUntilReady)
/* harmony export */ });
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function poll(callback, interval, count) {
  if (count > 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
      const done = yield callback();
      if (!done) poll(callback, interval, count - 1);
    }), interval);
  }
}
function pollUntilReady(adapter, pollInterval, pollCount) {
  poll(() => {
    const {
      ready
    } = adapter;

    if (ready) {
      if (!adapter.emit('ready')) {
        console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
      }
    }

    return ready;
  }, pollInterval, pollCount);
}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-base/lib/signer.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-base/lib/signer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseSignerWalletAdapter": () => (/* binding */ BaseSignerWalletAdapter),
/* harmony export */   "BaseMessageSignerWalletAdapter": () => (/* binding */ BaseMessageSignerWalletAdapter)
/* harmony export */ });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "../../node_modules/@solana/wallet-adapter-base/lib/adapter.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "../../node_modules/@solana/wallet-adapter-base/lib/errors.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



class BaseSignerWalletAdapter extends _adapter__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter {
  sendTransaction(transaction, connection, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        try {
          transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
          transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);

          const {
            signers
          } = options,
                sendOptions = __rest(options, ["signers"]);

          (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
          transaction = yield this.signTransaction(transaction);
          const rawTransaction = transaction.serialize();
          return yield connection.sendRawTransaction(rawTransaction, sendOptions);
        } catch (error) {
          if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__.WalletError) throw error;
          throw new _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSendTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-phantom/lib/adapter.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-phantom/lib/adapter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhantomWalletAdapter": () => (/* binding */ PhantomWalletAdapter)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ "../../node_modules/@solana/wallet-adapter-base/lib/index.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ "@solana/web3.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



class PhantomWalletAdapter extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0,_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotFoundError();
        if (!wallet.isPhantom) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotInstalledError();

        if (!wallet.isConnected) {
          // HACK: Phantom doesn't reject or emit an event if the popup is closed
          const handleDisconnect = wallet._handleDisconnect;

          try {
            yield new Promise((resolve, reject) => {
              const connect = () => {
                wallet.off('connect', connect);
                resolve();
              };

              wallet._handleDisconnect = (...args) => {
                wallet.off('connect', connect);
                reject(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletWindowClosedError());
                return handleDisconnect.apply(wallet, args);
              };

              wallet.on('connect', connect);
              wallet.connect().catch(reason => {
                wallet.off('connect', connect);
                reject(reason);
              });
            });
          } catch (error) {
            if (error instanceof _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletError) throw error;
            throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          } finally {
            wallet._handleDisconnect = handleDisconnect;
          }
        }

        if (!wallet.publicKey) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError();
        let publicKey;

        try {
          publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(wallet.publicKey.toBytes());
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

        try {
          const {
            signature
          } = yield wallet.signMessage(message);
          return Uint8Array.from(signature);
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-phantom/lib/index.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-phantom/lib/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "../../node_modules/@solana/wallet-adapter-phantom/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionProvider": () => (/* binding */ ConnectionProvider)
/* harmony export */ });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "@solana/web3.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useConnection */ "../../node_modules/@solana/wallet-adapter-react/lib/useConnection.js");



const ConnectionProvider = ({
  children,
  endpoint,
  config = {
    commitment: 'confirmed'
  }
}) => {
  const connection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Connection(endpoint, config), [endpoint, config]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_useConnection__WEBPACK_IMPORTED_MODULE_2__.ConnectionContext.Provider, {
    value: {
      connection
    }
  }, children);
};

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletProvider": () => (/* binding */ WalletProvider)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ "../../node_modules/@solana/wallet-adapter-base/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "../../node_modules/@solana/wallet-adapter-react/lib/errors.js");
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLocalStorage */ "../../node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js");
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useWallet */ "../../node_modules/@solana/wallet-adapter-react/lib/useWallet.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






const initialState = {
  wallet: null,
  adapter: null,
  ready: false,
  publicKey: null,
  connected: false
};
const WalletProvider = ({
  children,
  wallets,
  autoConnect = false,
  onError = error => console.error(error),
  localStorageKey = 'walletName'
}) => {
  const [name, setName] = (0,_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(localStorageKey, null);
  const {
    0: {
      wallet,
      adapter,
      ready,
      publicKey,
      connected
    },
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
  const {
    0: connecting,
    1: setConnecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: disconnecting,
    1: setDisconnecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const isConnecting = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const isDisconnecting = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false); // Map of wallet names to wallets

  const walletsByName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
    walletsByName[wallet.name] = wallet;
    return walletsByName;
  }, {}), [wallets]); // When the selected wallet changes, initialize the state

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const wallet = name && walletsByName[name] || null;
    const adapter = wallet && wallet.adapter();

    if (adapter) {
      const {
        ready,
        publicKey,
        connected
      } = adapter;
      setState({
        wallet,
        adapter,
        connected,
        publicKey,
        ready
      });
    } else {
      setState(initialState);
    }
  }, [name, walletsByName, setState]); // If autoConnect is enabled, try to connect when the adapter changes and is ready

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isConnecting.current || connecting || connected || !autoConnect || !adapter || !ready) return;

    (function () {
      return __awaiter(this, void 0, void 0, function* () {
        isConnecting.current = true;
        setConnecting(true);

        try {
          yield adapter.connect();
        } catch (error) {
          // Clear the selected wallet
          setName(null); // Don't throw error, but onError will still be called
        } finally {
          setConnecting(false);
          isConnecting.current = false;
        }
      });
    })();
  }, [isConnecting, connecting, connected, autoConnect, adapter, ready, setConnecting, setName]); // Select a wallet by name

  const select = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newName => __awaiter(void 0, void 0, void 0, function* () {
    if (name === newName) return;
    if (adapter) yield adapter.disconnect();
    setName(newName);
  }), [name, adapter, setName]); // Handle the adapter's ready event

  const onReady = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setState(state => Object.assign(Object.assign({}, state), {
    ready: true
  })), [setState]); // Handle the adapter's connect event

  const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!adapter) return;
    const {
      connected,
      publicKey,
      ready
    } = adapter;
    setState(state => Object.assign(Object.assign({}, state), {
      connected,
      publicKey,
      ready
    }));
  }, [adapter, setState]); // Handle the adapter's disconnect event

  const onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setName(null), [setName]); // Connect the adapter to the wallet

  const connect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (isConnecting.current || connecting || disconnecting || connected) return;

    if (!wallet || !adapter) {
      const error = new _errors__WEBPACK_IMPORTED_MODULE_2__.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!ready) {
      setName(null);

      if (false) {}

      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotReadyError();
      onError(error);
      throw error;
    }

    isConnecting.current = true;
    setConnecting(true);

    try {
      yield adapter.connect();
    } catch (error) {
      setName(null);
      throw error;
    } finally {
      setConnecting(false);
      isConnecting.current = false;
    }
  }), [isConnecting, connecting, disconnecting, connected, wallet, adapter, onError, ready, setConnecting, setName]); // Disconnect the adapter from the wallet

  const disconnect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
    if (isDisconnecting.current || disconnecting) return;
    if (!adapter) return setName(null);
    isDisconnecting.current = true;
    setDisconnecting(true);

    try {
      yield adapter.disconnect();
    } finally {
      setName(null);
      setDisconnecting(false);
      isDisconnecting.current = false;
    }
  }), [isDisconnecting, disconnecting, adapter, setDisconnecting, setName]); // Send a transaction using the provided connection

  const sendTransaction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((transaction, connection, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!adapter) {
      const error = new _errors__WEBPACK_IMPORTED_MODULE_2__.WalletNotSelectedError();
      onError(error);
      throw error;
    }

    if (!connected) {
      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.sendTransaction(transaction, connection, options);
  }), [adapter, onError, connected]); // Sign a transaction if the wallet supports it

  const signTransaction = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => adapter && 'signTransaction' in adapter ? transaction => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signTransaction(transaction);
  }) : undefined, [adapter, onError, connected]); // Sign multiple transactions if the wallet supports it

  const signAllTransactions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => adapter && 'signAllTransactions' in adapter ? transactions => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signAllTransactions(transactions);
  }) : undefined, [adapter, onError, connected]); // Sign an arbitrary message if the wallet supports it

  const signMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => adapter && 'signMessage' in adapter ? message => __awaiter(void 0, void 0, void 0, function* () {
    if (!connected) {
      const error = new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
      onError(error);
      throw error;
    }

    return yield adapter.signMessage(message);
  }) : undefined, [adapter, onError, connected]); // Setup and teardown event listeners when the adapter changes

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (adapter) {
      adapter.on('ready', onReady);
      adapter.on('connect', onConnect);
      adapter.on('disconnect', onDisconnect);
      adapter.on('error', onError);
      return () => {
        adapter.off('ready', onReady);
        adapter.off('connect', onConnect);
        adapter.off('disconnect', onDisconnect);
        adapter.off('error', onError);
      };
    }
  }, [adapter, onReady, onConnect, onDisconnect, onError]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_useWallet__WEBPACK_IMPORTED_MODULE_4__.WalletContext.Provider, {
    value: {
      wallets,
      autoConnect,
      wallet,
      adapter,
      publicKey,
      ready,
      connected,
      connecting,
      disconnecting,
      select,
      connect,
      disconnect,
      sendTransaction,
      signTransaction,
      signAllTransactions,
      signMessage
    }
  }, children);
};

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-react/lib/errors.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-react/lib/errors.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletNotSelectedError": () => (/* binding */ WalletNotSelectedError)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ "../../node_modules/@solana/wallet-adapter-base/lib/index.js");

class WalletNotSelectedError extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotSelectedError';
  }

}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-react/lib/index.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-react/lib/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useAnchorWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAnchorWallet */ "../../node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useAnchorWallet__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useAnchorWallet__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ConnectionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectionProvider */ "../../node_modules/@solana/wallet-adapter-react/lib/ConnectionProvider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _ConnectionProvider__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _ConnectionProvider__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "../../node_modules/@solana/wallet-adapter-react/lib/errors.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _errors__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _errors__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useConnection */ "../../node_modules/@solana/wallet-adapter-react/lib/useConnection.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useConnection__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useConnection__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useLocalStorage */ "../../node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useLocalStorage__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useWallet */ "../../node_modules/@solana/wallet-adapter-react/lib/useWallet.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _useWallet__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _useWallet__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _WalletProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WalletProvider */ "../../node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WalletProvider__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WalletProvider__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);








/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAnchorWallet": () => (/* binding */ useAnchorWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useWallet */ "../../node_modules/@solana/wallet-adapter-react/lib/useWallet.js");


function useAnchorWallet() {
  const {
    publicKey,
    signTransaction,
    signAllTransactions
  } = (0,_useWallet__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => publicKey && signTransaction && signAllTransactions ? {
    publicKey,
    signTransaction,
    signAllTransactions
  } : undefined, [publicKey, signTransaction, signAllTransactions]);
}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-react/lib/useConnection.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-react/lib/useConnection.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionContext": () => (/* binding */ ConnectionContext),
/* harmony export */   "useConnection": () => (/* binding */ useConnection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ConnectionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useConnection() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ConnectionContext);
}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLocalStorage": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key, defaultState) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (typeof localStorage === 'undefined') return defaultState;
    const value = localStorage.getItem(key);

    try {
      return value ? JSON.parse(value) : defaultState;
    } catch (error) {
      console.warn(error);
      return defaultState;
    }
  });
  const setLocalStorage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue => {
    if (newValue === value) return;
    setValue(newValue);

    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }

    if (newValue === null) {
      localStorage.removeItem(key);
    } else {
      try {
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error(error);
      }
    }
  }, [value, setValue, key]);
  return [value, setLocalStorage];
}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-react/lib/useWallet.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-react/lib/useWallet.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletContext": () => (/* binding */ WalletContext),
/* harmony export */   "useWallet": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useWallet() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WalletContext);
}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-solflare/lib/adapter.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-solflare/lib/adapter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolflareWalletAdapter": () => (/* binding */ SolflareWalletAdapter)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ "../../node_modules/@solana/wallet-adapter-base/lib/index.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/web3.js */ "@solana/web3.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



class SolflareWalletAdapter extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.BaseSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;
        this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    if (!this.ready) (0,_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    return this._publicKey;
  }

  get ready() {
    var _a;

    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const wallet =  false && 0;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotFoundError();
        if (!wallet.isSolflare) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotInstalledError();

        if (!wallet.isConnected) {
          try {
            yield wallet.connect();
          } catch (error) {
            throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
          }
        } // HACK: Solflare doesn't reject its promise if the popup is closed


        if (!wallet.publicKey) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError();
        let publicKey;

        try {
          publicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(wallet.publicKey.toBytes());
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this._publicKey = publicKey;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this._publicKey = null;

        try {
          yield wallet.disconnect();
        } catch (error) {
          this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-solflare/lib/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-solflare/lib/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "../../node_modules/@solana/wallet-adapter-solflare/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-sollet/lib/adapter.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-sollet/lib/adapter.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolletWalletAdapter": () => (/* binding */ SolletWalletAdapter)
/* harmony export */ });
/* harmony import */ var _project_serum_sol_wallet_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @project-serum/sol-wallet-adapter */ "@project-serum/sol-wallet-adapter");
/* harmony import */ var _project_serum_sol_wallet_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_project_serum_sol_wallet_adapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ "../../node_modules/@solana/wallet-adapter-base/lib/index.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



class SolletWalletAdapter extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.BaseMessageSignerWalletAdapter {
  constructor(config = {}) {
    super();

    this._disconnected = () => {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null;
        this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectedError());
        this.emit('disconnect');
      }
    };

    this._provider = config.provider || ( true ? undefined : 0);
    this._network = config.network || _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAdapterNetwork.Mainnet;
    this._connecting = false;
    this._wallet = null;
    if (!this.ready) (0,_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get publicKey() {
    var _a;

    return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
  }

  get ready() {
    var _a;

    return typeof this._provider === 'string' ||  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    var _a;

    return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.connected);
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        const provider = this._provider ||  false && 0;
        if (!provider) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotFoundError();
        let wallet;

        try {
          wallet = new (_project_serum_sol_wallet_adapter__WEBPACK_IMPORTED_MODULE_0___default())(provider, this._network); // HACK: sol-wallet-adapter doesn't reject or emit an event if the popup or extension is closed or blocked

          const handleDisconnect = wallet.handleDisconnect;
          let timeout;
          let interval;

          try {
            yield new Promise((resolve, reject) => {
              const connect = () => {
                if (timeout) clearTimeout(timeout);
                wallet.off('connect', connect);
                resolve();
              };

              wallet.handleDisconnect = (...args) => {
                wallet.off('connect', connect);
                reject(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletWindowClosedError());
                return handleDisconnect.apply(wallet, args);
              };

              wallet.on('connect', connect);
              wallet.connect().catch(reason => {
                wallet.off('connect', connect);
                reject(reason);
              });

              if (typeof provider === 'string') {
                let count = 0;
                interval = setInterval(() => {
                  const popup = wallet._popup;

                  if (popup) {
                    if (popup.closed) reject(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletWindowClosedError());
                  } else {
                    if (count > 50) reject(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletWindowBlockedError());
                  }

                  count++;
                }, 100);
              } else {
                // HACK: sol-wallet-adapter doesn't reject or emit an event if the extension is closed or ignored
                timeout = setTimeout(() => reject(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletTimeoutError()), 10000);
              }
            });
          } finally {
            wallet.handleDisconnect = handleDisconnect;
            if (interval) clearInterval(interval);
          }
        } catch (error) {
          if (error instanceof _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletError) throw error;
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        wallet.on('disconnect', this._disconnected);
        this._wallet = wallet;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const wallet = this._wallet;

      if (wallet) {
        wallet.off('disconnect', this._disconnected);
        this._wallet = null; // HACK: sol-wallet-adapter doesn't reliably fulfill its promise or emit an event on disconnect

        const handleDisconnect = wallet.handleDisconnect;

        try {
          yield new Promise((resolve, reject) => {
            const timeout = setTimeout(() => resolve(), 250);

            wallet.handleDisconnect = (...args) => {
              clearTimeout(timeout);
              resolve(); // HACK: sol-wallet-adapter rejects with an uncaught promise error

              wallet._responsePromises = new Map();
              return handleDisconnect.apply(wallet, args);
            };

            wallet.disconnect().then(() => {
              clearTimeout(timeout);
              resolve();
            }, error => {
              clearTimeout(timeout); // HACK: sol-wallet-adapter rejects with an error on disconnect

              if ((error === null || error === void 0 ? void 0 : error.message) === 'Wallet disconnected') {
                resolve();
              } else {
                reject(error);
              }
            });
          });
        } catch (error) {
          this.emit('error', new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        } finally {
          wallet.handleDisconnect = handleDisconnect;
        }
      }

      this.emit('disconnect');
    });
  }

  signTransaction(transaction) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();

        try {
          return (yield wallet.signTransaction(transaction)) || transaction;
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signAllTransactions(transactions) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();

        try {
          return (yield wallet.signAllTransactions(transactions)) || transactions;
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const wallet = this._wallet;
        if (!wallet) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();

        try {
          const {
            signature
          } = yield wallet.sign(message, 'utf8');
          return Uint8Array.from(signature);
        } catch (error) {
          throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletSignMessageError(error === null || error === void 0 ? void 0 : error.message, error);
        }
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

}

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-sollet/lib/index.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-sollet/lib/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "../../node_modules/@solana/wallet-adapter-sollet/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/bitkeep.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/bitkeep.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// import { BitKeepWalletAdapter, BitKeepWalletAdapterConfig } from '@solana/wallet-adapter-bitkeep';
// import { Wallet, WalletName } from './types';
//
// @solana/wallet-adapter-bitkeep isn't published to NPM yet
//
// export const getBitKeepWallet = (config: BitKeepWalletAdapterConfig = {}): Wallet => ({
//     name: WalletName.BitKeep,
//     url: 'https://www.bitkeep.org',
//     icon: 'data:image/png;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHdpZHRoPSIxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzQ5NWJmZiI+PHBhdGggZD0ibTYyLjI4NTcgODcuOTY0NC0zNi44MTI5LTIxLjI2MzhjLTEuMjkzMi0uNzQ3Ni0yLjA4ODktMi4xMjctMi4wODg5LTMuNjIwOXYtNDIuNTc5NGMwLS42NDQyLS42OTctMS4wNDY5LTEuMjU1LS43MjQybC03LjUzMjUgNC4zNTVjLTIuODQ1IDEuNjQ1NC00LjU5NjQgNC42ODEzLTQuNTk2NCA3Ljk2NjF2MzUuODA3OWMwIDMuMjg2IDEuNzUxNCA2LjMyMTkgNC41OTY0IDcuOTY2MWwzMC45NTA0IDE3Ljg5MjljMi44NDg4IDEuNjQ3OSA2LjM2MTMgMS42NDc5IDkuMjExMyAwbDcuNTI3Ni00LjM1MjVjLjU1NzktLjMyMDIuNTU3OS0xLjEyNDUgMC0xLjQ0NzJ6Ii8+PHBhdGggZD0ibTMyLjE1OTYgNjIuODE4NSAxNS44OTE1IDkuMTg3OWMxLjI5NTcuNzQ4OCAyLjg5MTkuNzQ4OCA0LjE4NjMgMGwxNS44OTUyLTkuMTg3OWMxLjI5MzItLjc0NzYgMi4wODg4LTIuMTI3IDIuMDg4OC0zLjYyMDl2LTE4LjM4NjhjMC0xLjQ5MzktLjc5NjgtMi44NzMzLTIuMDg4OC0zLjYyMDlsLTE1Ljg5NC05LjE4OTFjLTEuMjk1Ni0uNzQ4OC0yLjg5MTgtLjc0ODgtNC4xODYyIDBsLTMuOTQzNyAyLjI3OTdjLS4yNzk1LjE2MTQtLjYyODEtLjA0MDYtLjYyODEtLjM2MjFsLjAyNTktMjEuMDE3NDdjLjAwMTItLjY0NDE0LS42OTcxLTEuMDQ4MTEtMS4yNTUtLjcyNTQybC0xMC4wNjM2IDUuODE4MTljLTEuMjkxOS43NDYzLTIuMDg3NSAyLjEyNTctMi4wODg4IDMuNjE4NGwtLjAyNzEgNDEuNTgzYy0uMDAyNCAxLjQ5NC43OTQ0IDIuODc1OCAyLjA4NzYgMy42MjM0em05LjIwMjYtMTYuMTg3MWMwLTEuMDU1NS41NjI5LTIuMDMwOSAxLjQ3NjctMi41NTkzbDUuODI4LTMuMzY4NGMuOTE1MS0uNTI5NiAyLjA0MzMtLjUyOTYgMi45NTg0IDBsNS44MjggMy4zNjg0Yy45MTM4LjUyODQgMS40NzY3IDEuNTAzOCAxLjQ3NjcgMi41NTkzdjYuNzQ0M2MwIDEuMDU1NS0uNTYyOSAyLjAzMS0xLjQ3NjcgMi41NTkzbC01LjgyOCAzLjM2ODVjLS45MTUxLjUyOTYtMi4wNDMzLjUyOTYtMi45NTg0IDBsLTUuODI4LTMuMzY4NWMtLjkxMzgtLjUyODMtMS40NzY3LTEuNTAzOC0xLjQ3NjctMi41NTkzeiIvPjxwYXRoIGQ9Im04NS43MDQ3IDI0LjEyLTMwLjk1MDUtMTcuODk0MDljLTEuMjk2OC0uNzUwMDUtMi43MzA0LTEuMTU3NzEtNC4xNzY0LTEuMjI1NDUtLjIzNzctLjAxMTA5LS40MzYuMTgxMDQtLjQzNi40MTg3NXYxMy4xMjQwOWMwIC4yOTkzLjE1ODkuNTc1MS40MTc2LjcyNDJsMjQuMjY4OSAxNC4wMjMxYzEuMjkzMi43NDc2IDIuMDg4OCAyLjEyNyAyLjA4ODggMy42MjF2MjYuMTU1OGMwIDEuNDkzOS0uNzk2OCAyLjg3MzMtMi4wODg4IDMuNjIwOWwtMTYuNzMxNSA5LjY3MzFjLS41NTY3LjMyMjctLjU1NjcgMS4xMjY5IDAgMS40NDg0bDExLjI4OSA2LjUxNzdjLjUxODUuMjk5MyAxLjE1NjUuMjk5MyAxLjY3MzggMGwxNC42NDUxLTguNDY2MWMyLjg0MzgtMS42NDQyIDQuNTk2NC00LjY4MDIgNC41OTY0LTcuOTY2MXYtMzUuODA5MmMwLTMuMjg1OS0xLjc1MTQtNi4zMjE5LTQuNTk2NC03Ljk2NjF6Ii8+PC9nPjwvc3ZnPg==',
//     adapter: () => new BitKeepWalletAdapter(config),
// });


/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/bitpie.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/bitpie.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBitpieWallet": () => (/* binding */ getBitpieWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_bitpie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-bitpie */ "@solana/wallet-adapter-bitpie");
/* harmony import */ var _solana_wallet_adapter_bitpie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_bitpie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getBitpieWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Bitpie,
  url: 'https://bitpiecn.com',
  icon: `data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxZTNkYTAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzNzUwZGUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjUyLjU0NTc1JSIgeDI9IjUyLjU0NTc1JSIgeGxpbms6aHJlZj0iI2EiIHkxPSIxMDAlIiB5Mj0iMCUiLz48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSI1MCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFkM2JhMyIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMTczNzkzIiBzdG9wLW9wYWNpdHk9Ii42NTI5MzgiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjUwJSIgeDI9IjUwJSIgeGxpbms6aHJlZj0iI2EiIHkxPSIxMDAlIiB5Mj0iMCUiLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0xOCAwaDI4YzkuOTQxMTI1NSAwIDE4IDguMDU4ODc0NSAxOCAxOHYyOGMwIDkuOTQxMTI1NS04LjA1ODg3NDUgMTgtMTggMThoLTI4Yy05Ljk0MTEyNTUgMC0xOC04LjA1ODg3NDUtMTgtMTh2LTI4YzAtOS45NDExMjU1IDguMDU4ODc0NS0xOCAxOC0xOHoiIGZpbGw9InVybCgjYikiLz48Y2lyY2xlIGN4PSIzMi4yODU3MTQiIGN5PSIzMi4yODU3MTQiIGZpbGw9IiNmZmYiIHI9IjI0LjI4NTcxNCIvPjxwYXRoIGQ9Im0zMiAwYzE3LjY3MzExMiAwIDMyIDE0LjMyNjg4OCAzMiAzMnMtMTQuMzI2ODg4IDMyLTMyIDMyLTMyLTE0LjMyNjg4OC0zMi0zMiAxNC4zMjY4ODgtMzIgMzItMzJ6bS0uMTQzNDk3OCA3LjYwNTM4MTE3Yy0xMy40NzI3NzU5IDAtMjQuMzk0NjE4NzkgMTAuOTIxODQyODMtMjQuMzk0NjE4NzkgMjQuMzk0NjE4ODNzMTAuOTIxODQyODkgMjQuMzk0NjE4OCAyNC4zOTQ2MTg3OSAyNC4zOTQ2MTg4YzEzLjQ3Mjc3NiAwIDI0LjM5NDYxODktMTAuOTIxODQyOCAyNC4zOTQ2MTg5LTI0LjM5NDYxODhzLTEwLjkyMTg0MjktMjQuMzk0NjE4ODMtMjQuMzk0NjE4OS0yNC4zOTQ2MTg4M3oiIGZpbGw9InVybCgjYykiLz48cGF0aCBkPSJtMjkuMDkwOTA5MSA0NC4zNjM2MzY0YzAgMi4wMDgzMDgxLTEuNjI4MDU1NSAzLjYzNjM2MzYtMy42MzYzNjM2IDMuNjM2MzYzNi0yLjAwODMwODIgMC0zLjYzNjM2MzctMS42MjgwNTU1LTMuNjM2MzYzNy0zLjYzNjM2MzZsLS4wMDAxODE4LTIuMTgyNjM2NC0yLjE4MTYzNjQuMDAwODE4MmMtMi4wMDgzMDgxIDAtMy42MzYzNjM2LTEuNjI4MDU1NS0zLjYzNjM2MzYtMy42MzYzNjM3IDAtMi4wMDgzMDgxIDEuNjI4MDU1NS0zLjYzNjM2MzYgMy42MzYzNjM2LTMuNjM2MzYzNmwyLjE4MTYzNjQtLjAwMDA5MDl2LTUuODE5bC0yLjE4MTYzNjQuMDAwOTA5MWMtMi4wMDgzMDgxIDAtMy42MzYzNjM2LTEuNjI4MDU1NS0zLjYzNjM2MzYtMy42MzYzNjM2IDAtMi4wMDgzMDgyIDEuNjI4MDU1NS0zLjYzNjM2MzcgMy42MzYzNjM2LTMuNjM2MzYzN2wyLjE4MTYzNjQtLjAwMDE4MTguMDAwMTgxOC0yLjE4MTYzNjRjMC0yLjAwODMwODEgMS42MjgwNTU1LTMuNjM2MzYzNiAzLjYzNjM2MzctMy42MzYzNjM2IDIuMDA4MzA4MSAwIDMuNjM2MzYzNiAxLjYyODA1NTUgMy42MzYzNjM2IDMuNjM2MzYzNmwtLjAwMDkwOTEgMi4xODE2MzY0aDUuODE5bC4wMDAwOTA5LTIuMTgxNjM2NGMwLTIuMDA4MzA4MSAxLjYyODA1NTUtMy42MzYzNjM2IDMuNjM2MzYzNi0zLjYzNjM2MzYgMi4wMDgzMDgyIDAgMy42MzYzNjM3IDEuNjI4MDU1NSAzLjYzNjM2MzcgMy42MzYzNjM2bC0uMDAwODE4MiAyLjE4MTYzNjQgMi4xODI2MzY0LjAwMDE4MThjMi4wMDgzMDgxIDAgMy42MzYzNjM2IDEuNjI4MDU1NSAzLjYzNjM2MzYgMy42MzYzNjM3IDAgMi4wMDgzMDgxLTEuNjI4MDU1NSAzLjYzNjM2MzYtMy42MzYzNjM2IDMuNjM2MzYzNmwtMi4xODI2MzY0LS4wMDA5MDkxdjUuODE5bDIuMTgyNjM2NC4wMDAwOTA5YzIuMDA4MzA4MSAwIDMuNjM2MzYzNiAxLjYyODA1NTUgMy42MzYzNjM2IDMuNjM2MzYzNiAwIDIuMDA4MzA4Mi0xLjYyODA1NTUgMy42MzYzNjM3LTMuNjM2MzYzNiAzLjYzNjM2MzdsLTIuMTgyNjM2NC0uMDAwODE4Mi4wMDA4MTgyIDIuMTgyNjM2NGMwIDIuMDA4MzA4MS0xLjYyODA1NTUgMy42MzYzNjM2LTMuNjM2MzYzNyAzLjYzNjM2MzYtMi4wMDgzMDgxIDAtMy42MzYzNjM2LTEuNjI4MDU1NS0zLjYzNjM2MzYtMy42MzYzNjM2bC0uMDAwMDkwOS0yLjE4MjYzNjRoLTUuODE5em0tLjAwMDkwOTEtOS40NTQ2MzY0aDUuODE5di01LjgxOWgtNS44MTl6IiBmaWxsPSJ1cmwoI2QpIiB0cmFuc2Zvcm09Im1hdHJpeCguODY2MDI1NCAtLjUgLjUgLjg2NjAyNTQgLTExLjcxMjgxMyAyMC4yODcxODcpIi8+PC9nPjwvc3ZnPg==`,
  adapter: () => new _solana_wallet_adapter_bitpie__WEBPACK_IMPORTED_MODULE_0__.BitpieWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/blocto.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/blocto.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBloctoWallet": () => (/* binding */ getBloctoWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_blocto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-blocto */ "@solana/wallet-adapter-blocto");
/* harmony import */ var _solana_wallet_adapter_blocto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_blocto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getBloctoWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Blocto,
  url: 'https://wallet.blocto.app',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0ibTE5LjQ4MzggMTUuMjQ5Yy4yNzY5IDAgLjUwNDguMjA5OS41MzI1LjQ3ODhsLjAwMjIuMDQyOS0uMDA0My4xMTQyYy0uMzM1IDMuOTgzMy0zLjc5MDQgNy4xMTUxLTguMDAzNyA3LjExNTEtNC4xNzA2IDAtNy41OTg2My0zLjA2ODctNy45OTI2OS02Ljk5NDZsLS4wMTYzOC0uMTgxMS0uMDAxMDYtLjA1MzIuMDAxNzgtLjAzOThjLjAyNTk4LS4yNzA2LjI1NDg3LS40ODIzLjUzMjg5LS40ODIzeiIgZmlsbD0iI2FmZDhmNyIvPjxwYXRoIGQ9Im00LjMwMDA5IDFjMy43ODc1NSAwIDYuODI1ODEgMi45MDkxMSA2LjgyNTgxIDYuNTAyNzd2Ni4zNTM0M2MtLjAwMDQuMjkxNy0uMjM5Mi41Mjg0LS41MzQuNTI4OGwtNi4wNTc1OC4wMDMyYy0uMjk1MTEuMDAwNy0uNTM0MzItLjIzNjEtLjUzNDMyLS41Mjc4bC4wMDAzNi0xMi41NjM3NWMwLS4xNTE0OS4xMTQyNi0uMjc2MjIuMjYxOTktLjI5NDE4eiIgZmlsbD0iIzE4MmE3MSIvPjxwYXRoIGQ9Im0xOS42OTIxIDEyLjIzODMuMDM4OC4xMjgzLS4wMjg4LS4wODQ2Yy4xNjE2LjQ1MzQuMjY2Ni43NzY5LjMxNTMgMS4zNDEzLjAzMzUuMzg3OS0uMjU3LjcyODktLjY0ODUuNzYybC0uMDMwMy4wMDIyLTMuMDgwOS4wMDA3Yy0yLjEwNjMgMC0zLjgyMDQtMS40NzQxLTMuODc1Mi0zLjU0MjNsLS4wMDE0LS4xMDIxdi0zLjQ2NThjMC0uMjAxNTMuMTY5NC0uMzY5NTkuMzc0MS0uMzYwMDcgMy4zMDAzLjE1NDY2IDUuOTk3OCAyLjM0MTUxIDYuOTM2OSA1LjMyMDM3eiIgZmlsbD0iIzM0ODVjNCIvPjwvZz48L3N2Zz4=',
  adapter: () => new _solana_wallet_adapter_blocto__WEBPACK_IMPORTED_MODULE_0__.BloctoWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/clover.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/clover.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCloverWallet": () => (/* binding */ getCloverWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_clover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-clover */ "@solana/wallet-adapter-clover");
/* harmony import */ var _solana_wallet_adapter_clover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_clover__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getCloverWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Clover,
  url: 'https://clover.finance',
  icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzQiIGhlaWdodD0iNzQiIHZpZXdCb3g9IjAgMCA3NCA3NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTczLjg5NDcgMTguNTc4OEM3My44OTQ3IDI4Ljc4MTUgNjUuNjIzOCAzNy4wNTI1IDU1LjQyMTEgMzcuMDUyNUM0NS4yNTczIDM3LjA1MjUgMzcuMDEwNiAyOC44NDQ2IDM2Ljk0NzcgMTguNjk1NkMzNi44ODUzIDI4LjgxMyAyOC42ODk5IDM3LjAwMTUgMTguNTY5OSAzNy4wNTI3QzI4LjcyODQgMzcuMTA0NSAzNi45NDc0IDQ1LjM1NTUgMzYuOTQ3NCA1NS41MjYyQzM2Ljk0NzQgNjUuNzI4OSAyOC42NzY0IDczLjk5OTggMTguNDczNyA3My45OTk4QzguMjcwOTUgNzMuOTk5OCAwIDY1LjcyODkgMCA1NS41MjYyQzAgNDUuMzU1MyA4LjIxOTM5IDM3LjEwNDEgMTguMzc4MiAzNy4wNTI3QzguMjE5NzIgMzcuMDAwOSAwLjAwMDcxOTU3MiAyOC43NDk5IDAuMDAwNzE5NTcyIDE4LjU3OTNDMC4wMDA3MTk1NzIgOC4zNzY1NCA4LjI3MTY3IDAuMTA1NTkxIDE4LjQ3NDQgMC4xMDU1OTFDMjguNjM4MiAwLjEwNTU5MSAzNi44ODQ5IDguMzEzNDggMzYuOTQ3NyAxOC40NjI1QzM3LjAxMDMgOC4zMTMyNiA0NS4yNTcxIDAuMTA1MTAzIDU1LjQyMTEgMC4xMDUxMDNDNjUuNjIzOCAwLjEwNTEwMyA3My44OTQ3IDguMzc2MDUgNzMuODk0NyAxOC41Nzg4Wk01NS40MjExIDM3LjA1MjVDNDUuMjE4MyAzNy4wNTI1IDM2Ljk0NzQgNDUuMzIzNCAzNi45NDc0IDU1LjUyNjJDMzYuOTQ3NCA2NS43Mjg5IDQ1LjIxODMgNzMuOTk5OCA1NS40MjExIDczLjk5OThDNjUuNjIzOCA3My45OTk4IDczLjg5NDcgNjUuNzI4OSA3My44OTQ3IDU1LjUyNjJDNzMuODk0NyA0NS4zMjM0IDY1LjYyMzggMzcuMDUyNSA1NS40MjExIDM3LjA1MjVaIiBmaWxsPSIjMjdBNTc3Ii8+PC9zdmc+Cg==',
  adapter: () => new _solana_wallet_adapter_clover__WEBPACK_IMPORTED_MODULE_0__.CloverWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/coin98.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/coin98.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoin98Wallet": () => (/* binding */ getCoin98Wallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_coin98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-coin98 */ "@solana/wallet-adapter-coin98");
/* harmony import */ var _solana_wallet_adapter_coin98__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_coin98__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getCoin98Wallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Coin98,
  url: 'https://coin98.com',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQyIiB3aWR0aD0iNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTgwLjE1NiAyNy4zMDVjLS44NzEtLjM0Mi0xLjYyNy0uODU1LTIuMzI0LTEuNTQtLjY0LS42ODUtMS4xNjMtMS40MjctMS41Ny0yLjI4My0uMzQ4LS44NTYtLjU4LTEuODI2LS41OC0yLjc5NnMuMTc0LTEuODgzLjU4LTIuNzk2Yy4zNS0uODU2Ljg3Mi0xLjU5OCAxLjU3LTIuMjgyLjYzOS0uNjI4IDEuNDUzLTEuMTQxIDIuMzI0LTEuNTQuODcyLS4zNDMgMS44Ni0uNTcyIDIuODQ4LS41NzJzMS45MTguMTcyIDIuODQ4LjU3MWMuODcyLjM0MiAxLjYyNy44NTYgMi4yNjYgMS41NC42NC42MjkgMS4xNjMgMS40MjcgMS41MTIgMi4yODMuNDA2LjkxMy41OCAxLjgyNi41OCAyLjc5NnMtLjE3NCAxLjg4My0uNTggMi43OTZjLS4zNS44NTYtLjg3MiAxLjU5OC0xLjU3IDIuMjgzLS42OTcuNjI3LTEuNDUzIDEuMTQxLTIuMzI0IDEuNTQtLjg3Mi4zNDMtMS44Ni41NzEtMi44NDguNTcxLS45MyAwLTEuODYtLjE3MS0yLjczMi0uNTd6bS0xLjA0Ni0xNS41MmMtMS4xNjIuNTEzLTIuMjY2IDEuMTk4LTMuMTM4IDIuMTExLS45My45MTMtMS42MjcgMS45NC0yLjE1IDMuMDgxLS41MjMgMS4xOTktLjc1NiAyLjQ1NC0uNzU2IDMuNzY2IDAgMS4zMTMuMjMzIDIuNTY4Ljc1NSAzLjc2Ni41MjQgMS4xNDIgMS4yMjEgMi4yMjYgMi4xNSAzLjA4Mi45My45MTMgMS45NzcgMS41OTcgMy4xNCAyLjExMSAxLjIyLjUxMyAyLjQ5OC43NDIgMy44MzUuNzQyczIuNjE1LS4yMjkgMy44MzYtLjc0MmMxLjE2Mi0uNTE0IDIuMjY2LTEuMTk4IDMuMTM4LTIuMTExLjkzLS45MTMgMS42MjctMS45NCAyLjE1LTMuMDgyLjUyNC0xLjE5OC43NTYtMi40NTMuNzU2LTMuNzY2IDAtMS4zMTItLjIzMi0yLjU2Ny0uNzU1LTMuNzY2LS41MjQtMS4xNC0xLjIyMS0yLjIyNS0yLjE1LTMuMDgxLS45My0uOTEzLTEuOTc3LTEuNTk4LTMuMTQtMi4xMTEtMS4yMi0uNTE0LTIuNDk4LS43NDItMy44MzUtLjc0MnMtMi42MTUuMjI4LTMuODM2Ljc0MnptLTIxLjA5NiAwYy0xLjE2My41MTMtMi4yNjcgMS4xOTgtMy4xMzkgMi4xMTEtLjk4OC44NTYtMS42ODUgMS45NC0yLjE1IDMuMDgxLS41MjMgMS4xOTktLjc1NiAyLjUxMS0uNzU2IDMuNzY2IDAgMS4zMTMuMjkgMi41NjguNzU2IDMuODIzLjQ2NSAxLjE0MiAxLjIyIDIuMTY5IDIuMTUgMy4wODJzMS45NzYgMS41OTggMy4xMzkgMi4xMTFjMS4yMi41MTQgMi41NTcuNzQyIDMuODM1Ljc0MiAxLjMzNyAwIDIuNjE2LS4yODYgMy44MzYtLjc0MiAxLjIyLS41MTQgMi4yNjctMS4xOTggMy4xMzgtMi4wNTQuOTMtLjkxMyAxLjYyOC0xLjk0IDIuMTUtMy4xMzkuMTE3LS4yMjguMjMzLS41MTMuMjkxLS43OThoLTIuOTA2Yy0uMzQ4Ljc0MS0uODEzIDEuNDI2LTEuNDUzIDIuMDU0LS42MzkuNjI4LTEuNDUyIDEuMTQxLTIuMzI0IDEuNTQtLjg3Mi4zNDMtMS44Ni41NzEtMi44NDguNTcxcy0xLjkxOC0uMTcxLTIuNzktLjU3Yy0uODcxLS4zNDMtMS42MjctLjg1Ny0yLjMyNC0xLjU0MS0uNjQtLjY4NS0xLjE2My0xLjQyNy0xLjU3LTIuMjgzLS4zNDgtLjg1Ni0uNTgtMS44MjYtLjU4LTIuNzk2cy4xNzQtMS44ODMuNTgtMi43OTZjLjM1LS44NTYuODcyLTEuNTk3IDEuNTctMi4yODIuNjM5LS42MjggMS40NTMtMS4xNDEgMi4zMjQtMS41NC44NzItLjM0MyAxLjg2LS41NzEgMi44NDgtLjU3MXMxLjkxOC4xNyAyLjg0OC41N2MuODcyLjM0MyAxLjYyNy44NTYgMi4zMjUgMS41NC41OC41NzIgMS4wNDYgMS4yNTYgMS40NTMgMi4wNTVoMi45MDZjLS4wNTktLjI4NS0uMTc1LS41MTQtLjI5MS0uNzk5LS41MjMtMS4xNDEtMS4yMi0yLjIyNS0yLjE1LTMuMDgxLS44NzItLjg1Ni0xLjk3Ny0xLjU5OC0zLjEzOS0yLjExMS0xLjIyLS41MTQtMi40OTktLjc0Mi0zLjgzNi0uNzQyLTEuMzk0LjA1Ny0yLjczMS4yODUtMy44OTMuNzk5em0zNy44OTIgMTguNzE1aDIuNjc0di0xOS40NTdoLTIuNjc0em0zMy4wNjktMTIuNjFjMC0yLjU2OCAyLjE1MS00LjY4IDQuNzY2LTQuNjhzNC43MDcgMi4xMTEgNC43MDcgNC42OGMwIDIuNTEtMi4wOTIgNC42MjEtNC43MDcgNC42MjEtMi42NzMgMC00Ljc2Ni0yLjA1NC00Ljc2Ni00LjYyMnptLTIuMzgzLjA1NmMwIDMuODIzIDMuMTk3IDYuNzkgNy4yNjUgNi43OWgxLjYyN2wtMy4xMzggNS44NzhoMi42NzRsNC45NC05LjI0NGMuNjk3LTEuMjU1Ljk4OC0yLjM5Ny45ODgtMy40OCAwLTMuODI0LTMuMTM5LTYuODQ4LTcuMTQ5LTYuODQ4LTQuMDY4LS4wNTctNy4yMDcgMy4wMjQtNy4yMDcgNi45MDR6bTE4Ljk0NyA2Ljc5YzAtMi4yMjUgMS44Ni0zLjk5NCA0LjEyNi0zLjk5NCAyLjMyNSAwIDQuMTg1IDEuNzcgNC4xODUgMy45OTVzLTEuODYgNC4wNTEtNC4xODUgNC4wNTEtNC4xMjYtMS44MjYtNC4xMjYtNC4wNTF6bTEuMzM3LTguOWMwLTEuNDg1IDEuMjItMi43NCAyLjczMS0yLjc0czIuNzkgMS4yNTUgMi43OSAyLjc0YzAgMS40ODMtMS4yNzkgMi43MzgtMi43OSAyLjczOC0xLjQ1MyAwLTIuNzMxLTEuMjU1LTIuNzMxLTIuNzM5em0tMi4yMDkgMGMwIDEuMDgzLjM0OSAyLjExLjk4OCAyLjk2NmwuNTIzLjc0Mi0uNjk3LjU3Yy0xLjM5NSAxLjE0Mi0yLjIwOSAyLjg1NC0yLjIwOSA0LjYyMyAwIDMuNDIzIDIuODQ4IDYuMjIgNi4zMzUgNi4yMiAzLjU0NSAwIDYuMzkzLTIuNzk3IDYuMzkzLTYuMjIgMC0xLjgyNi0uODE0LTMuNDgxLTIuMjA4LTQuNjhsLS42OTgtLjU3LjU4MS0uNzQyYy42NC0uNzk5Ljk4OC0xLjgyNi45ODgtMi45MSAwLTIuNjgyLTIuMjA4LTQuNzkzLTQuOTk4LTQuNzkzLTIuODQ4LS4wNTctNC45OTggMi4wNTQtNC45OTggNC43OTN6bS0yNC41MjYtNC43OTR2MTUuMTIxYzAgLjg1Ni0uNDY1IDEuMzctMS4yNzggMS40MjctLjgxNCAwLTEuMjc5LS42MjgtMS40NTMtLjk3bC02LjEwMy0xMi45NTNjLS4zNDgtLjgtLjg3MS0xLjQyNy0xLjYyNy0xLjk0LS42OTctLjQ1Ny0xLjUxMS0uNjg1LTIuMzgzLS42ODUtMS4wNDYgMC0xLjk3Ni4zNDItMi43MzEuOTEzLS4wNTggMC0uMDU4LjA1Ny0uMTE2LjA1Ny0uODcyLjc0Mi0xLjI3OSAxLjY1NS0xLjI3OSAyLjczOXYxNS43NDloMi44NDh2LTE1LjM1YzAtLjc5OS41ODEtMS4zNyAxLjMzNi0xLjM3LjU4MiAwIDEuMTA1LjM0MyAxLjQ1MyAxLjAyOGwuMDU5LjExNGMxLjQ1MiAzLjEzOCA0LjY0OSA5Ljk4NiA2LjU2NyAxMy42MzguNjM5IDEuMTk4IDEuNzQzIDEuNzY5IDMuNDg3IDEuNzY5IDEuMDQ2IDAgMi4wMzQtLjI4NiAyLjc5LS45MTMuODcxLS42ODUgMS4zMzYtMS4yNTYgMS4zMzYtMi42MjV2LTE1Ljc1aC0yLjkwNnptLTg1Ljg0LTEwLjA0MmgtMjUuODYxYy00LjEyNyAwLTcuNDQgMy4yNTItNy40NCA3LjMwNHYyNS4zOTJjMCA0LjA1MiAzLjMxMyA3LjMwNCA3LjQ0IDcuMzA0aDI1Ljg2YzQuMDY5IDAgNy40NC0zLjI1MiA3LjQ0LTcuMzA0di0yNS4zOTJjMC00LjA1Mi0zLjMxMy03LjMwNC03LjQ0LTcuMzA0aC4wMDF6bS02LjI3NiA5Ljk4NmMzLjAyMiAwIDUuNDYzIDIuMzk2IDUuNDYzIDUuMzY0IDAgLjkxMi0uMjMzIDEuNzY4LS42NCAyLjU2Ny0uNjk3LS41MTMtMS40NTItLjk3LTIuMjY2LTEuMjU1LjIzMi0uNC4zNDktLjg1Ni4zNDktMS4zMTIgMC0xLjU0MS0xLjI3OS0yLjc5Ni0yLjg0OC0yLjc5Ni0xLjU3IDAtMi44NDggMS4yNTUtMi44NDggMi43OTYgMCAuNDU2LjExNi45MTIuMzQ5IDEuMzEyLS44MTQuMjg1LTEuNjI4LjY4NS0yLjI2NyAxLjI1NS0uNDY1LS43OTktLjY0LTEuNjU1LS42NC0yLjU2OC0uMTE1LTIuOTY3IDIuMzI2LTUuMzYzIDUuMzQ4LTUuMzYzem0tMTMuMzEgMjAuMDI4Yy0zLjAyMSAwLTUuNDYyLTIuMzk2LTUuNDYyLTUuMzYzaDIuNjE1YzAgMS41NCAxLjI3OSAyLjc5NiAyLjg0OCAyLjc5NnMyLjg0OC0xLjI1NiAyLjg0OC0yLjc5NmgyLjYxNWMwIDIuOTY3LTIuNDQxIDUuMzYzLTUuNDYzIDUuMzYzem0wLTcuNTMyYy0zLjQ4NiAwLTYuMzM0LTIuNzk2LTYuMzM0LTYuMjIgMC0zLjQyMyAyLjg0OC02LjI3NiA2LjMzNS02LjI3NnM2LjM5MyAyLjc5NiA2LjM5MyA2LjI3NmMtLjA1OCAzLjQyNC0yLjkwNiA2LjIyLTYuMzkzIDYuMjJ6bTEzLjMxIDcuNTMyYy0zLjQ4NyAwLTYuMzkzLTIuNzk2LTYuMzkzLTYuMjIgMC0zLjQ4IDIuODQ4LTYuMjc2IDYuMzkzLTYuMjc2IDMuNDg3IDAgNi4zMzUgMi43OTYgNi4zMzUgNi4yNzcgMCAzLjQyMy0yLjg0OCA2LjIyLTYuMzM1IDYuMjJ6bTMuNzc3LTYuMjc2YzAgMi4wNTQtMS42ODUgMy42NTEtMy43NzcgMy42NTFzLTMuNzc4LTEuNjU0LTMuNzc4LTMuNjUxYzAtMi4wNTUgMS42ODYtMy43MSAzLjc3OC0zLjcxIDIuMDkyLjA1OCAzLjc3NyAxLjcxMiAzLjc3NyAzLjcxem0tMTMuMzY3LTcuNDc2YzAgMi4wNTUtMS42ODUgMy43MS0zLjc3NyAzLjcxLTIuMDkzIDAtMy43NzgtMS42NTUtMy43NzgtMy43MSAwLTIuMDU0IDEuNjg1LTMuNzA5IDMuNzc4LTMuNzA5IDIuMTUgMCAzLjc3NyAxLjY1NSAzLjc3NyAzLjcxeiIgZmlsbD0iI2Q5YjQzMiIvPjwvc3ZnPg==',
  adapter: () => new _solana_wallet_adapter_coin98__WEBPACK_IMPORTED_MODULE_0__.Coin98WalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/index.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bitkeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bitkeep */ "../../node_modules/@solana/wallet-adapter-wallets/lib/bitkeep.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _bitkeep__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _bitkeep__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _bitpie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bitpie */ "../../node_modules/@solana/wallet-adapter-wallets/lib/bitpie.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _bitpie__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _bitpie__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _blocto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocto */ "../../node_modules/@solana/wallet-adapter-wallets/lib/blocto.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _blocto__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _blocto__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _clover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clover */ "../../node_modules/@solana/wallet-adapter-wallets/lib/clover.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _clover__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _clover__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _coin98__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coin98 */ "../../node_modules/@solana/wallet-adapter-wallets/lib/coin98.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _coin98__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _coin98__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _ledger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ledger */ "../../node_modules/@solana/wallet-adapter-wallets/lib/ledger.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _ledger__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _ledger__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _mathwallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mathwallet */ "../../node_modules/@solana/wallet-adapter-wallets/lib/mathwallet.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _mathwallet__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _mathwallet__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _phantom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phantom */ "../../node_modules/@solana/wallet-adapter-wallets/lib/phantom.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _phantom__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _phantom__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _safepal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./safepal */ "../../node_modules/@solana/wallet-adapter-wallets/lib/safepal.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _safepal__WEBPACK_IMPORTED_MODULE_8__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _safepal__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _slope__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slope */ "../../node_modules/@solana/wallet-adapter-wallets/lib/slope.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _slope__WEBPACK_IMPORTED_MODULE_9__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _slope__WEBPACK_IMPORTED_MODULE_9__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _solflare__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./solflare */ "../../node_modules/@solana/wallet-adapter-wallets/lib/solflare.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _solflare__WEBPACK_IMPORTED_MODULE_10__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _solflare__WEBPACK_IMPORTED_MODULE_10__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _solflareWeb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./solflareWeb */ "../../node_modules/@solana/wallet-adapter-wallets/lib/solflareWeb.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _solflareWeb__WEBPACK_IMPORTED_MODULE_11__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _solflareWeb__WEBPACK_IMPORTED_MODULE_11__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _sollet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sollet */ "../../node_modules/@solana/wallet-adapter-wallets/lib/sollet.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _sollet__WEBPACK_IMPORTED_MODULE_12__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _sollet__WEBPACK_IMPORTED_MODULE_12__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _solletExtension__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./solletExtension */ "../../node_modules/@solana/wallet-adapter-wallets/lib/solletExtension.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _solletExtension__WEBPACK_IMPORTED_MODULE_13__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _solletExtension__WEBPACK_IMPORTED_MODULE_13__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _solong__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./solong */ "../../node_modules/@solana/wallet-adapter-wallets/lib/solong.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _solong__WEBPACK_IMPORTED_MODULE_14__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _solong__WEBPACK_IMPORTED_MODULE_14__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _torus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./torus */ "../../node_modules/@solana/wallet-adapter-wallets/lib/torus.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _torus__WEBPACK_IMPORTED_MODULE_15__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _torus__WEBPACK_IMPORTED_MODULE_15__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_16__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _types__WEBPACK_IMPORTED_MODULE_16__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _walletconnect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./walletconnect */ "../../node_modules/@solana/wallet-adapter-wallets/lib/walletconnect.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _walletconnect__WEBPACK_IMPORTED_MODULE_17__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _walletconnect__WEBPACK_IMPORTED_MODULE_17__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



















/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/ledger.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/ledger.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLedgerWallet": () => (/* binding */ getLedgerWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_ledger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-ledger */ "@solana/wallet-adapter-ledger");
/* harmony import */ var _solana_wallet_adapter_ledger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_ledger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getLedgerWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Ledger,
  url: 'https://www.ledger.com',
  icon: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+',
  adapter: () => new _solana_wallet_adapter_ledger__WEBPACK_IMPORTED_MODULE_0__.LedgerWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/mathwallet.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/mathwallet.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMathWallet": () => (/* binding */ getMathWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_mathwallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-mathwallet */ "@solana/wallet-adapter-mathwallet");
/* harmony import */ var _solana_wallet_adapter_mathwallet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_mathwallet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getMathWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.MathWallet,
  url: 'https://mathwallet.org',
  icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMCAwaDEyOHYxMjhoLTEyOHoiIG9wYWNpdHk9IjAiLz48cGF0aCBkPSJtOTAuODQ3MDA4NiA1Ny43NjEwMDIzYy0yLjI3NzAzNjMtMi4yNzcwMzYzLTIuMjc3MDM2My01Ljk2ODg0MTYgMC04LjI0NTg3NzggMi4yNzcwMzYyLTIuMjc3MDM2MyA1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2NiAyLjI3NzAzNjIgMi4yNzcwMzY2IDUuOTY4ODQxNSAwIDguMjQ1ODc3OC0yLjI3NzAzNjMgMi4yNzcwMzYyLTUuOTY4ODQxNiAyLjI3NzAzNjItOC4yNDU4Nzc4IDB6bS0xOS41ODM5NTk4IDE5LjU4Mzk1OTdjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMzAuOTIyMDQyMi0xMC4zMDczNDcyYy0xLjcwNzc3OC0xLjcwNzc3NzItMS43MDc3NzgtNC40NzY2MzEyIDAtNi4xODQ0MDg0IDEuNzA3Nzc3LTEuNzA3Nzc3MiA0LjQ3NjYzMS0xLjcwNzc3NzIgNi4xODQ0MDggMHMxLjcwNzc3NyA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEgMS43MDc3NzcyLTYuMTg0NDA4IDB6bS0xMC4zMDczNDc3IDEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMSAwLTYuMTg0NDA4M3M0LjQ3NjYzMTEtMS43MDc3NzcyIDYuMTg0NDA4MyAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTEgMCA2LjE4NDQwODMtNC40NzY2MzExIDEuNzA3Nzc3Mi02LjE4NDQwODMgMHptMjEuNjQ1NDI4Ny0xLjAzMDczNDdjLTEuMTM4NTE4LTEuMTM4NTE4MS0xLjEzODUxOC0yLjk4NDQyMDggMC00LjEyMjkzODkgMS4xMzg1MTktMS4xMzg1MTgxIDIuOTg0NDIxLTEuMTM4NTE4MSA0LjEyMjkzOSAwIDEuMTM4NTE5IDEuMTM4NTE4MSAxLjEzODUxOSAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTggMS4xMzg1MTgxLTIuOTg0NDIgMS4xMzg1MTgxLTQuMTIyOTM5IDB6bS0xMC4zMDczNDcgMTAuMzA3MzQ3MmMtMS4xMzg1MTgtMS4xMzg1MTgxLTEuMTM4NTE4LTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxOC0xLjEzODUxODEgMi45ODQ0MjEtMS4xMzg1MTgxIDQuMTIyOTM5IDAgMS4xMzg1MTggMS4xMzg1MTgyIDEuMTM4NTE4IDIuOTg0NDIwOCAwIDQuMTIyOTM4OS0xLjEzODUxOCAxLjEzODUxODItMi45ODQ0MjEgMS4xMzg1MTgyLTQuMTIyOTM5IDB6bS0yMi42NzYxNjM3LTE4LjU1MzIyNWMtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3M2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2Mi0yLjI3NzAzNjMgNS45Njg4NDE1LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjIgMi4yNzcwMzYyIDIuMjc3MDM2MiA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYzIDIuMjc3MDM2Mi01Ljk2ODg0MTYgMi4yNzcwMzYyLTguMjQ1ODc3OCAwem0tMjAuNzEwNTA2IDBjLTIuMjc3MDM2Mi0yLjI3NzAzNjMtMi4yNzcwMzYyLTUuOTY4ODQxNiAwLTguMjQ1ODc3OCAyLjI3NzAzNjMtMi4yNzcwMzYzIDUuOTY4ODQxNi0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDIuMjc3MDM2MiAyLjI3NzAzNjMgNS45Njg4NDE1IDAgOC4yNDU4Nzc4LTIuMjc3MDM2MiAyLjI3NzAzNjItNS45Njg4NDE1IDIuMjc3MDM2Mi04LjI0NTg3NzggMHptLTE5LjU4Mzk1OTcgMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0zMC45MjIwNDE3LTEwLjMwNzM0NzJjLTEuNzA3Nzc3Mi0xLjcwNzc3NzItMS43MDc3NzcyLTQuNDc2NjMxMiAwLTYuMTg0NDA4NHM0LjQ3NjYzMTItMS43MDc3NzcyIDYuMTg0NDA4NCAwIDEuNzA3Nzc3MiA0LjQ3NjYzMTIgMCA2LjE4NDQwODQtNC40NzY2MzEyIDEuNzA3Nzc3Mi02LjE4NDQwODQgMHptLTEwLjMwNzM0NzIgMTAuMzA3MzQ3MmMtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzExIDAtNi4xODQ0MDgzczQuNDc2NjMxMS0xLjcwNzc3NzIgNi4xODQ0MDgzIDAgMS43MDc3NzcyIDQuNDc2NjMxMSAwIDYuMTg0NDA4My00LjQ3NjYzMTEgMS43MDc3NzcyLTYuMTg0NDA4MyAwem0tNDAuMTk4NjU0My0xLjAzMDczNDdjLTEuMTM4NTE4MTMtMS4xMzg1MTgxLTEuMTM4NTE4MTMtMi45ODQ0MjA4IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA4LTEuMTM4NTE4MSA0LjEyMjkzODkgMHMxLjEzODUxODEgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTIuOTg0NDIwOCAxLjEzODUxODEtNC4xMjI5Mzg5IDB6bTEwLjMwNzM0NzMgMTAuMzA3MzQ3MmMtMS4xMzg1MTgyLTEuMTM4NTE4MS0xLjEzODUxODItMi45ODQ0MjA3IDAtNC4xMjI5Mzg5IDEuMTM4NTE4MS0xLjEzODUxODEgMi45ODQ0MjA3LTEuMTM4NTE4MSA0LjEyMjkzODggMCAxLjEzODUxODIgMS4xMzg1MTgyIDEuMTM4NTE4MiAyLjk4NDQyMDggMCA0LjEyMjkzODktMS4xMzg1MTgxIDEuMTM4NTE4Mi0yLjk4NDQyMDcgMS4xMzg1MTgyLTQuMTIyOTM4OCAwem00MS4yMjkzODg5IDBjLTEuMTM4NTE4MS0xLjEzODUxODEtMS4xMzg1MTgxLTIuOTg0NDIwNyAwLTQuMTIyOTM4OSAxLjEzODUxODItMS4xMzg1MTgxIDIuOTg0NDIwOC0xLjEzODUxODEgNC4xMjI5Mzg5IDAgMS4xMzg1MTgyIDEuMTM4NTE4MiAxLjEzODUxODIgMi45ODQ0MjA4IDAgNC4xMjI5Mzg5LTEuMTM4NTE4MSAxLjEzODUxODItMi45ODQ0MjA3IDEuMTM4NTE4Mi00LjEyMjkzODkgMHptLTQyLjI2MDEyMzctMTkuNTgzOTU5N2MtMS43MDc3NzcyLTEuNzA3Nzc3Mi0xLjcwNzc3NzItNC40NzY2MzEyIDAtNi4xODQ0MDg0czQuNDc2NjMxMi0xLjcwNzc3NzIgNi4xODQ0MDg0IDAgMS43MDc3NzcyIDQuNDc2NjMxMiAwIDYuMTg0NDA4NC00LjQ3NjYzMTIgMS43MDc3NzcyLTYuMTg0NDA4NCAwem0xOS41ODM5NTk4IDEuMDMwNzM0N2MtMi4yNzcwMzYzLTIuMjc3MDM2My0yLjI3NzAzNjMtNS45Njg4NDE1IDAtOC4yNDU4Nzc4czUuOTY4ODQxNS0yLjI3NzAzNjMgOC4yNDU4Nzc4IDAgMi4yNzcwMzYzIDUuOTY4ODQxNSAwIDguMjQ1ODc3OC01Ljk2ODg0MTUgMi4yNzcwMzYzLTguMjQ1ODc3OCAwem0wLTIwLjYxNDY5NDVjLTIuMjc3MDM2My0yLjI3NzAzNjMtMi4yNzcwMzYzLTUuOTY4ODQxNSAwLTguMjQ1ODc3OHM1Ljk2ODg0MTUtMi4yNzcwMzYzIDguMjQ1ODc3OCAwIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtNS45Njg4NDE1IDIuMjc3MDM2My04LjI0NTg3NzggMHptLTEwLjMwNzM0NzMgMTAuMzA3MzQ3M2MtMi4yNzcwMzYyLTIuMjc3MDM2My0yLjI3NzAzNjItNS45Njg4NDE2IDAtOC4yNDU4Nzc4IDIuMjc3MDM2My0yLjI3NzAzNjMgNS45Njg4NDE2LTIuMjc3MDM2MyA4LjI0NTg3NzggMCAyLjI3NzAzNjMgMi4yNzcwMzYyIDIuMjc3MDM2MyA1Ljk2ODg0MTUgMCA4LjI0NTg3NzgtMi4yNzcwMzYyIDIuMjc3MDM2Mi01Ljk2ODg0MTUgMi4yNzcwMzYyLTguMjQ1ODc3OCAweiIvPjwvZz48L3N2Zz4=',
  adapter: () => new _solana_wallet_adapter_mathwallet__WEBPACK_IMPORTED_MODULE_0__.MathWalletWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/phantom.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/phantom.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPhantomWallet": () => (/* binding */ getPhantomWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-phantom */ "../../node_modules/@solana/wallet-adapter-phantom/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getPhantomWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Phantom,
  url: 'https://www.phantom.app',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K',
  adapter: () => new _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_0__.PhantomWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/safepal.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/safepal.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSafePalWallet": () => (/* binding */ getSafePalWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_safepal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-safepal */ "@solana/wallet-adapter-safepal");
/* harmony import */ var _solana_wallet_adapter_safepal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_safepal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getSafePalWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.SafePal,
  url: 'https://www.safepal.io',
  icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIHdpZHRoPSIyNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtMjU2IDEyOGMwIDcwLjY5Mzg3My01Ny4zMDc5MzMgMTI4LTEyOCAxMjgtNzAuNjkyMDY2NyAwLTEyOC01Ny4zMDYxMjctMTI4LTEyOCAwLTcwLjY5MjA2NjcgNTcuMzA3OTMzMy0xMjggMTI4LTEyOCA3MC42OTIwNjcgMCAxMjggNTcuMzA3OTMzMyAxMjggMTI4IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0ibTIwMC45OTE0OTkgMTQxLjM4NDM3OXYxMS45MzQ0MDRjMCAzMi40OTcwNzgtNDYuMjA1ODI2IDUxLjQ3NTM0Ni02MS45MzUzOTggNTYuOTg2NTMybC02LjI4OTM3MSAyLjE3NDY4NXYtMjAuNjI5NDAxbDIuNjIxOTE2LS45ODkyOGMyMi43MTQ3NDUtOC41NDg4MzYgNDUuNjMyMjgyLTIzLjI5NTQ2NSA0Ni4wODgzNjEtMzcuMTIzNzg0bC4wMDY5MjItLjQxODc1MnYtMTEuOTM0NDA0em0tNzIuODY1MTcyLTk3Ljg2NDM3OSAxOS42NjExMzUgNi4wNjMzODIydjIxLjA0ODA2N2wtMTkuNjYxMTM1LTYuMDg0Mzk2My0xLjI4NjcxMS4zOTkyNjgzdjQ3LjM1NDUxMzhoMjAuOTQ3ODQ2djE5LjUxMDgwM2gtMjAuOTQ3ODQ2djgwLjM4MDYzbC02LjM2Mjg5Mi0yLjM3NTQ2N2MtMi40NDg2MzUtLjkyODUwMi01Ljk3MzE2Ny0yLjMzOTg4Ni0xMC4yMTU4NzUtNC4yNDkxNDJsLS41NTc0NC0uMjUxODU4LTIuMzc0NTk2LTEuMDg0NjUydi0xNTQuMjkzNzU5N3ptLTI2Ljk2OTIgOC40MDA0NzU4djIwLjk1MTA3ODhsLTI2LjY0MTA1NTggOC4yNjk4NjQ5djMxLjE1OTA5MjVoMjYuNjQxMDU1OHY5MC4yNDI3MThsLTUuOTAwMTE4Mi0zLjAzNDExNWMtMTguMTc2Mjc3My05LjM1NTM5LTM5LjgxMTA4ODItMjUuMDcwMTczLTQwLjI0MTk2NjgtNDYuOTcwMjQ4bC0uMDA2NTQxMS0uNjY1NTMydi0xMC40ODkyOGgxOS41MDc1NzAzdjEwLjQ4OTI4YzAgNC40NjY3MzcgMi4yNTgyODY3IDkuMTU1OCA2LjcxODY5NjMgMTMuOTgyOTQ0bC40MTE1NTY2LjQzOTIwOXYtMzQuNDg0MTczaC0yNi42Mzc4MjMydi02NS42NDY0OTh6bTUyLjU1MjYtLjQ5OTE2NjIgNDcuMjgxNzcyIDE0LjYzMzkxMDZ2NjUuNzU2NDE3OGgtMjcuNzU4MDM3djI4LjQ3NTc1MWwtLjI4NTQ4OS4zNTQyMDZjLTEuMzU1MjUgMS42MzQ0NTUtNy41NjM1NzUgOC42MjI2NTUtMTkuMjIwNDY1IDE0LjU5NDkxNnptMTkuNTIzNzM1IDI3LjA3NzUwMzN2MzMuODAyMDIyMWg4LjI1MDQ2N3YtMzEuMjU0NDY0eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=',
  adapter: () => new _solana_wallet_adapter_safepal__WEBPACK_IMPORTED_MODULE_0__.SafePalWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/slope.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/slope.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSlopeWallet": () => (/* binding */ getSlopeWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_slope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-slope */ "@solana/wallet-adapter-slope");
/* harmony import */ var _solana_wallet_adapter_slope__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_slope__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getSlopeWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Slope,
  url: 'https://www.slope.finance/#/wallet',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgZmlsbD0iIzZlNjZmYSIgcj0iNjQiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzUuMTk2MyA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNzMuNTk3IDU0LjM5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtNzMuNTk3IDczLjU5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjc1Ii8+PHBhdGggZD0ibTczLjYwNCA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNTQuMzk2OCAzNS4yIDE5LjItMTkuMnYxOS4ybC0xOS4yIDE5LjJoLTE5LjJ6IiBmaWxsLW9wYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Im03My41OTE1IDkyLjgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMmgxOS4yeiIgZmlsbC1vcGFjaXR5PSIuNCIvPjwvZz48L3N2Zz4=',
  adapter: () => new _solana_wallet_adapter_slope__WEBPACK_IMPORTED_MODULE_0__.SlopeWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/solflare.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/solflare.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSolflareWallet": () => (/* binding */ getSolflareWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_solflare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-solflare */ "../../node_modules/@solana/wallet-adapter-solflare/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getSolflareWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Solflare,
  url: 'https://solflare.com',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+',
  adapter: () => new _solana_wallet_adapter_solflare__WEBPACK_IMPORTED_MODULE_0__.SolflareWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/solflareWeb.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/solflareWeb.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSolflareWebWallet": () => (/* binding */ getSolflareWebWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-sollet */ "../../node_modules/@solana/wallet-adapter-sollet/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const getSolflareWebWallet = (_a = {}) => {
  var {
    provider
  } = _a,
      config = __rest(_a, ["provider"]);

  return {
    name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.SolflareWeb,
    url: 'https://solflare.com',
    icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+',
    adapter: () => new _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__.SolletWalletAdapter(Object.assign({
      provider: 'https://solflare.com/access-wallet'
    }, config))
  };
};

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/sollet.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/sollet.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSolletWallet": () => (/* binding */ getSolletWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-sollet */ "../../node_modules/@solana/wallet-adapter-sollet/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const getSolletWallet = (_a = {}) => {
  var {
    provider
  } = _a,
      config = __rest(_a, ["provider"]);

  return {
    name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Sollet,
    url: 'https://www.sollet.io',
    icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUzMCIgd2lkdGg9IjUzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLTEtMWg1MzJ2NTMyaC01MzJ6IiBmaWxsPSJub25lIi8+PGcgZmlsbD0iIzAwZmZhMyI+PHBhdGggZD0ibTg4Ljg4OTM1IDM3Mi45ODIwMWMzLjE5My0zLjE5IDcuNTIyLTQuOTgyIDEyLjAzNS00Ljk4Mmg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTc0IDYuMDE3IDE0LjUzNmwtODIuMjkxIDgyLjIyNmMtMy4xOTMgMy4xOTEtNy41MjIgNC45ODMtMTIuMDM2IDQuOTgzaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NS05LjE3NC02LjAxNzgtMTQuNTM3bDgyLjI5MTktODIuMjI2eiIvPjxwYXRoIGQ9Im04OC44ODkzNSA2NS45ODI1YzMuMTkzLTMuMTkwNCA3LjUyMi00Ljk4MjUgMTIuMDM1LTQuOTgyNWg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTczOSA2LjAxNyAxNC41MzYzbC04Mi4yOTEgODIuMjI2N2MtMy4xOTMgMy4xOS03LjUyMiA0Ljk4Mi0xMi4wMzYgNC45ODJoLTQxNi40NjAxYy03LjU4NjYgMC0xMS4zODQ1LTkuMTc0LTYuMDE3OC0xNC41MzZsODIuMjkxOS04Mi4yMjY1eiIvPjxwYXRoIGQ9Im00NDEuMTExMzUgMjE5LjEwOTVjLTMuMTkzLTMuMTktNy41MjItNC45ODItMTIuMDM2LTQuOTgyaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NSA5LjE3My02LjAxNzggMTQuNTM2bDgyLjI5MTkgODIuMjI2YzMuMTkzIDMuMTkgNy41MjIgNC45ODMgMTIuMDM1IDQuOTgzaDQxNi40NjFjNy41ODYgMCAxMS4zODQtOS4xNzQgNi4wMTctMTQuNTM3eiIvPjwvZz48L3N2Zz4=',
    adapter: () => new _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__.SolletWalletAdapter(Object.assign({
      provider: 'https://www.sollet.io'
    }, config))
  };
};

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/solletExtension.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/solletExtension.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSolletExtensionWallet": () => (/* binding */ getSolletExtensionWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-sollet */ "../../node_modules/@solana/wallet-adapter-sollet/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



const getSolletExtensionWallet = (_a = {}) => {
  var {
    provider
  } = _a,
      config = __rest(_a, ["provider"]);

  return {
    name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.SolletExtension,
    url: 'https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno',
    icon: 'data:image/png;base64,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',
    adapter: () => new _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_0__.SolletWalletAdapter(config)
  };
};

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/solong.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/solong.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSolongWallet": () => (/* binding */ getSolongWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_solong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-solong */ "@solana/wallet-adapter-solong");
/* harmony import */ var _solana_wallet_adapter_solong__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_solong__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getSolongWallet = (config = {}) => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Solong,
  url: 'https://solongwallet.com',
  icon: 'data:image/png;base64,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',
  adapter: () => new _solana_wallet_adapter_solong__WEBPACK_IMPORTED_MODULE_0__.SolongWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/torus.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/torus.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTorusWallet": () => (/* binding */ getTorusWallet)
/* harmony export */ });
/* harmony import */ var _solana_wallet_adapter_torus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-torus */ "@solana/wallet-adapter-torus");
/* harmony import */ var _solana_wallet_adapter_torus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_torus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js");


const getTorusWallet = config => ({
  name: _types__WEBPACK_IMPORTED_MODULE_1__.WalletName.Torus,
  url: 'https://tor.us',
  icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjcyIiB3aWR0aD0iNzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOS40MDY5MSAwYy0zLjcyMjcxIDAtNi43NDA1NiAzLjAxNzg0LTYuNzQwNTYgNi43NDA1NXY3Ljg1MjI1YzAgMy43MjI3IDMuMDE3ODUgNi43NDA1IDYuNzQwNTUgNi43NDA1aDExLjkyNTg1djQzLjkyNjFjMCAzLjcyMjcgMy4wMTc5IDYuNzQwNiA2Ljc0MDYgNi43NDA2aDcuODUyMmMzLjcyMjcgMCA2Ljc0MDYtMy4wMTc5IDYuNzQwNi02Ljc0MDZ2LTUwLjYwOTVjLjAwMDEtLjAxOTEuMDAwMi0uMDM4MS4wMDAyLS4wNTcxdi03Ljg1MjI0YzAtMy43MjI3MS0zLjAxNzktNi43NDA1Ni02Ljc0MDYtNi43NDA1NmgtNy44NTI0LTE4LjY2NjQ0eiIgZmlsbD0iIzAzNjRmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0ibTU4LjY2Njk1IDIxLjMzMzNjNS44OTExIDAgMTAuNjY2Ny00Ljc3NTYgMTAuNjY2Ny0xMC42NjY2IDAtNS44OTEwNy00Ljc3NTYtMTAuNjY2Ny0xMC42NjY3LTEwLjY2NjctNS44OTEgMC0xMC42NjY2IDQuNzc1NjMtMTAuNjY2NiAxMC42NjY3IDAgNS44OTEgNC43NzU2IDEwLjY2NjYgMTAuNjY2NiAxMC42NjY2eiIgZmlsbD0iIzFhYzdmZSIvPjwvc3ZnPg==',
  adapter: () => new _solana_wallet_adapter_torus__WEBPACK_IMPORTED_MODULE_0__.TorusWalletAdapter(config)
});

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/types.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/types.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletName": () => (/* binding */ WalletName)
/* harmony export */ });
var WalletName;

(function (WalletName) {
  // BitKeep = 'BitKeep', // not published yet
  WalletName["Bitpie"] = "Bitpie";
  WalletName["Blocto"] = "Blocto";
  WalletName["Clover"] = "Clover";
  WalletName["Coin98"] = "Coin98";
  WalletName["Ledger"] = "Ledger";
  WalletName["MathWallet"] = "MathWallet";
  WalletName["Phantom"] = "Phantom";
  WalletName["SafePal"] = "SafePal";
  WalletName["Slope"] = "Slope";
  WalletName["Solflare"] = "Solflare";
  WalletName["SolflareWeb"] = "Solflare (Web)";
  WalletName["Sollet"] = "Sollet";
  WalletName["SolletExtension"] = "Sollet (Extension)";
  WalletName["Solong"] = "Solong";
  WalletName["Torus"] = "Torus"; // WalletConnect = 'WalletConnect', // not published yet
})(WalletName || (WalletName = {}));

/***/ }),

/***/ "../../node_modules/@solana/wallet-adapter-wallets/lib/walletconnect.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@solana/wallet-adapter-wallets/lib/walletconnect.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// import { Wallet, WalletName } from './types';
//
// @solana/wallet-adapter-walletconnect isn't published to NPM yet
//
// export const getWalletConnectWallet = (config: WalletConnectWalletAdapterConfig): Wallet => ({
//     name: WalletName.WalletConnect,
//     url: 'https://walletconnect.org',
//     icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+',
//     adapter: () => new WalletConnectWalletAdapter(config),
// });


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dHNfTXlXYWxsZXRQcm92aWRlcl90c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7OztBQU1BLFNBQVNLLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUMvQixRQUFNQyxPQUFPLEdBQUdQLDhDQUFPLENBQ3JCLE1BQU0sQ0FBQ0UsZ0ZBQWdCLEVBQWpCLEVBQXFCQyxpRkFBaUIsRUFBdEMsRUFBMENDLCtFQUFlLEVBQXpELENBRGUsRUFFckIsRUFGcUIsQ0FBdkI7QUFLQSxzQkFBTyw4REFBQyx3RUFBRDtBQUFnQixXQUFPLEVBQUVHO0FBQXpCLEtBQXNDRCxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCxpRUFBZUQsZ0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ08sTUFBTUksaUJBQU4sU0FBZ0NELHNEQUFoQyxDQUE2QztBQUU3QyxJQUFJRSxvQkFBSjs7QUFDUCxDQUFDLFVBQVVBLG9CQUFWLEVBQWdDO0FBQzdCQSxFQUFBQSxvQkFBb0IsQ0FBQyxTQUFELENBQXBCLEdBQWtDLGNBQWxDO0FBQ0FBLEVBQUFBLG9CQUFvQixDQUFDLFNBQUQsQ0FBcEIsR0FBa0MsU0FBbEM7QUFDQUEsRUFBQUEsb0JBQW9CLENBQUMsUUFBRCxDQUFwQixHQUFpQyxRQUFqQztBQUNILENBSkQsRUFJR0Esb0JBQW9CLEtBQUtBLG9CQUFvQixHQUFHLEVBQTVCLENBSnZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMTyxNQUFNQyxXQUFOLFNBQTBCQyxLQUExQixDQUFnQztBQUNuQztBQUNBQyxFQUFBQSxXQUFXLENBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFpQjtBQUN4QixVQUFNRCxPQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7O0FBTGtDO0FBT2hDLE1BQU1DLG1CQUFOLFNBQWtDTCxXQUFsQyxDQUE4QztBQUNqREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLHFCQUFaO0FBQ0g7O0FBSmdEO0FBTTlDLE1BQU1DLHVCQUFOLFNBQXNDUixXQUF0QyxDQUFrRDtBQUNyREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLHlCQUFaO0FBQ0g7O0FBSm9EO0FBTWxELE1BQU1FLG1CQUFOLFNBQWtDVCxXQUFsQyxDQUE4QztBQUNqREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLHFCQUFaO0FBQ0g7O0FBSmdEO0FBTTlDLE1BQU1HLHFCQUFOLFNBQW9DVixXQUFwQyxDQUFnRDtBQUNuREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLHVCQUFaO0FBQ0g7O0FBSmtEO0FBTWhELE1BQU1JLHVCQUFOLFNBQXNDWCxXQUF0QyxDQUFrRDtBQUNyREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLHlCQUFaO0FBQ0g7O0FBSm9EO0FBTWxELE1BQU1LLHdCQUFOLFNBQXVDWixXQUF2QyxDQUFtRDtBQUN0REUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLDBCQUFaO0FBQ0g7O0FBSnFEO0FBTW5ELE1BQU1NLGtCQUFOLFNBQWlDYixXQUFqQyxDQUE2QztBQUNoREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLG9CQUFaO0FBQ0g7O0FBSitDO0FBTTdDLE1BQU1PLG9CQUFOLFNBQW1DZCxXQUFuQyxDQUErQztBQUNsREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLHNCQUFaO0FBQ0g7O0FBSmlEO0FBTS9DLE1BQU1RLGtCQUFOLFNBQWlDZixXQUFqQyxDQUE2QztBQUNoREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLG9CQUFaO0FBQ0g7O0FBSitDO0FBTTdDLE1BQU1TLHVCQUFOLFNBQXNDaEIsV0FBdEMsQ0FBa0Q7QUFDckRFLEVBQUFBLFdBQVcsR0FBRztBQUNWLFVBQU0sR0FBR0ksU0FBVDtBQUNBLFNBQUtDLElBQUwsR0FBWSx5QkFBWjtBQUNIOztBQUpvRDtBQU1sRCxNQUFNVSwwQkFBTixTQUF5Q2pCLFdBQXpDLENBQXFEO0FBQ3hERSxFQUFBQSxXQUFXLEdBQUc7QUFDVixVQUFNLEdBQUdJLFNBQVQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksNEJBQVo7QUFDSDs7QUFKdUQ7QUFNckQsTUFBTVcsc0JBQU4sU0FBcUNsQixXQUFyQyxDQUFpRDtBQUNwREUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLHdCQUFaO0FBQ0g7O0FBSm1EO0FBTWpELE1BQU1ZLDBCQUFOLFNBQXlDbkIsV0FBekMsQ0FBcUQ7QUFDeERFLEVBQUFBLFdBQVcsR0FBRztBQUNWLFVBQU0sR0FBR0ksU0FBVDtBQUNBLFNBQUtDLElBQUwsR0FBWSw0QkFBWjtBQUNIOztBQUp1RDtBQU1yRCxNQUFNYSxrQkFBTixTQUFpQ3BCLFdBQWpDLENBQTZDO0FBQ2hERSxFQUFBQSxXQUFXLEdBQUc7QUFDVixVQUFNLEdBQUdJLFNBQVQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksb0JBQVo7QUFDSDs7QUFKK0M7QUFNN0MsTUFBTWMsd0JBQU4sU0FBdUNyQixXQUF2QyxDQUFtRDtBQUN0REUsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHSSxTQUFUO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLDBCQUFaO0FBQ0g7O0FBSnFEO0FBTW5ELE1BQU1lLHVCQUFOLFNBQXNDdEIsV0FBdEMsQ0FBa0Q7QUFDckRFLEVBQUFBLFdBQVcsR0FBRztBQUNWLFVBQU0sR0FBR0ksU0FBVDtBQUNBLFNBQUtDLElBQUwsR0FBWSx5QkFBWjtBQUNIOztBQUpvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakd6RDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxJQUFJZ0IsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxXQUFPQSxLQUFLLFlBQVlILENBQWpCLEdBQXFCRyxLQUFyQixHQUE2QixJQUFJSCxDQUFKLENBQU0sVUFBVUksT0FBVixFQUFtQjtBQUFFQSxNQUFBQSxPQUFPLENBQUNELEtBQUQsQ0FBUDtBQUFpQixLQUE1QyxDQUFwQztBQUFvRjs7QUFDNUcsU0FBTyxLQUFLSCxDQUFDLEtBQUtBLENBQUMsR0FBR0ssT0FBVCxDQUFOLEVBQXlCLFVBQVVELE9BQVYsRUFBbUJFLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCO0FBQUUsVUFBSTtBQUFFSyxRQUFBQSxJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsSUFBVixDQUFlTixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPTyxDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUMzRixhQUFTQyxRQUFULENBQWtCUixLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRUssUUFBQUEsSUFBSSxDQUFDUCxTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CRSxLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT08sQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjSSxNQUFkLEVBQXNCO0FBQUVBLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ1QsS0FBUixDQUFyQixHQUFzQ0QsS0FBSyxDQUFDVSxNQUFNLENBQUNULEtBQVIsQ0FBTCxDQUFvQlcsSUFBcEIsQ0FBeUJQLFNBQXpCLEVBQW9DSSxRQUFwQyxDQUF0QztBQUFzRjs7QUFDOUdILElBQUFBLElBQUksQ0FBQyxDQUFDUCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQmpCLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RFUsSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTTyxTQUFTTyxJQUFULENBQWNDLFFBQWQsRUFBd0JDLFFBQXhCLEVBQWtDQyxLQUFsQyxFQUF5QztBQUM1QyxNQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ1hDLElBQUFBLFVBQVUsQ0FBQyxNQUFNdkIsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDMUQsWUFBTWdCLElBQUksR0FBRyxNQUFNSSxRQUFRLEVBQTNCO0FBQ0EsVUFBSSxDQUFDSixJQUFMLEVBQ0lHLElBQUksQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXFCQyxLQUFLLEdBQUcsQ0FBN0IsQ0FBSjtBQUNQLEtBSnlCLENBQWhCLEVBSU5ELFFBSk0sQ0FBVjtBQUtIO0FBQ0o7QUFDTSxTQUFTRyxjQUFULENBQXdCQyxPQUF4QixFQUFpQ0MsWUFBakMsRUFBK0NDLFNBQS9DLEVBQTBEO0FBQzdEUixFQUFBQSxJQUFJLENBQUMsTUFBTTtBQUNQLFVBQU07QUFBRVMsTUFBQUE7QUFBRixRQUFZSCxPQUFsQjs7QUFDQSxRQUFJRyxLQUFKLEVBQVc7QUFDUCxVQUFJLENBQUNILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLE9BQWIsQ0FBTCxFQUE0QjtBQUN4QkMsUUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWMsR0FBRU4sT0FBTyxDQUFDOUMsV0FBUixDQUFvQkssSUFBSywwQ0FBekM7QUFDSDtBQUNKOztBQUNELFdBQU80QyxLQUFQO0FBQ0gsR0FSRyxFQVFERixZQVJDLEVBUWFDLFNBUmIsQ0FBSjtBQVNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCRCxJQUFJM0IsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxXQUFPQSxLQUFLLFlBQVlILENBQWpCLEdBQXFCRyxLQUFyQixHQUE2QixJQUFJSCxDQUFKLENBQU0sVUFBVUksT0FBVixFQUFtQjtBQUFFQSxNQUFBQSxPQUFPLENBQUNELEtBQUQsQ0FBUDtBQUFpQixLQUE1QyxDQUFwQztBQUFvRjs7QUFDNUcsU0FBTyxLQUFLSCxDQUFDLEtBQUtBLENBQUMsR0FBR0ssT0FBVCxDQUFOLEVBQXlCLFVBQVVELE9BQVYsRUFBbUJFLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCO0FBQUUsVUFBSTtBQUFFSyxRQUFBQSxJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsSUFBVixDQUFlTixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPTyxDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUMzRixhQUFTQyxRQUFULENBQWtCUixLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRUssUUFBQUEsSUFBSSxDQUFDUCxTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CRSxLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT08sQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjSSxNQUFkLEVBQXNCO0FBQUVBLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ1QsS0FBUixDQUFyQixHQUFzQ0QsS0FBSyxDQUFDVSxNQUFNLENBQUNULEtBQVIsQ0FBTCxDQUFvQlcsSUFBcEIsQ0FBeUJQLFNBQXpCLEVBQW9DSSxRQUFwQyxDQUF0QztBQUFzRjs7QUFDOUdILElBQUFBLElBQUksQ0FBQyxDQUFDUCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQmpCLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RFUsSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTQSxJQUFJb0IsTUFBTSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLE1BQWQsSUFBeUIsVUFBVUMsQ0FBVixFQUFhcEIsQ0FBYixFQUFnQjtBQUNsRCxNQUFJcUIsQ0FBQyxHQUFHLEVBQVI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNGLENBQWQsRUFBaUIsSUFBSUcsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNOLENBQXJDLEVBQXdDRSxDQUF4QyxLQUE4Q3RCLENBQUMsQ0FBQzJCLE9BQUYsQ0FBVUwsQ0FBVixJQUFlLENBQWpFLEVBQ2JELENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU9GLENBQUMsQ0FBQ0UsQ0FBRCxDQUFSOztBQUNKLE1BQUlGLENBQUMsSUFBSSxJQUFMLElBQWEsT0FBT0csTUFBTSxDQUFDSyxxQkFBZCxLQUF3QyxVQUF6RCxFQUNJLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV1AsQ0FBQyxHQUFHQyxNQUFNLENBQUNLLHFCQUFQLENBQTZCUixDQUE3QixDQUFwQixFQUFxRFMsQ0FBQyxHQUFHUCxDQUFDLENBQUNRLE1BQTNELEVBQW1FRCxDQUFDLEVBQXBFLEVBQXdFO0FBQ3BFLFFBQUk3QixDQUFDLENBQUMyQixPQUFGLENBQVVMLENBQUMsQ0FBQ08sQ0FBRCxDQUFYLElBQWtCLENBQWxCLElBQXVCTixNQUFNLENBQUNDLFNBQVAsQ0FBaUJPLG9CQUFqQixDQUFzQ0wsSUFBdEMsQ0FBMkNOLENBQTNDLEVBQThDRSxDQUFDLENBQUNPLENBQUQsQ0FBL0MsQ0FBM0IsRUFDSVIsQ0FBQyxDQUFDQyxDQUFDLENBQUNPLENBQUQsQ0FBRixDQUFELEdBQVVULENBQUMsQ0FBQ0UsQ0FBQyxDQUFDTyxDQUFELENBQUYsQ0FBWDtBQUNQO0FBQ0wsU0FBT1IsQ0FBUDtBQUNILENBVkQ7O0FBV0E7QUFDQTtBQUNPLE1BQU1XLHVCQUFOLFNBQXNDdEUsdURBQXRDLENBQXdEO0FBQzNEdUUsRUFBQUEsZUFBZSxDQUFDQyxXQUFELEVBQWNDLFVBQWQsRUFBMEJDLE9BQU8sR0FBRyxFQUFwQyxFQUF3QztBQUNuRCxXQUFPakQsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaEQsVUFBSTtBQUNBLFlBQUk7QUFDQStDLFVBQUFBLFdBQVcsQ0FBQ0csUUFBWixLQUF5QkgsV0FBVyxDQUFDRyxRQUFaLEdBQXVCLEtBQUtDLFNBQUwsSUFBa0JDLFNBQWxFO0FBQ0FMLFVBQUFBLFdBQVcsQ0FBQ00sZUFBWixLQUFnQ04sV0FBVyxDQUFDTSxlQUFaLEdBQThCLENBQUMsTUFBTUwsVUFBVSxDQUFDTSxrQkFBWCxDQUE4QixXQUE5QixDQUFQLEVBQW1EQyxTQUFqSDs7QUFDQSxnQkFBTTtBQUFFQyxZQUFBQTtBQUFGLGNBQWNQLE9BQXBCO0FBQUEsZ0JBQTZCUSxXQUFXLEdBQUd6QixNQUFNLENBQUNpQixPQUFELEVBQVUsQ0FBQyxTQUFELENBQVYsQ0FBakQ7O0FBQ0EsV0FBQ08sT0FBTyxLQUFLLElBQVosSUFBb0JBLE9BQU8sS0FBSyxLQUFLLENBQXJDLEdBQXlDLEtBQUssQ0FBOUMsR0FBa0RBLE9BQU8sQ0FBQ2IsTUFBM0QsS0FBc0VJLFdBQVcsQ0FBQ1csV0FBWixDQUF3QixHQUFHRixPQUEzQixDQUF0RTtBQUNBVCxVQUFBQSxXQUFXLEdBQUcsTUFBTSxLQUFLWSxlQUFMLENBQXFCWixXQUFyQixDQUFwQjtBQUNBLGdCQUFNYSxjQUFjLEdBQUdiLFdBQVcsQ0FBQ2MsU0FBWixFQUF2QjtBQUNBLGlCQUFPLE1BQU1iLFVBQVUsQ0FBQ2Msa0JBQVgsQ0FBOEJGLGNBQTlCLEVBQThDSCxXQUE5QyxDQUFiO0FBQ0gsU0FSRCxDQVNBLE9BQU81RSxLQUFQLEVBQWM7QUFDVixjQUFJQSxLQUFLLFlBQVlKLGdEQUFyQixFQUNJLE1BQU1JLEtBQU47QUFDSixnQkFBTSxJQUFJYSwrREFBSixDQUErQmIsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBbkYsRUFBNEZDLEtBQTVGLENBQU47QUFDSDtBQUNKLE9BZkQsQ0FnQkEsT0FBT0EsS0FBUCxFQUFjO0FBQ1YsYUFBS2dELElBQUwsQ0FBVSxPQUFWLEVBQW1CaEQsS0FBbkI7QUFDQSxjQUFNQSxLQUFOO0FBQ0g7QUFDSixLQXJCZSxDQUFoQjtBQXNCSDs7QUF4QjBEO0FBMEJ4RCxNQUFNa0YsOEJBQU4sU0FBNkNsQix1QkFBN0MsQ0FBcUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQ1RSxJQUFJN0MsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxXQUFPQSxLQUFLLFlBQVlILENBQWpCLEdBQXFCRyxLQUFyQixHQUE2QixJQUFJSCxDQUFKLENBQU0sVUFBVUksT0FBVixFQUFtQjtBQUFFQSxNQUFBQSxPQUFPLENBQUNELEtBQUQsQ0FBUDtBQUFpQixLQUE1QyxDQUFwQztBQUFvRjs7QUFDNUcsU0FBTyxLQUFLSCxDQUFDLEtBQUtBLENBQUMsR0FBR0ssT0FBVCxDQUFOLEVBQXlCLFVBQVVELE9BQVYsRUFBbUJFLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCO0FBQUUsVUFBSTtBQUFFSyxRQUFBQSxJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsSUFBVixDQUFlTixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPTyxDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUMzRixhQUFTQyxRQUFULENBQWtCUixLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRUssUUFBQUEsSUFBSSxDQUFDUCxTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CRSxLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT08sQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjSSxNQUFkLEVBQXNCO0FBQUVBLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ1QsS0FBUixDQUFyQixHQUFzQ0QsS0FBSyxDQUFDVSxNQUFNLENBQUNULEtBQVIsQ0FBTCxDQUFvQlcsSUFBcEIsQ0FBeUJQLFNBQXpCLEVBQW9DSSxRQUFwQyxDQUF0QztBQUFzRjs7QUFDOUdILElBQUFBLElBQUksQ0FBQyxDQUFDUCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQmpCLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RFUsSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTQTtBQUNBO0FBQ08sTUFBTXFELG9CQUFOLFNBQW1DRix1RkFBbkMsQ0FBa0U7QUFDckVwRixFQUFBQSxXQUFXLENBQUN1RixNQUFNLEdBQUcsRUFBVixFQUFjO0FBQ3JCOztBQUNBLFNBQUtDLGFBQUwsR0FBcUIsTUFBTTtBQUN2QixZQUFNQyxNQUFNLEdBQUcsS0FBS0MsT0FBcEI7O0FBQ0EsVUFBSUQsTUFBSixFQUFZO0FBQ1JBLFFBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFlBQVgsRUFBeUIsS0FBS0gsYUFBOUI7QUFDQSxhQUFLRSxPQUFMLEdBQWUsSUFBZjtBQUNBLGFBQUtFLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLMUMsSUFBTCxDQUFVLE9BQVYsRUFBbUIsSUFBSXpDLGdGQUFKLEVBQW5CO0FBQ0EsYUFBS3lDLElBQUwsQ0FBVSxZQUFWO0FBQ0g7QUFDSixLQVREOztBQVVBLFNBQUsyQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBS0gsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLRSxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsUUFBSSxDQUFDLEtBQUszQyxLQUFWLEVBQ0lKLDJFQUFjLENBQUMsSUFBRCxFQUFPMEMsTUFBTSxDQUFDeEMsWUFBUCxJQUF1QixJQUE5QixFQUFvQ3dDLE1BQU0sQ0FBQ3ZDLFNBQVAsSUFBb0IsQ0FBeEQsQ0FBZDtBQUNQOztBQUNZLE1BQVR3QixTQUFTLEdBQUc7QUFDWixXQUFPLEtBQUtvQixVQUFaO0FBQ0g7O0FBQ1EsTUFBTDNDLEtBQUssR0FBRztBQUNSLFFBQUk2QyxFQUFKOztBQUNBLFdBQU8sVUFBaUMsQ0FBeEM7QUFDSDs7QUFDYSxNQUFWSSxVQUFVLEdBQUc7QUFDYixXQUFPLEtBQUtMLFdBQVo7QUFDSDs7QUFDWSxNQUFUTSxTQUFTLEdBQUc7QUFDWixRQUFJTCxFQUFKOztBQUNBLFdBQU8sQ0FBQyxFQUFFLENBQUNBLEVBQUUsR0FBRyxLQUFLSixPQUFYLE1BQXdCLElBQXhCLElBQWdDSSxFQUFFLEtBQUssS0FBSyxDQUE1QyxHQUFnRCxLQUFLLENBQXJELEdBQXlEQSxFQUFFLENBQUNNLFdBQTlELENBQVI7QUFDSDs7QUFDREMsRUFBQUEsT0FBTyxHQUFHO0FBQ04sV0FBT2hGLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQixFQUF1QixhQUFhO0FBQ2hELFVBQUk7QUFDQSxZQUFJLEtBQUs4RSxTQUFMLElBQWtCLEtBQUtELFVBQTNCLEVBQ0k7QUFDSixhQUFLTCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsY0FBTUosTUFBTSxHQUFHLFVBQWlDTSxDQUFoRDtBQUNBLFlBQUksQ0FBQ04sTUFBTCxFQUNJLE1BQU0sSUFBSXRGLDRFQUFKLEVBQU47QUFDSixZQUFJLENBQUNzRixNQUFNLENBQUNRLFNBQVosRUFDSSxNQUFNLElBQUkzRixnRkFBSixFQUFOOztBQUNKLFlBQUksQ0FBQ21GLE1BQU0sQ0FBQ1csV0FBWixFQUF5QjtBQUNyQjtBQUNBLGdCQUFNRSxnQkFBZ0IsR0FBR2IsTUFBTSxDQUFDYyxpQkFBaEM7O0FBQ0EsY0FBSTtBQUNBLGtCQUFNLElBQUkxRSxPQUFKLENBQVksQ0FBQ0QsT0FBRCxFQUFVRSxNQUFWLEtBQXFCO0FBQ25DLG9CQUFNdUUsT0FBTyxHQUFHLE1BQU07QUFDbEJaLGdCQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxTQUFYLEVBQXNCVSxPQUF0QjtBQUNBekUsZ0JBQUFBLE9BQU87QUFDVixlQUhEOztBQUlBNkQsY0FBQUEsTUFBTSxDQUFDYyxpQkFBUCxHQUEyQixDQUFDLEdBQUdDLElBQUosS0FBYTtBQUNwQ2YsZ0JBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFNBQVgsRUFBc0JVLE9BQXRCO0FBQ0F2RSxnQkFBQUEsTUFBTSxDQUFDLElBQUlWLGdGQUFKLEVBQUQsQ0FBTjtBQUNBLHVCQUFPa0YsZ0JBQWdCLENBQUMvRCxLQUFqQixDQUF1QmtELE1BQXZCLEVBQStCZSxJQUEvQixDQUFQO0FBQ0gsZUFKRDs7QUFLQWYsY0FBQUEsTUFBTSxDQUFDZ0IsRUFBUCxDQUFVLFNBQVYsRUFBcUJKLE9BQXJCO0FBQ0FaLGNBQUFBLE1BQU0sQ0FBQ1ksT0FBUCxHQUFpQkssS0FBakIsQ0FBd0JDLE1BQUQsSUFBWTtBQUMvQmxCLGdCQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxTQUFYLEVBQXNCVSxPQUF0QjtBQUNBdkUsZ0JBQUFBLE1BQU0sQ0FBQzZFLE1BQUQsQ0FBTjtBQUNILGVBSEQ7QUFJSCxhQWZLLENBQU47QUFnQkgsV0FqQkQsQ0FrQkEsT0FBT3pHLEtBQVAsRUFBYztBQUNWLGdCQUFJQSxLQUFLLFlBQVlKLG9FQUFyQixFQUNJLE1BQU1JLEtBQU47QUFDSixrQkFBTSxJQUFJTSw4RUFBSixDQUEwQk4sS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBOUUsRUFBdUZDLEtBQXZGLENBQU47QUFDSCxXQXRCRCxTQXVCUTtBQUNKdUYsWUFBQUEsTUFBTSxDQUFDYyxpQkFBUCxHQUEyQkQsZ0JBQTNCO0FBQ0g7QUFDSjs7QUFDRCxZQUFJLENBQUNiLE1BQU0sQ0FBQ2pCLFNBQVosRUFDSSxNQUFNLElBQUloRSw4RUFBSixFQUFOO0FBQ0osWUFBSWdFLFNBQUo7O0FBQ0EsWUFBSTtBQUNBQSxVQUFBQSxTQUFTLEdBQUcsSUFBSWEsc0RBQUosQ0FBY0ksTUFBTSxDQUFDakIsU0FBUCxDQUFpQm9DLE9BQWpCLEVBQWQsQ0FBWjtBQUNILFNBRkQsQ0FHQSxPQUFPMUcsS0FBUCxFQUFjO0FBQ1YsZ0JBQU0sSUFBSVUsNkVBQUosQ0FBeUJWLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUNELE9BQTdFLEVBQXNGQyxLQUF0RixDQUFOO0FBQ0g7O0FBQ0R1RixRQUFBQSxNQUFNLENBQUNnQixFQUFQLENBQVUsWUFBVixFQUF3QixLQUFLakIsYUFBN0I7QUFDQSxhQUFLRSxPQUFMLEdBQWVELE1BQWY7QUFDQSxhQUFLRyxVQUFMLEdBQWtCcEIsU0FBbEI7QUFDQSxhQUFLdEIsSUFBTCxDQUFVLFNBQVY7QUFDSCxPQXBERCxDQXFEQSxPQUFPaEQsS0FBUCxFQUFjO0FBQ1YsYUFBS2dELElBQUwsQ0FBVSxPQUFWLEVBQW1CaEQsS0FBbkI7QUFDQSxjQUFNQSxLQUFOO0FBQ0gsT0F4REQsU0F5RFE7QUFDSixhQUFLMkYsV0FBTCxHQUFtQixLQUFuQjtBQUNIO0FBQ0osS0E3RGUsQ0FBaEI7QUE4REg7O0FBQ0RnQixFQUFBQSxVQUFVLEdBQUc7QUFDVCxXQUFPeEYsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaEQsWUFBTW9FLE1BQU0sR0FBRyxLQUFLQyxPQUFwQjs7QUFDQSxVQUFJRCxNQUFKLEVBQVk7QUFDUkEsUUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsWUFBWCxFQUF5QixLQUFLSCxhQUE5QjtBQUNBLGFBQUtFLE9BQUwsR0FBZSxJQUFmO0FBQ0EsYUFBS0UsVUFBTCxHQUFrQixJQUFsQjs7QUFDQSxZQUFJO0FBQ0EsZ0JBQU1ILE1BQU0sQ0FBQ29CLFVBQVAsRUFBTjtBQUNILFNBRkQsQ0FHQSxPQUFPM0csS0FBUCxFQUFjO0FBQ1YsZUFBS2dELElBQUwsQ0FBVSxPQUFWLEVBQW1CLElBQUl4QyxpRkFBSixDQUE2QlIsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBakYsRUFBMEZDLEtBQTFGLENBQW5CO0FBQ0g7QUFDSjs7QUFDRCxXQUFLZ0QsSUFBTCxDQUFVLFlBQVY7QUFDSCxLQWRlLENBQWhCO0FBZUg7O0FBQ0Q4QixFQUFBQSxlQUFlLENBQUNaLFdBQUQsRUFBYztBQUN6QixXQUFPL0MsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaEQsVUFBSTtBQUNBLGNBQU1vRSxNQUFNLEdBQUcsS0FBS0MsT0FBcEI7QUFDQSxZQUFJLENBQUNELE1BQUwsRUFDSSxNQUFNLElBQUkzRSxnRkFBSixFQUFOOztBQUNKLFlBQUk7QUFDQSxpQkFBTyxDQUFDLE1BQU0yRSxNQUFNLENBQUNULGVBQVAsQ0FBdUJaLFdBQXZCLENBQVAsS0FBK0NBLFdBQXREO0FBQ0gsU0FGRCxDQUdBLE9BQU9sRSxLQUFQLEVBQWM7QUFDVixnQkFBTSxJQUFJZSxtRkFBSixDQUErQmYsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBbkYsRUFBNEZDLEtBQTVGLENBQU47QUFDSDtBQUNKLE9BVkQsQ0FXQSxPQUFPQSxLQUFQLEVBQWM7QUFDVixhQUFLZ0QsSUFBTCxDQUFVLE9BQVYsRUFBbUJoRCxLQUFuQjtBQUNBLGNBQU1BLEtBQU47QUFDSDtBQUNKLEtBaEJlLENBQWhCO0FBaUJIOztBQUNENEcsRUFBQUEsbUJBQW1CLENBQUNDLFlBQUQsRUFBZTtBQUM5QixXQUFPMUYsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaEQsVUFBSTtBQUNBLGNBQU1vRSxNQUFNLEdBQUcsS0FBS0MsT0FBcEI7QUFDQSxZQUFJLENBQUNELE1BQUwsRUFDSSxNQUFNLElBQUkzRSxnRkFBSixFQUFOOztBQUNKLFlBQUk7QUFDQSxpQkFBTyxDQUFDLE1BQU0yRSxNQUFNLENBQUNxQixtQkFBUCxDQUEyQkMsWUFBM0IsQ0FBUCxLQUFvREEsWUFBM0Q7QUFDSCxTQUZELENBR0EsT0FBTzdHLEtBQVAsRUFBYztBQUNWLGdCQUFNLElBQUllLG1GQUFKLENBQStCZixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEtBQUssQ0FBakMsR0FBcUMsS0FBSyxDQUExQyxHQUE4Q0EsS0FBSyxDQUFDRCxPQUFuRixFQUE0RkMsS0FBNUYsQ0FBTjtBQUNIO0FBQ0osT0FWRCxDQVdBLE9BQU9BLEtBQVAsRUFBYztBQUNWLGFBQUtnRCxJQUFMLENBQVUsT0FBVixFQUFtQmhELEtBQW5CO0FBQ0EsY0FBTUEsS0FBTjtBQUNIO0FBQ0osS0FoQmUsQ0FBaEI7QUFpQkg7O0FBQ0Q4RyxFQUFBQSxXQUFXLENBQUMvRyxPQUFELEVBQVU7QUFDakIsV0FBT29CLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQixFQUF1QixhQUFhO0FBQ2hELFVBQUk7QUFDQSxjQUFNb0UsTUFBTSxHQUFHLEtBQUtDLE9BQXBCO0FBQ0EsWUFBSSxDQUFDRCxNQUFMLEVBQ0ksTUFBTSxJQUFJM0UsZ0ZBQUosRUFBTjs7QUFDSixZQUFJO0FBQ0EsZ0JBQU07QUFBRW1HLFlBQUFBO0FBQUYsY0FBZ0IsTUFBTXhCLE1BQU0sQ0FBQ3VCLFdBQVAsQ0FBbUIvRyxPQUFuQixDQUE1QjtBQUNBLGlCQUFPaUgsVUFBVSxDQUFDQyxJQUFYLENBQWdCRixTQUFoQixDQUFQO0FBQ0gsU0FIRCxDQUlBLE9BQU8vRyxLQUFQLEVBQWM7QUFDVixnQkFBTSxJQUFJZSxtRkFBSixDQUErQmYsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBbkYsRUFBNEZDLEtBQTVGLENBQU47QUFDSDtBQUNKLE9BWEQsQ0FZQSxPQUFPQSxLQUFQLEVBQWM7QUFDVixhQUFLZ0QsSUFBTCxDQUFVLE9BQVYsRUFBbUJoRCxLQUFuQjtBQUNBLGNBQU1BLEtBQU47QUFDSDtBQUNKLEtBakJlLENBQWhCO0FBa0JIOztBQTNLb0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYekU7QUFDQTtBQUNBO0FBQ08sTUFBTXFILGtCQUFrQixHQUFHLENBQUM7QUFBRUMsRUFBQUEsUUFBRjtBQUFZQyxFQUFBQSxRQUFaO0FBQXNCbEMsRUFBQUEsTUFBTSxHQUFHO0FBQUVtQyxJQUFBQSxVQUFVLEVBQUU7QUFBZDtBQUEvQixDQUFELEtBQW1FO0FBQ2pHLFFBQU1yRCxVQUFVLEdBQUdsRiw4Q0FBTyxDQUFDLE1BQU0sSUFBSWlJLHVEQUFKLENBQWVLLFFBQWYsRUFBeUJsQyxNQUF6QixDQUFQLEVBQXlDLENBQUNrQyxRQUFELEVBQVdsQyxNQUFYLENBQXpDLENBQTFCO0FBQ0Esc0JBQU84QiwwREFBQSxDQUFvQkMsc0VBQXBCLEVBQWdEO0FBQUUzRixJQUFBQSxLQUFLLEVBQUU7QUFBRTBDLE1BQUFBO0FBQUY7QUFBVCxHQUFoRCxFQUEyRW1ELFFBQTNFLENBQVA7QUFDSCxDQUhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQLElBQUluRyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFdBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFFLFdBQU9BLEtBQUssWUFBWUgsQ0FBakIsR0FBcUJHLEtBQXJCLEdBQTZCLElBQUlILENBQUosQ0FBTSxVQUFVSSxPQUFWLEVBQW1CO0FBQUVBLE1BQUFBLE9BQU8sQ0FBQ0QsS0FBRCxDQUFQO0FBQWlCLEtBQTVDLENBQXBDO0FBQW9GOztBQUM1RyxTQUFPLEtBQUtILENBQUMsS0FBS0EsQ0FBQyxHQUFHSyxPQUFULENBQU4sRUFBeUIsVUFBVUQsT0FBVixFQUFtQkUsTUFBbkIsRUFBMkI7QUFDdkQsYUFBU0MsU0FBVCxDQUFtQkosS0FBbkIsRUFBMEI7QUFBRSxVQUFJO0FBQUVLLFFBQUFBLElBQUksQ0FBQ1AsU0FBUyxDQUFDUSxJQUFWLENBQWVOLEtBQWYsQ0FBRCxDQUFKO0FBQThCLE9BQXBDLENBQXFDLE9BQU9PLENBQVAsRUFBVTtBQUFFSixRQUFBQSxNQUFNLENBQUNJLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNDLFFBQVQsQ0FBa0JSLEtBQWxCLEVBQXlCO0FBQUUsVUFBSTtBQUFFSyxRQUFBQSxJQUFJLENBQUNQLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FBbUJFLEtBQW5CLENBQUQsQ0FBSjtBQUFrQyxPQUF4QyxDQUF5QyxPQUFPTyxDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUM5RixhQUFTRixJQUFULENBQWNJLE1BQWQsRUFBc0I7QUFBRUEsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLEdBQWNULE9BQU8sQ0FBQ1EsTUFBTSxDQUFDVCxLQUFSLENBQXJCLEdBQXNDRCxLQUFLLENBQUNVLE1BQU0sQ0FBQ1QsS0FBUixDQUFMLENBQW9CVyxJQUFwQixDQUF5QlAsU0FBekIsRUFBb0NJLFFBQXBDLENBQXRDO0FBQXNGOztBQUM5R0gsSUFBQUEsSUFBSSxDQUFDLENBQUNQLFNBQVMsR0FBR0EsU0FBUyxDQUFDYyxLQUFWLENBQWdCakIsT0FBaEIsRUFBeUJDLFVBQVUsSUFBSSxFQUF2QyxDQUFiLEVBQXlEVSxJQUF6RCxFQUFELENBQUo7QUFDSCxHQUxNLENBQVA7QUFNSCxDQVJEOztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNbUcsWUFBWSxHQUFHO0FBQ2pCM0MsRUFBQUEsTUFBTSxFQUFFLElBRFM7QUFFakIzQyxFQUFBQSxPQUFPLEVBQUUsSUFGUTtBQUdqQkcsRUFBQUEsS0FBSyxFQUFFLEtBSFU7QUFJakJ1QixFQUFBQSxTQUFTLEVBQUUsSUFKTTtBQUtqQjJCLEVBQUFBLFNBQVMsRUFBRTtBQUxNLENBQXJCO0FBT08sTUFBTS9HLGNBQWMsR0FBRyxDQUFDO0FBQUVvSSxFQUFBQSxRQUFGO0FBQVk5SCxFQUFBQSxPQUFaO0FBQXFCMkksRUFBQUEsV0FBVyxHQUFHLEtBQW5DO0FBQTBDQyxFQUFBQSxPQUFPLEdBQUlwSSxLQUFELElBQVdpRCxPQUFPLENBQUNqRCxLQUFSLENBQWNBLEtBQWQsQ0FBL0Q7QUFBcUZxSSxFQUFBQSxlQUFlLEdBQUc7QUFBdkcsQ0FBRCxLQUE0SDtBQUN0SixRQUFNLENBQUNsSSxJQUFELEVBQU9tSSxPQUFQLElBQWtCTixpRUFBZSxDQUFDSyxlQUFELEVBQWtCLElBQWxCLENBQXZDO0FBQ0EsUUFBTTtBQUFBLE9BQUM7QUFBRTlDLE1BQUFBLE1BQUY7QUFBVTNDLE1BQUFBLE9BQVY7QUFBbUJHLE1BQUFBLEtBQW5CO0FBQTBCdUIsTUFBQUEsU0FBMUI7QUFBcUMyQixNQUFBQTtBQUFyQyxLQUFEO0FBQUEsT0FBbURzQztBQUFuRCxNQUErRFQsK0NBQVEsQ0FBQ0ksWUFBRCxDQUE3RTtBQUNBLFFBQU07QUFBQSxPQUFDbEMsVUFBRDtBQUFBLE9BQWF3QztBQUFiLE1BQThCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ1csYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ1osK0NBQVEsQ0FBQyxLQUFELENBQWxEO0FBQ0EsUUFBTWEsWUFBWSxHQUFHZCw2Q0FBTSxDQUFDLEtBQUQsQ0FBM0I7QUFDQSxRQUFNZSxlQUFlLEdBQUdmLDZDQUFNLENBQUMsS0FBRCxDQUE5QixDQU5zSixDQU90Sjs7QUFDQSxRQUFNZ0IsYUFBYSxHQUFHNUosOENBQU8sQ0FBQyxNQUFNTyxPQUFPLENBQUNzSixNQUFSLENBQWUsQ0FBQ0QsYUFBRCxFQUFnQnRELE1BQWhCLEtBQTJCO0FBQzFFc0QsSUFBQUEsYUFBYSxDQUFDdEQsTUFBTSxDQUFDcEYsSUFBUixDQUFiLEdBQTZCb0YsTUFBN0I7QUFDQSxXQUFPc0QsYUFBUDtBQUNILEdBSG1DLEVBR2pDLEVBSGlDLENBQVAsRUFHckIsQ0FBQ3JKLE9BQUQsQ0FIcUIsQ0FBN0IsQ0FSc0osQ0FZdEo7O0FBQ0FvSSxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDWixVQUFNckMsTUFBTSxHQUFJcEYsSUFBSSxJQUFJMEksYUFBYSxDQUFDMUksSUFBRCxDQUF0QixJQUFpQyxJQUFoRDtBQUNBLFVBQU15QyxPQUFPLEdBQUcyQyxNQUFNLElBQUlBLE1BQU0sQ0FBQzNDLE9BQVAsRUFBMUI7O0FBQ0EsUUFBSUEsT0FBSixFQUFhO0FBQ1QsWUFBTTtBQUFFRyxRQUFBQSxLQUFGO0FBQVN1QixRQUFBQSxTQUFUO0FBQW9CMkIsUUFBQUE7QUFBcEIsVUFBa0NyRCxPQUF4QztBQUNBMkYsTUFBQUEsUUFBUSxDQUFDO0FBQUVoRCxRQUFBQSxNQUFGO0FBQVUzQyxRQUFBQSxPQUFWO0FBQW1CcUQsUUFBQUEsU0FBbkI7QUFBOEIzQixRQUFBQSxTQUE5QjtBQUF5Q3ZCLFFBQUFBO0FBQXpDLE9BQUQsQ0FBUjtBQUNILEtBSEQsTUFJSztBQUNEd0YsTUFBQUEsUUFBUSxDQUFDTCxZQUFELENBQVI7QUFDSDtBQUNKLEdBVlEsRUFVTixDQUFDL0gsSUFBRCxFQUFPMEksYUFBUCxFQUFzQk4sUUFBdEIsQ0FWTSxDQUFULENBYnNKLENBd0J0Sjs7QUFDQVgsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1osUUFBSWUsWUFBWSxDQUFDSSxPQUFiLElBQXdCL0MsVUFBeEIsSUFBc0NDLFNBQXRDLElBQW1ELENBQUNrQyxXQUFwRCxJQUFtRSxDQUFDdkYsT0FBcEUsSUFBK0UsQ0FBQ0csS0FBcEYsRUFDSTs7QUFDSixLQUFDLFlBQVk7QUFDVCxhQUFPNUIsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaER3SCxRQUFBQSxZQUFZLENBQUNJLE9BQWIsR0FBdUIsSUFBdkI7QUFDQVAsUUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjs7QUFDQSxZQUFJO0FBQ0EsZ0JBQU01RixPQUFPLENBQUN1RCxPQUFSLEVBQU47QUFDSCxTQUZELENBR0EsT0FBT25HLEtBQVAsRUFBYztBQUNWO0FBQ0FzSSxVQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQLENBRlUsQ0FHVjtBQUNILFNBUEQsU0FRUTtBQUNKRSxVQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FHLFVBQUFBLFlBQVksQ0FBQ0ksT0FBYixHQUF1QixLQUF2QjtBQUNIO0FBQ0osT0FmZSxDQUFoQjtBQWdCSCxLQWpCRDtBQWtCSCxHQXJCUSxFQXFCTixDQUFDSixZQUFELEVBQWUzQyxVQUFmLEVBQTJCQyxTQUEzQixFQUFzQ2tDLFdBQXRDLEVBQW1EdkYsT0FBbkQsRUFBNERHLEtBQTVELEVBQW1FeUYsYUFBbkUsRUFBa0ZGLE9BQWxGLENBckJNLENBQVQsQ0F6QnNKLENBK0N0Sjs7QUFDQSxRQUFNVSxNQUFNLEdBQUdyQixrREFBVyxDQUFFc0IsT0FBRCxJQUFhOUgsU0FBUyxDQUFDLEtBQUssQ0FBTixFQUFTLEtBQUssQ0FBZCxFQUFpQixLQUFLLENBQXRCLEVBQXlCLGFBQWE7QUFDbkYsUUFBSWhCLElBQUksS0FBSzhJLE9BQWIsRUFDSTtBQUNKLFFBQUlyRyxPQUFKLEVBQ0ksTUFBTUEsT0FBTyxDQUFDK0QsVUFBUixFQUFOO0FBQ0oyQixJQUFBQSxPQUFPLENBQUNXLE9BQUQsQ0FBUDtBQUNILEdBTmdELENBQXZCLEVBTXRCLENBQUM5SSxJQUFELEVBQU95QyxPQUFQLEVBQWdCMEYsT0FBaEIsQ0FOc0IsQ0FBMUIsQ0FoRHNKLENBdUR0Sjs7QUFDQSxRQUFNWSxPQUFPLEdBQUd2QixrREFBVyxDQUFDLE1BQU1ZLFFBQVEsQ0FBRVksS0FBRCxJQUFZNUYsTUFBTSxDQUFDNkYsTUFBUCxDQUFjN0YsTUFBTSxDQUFDNkYsTUFBUCxDQUFjLEVBQWQsRUFBa0JELEtBQWxCLENBQWQsRUFBd0M7QUFBRXBHLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQXhDLENBQWIsQ0FBZixFQUF3RixDQUFDd0YsUUFBRCxDQUF4RixDQUEzQixDQXhEc0osQ0F5RHRKOztBQUNBLFFBQU1jLFNBQVMsR0FBRzFCLGtEQUFXLENBQUMsTUFBTTtBQUNoQyxRQUFJLENBQUMvRSxPQUFMLEVBQ0k7QUFDSixVQUFNO0FBQUVxRCxNQUFBQSxTQUFGO0FBQWEzQixNQUFBQSxTQUFiO0FBQXdCdkIsTUFBQUE7QUFBeEIsUUFBa0NILE9BQXhDO0FBQ0EyRixJQUFBQSxRQUFRLENBQUVZLEtBQUQsSUFBWTVGLE1BQU0sQ0FBQzZGLE1BQVAsQ0FBYzdGLE1BQU0sQ0FBQzZGLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRCxLQUFsQixDQUFkLEVBQXdDO0FBQUVsRCxNQUFBQSxTQUFGO0FBQ3pEM0IsTUFBQUEsU0FEeUQ7QUFFekR2QixNQUFBQTtBQUZ5RCxLQUF4QyxDQUFiLENBQVI7QUFHSCxHQVA0QixFQU8xQixDQUFDSCxPQUFELEVBQVUyRixRQUFWLENBUDBCLENBQTdCLENBMURzSixDQWtFdEo7O0FBQ0EsUUFBTWUsWUFBWSxHQUFHM0Isa0RBQVcsQ0FBQyxNQUFNVyxPQUFPLENBQUMsSUFBRCxDQUFkLEVBQXNCLENBQUNBLE9BQUQsQ0FBdEIsQ0FBaEMsQ0FuRXNKLENBb0V0Sjs7QUFDQSxRQUFNbkMsT0FBTyxHQUFHd0Isa0RBQVcsQ0FBQyxNQUFNeEcsU0FBUyxDQUFDLEtBQUssQ0FBTixFQUFTLEtBQUssQ0FBZCxFQUFpQixLQUFLLENBQXRCLEVBQXlCLGFBQWE7QUFDN0UsUUFBSXdILFlBQVksQ0FBQ0ksT0FBYixJQUF3Qi9DLFVBQXhCLElBQXNDeUMsYUFBdEMsSUFBdUR4QyxTQUEzRCxFQUNJOztBQUNKLFFBQUksQ0FBQ1YsTUFBRCxJQUFXLENBQUMzQyxPQUFoQixFQUF5QjtBQUNyQixZQUFNNUMsS0FBSyxHQUFHLElBQUkrSCwyREFBSixFQUFkO0FBQ0FLLE1BQUFBLE9BQU8sQ0FBQ3BJLEtBQUQsQ0FBUDtBQUNBLFlBQU1BLEtBQU47QUFDSDs7QUFDRCxRQUFJLENBQUMrQyxLQUFMLEVBQVk7QUFDUnVGLE1BQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7O0FBQ0EsaUJBQW1DLEVBRWxDOztBQUNELFlBQU10SSxLQUFLLEdBQUcsSUFBSUssNEVBQUosRUFBZDtBQUNBK0gsTUFBQUEsT0FBTyxDQUFDcEksS0FBRCxDQUFQO0FBQ0EsWUFBTUEsS0FBTjtBQUNIOztBQUNEMkksSUFBQUEsWUFBWSxDQUFDSSxPQUFiLEdBQXVCLElBQXZCO0FBQ0FQLElBQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7O0FBQ0EsUUFBSTtBQUNBLFlBQU01RixPQUFPLENBQUN1RCxPQUFSLEVBQU47QUFDSCxLQUZELENBR0EsT0FBT25HLEtBQVAsRUFBYztBQUNWc0ksTUFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBLFlBQU10SSxLQUFOO0FBQ0gsS0FORCxTQU9RO0FBQ0p3SSxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FHLE1BQUFBLFlBQVksQ0FBQ0ksT0FBYixHQUF1QixLQUF2QjtBQUNIO0FBQ0osR0E5QjBDLENBQWhCLEVBOEJ2QixDQUFDSixZQUFELEVBQWUzQyxVQUFmLEVBQTJCeUMsYUFBM0IsRUFBMEN4QyxTQUExQyxFQUFxRFYsTUFBckQsRUFBNkQzQyxPQUE3RCxFQUFzRXdGLE9BQXRFLEVBQStFckYsS0FBL0UsRUFBc0Z5RixhQUF0RixFQUFxR0YsT0FBckcsQ0E5QnVCLENBQTNCLENBckVzSixDQW9HdEo7O0FBQ0EsUUFBTTNCLFVBQVUsR0FBR2dCLGtEQUFXLENBQUMsTUFBTXhHLFNBQVMsQ0FBQyxLQUFLLENBQU4sRUFBUyxLQUFLLENBQWQsRUFBaUIsS0FBSyxDQUF0QixFQUF5QixhQUFhO0FBQ2hGLFFBQUl5SCxlQUFlLENBQUNHLE9BQWhCLElBQTJCTixhQUEvQixFQUNJO0FBQ0osUUFBSSxDQUFDN0YsT0FBTCxFQUNJLE9BQU8wRixPQUFPLENBQUMsSUFBRCxDQUFkO0FBQ0pNLElBQUFBLGVBQWUsQ0FBQ0csT0FBaEIsR0FBMEIsSUFBMUI7QUFDQUwsSUFBQUEsZ0JBQWdCLENBQUMsSUFBRCxDQUFoQjs7QUFDQSxRQUFJO0FBQ0EsWUFBTTlGLE9BQU8sQ0FBQytELFVBQVIsRUFBTjtBQUNILEtBRkQsU0FHUTtBQUNKMkIsTUFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBSSxNQUFBQSxnQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FFLE1BQUFBLGVBQWUsQ0FBQ0csT0FBaEIsR0FBMEIsS0FBMUI7QUFDSDtBQUNKLEdBZjZDLENBQWhCLEVBZTFCLENBQUNILGVBQUQsRUFBa0JILGFBQWxCLEVBQWlDN0YsT0FBakMsRUFBMEM4RixnQkFBMUMsRUFBNERKLE9BQTVELENBZjBCLENBQTlCLENBckdzSixDQXFIdEo7O0FBQ0EsUUFBTXJFLGVBQWUsR0FBRzBELGtEQUFXLENBQUMsQ0FBQ3pELFdBQUQsRUFBY0MsVUFBZCxFQUEwQkMsT0FBMUIsS0FBc0NqRCxTQUFTLENBQUMsS0FBSyxDQUFOLEVBQVMsS0FBSyxDQUFkLEVBQWlCLEtBQUssQ0FBdEIsRUFBeUIsYUFBYTtBQUNySCxRQUFJLENBQUN5QixPQUFMLEVBQWM7QUFDVixZQUFNNUMsS0FBSyxHQUFHLElBQUkrSCwyREFBSixFQUFkO0FBQ0FLLE1BQUFBLE9BQU8sQ0FBQ3BJLEtBQUQsQ0FBUDtBQUNBLFlBQU1BLEtBQU47QUFDSDs7QUFDRCxRQUFJLENBQUNpRyxTQUFMLEVBQWdCO0FBQ1osWUFBTWpHLEtBQUssR0FBRyxJQUFJWSxnRkFBSixFQUFkO0FBQ0F3SCxNQUFBQSxPQUFPLENBQUNwSSxLQUFELENBQVA7QUFDQSxZQUFNQSxLQUFOO0FBQ0g7O0FBQ0QsV0FBTyxNQUFNNEMsT0FBTyxDQUFDcUIsZUFBUixDQUF3QkMsV0FBeEIsRUFBcUNDLFVBQXJDLEVBQWlEQyxPQUFqRCxDQUFiO0FBQ0gsR0Faa0YsQ0FBaEQsRUFZL0IsQ0FBQ3hCLE9BQUQsRUFBVXdGLE9BQVYsRUFBbUJuQyxTQUFuQixDQVorQixDQUFuQyxDQXRIc0osQ0FtSXRKOztBQUNBLFFBQU1uQixlQUFlLEdBQUc3Riw4Q0FBTyxDQUFDLE1BQU0yRCxPQUFPLElBQUkscUJBQXFCQSxPQUFoQyxHQUMvQnNCLFdBQUQsSUFBaUIvQyxTQUFTLENBQUMsS0FBSyxDQUFOLEVBQVMsS0FBSyxDQUFkLEVBQWlCLEtBQUssQ0FBdEIsRUFBeUIsYUFBYTtBQUM5RCxRQUFJLENBQUM4RSxTQUFMLEVBQWdCO0FBQ1osWUFBTWpHLEtBQUssR0FBRyxJQUFJWSxnRkFBSixFQUFkO0FBQ0F3SCxNQUFBQSxPQUFPLENBQUNwSSxLQUFELENBQVA7QUFDQSxZQUFNQSxLQUFOO0FBQ0g7O0FBQ0QsV0FBTyxNQUFNNEMsT0FBTyxDQUFDa0MsZUFBUixDQUF3QlosV0FBeEIsQ0FBYjtBQUNILEdBUDJCLENBRE0sR0FTaENLLFNBVHlCLEVBU2QsQ0FBQzNCLE9BQUQsRUFBVXdGLE9BQVYsRUFBbUJuQyxTQUFuQixDQVRjLENBQS9CLENBcElzSixDQThJdEo7O0FBQ0EsUUFBTVcsbUJBQW1CLEdBQUczSCw4Q0FBTyxDQUFDLE1BQU0yRCxPQUFPLElBQUkseUJBQXlCQSxPQUFwQyxHQUNuQ2lFLFlBQUQsSUFBa0IxRixTQUFTLENBQUMsS0FBSyxDQUFOLEVBQVMsS0FBSyxDQUFkLEVBQWlCLEtBQUssQ0FBdEIsRUFBeUIsYUFBYTtBQUMvRCxRQUFJLENBQUM4RSxTQUFMLEVBQWdCO0FBQ1osWUFBTWpHLEtBQUssR0FBRyxJQUFJWSxnRkFBSixFQUFkO0FBQ0F3SCxNQUFBQSxPQUFPLENBQUNwSSxLQUFELENBQVA7QUFDQSxZQUFNQSxLQUFOO0FBQ0g7O0FBQ0QsV0FBTyxNQUFNNEMsT0FBTyxDQUFDZ0UsbUJBQVIsQ0FBNEJDLFlBQTVCLENBQWI7QUFDSCxHQVA0QixDQURTLEdBU3BDdEMsU0FUNkIsRUFTbEIsQ0FBQzNCLE9BQUQsRUFBVXdGLE9BQVYsRUFBbUJuQyxTQUFuQixDQVRrQixDQUFuQyxDQS9Jc0osQ0F5SnRKOztBQUNBLFFBQU1hLFdBQVcsR0FBRzdILDhDQUFPLENBQUMsTUFBTTJELE9BQU8sSUFBSSxpQkFBaUJBLE9BQTVCLEdBQzNCN0MsT0FBRCxJQUFhb0IsU0FBUyxDQUFDLEtBQUssQ0FBTixFQUFTLEtBQUssQ0FBZCxFQUFpQixLQUFLLENBQXRCLEVBQXlCLGFBQWE7QUFDMUQsUUFBSSxDQUFDOEUsU0FBTCxFQUFnQjtBQUNaLFlBQU1qRyxLQUFLLEdBQUcsSUFBSVksZ0ZBQUosRUFBZDtBQUNBd0gsTUFBQUEsT0FBTyxDQUFDcEksS0FBRCxDQUFQO0FBQ0EsWUFBTUEsS0FBTjtBQUNIOztBQUNELFdBQU8sTUFBTTRDLE9BQU8sQ0FBQ2tFLFdBQVIsQ0FBb0IvRyxPQUFwQixDQUFiO0FBQ0gsR0FQdUIsQ0FETSxHQVM1QndFLFNBVHFCLEVBU1YsQ0FBQzNCLE9BQUQsRUFBVXdGLE9BQVYsRUFBbUJuQyxTQUFuQixDQVRVLENBQTNCLENBMUpzSixDQW9LdEo7O0FBQ0EyQixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDWixRQUFJaEYsT0FBSixFQUFhO0FBQ1RBLE1BQUFBLE9BQU8sQ0FBQzJELEVBQVIsQ0FBVyxPQUFYLEVBQW9CMkMsT0FBcEI7QUFDQXRHLE1BQUFBLE9BQU8sQ0FBQzJELEVBQVIsQ0FBVyxTQUFYLEVBQXNCOEMsU0FBdEI7QUFDQXpHLE1BQUFBLE9BQU8sQ0FBQzJELEVBQVIsQ0FBVyxZQUFYLEVBQXlCK0MsWUFBekI7QUFDQTFHLE1BQUFBLE9BQU8sQ0FBQzJELEVBQVIsQ0FBVyxPQUFYLEVBQW9CNkIsT0FBcEI7QUFDQSxhQUFPLE1BQU07QUFDVHhGLFFBQUFBLE9BQU8sQ0FBQzZDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCeUQsT0FBckI7QUFDQXRHLFFBQUFBLE9BQU8sQ0FBQzZDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCNEQsU0FBdkI7QUFDQXpHLFFBQUFBLE9BQU8sQ0FBQzZDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCNkQsWUFBMUI7QUFDQTFHLFFBQUFBLE9BQU8sQ0FBQzZDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCMkMsT0FBckI7QUFDSCxPQUxEO0FBTUg7QUFDSixHQWJRLEVBYU4sQ0FBQ3hGLE9BQUQsRUFBVXNHLE9BQVYsRUFBbUJHLFNBQW5CLEVBQThCQyxZQUE5QixFQUE0Q2xCLE9BQTVDLENBYk0sQ0FBVDtBQWNBLHNCQUFRakIsMERBQUEsQ0FBb0JjLDhEQUFwQixFQUE0QztBQUFFeEcsSUFBQUEsS0FBSyxFQUFFO0FBQ3JEakMsTUFBQUEsT0FEcUQ7QUFFckQySSxNQUFBQSxXQUZxRDtBQUdyRDVDLE1BQUFBLE1BSHFEO0FBSXJEM0MsTUFBQUEsT0FKcUQ7QUFLckQwQixNQUFBQSxTQUxxRDtBQU1yRHZCLE1BQUFBLEtBTnFEO0FBT3JEa0QsTUFBQUEsU0FQcUQ7QUFRckRELE1BQUFBLFVBUnFEO0FBU3JEeUMsTUFBQUEsYUFUcUQ7QUFVckRPLE1BQUFBLE1BVnFEO0FBV3JEN0MsTUFBQUEsT0FYcUQ7QUFZckRRLE1BQUFBLFVBWnFEO0FBYXJEMUMsTUFBQUEsZUFicUQ7QUFjckRhLE1BQUFBLGVBZHFEO0FBZXJEOEIsTUFBQUEsbUJBZnFEO0FBZ0JyREUsTUFBQUE7QUFoQnFEO0FBQVQsR0FBNUMsRUFpQkNRLFFBakJELENBQVI7QUFrQkgsQ0FyTU07Ozs7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUNPLE1BQU1TLHNCQUFOLFNBQXFDbkksb0VBQXJDLENBQWlEO0FBQ3BERSxFQUFBQSxXQUFXLEdBQUc7QUFDVixVQUFNLEdBQUdJLFNBQVQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksd0JBQVo7QUFDSDs7QUFKbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDTyxTQUFTdUosZUFBVCxHQUEyQjtBQUM5QixRQUFNO0FBQUVwRixJQUFBQSxTQUFGO0FBQWFRLElBQUFBLGVBQWI7QUFBOEI4QixJQUFBQTtBQUE5QixNQUFzRDZDLHFEQUFTLEVBQXJFO0FBQ0EsU0FBT3hLLDhDQUFPLENBQUMsTUFBTXFGLFNBQVMsSUFBSVEsZUFBYixJQUFnQzhCLG1CQUFoQyxHQUNmO0FBQUV0QyxJQUFBQSxTQUFGO0FBQWFRLElBQUFBLGVBQWI7QUFBOEI4QixJQUFBQTtBQUE5QixHQURlLEdBRWZyQyxTQUZRLEVBRUcsQ0FBQ0QsU0FBRCxFQUFZUSxlQUFaLEVBQTZCOEIsbUJBQTdCLENBRkgsQ0FBZDtBQUdIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEO0FBQ08sTUFBTVEsaUJBQWlCLGdCQUFHdUMsb0RBQWEsQ0FBQyxFQUFELENBQXZDO0FBQ0EsU0FBU0UsYUFBVCxHQUF5QjtBQUM1QixTQUFPRCxpREFBVSxDQUFDeEMsaUJBQUQsQ0FBakI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ08sU0FBU1ksZUFBVCxDQUF5QjhCLEdBQXpCLEVBQThCQyxZQUE5QixFQUE0QztBQUMvQyxRQUFNO0FBQUEsT0FBQ3RJLEtBQUQ7QUFBQSxPQUFRdUk7QUFBUixNQUFvQmxDLCtDQUFRLENBQUMsTUFBTTtBQUNyQyxRQUFJLE9BQU9tQyxZQUFQLEtBQXdCLFdBQTVCLEVBQ0ksT0FBT0YsWUFBUDtBQUNKLFVBQU10SSxLQUFLLEdBQUd3SSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJKLEdBQXJCLENBQWQ7O0FBQ0EsUUFBSTtBQUNBLGFBQU9ySSxLQUFLLEdBQUcwSSxJQUFJLENBQUNDLEtBQUwsQ0FBVzNJLEtBQVgsQ0FBSCxHQUF1QnNJLFlBQW5DO0FBQ0gsS0FGRCxDQUdBLE9BQU8vSixLQUFQLEVBQWM7QUFDVmlELE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhbEQsS0FBYjtBQUNBLGFBQU8rSixZQUFQO0FBQ0g7QUFDSixHQVhpQyxDQUFsQztBQVlBLFFBQU1NLGVBQWUsR0FBRzFDLGtEQUFXLENBQUUyQyxRQUFELElBQWM7QUFDOUMsUUFBSUEsUUFBUSxLQUFLN0ksS0FBakIsRUFDSTtBQUNKdUksSUFBQUEsUUFBUSxDQUFDTSxRQUFELENBQVI7O0FBQ0EsUUFBSUEsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ25CTCxNQUFBQSxZQUFZLENBQUNNLFVBQWIsQ0FBd0JULEdBQXhCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RHLE1BQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQlYsR0FBckIsRUFBMEJLLElBQUksQ0FBQ00sU0FBTCxDQUFlSCxRQUFmLENBQTFCO0FBQ0g7O0FBQ0QsUUFBSUEsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ25CTCxNQUFBQSxZQUFZLENBQUNNLFVBQWIsQ0FBd0JULEdBQXhCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsVUFBSTtBQUNBRyxRQUFBQSxZQUFZLENBQUNPLE9BQWIsQ0FBcUJWLEdBQXJCLEVBQTBCSyxJQUFJLENBQUNNLFNBQUwsQ0FBZUgsUUFBZixDQUExQjtBQUNILE9BRkQsQ0FHQSxPQUFPdEssS0FBUCxFQUFjO0FBQ1ZpRCxRQUFBQSxPQUFPLENBQUNqRCxLQUFSLENBQWNBLEtBQWQ7QUFDSDtBQUNKO0FBQ0osR0FyQmtDLEVBcUJoQyxDQUFDeUIsS0FBRCxFQUFRdUksUUFBUixFQUFrQkYsR0FBbEIsQ0FyQmdDLENBQW5DO0FBc0JBLFNBQU8sQ0FBQ3JJLEtBQUQsRUFBUTRJLGVBQVIsQ0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUNPLE1BQU1wQyxhQUFhLGdCQUFHMEIsb0RBQWEsQ0FBQyxFQUFELENBQW5DO0FBQ0EsU0FBU0YsU0FBVCxHQUFxQjtBQUN4QixTQUFPRyxpREFBVSxDQUFDM0IsYUFBRCxDQUFqQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pELElBQUk5RyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFdBQVNDLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFFLFdBQU9BLEtBQUssWUFBWUgsQ0FBakIsR0FBcUJHLEtBQXJCLEdBQTZCLElBQUlILENBQUosQ0FBTSxVQUFVSSxPQUFWLEVBQW1CO0FBQUVBLE1BQUFBLE9BQU8sQ0FBQ0QsS0FBRCxDQUFQO0FBQWlCLEtBQTVDLENBQXBDO0FBQW9GOztBQUM1RyxTQUFPLEtBQUtILENBQUMsS0FBS0EsQ0FBQyxHQUFHSyxPQUFULENBQU4sRUFBeUIsVUFBVUQsT0FBVixFQUFtQkUsTUFBbkIsRUFBMkI7QUFDdkQsYUFBU0MsU0FBVCxDQUFtQkosS0FBbkIsRUFBMEI7QUFBRSxVQUFJO0FBQUVLLFFBQUFBLElBQUksQ0FBQ1AsU0FBUyxDQUFDUSxJQUFWLENBQWVOLEtBQWYsQ0FBRCxDQUFKO0FBQThCLE9BQXBDLENBQXFDLE9BQU9PLENBQVAsRUFBVTtBQUFFSixRQUFBQSxNQUFNLENBQUNJLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNDLFFBQVQsQ0FBa0JSLEtBQWxCLEVBQXlCO0FBQUUsVUFBSTtBQUFFSyxRQUFBQSxJQUFJLENBQUNQLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FBbUJFLEtBQW5CLENBQUQsQ0FBSjtBQUFrQyxPQUF4QyxDQUF5QyxPQUFPTyxDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUM5RixhQUFTRixJQUFULENBQWNJLE1BQWQsRUFBc0I7QUFBRUEsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLEdBQWNULE9BQU8sQ0FBQ1EsTUFBTSxDQUFDVCxLQUFSLENBQXJCLEdBQXNDRCxLQUFLLENBQUNVLE1BQU0sQ0FBQ1QsS0FBUixDQUFMLENBQW9CVyxJQUFwQixDQUF5QlAsU0FBekIsRUFBb0NJLFFBQXBDLENBQXRDO0FBQXNGOztBQUM5R0gsSUFBQUEsSUFBSSxDQUFDLENBQUNQLFNBQVMsR0FBR0EsU0FBUyxDQUFDYyxLQUFWLENBQWdCakIsT0FBaEIsRUFBeUJDLFVBQVUsSUFBSSxFQUF2QyxDQUFiLEVBQXlEVSxJQUF6RCxFQUFELENBQUo7QUFDSCxHQUxNLENBQVA7QUFNSCxDQVJEOztBQVNBO0FBQ0E7QUFDTyxNQUFNMkkscUJBQU4sU0FBb0MxRyxnRkFBcEMsQ0FBNEQ7QUFDL0RsRSxFQUFBQSxXQUFXLENBQUN1RixNQUFNLEdBQUcsRUFBVixFQUFjO0FBQ3JCOztBQUNBLFNBQUtDLGFBQUwsR0FBcUIsTUFBTTtBQUN2QixZQUFNQyxNQUFNLEdBQUcsS0FBS0MsT0FBcEI7O0FBQ0EsVUFBSUQsTUFBSixFQUFZO0FBQ1JBLFFBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFlBQVgsRUFBeUIsS0FBS0gsYUFBOUI7QUFDQSxhQUFLRSxPQUFMLEdBQWUsSUFBZjtBQUNBLGFBQUtFLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLMUMsSUFBTCxDQUFVLE9BQVYsRUFBbUIsSUFBSXpDLGdGQUFKLEVBQW5CO0FBQ0EsYUFBS3lDLElBQUwsQ0FBVSxZQUFWO0FBQ0g7QUFDSixLQVREOztBQVVBLFNBQUsyQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBS0gsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLRSxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsUUFBSSxDQUFDLEtBQUszQyxLQUFWLEVBQ0lKLDJFQUFjLENBQUMsSUFBRCxFQUFPMEMsTUFBTSxDQUFDeEMsWUFBUCxJQUF1QixJQUE5QixFQUFvQ3dDLE1BQU0sQ0FBQ3ZDLFNBQVAsSUFBb0IsQ0FBeEQsQ0FBZDtBQUNQOztBQUNZLE1BQVR3QixTQUFTLEdBQUc7QUFDWixXQUFPLEtBQUtvQixVQUFaO0FBQ0g7O0FBQ1EsTUFBTDNDLEtBQUssR0FBRztBQUNSLFFBQUk2QyxFQUFKOztBQUNBLFdBQU8sVUFBaUMsQ0FBeEM7QUFDSDs7QUFDYSxNQUFWSSxVQUFVLEdBQUc7QUFDYixXQUFPLEtBQUtMLFdBQVo7QUFDSDs7QUFDWSxNQUFUTSxTQUFTLEdBQUc7QUFDWixRQUFJTCxFQUFKOztBQUNBLFdBQU8sQ0FBQyxFQUFFLENBQUNBLEVBQUUsR0FBRyxLQUFLSixPQUFYLE1BQXdCLElBQXhCLElBQWdDSSxFQUFFLEtBQUssS0FBSyxDQUE1QyxHQUFnRCxLQUFLLENBQXJELEdBQXlEQSxFQUFFLENBQUNNLFdBQTlELENBQVI7QUFDSDs7QUFDREMsRUFBQUEsT0FBTyxHQUFHO0FBQ04sV0FBT2hGLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQixFQUF1QixhQUFhO0FBQ2hELFVBQUk7QUFDQSxZQUFJLEtBQUs4RSxTQUFMLElBQWtCLEtBQUtELFVBQTNCLEVBQ0k7QUFDSixhQUFLTCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsY0FBTUosTUFBTSxHQUFHLFVBQWlDTSxDQUFoRDtBQUNBLFlBQUksQ0FBQ04sTUFBTCxFQUNJLE1BQU0sSUFBSXRGLDRFQUFKLEVBQU47QUFDSixZQUFJLENBQUNzRixNQUFNLENBQUNxRixVQUFaLEVBQ0ksTUFBTSxJQUFJeEssZ0ZBQUosRUFBTjs7QUFDSixZQUFJLENBQUNtRixNQUFNLENBQUNXLFdBQVosRUFBeUI7QUFDckIsY0FBSTtBQUNBLGtCQUFNWCxNQUFNLENBQUNZLE9BQVAsRUFBTjtBQUNILFdBRkQsQ0FHQSxPQUFPbkcsS0FBUCxFQUFjO0FBQ1Ysa0JBQU0sSUFBSU0sOEVBQUosQ0FBMEJOLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUNELE9BQTlFLEVBQXVGQyxLQUF2RixDQUFOO0FBQ0g7QUFDSixTQWhCRCxDQWlCQTs7O0FBQ0EsWUFBSSxDQUFDdUYsTUFBTSxDQUFDakIsU0FBWixFQUNJLE1BQU0sSUFBSWhFLDhFQUFKLEVBQU47QUFDSixZQUFJZ0UsU0FBSjs7QUFDQSxZQUFJO0FBQ0FBLFVBQUFBLFNBQVMsR0FBRyxJQUFJYSxzREFBSixDQUFjSSxNQUFNLENBQUNqQixTQUFQLENBQWlCb0MsT0FBakIsRUFBZCxDQUFaO0FBQ0gsU0FGRCxDQUdBLE9BQU8xRyxLQUFQLEVBQWM7QUFDVixnQkFBTSxJQUFJVSw2RUFBSixDQUF5QlYsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBN0UsRUFBc0ZDLEtBQXRGLENBQU47QUFDSDs7QUFDRHVGLFFBQUFBLE1BQU0sQ0FBQ2dCLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLEtBQUtqQixhQUE3QjtBQUNBLGFBQUtFLE9BQUwsR0FBZUQsTUFBZjtBQUNBLGFBQUtHLFVBQUwsR0FBa0JwQixTQUFsQjtBQUNBLGFBQUt0QixJQUFMLENBQVUsU0FBVjtBQUNILE9BL0JELENBZ0NBLE9BQU9oRCxLQUFQLEVBQWM7QUFDVixhQUFLZ0QsSUFBTCxDQUFVLE9BQVYsRUFBbUJoRCxLQUFuQjtBQUNBLGNBQU1BLEtBQU47QUFDSCxPQW5DRCxTQW9DUTtBQUNKLGFBQUsyRixXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSixLQXhDZSxDQUFoQjtBQXlDSDs7QUFDRGdCLEVBQUFBLFVBQVUsR0FBRztBQUNULFdBQU94RixTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsYUFBYTtBQUNoRCxZQUFNb0UsTUFBTSxHQUFHLEtBQUtDLE9BQXBCOztBQUNBLFVBQUlELE1BQUosRUFBWTtBQUNSQSxRQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLEtBQUtILGFBQTlCO0FBQ0EsYUFBS0UsT0FBTCxHQUFlLElBQWY7QUFDQSxhQUFLRSxVQUFMLEdBQWtCLElBQWxCOztBQUNBLFlBQUk7QUFDQSxnQkFBTUgsTUFBTSxDQUFDb0IsVUFBUCxFQUFOO0FBQ0gsU0FGRCxDQUdBLE9BQU8zRyxLQUFQLEVBQWM7QUFDVixlQUFLZ0QsSUFBTCxDQUFVLE9BQVYsRUFBbUIsSUFBSXhDLGlGQUFKLENBQTZCUixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEtBQUssQ0FBakMsR0FBcUMsS0FBSyxDQUExQyxHQUE4Q0EsS0FBSyxDQUFDRCxPQUFqRixFQUEwRkMsS0FBMUYsQ0FBbkI7QUFDSDtBQUNKOztBQUNELFdBQUtnRCxJQUFMLENBQVUsWUFBVjtBQUNILEtBZGUsQ0FBaEI7QUFlSDs7QUFDRDhCLEVBQUFBLGVBQWUsQ0FBQ1osV0FBRCxFQUFjO0FBQ3pCLFdBQU8vQyxTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsYUFBYTtBQUNoRCxVQUFJO0FBQ0EsY0FBTW9FLE1BQU0sR0FBRyxLQUFLQyxPQUFwQjtBQUNBLFlBQUksQ0FBQ0QsTUFBTCxFQUNJLE1BQU0sSUFBSTNFLGdGQUFKLEVBQU47O0FBQ0osWUFBSTtBQUNBLGlCQUFPLENBQUMsTUFBTTJFLE1BQU0sQ0FBQ1QsZUFBUCxDQUF1QlosV0FBdkIsQ0FBUCxLQUErQ0EsV0FBdEQ7QUFDSCxTQUZELENBR0EsT0FBT2xFLEtBQVAsRUFBYztBQUNWLGdCQUFNLElBQUllLG1GQUFKLENBQStCZixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEtBQUssQ0FBakMsR0FBcUMsS0FBSyxDQUExQyxHQUE4Q0EsS0FBSyxDQUFDRCxPQUFuRixFQUE0RkMsS0FBNUYsQ0FBTjtBQUNIO0FBQ0osT0FWRCxDQVdBLE9BQU9BLEtBQVAsRUFBYztBQUNWLGFBQUtnRCxJQUFMLENBQVUsT0FBVixFQUFtQmhELEtBQW5CO0FBQ0EsY0FBTUEsS0FBTjtBQUNIO0FBQ0osS0FoQmUsQ0FBaEI7QUFpQkg7O0FBQ0Q0RyxFQUFBQSxtQkFBbUIsQ0FBQ0MsWUFBRCxFQUFlO0FBQzlCLFdBQU8xRixTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsYUFBYTtBQUNoRCxVQUFJO0FBQ0EsY0FBTW9FLE1BQU0sR0FBRyxLQUFLQyxPQUFwQjtBQUNBLFlBQUksQ0FBQ0QsTUFBTCxFQUNJLE1BQU0sSUFBSTNFLGdGQUFKLEVBQU47O0FBQ0osWUFBSTtBQUNBLGlCQUFPLENBQUMsTUFBTTJFLE1BQU0sQ0FBQ3FCLG1CQUFQLENBQTJCQyxZQUEzQixDQUFQLEtBQW9EQSxZQUEzRDtBQUNILFNBRkQsQ0FHQSxPQUFPN0csS0FBUCxFQUFjO0FBQ1YsZ0JBQU0sSUFBSWUsbUZBQUosQ0FBK0JmLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUNELE9BQW5GLEVBQTRGQyxLQUE1RixDQUFOO0FBQ0g7QUFDSixPQVZELENBV0EsT0FBT0EsS0FBUCxFQUFjO0FBQ1YsYUFBS2dELElBQUwsQ0FBVSxPQUFWLEVBQW1CaEQsS0FBbkI7QUFDQSxjQUFNQSxLQUFOO0FBQ0g7QUFDSixLQWhCZSxDQUFoQjtBQWlCSDs7QUFsSThEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1huRSxJQUFJbUIsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBRSxXQUFPQSxLQUFLLFlBQVlILENBQWpCLEdBQXFCRyxLQUFyQixHQUE2QixJQUFJSCxDQUFKLENBQU0sVUFBVUksT0FBVixFQUFtQjtBQUFFQSxNQUFBQSxPQUFPLENBQUNELEtBQUQsQ0FBUDtBQUFpQixLQUE1QyxDQUFwQztBQUFvRjs7QUFDNUcsU0FBTyxLQUFLSCxDQUFDLEtBQUtBLENBQUMsR0FBR0ssT0FBVCxDQUFOLEVBQXlCLFVBQVVELE9BQVYsRUFBbUJFLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCO0FBQUUsVUFBSTtBQUFFSyxRQUFBQSxJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsSUFBVixDQUFlTixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPTyxDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUMzRixhQUFTQyxRQUFULENBQWtCUixLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRUssUUFBQUEsSUFBSSxDQUFDUCxTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CRSxLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBT08sQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjSSxNQUFkLEVBQXNCO0FBQUVBLE1BQUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ1QsS0FBUixDQUFyQixHQUFzQ0QsS0FBSyxDQUFDVSxNQUFNLENBQUNULEtBQVIsQ0FBTCxDQUFvQlcsSUFBcEIsQ0FBeUJQLFNBQXpCLEVBQW9DSSxRQUFwQyxDQUF0QztBQUFzRjs7QUFDOUdILElBQUFBLElBQUksQ0FBQyxDQUFDUCxTQUFTLEdBQUdBLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQmpCLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RFUsSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTQTtBQUNBO0FBQ08sTUFBTStJLG1CQUFOLFNBQWtDNUYsdUZBQWxDLENBQWlFO0FBQ3BFcEYsRUFBQUEsV0FBVyxDQUFDdUYsTUFBTSxHQUFHLEVBQVYsRUFBYztBQUNyQjs7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLE1BQU07QUFDdkIsWUFBTUMsTUFBTSxHQUFHLEtBQUtDLE9BQXBCOztBQUNBLFVBQUlELE1BQUosRUFBWTtBQUNSQSxRQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLEtBQUtILGFBQTlCO0FBQ0EsYUFBS0UsT0FBTCxHQUFlLElBQWY7QUFDQSxhQUFLeEMsSUFBTCxDQUFVLE9BQVYsRUFBbUIsSUFBSXpDLGdGQUFKLEVBQW5CO0FBQ0EsYUFBS3lDLElBQUwsQ0FBVSxZQUFWO0FBQ0g7QUFDSixLQVJEOztBQVNBLFNBQUsrSCxTQUFMLEdBQWlCMUYsTUFBTSxDQUFDMkYsUUFBUCxLQUFvQixRQUFnQ3pHLFNBQWhDLEdBQTRDc0IsQ0FBaEUsQ0FBakI7QUFDQSxTQUFLcUYsUUFBTCxHQUFnQjdGLE1BQU0sQ0FBQzhGLE9BQVAsSUFBa0J4TCxxRkFBbEM7QUFDQSxTQUFLZ0csV0FBTCxHQUFtQixLQUFuQjtBQUNBLFNBQUtILE9BQUwsR0FBZSxJQUFmO0FBQ0EsUUFBSSxDQUFDLEtBQUt6QyxLQUFWLEVBQ0lKLDJFQUFjLENBQUMsSUFBRCxFQUFPMEMsTUFBTSxDQUFDeEMsWUFBUCxJQUF1QixJQUE5QixFQUFvQ3dDLE1BQU0sQ0FBQ3ZDLFNBQVAsSUFBb0IsQ0FBeEQsQ0FBZDtBQUNQOztBQUNZLE1BQVR3QixTQUFTLEdBQUc7QUFDWixRQUFJc0IsRUFBSjs7QUFDQSxXQUFPLENBQUMsQ0FBQ0EsRUFBRSxHQUFHLEtBQUtKLE9BQVgsTUFBd0IsSUFBeEIsSUFBZ0NJLEVBQUUsS0FBSyxLQUFLLENBQTVDLEdBQWdELEtBQUssQ0FBckQsR0FBeURBLEVBQUUsQ0FBQ3RCLFNBQTdELEtBQTJFLElBQWxGO0FBQ0g7O0FBQ1EsTUFBTHZCLEtBQUssR0FBRztBQUNSLFFBQUk2QyxFQUFKOztBQUNBLFdBQVEsT0FBTyxLQUFLbUYsU0FBWixLQUEwQixRQUExQixJQUNILFVBQWlDLENBRHRDO0FBRUg7O0FBQ2EsTUFBVi9FLFVBQVUsR0FBRztBQUNiLFdBQU8sS0FBS0wsV0FBWjtBQUNIOztBQUNZLE1BQVRNLFNBQVMsR0FBRztBQUNaLFFBQUlMLEVBQUo7O0FBQ0EsV0FBTyxDQUFDLEVBQUUsQ0FBQ0EsRUFBRSxHQUFHLEtBQUtKLE9BQVgsTUFBd0IsSUFBeEIsSUFBZ0NJLEVBQUUsS0FBSyxLQUFLLENBQTVDLEdBQWdELEtBQUssQ0FBckQsR0FBeURBLEVBQUUsQ0FBQ0ssU0FBOUQsQ0FBUjtBQUNIOztBQUNERSxFQUFBQSxPQUFPLEdBQUc7QUFDTixXQUFPaEYsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaEQsVUFBSTtBQUNBLFlBQUksS0FBSzhFLFNBQUwsSUFBa0IsS0FBS0QsVUFBM0IsRUFDSTtBQUNKLGFBQUtMLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxjQUFNcUYsUUFBUSxHQUFHLEtBQUtELFNBQUwsSUFBbUIsVUFBaUNsRixDQUFyRTtBQUNBLFlBQUksQ0FBQ21GLFFBQUwsRUFDSSxNQUFNLElBQUkvSyw0RUFBSixFQUFOO0FBQ0osWUFBSXNGLE1BQUo7O0FBQ0EsWUFBSTtBQUNBQSxVQUFBQSxNQUFNLEdBQUcsSUFBSXNGLDBFQUFKLENBQVdHLFFBQVgsRUFBcUIsS0FBS0UsUUFBMUIsQ0FBVCxDQURBLENBRUE7O0FBQ0EsZ0JBQU05RSxnQkFBZ0IsR0FBR2IsTUFBTSxDQUFDYSxnQkFBaEM7QUFDQSxjQUFJa0YsT0FBSjtBQUNBLGNBQUk5SSxRQUFKOztBQUNBLGNBQUk7QUFDQSxrQkFBTSxJQUFJYixPQUFKLENBQVksQ0FBQ0QsT0FBRCxFQUFVRSxNQUFWLEtBQXFCO0FBQ25DLG9CQUFNdUUsT0FBTyxHQUFHLE1BQU07QUFDbEIsb0JBQUltRixPQUFKLEVBQ0lDLFlBQVksQ0FBQ0QsT0FBRCxDQUFaO0FBQ0ovRixnQkFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsU0FBWCxFQUFzQlUsT0FBdEI7QUFDQXpFLGdCQUFBQSxPQUFPO0FBQ1YsZUFMRDs7QUFNQTZELGNBQUFBLE1BQU0sQ0FBQ2EsZ0JBQVAsR0FBMEIsQ0FBQyxHQUFHRSxJQUFKLEtBQWE7QUFDbkNmLGdCQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxTQUFYLEVBQXNCVSxPQUF0QjtBQUNBdkUsZ0JBQUFBLE1BQU0sQ0FBQyxJQUFJVixnRkFBSixFQUFELENBQU47QUFDQSx1QkFBT2tGLGdCQUFnQixDQUFDL0QsS0FBakIsQ0FBdUJrRCxNQUF2QixFQUErQmUsSUFBL0IsQ0FBUDtBQUNILGVBSkQ7O0FBS0FmLGNBQUFBLE1BQU0sQ0FBQ2dCLEVBQVAsQ0FBVSxTQUFWLEVBQXFCSixPQUFyQjtBQUNBWixjQUFBQSxNQUFNLENBQUNZLE9BQVAsR0FBaUJLLEtBQWpCLENBQXdCQyxNQUFELElBQVk7QUFDL0JsQixnQkFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsU0FBWCxFQUFzQlUsT0FBdEI7QUFDQXZFLGdCQUFBQSxNQUFNLENBQUM2RSxNQUFELENBQU47QUFDSCxlQUhEOztBQUlBLGtCQUFJLE9BQU91RSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQzlCLG9CQUFJdkksS0FBSyxHQUFHLENBQVo7QUFDQUQsZ0JBQUFBLFFBQVEsR0FBR2dKLFdBQVcsQ0FBQyxNQUFNO0FBQ3pCLHdCQUFNQyxLQUFLLEdBQUdsRyxNQUFNLENBQUNtRyxNQUFyQjs7QUFDQSxzQkFBSUQsS0FBSixFQUFXO0FBQ1Asd0JBQUlBLEtBQUssQ0FBQ0UsTUFBVixFQUNJL0osTUFBTSxDQUFDLElBQUlWLGdGQUFKLEVBQUQsQ0FBTjtBQUNQLG1CQUhELE1BSUs7QUFDRCx3QkFBSXVCLEtBQUssR0FBRyxFQUFaLEVBQ0liLE1BQU0sQ0FBQyxJQUFJWCxpRkFBSixFQUFELENBQU47QUFDUDs7QUFDRHdCLGtCQUFBQSxLQUFLO0FBQ1IsaUJBWHFCLEVBV25CLEdBWG1CLENBQXRCO0FBWUgsZUFkRCxNQWVLO0FBQ0Q7QUFDQTZJLGdCQUFBQSxPQUFPLEdBQUc1SSxVQUFVLENBQUMsTUFBTWQsTUFBTSxDQUFDLElBQUlaLDJFQUFKLEVBQUQsQ0FBYixFQUF5QyxLQUF6QyxDQUFwQjtBQUNIO0FBQ0osYUFwQ0ssQ0FBTjtBQXFDSCxXQXRDRCxTQXVDUTtBQUNKdUUsWUFBQUEsTUFBTSxDQUFDYSxnQkFBUCxHQUEwQkEsZ0JBQTFCO0FBQ0EsZ0JBQUk1RCxRQUFKLEVBQ0lvSixhQUFhLENBQUNwSixRQUFELENBQWI7QUFDUDtBQUNKLFNBbERELENBbURBLE9BQU94QyxLQUFQLEVBQWM7QUFDVixjQUFJQSxLQUFLLFlBQVlKLG9FQUFyQixFQUNJLE1BQU1JLEtBQU47QUFDSixnQkFBTSxJQUFJTSw4RUFBSixDQUEwQk4sS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBOUUsRUFBdUZDLEtBQXZGLENBQU47QUFDSDs7QUFDRHVGLFFBQUFBLE1BQU0sQ0FBQ2dCLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLEtBQUtqQixhQUE3QjtBQUNBLGFBQUtFLE9BQUwsR0FBZUQsTUFBZjtBQUNBLGFBQUt2QyxJQUFMLENBQVUsU0FBVjtBQUNILE9BbkVELENBb0VBLE9BQU9oRCxLQUFQLEVBQWM7QUFDVixhQUFLZ0QsSUFBTCxDQUFVLE9BQVYsRUFBbUJoRCxLQUFuQjtBQUNBLGNBQU1BLEtBQU47QUFDSCxPQXZFRCxTQXdFUTtBQUNKLGFBQUsyRixXQUFMLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSixLQTVFZSxDQUFoQjtBQTZFSDs7QUFDRGdCLEVBQUFBLFVBQVUsR0FBRztBQUNULFdBQU94RixTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsYUFBYTtBQUNoRCxZQUFNb0UsTUFBTSxHQUFHLEtBQUtDLE9BQXBCOztBQUNBLFVBQUlELE1BQUosRUFBWTtBQUNSQSxRQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLEtBQUtILGFBQTlCO0FBQ0EsYUFBS0UsT0FBTCxHQUFlLElBQWYsQ0FGUSxDQUdSOztBQUNBLGNBQU1ZLGdCQUFnQixHQUFHYixNQUFNLENBQUNhLGdCQUFoQzs7QUFDQSxZQUFJO0FBQ0EsZ0JBQU0sSUFBSXpFLE9BQUosQ0FBWSxDQUFDRCxPQUFELEVBQVVFLE1BQVYsS0FBcUI7QUFDbkMsa0JBQU0wSixPQUFPLEdBQUc1SSxVQUFVLENBQUMsTUFBTWhCLE9BQU8sRUFBZCxFQUFrQixHQUFsQixDQUExQjs7QUFDQTZELFlBQUFBLE1BQU0sQ0FBQ2EsZ0JBQVAsR0FBMEIsQ0FBQyxHQUFHRSxJQUFKLEtBQWE7QUFDbkNpRixjQUFBQSxZQUFZLENBQUNELE9BQUQsQ0FBWjtBQUNBNUosY0FBQUEsT0FBTyxHQUY0QixDQUduQzs7QUFDQTZELGNBQUFBLE1BQU0sQ0FBQ3NHLGlCQUFQLEdBQTJCLElBQUlDLEdBQUosRUFBM0I7QUFDQSxxQkFBTzFGLGdCQUFnQixDQUFDL0QsS0FBakIsQ0FBdUJrRCxNQUF2QixFQUErQmUsSUFBL0IsQ0FBUDtBQUNILGFBTkQ7O0FBT0FmLFlBQUFBLE1BQU0sQ0FBQ29CLFVBQVAsR0FBb0J2RSxJQUFwQixDQUF5QixNQUFNO0FBQzNCbUosY0FBQUEsWUFBWSxDQUFDRCxPQUFELENBQVo7QUFDQTVKLGNBQUFBLE9BQU87QUFDVixhQUhELEVBR0kxQixLQUFELElBQVc7QUFDVnVMLGNBQUFBLFlBQVksQ0FBQ0QsT0FBRCxDQUFaLENBRFUsQ0FFVjs7QUFDQSxrQkFBSSxDQUFDdEwsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBckQsTUFBa0UscUJBQXRFLEVBQTZGO0FBQ3pGMkIsZ0JBQUFBLE9BQU87QUFDVixlQUZELE1BR0s7QUFDREUsZ0JBQUFBLE1BQU0sQ0FBQzVCLEtBQUQsQ0FBTjtBQUNIO0FBQ0osYUFaRDtBQWFILFdBdEJLLENBQU47QUF1QkgsU0F4QkQsQ0F5QkEsT0FBT0EsS0FBUCxFQUFjO0FBQ1YsZUFBS2dELElBQUwsQ0FBVSxPQUFWLEVBQW1CLElBQUl4QyxpRkFBSixDQUE2QlIsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBakYsRUFBMEZDLEtBQTFGLENBQW5CO0FBQ0gsU0EzQkQsU0E0QlE7QUFDSnVGLFVBQUFBLE1BQU0sQ0FBQ2EsZ0JBQVAsR0FBMEJBLGdCQUExQjtBQUNIO0FBQ0o7O0FBQ0QsV0FBS3BELElBQUwsQ0FBVSxZQUFWO0FBQ0gsS0F4Q2UsQ0FBaEI7QUF5Q0g7O0FBQ0Q4QixFQUFBQSxlQUFlLENBQUNaLFdBQUQsRUFBYztBQUN6QixXQUFPL0MsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaEQsVUFBSTtBQUNBLGNBQU1vRSxNQUFNLEdBQUcsS0FBS0MsT0FBcEI7QUFDQSxZQUFJLENBQUNELE1BQUwsRUFDSSxNQUFNLElBQUkzRSxnRkFBSixFQUFOOztBQUNKLFlBQUk7QUFDQSxpQkFBTyxDQUFDLE1BQU0yRSxNQUFNLENBQUNULGVBQVAsQ0FBdUJaLFdBQXZCLENBQVAsS0FBK0NBLFdBQXREO0FBQ0gsU0FGRCxDQUdBLE9BQU9sRSxLQUFQLEVBQWM7QUFDVixnQkFBTSxJQUFJZSxtRkFBSixDQUErQmYsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ0QsT0FBbkYsRUFBNEZDLEtBQTVGLENBQU47QUFDSDtBQUNKLE9BVkQsQ0FXQSxPQUFPQSxLQUFQLEVBQWM7QUFDVixhQUFLZ0QsSUFBTCxDQUFVLE9BQVYsRUFBbUJoRCxLQUFuQjtBQUNBLGNBQU1BLEtBQU47QUFDSDtBQUNKLEtBaEJlLENBQWhCO0FBaUJIOztBQUNENEcsRUFBQUEsbUJBQW1CLENBQUNDLFlBQUQsRUFBZTtBQUM5QixXQUFPMUYsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLGFBQWE7QUFDaEQsVUFBSTtBQUNBLGNBQU1vRSxNQUFNLEdBQUcsS0FBS0MsT0FBcEI7QUFDQSxZQUFJLENBQUNELE1BQUwsRUFDSSxNQUFNLElBQUkzRSxnRkFBSixFQUFOOztBQUNKLFlBQUk7QUFDQSxpQkFBTyxDQUFDLE1BQU0yRSxNQUFNLENBQUNxQixtQkFBUCxDQUEyQkMsWUFBM0IsQ0FBUCxLQUFvREEsWUFBM0Q7QUFDSCxTQUZELENBR0EsT0FBTzdHLEtBQVAsRUFBYztBQUNWLGdCQUFNLElBQUllLG1GQUFKLENBQStCZixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEtBQUssQ0FBakMsR0FBcUMsS0FBSyxDQUExQyxHQUE4Q0EsS0FBSyxDQUFDRCxPQUFuRixFQUE0RkMsS0FBNUYsQ0FBTjtBQUNIO0FBQ0osT0FWRCxDQVdBLE9BQU9BLEtBQVAsRUFBYztBQUNWLGFBQUtnRCxJQUFMLENBQVUsT0FBVixFQUFtQmhELEtBQW5CO0FBQ0EsY0FBTUEsS0FBTjtBQUNIO0FBQ0osS0FoQmUsQ0FBaEI7QUFpQkg7O0FBQ0Q4RyxFQUFBQSxXQUFXLENBQUMvRyxPQUFELEVBQVU7QUFDakIsV0FBT29CLFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQixFQUF1QixhQUFhO0FBQ2hELFVBQUk7QUFDQSxjQUFNb0UsTUFBTSxHQUFHLEtBQUtDLE9BQXBCO0FBQ0EsWUFBSSxDQUFDRCxNQUFMLEVBQ0ksTUFBTSxJQUFJM0UsZ0ZBQUosRUFBTjs7QUFDSixZQUFJO0FBQ0EsZ0JBQU07QUFBRW1HLFlBQUFBO0FBQUYsY0FBZ0IsTUFBTXhCLE1BQU0sQ0FBQ3dHLElBQVAsQ0FBWWhNLE9BQVosRUFBcUIsTUFBckIsQ0FBNUI7QUFDQSxpQkFBT2lILFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQkYsU0FBaEIsQ0FBUDtBQUNILFNBSEQsQ0FJQSxPQUFPL0csS0FBUCxFQUFjO0FBQ1YsZ0JBQU0sSUFBSWMsK0VBQUosQ0FBMkJkLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUNELE9BQS9FLEVBQXdGQyxLQUF4RixDQUFOO0FBQ0g7QUFDSixPQVhELENBWUEsT0FBT0EsS0FBUCxFQUFjO0FBQ1YsYUFBS2dELElBQUwsQ0FBVSxPQUFWLEVBQW1CaEQsS0FBbkI7QUFDQSxjQUFNQSxLQUFOO0FBQ0g7QUFDSixLQWpCZSxDQUFoQjtBQWtCSDs7QUF0Tm1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ08sTUFBTWtNLGVBQWUsR0FBRyxDQUFDN0csTUFBTSxHQUFHLEVBQVYsTUFBa0I7QUFDN0NsRixFQUFBQSxJQUFJLEVBQUU4TCxxREFEdUM7QUFFN0N6QyxFQUFBQSxHQUFHLEVBQUUsc0JBRndDO0FBRzdDNEMsRUFBQUEsSUFBSSxFQUFHLDQxR0FIc0M7QUFJN0N4SixFQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJb0osOEVBQUosQ0FBd0IzRyxNQUF4QjtBQUo4QixDQUFsQixDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ08sTUFBTWlILGVBQWUsR0FBRyxDQUFDakgsTUFBTSxHQUFHLEVBQVYsTUFBa0I7QUFDN0NsRixFQUFBQSxJQUFJLEVBQUU4TCxxREFEdUM7QUFFN0N6QyxFQUFBQSxHQUFHLEVBQUUsMkJBRndDO0FBRzdDNEMsRUFBQUEsSUFBSSxFQUFFLDR0Q0FIdUM7QUFJN0N4SixFQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJeUosOEVBQUosQ0FBd0JoSCxNQUF4QjtBQUo4QixDQUFsQixDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ08sTUFBTW9ILGVBQWUsR0FBRyxDQUFDcEgsTUFBTSxHQUFHLEVBQVYsTUFBa0I7QUFDN0NsRixFQUFBQSxJQUFJLEVBQUU4TCxxREFEdUM7QUFFN0N6QyxFQUFBQSxHQUFHLEVBQUUsd0JBRndDO0FBRzdDNEMsRUFBQUEsSUFBSSxFQUFFLDR5Q0FIdUM7QUFJN0N4SixFQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJNEosOEVBQUosQ0FBd0JuSCxNQUF4QjtBQUo4QixDQUFsQixDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ08sTUFBTXVILGVBQWUsR0FBRyxDQUFDdkgsTUFBTSxHQUFHLEVBQVYsTUFBa0I7QUFDN0NsRixFQUFBQSxJQUFJLEVBQUU4TCxxREFEdUM7QUFFN0N6QyxFQUFBQSxHQUFHLEVBQUUsb0JBRndDO0FBRzdDNEMsRUFBQUEsSUFBSSxFQUFFLDQ2TEFIdUM7QUFJN0N4SixFQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJK0osOEVBQUosQ0FBd0J0SCxNQUF4QjtBQUo4QixDQUFsQixDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNPLE1BQU0wSCxlQUFlLEdBQUcsQ0FBQzFILE1BQU0sR0FBRyxFQUFWLE1BQWtCO0FBQzdDbEYsRUFBQUEsSUFBSSxFQUFFOEwscURBRHVDO0FBRTdDekMsRUFBQUEsR0FBRyxFQUFFLHdCQUZ3QztBQUc3QzRDLEVBQUFBLElBQUksRUFBRSxvMUJBSHVDO0FBSTdDeEosRUFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSWtLLDhFQUFKLENBQXdCekgsTUFBeEI7QUFKOEIsQ0FBbEIsQ0FBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNPLE1BQU02SCxhQUFhLEdBQUcsQ0FBQzdILE1BQU0sR0FBRyxFQUFWLE1BQWtCO0FBQzNDbEYsRUFBQUEsSUFBSSxFQUFFOEwseURBRHFDO0FBRTNDekMsRUFBQUEsR0FBRyxFQUFFLHdCQUZzQztBQUczQzRDLEVBQUFBLElBQUksRUFBRSx3MktBSHFDO0FBSTNDeEosRUFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSXFLLHNGQUFKLENBQTRCNUgsTUFBNUI7QUFKNEIsQ0FBbEIsQ0FBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ08sTUFBTWxHLGdCQUFnQixHQUFHLENBQUNrRyxNQUFNLEdBQUcsRUFBVixNQUFrQjtBQUM5Q2xGLEVBQUFBLElBQUksRUFBRThMLHNEQUR3QztBQUU5Q3pDLEVBQUFBLEdBQUcsRUFBRSx5QkFGeUM7QUFHOUM0QyxFQUFBQSxJQUFJLEVBQUUsZzNDQUh3QztBQUk5Q3hKLEVBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUl3QyxnRkFBSixDQUF5QkMsTUFBekI7QUFKK0IsQ0FBbEIsQ0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNPLE1BQU1pSSxnQkFBZ0IsR0FBRyxDQUFDakksTUFBTSxHQUFHLEVBQVYsTUFBa0I7QUFDOUNsRixFQUFBQSxJQUFJLEVBQUU4TCxzREFEd0M7QUFFOUN6QyxFQUFBQSxHQUFHLEVBQUUsd0JBRnlDO0FBRzlDNEMsRUFBQUEsSUFBSSxFQUFFLHd2REFId0M7QUFJOUN4SixFQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJeUssZ0ZBQUosQ0FBeUJoSSxNQUF6QjtBQUorQixDQUFsQixDQUF6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBQ08sTUFBTW9JLGNBQWMsR0FBRyxDQUFDcEksTUFBTSxHQUFHLEVBQVYsTUFBa0I7QUFDNUNsRixFQUFBQSxJQUFJLEVBQUU4TCxvREFEc0M7QUFFNUN6QyxFQUFBQSxHQUFHLEVBQUUsb0NBRnVDO0FBRzVDNEMsRUFBQUEsSUFBSSxFQUFFLG93QkFIc0M7QUFJNUN4SixFQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJNEssNEVBQUosQ0FBdUJuSSxNQUF2QjtBQUo2QixDQUFsQixDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDTyxNQUFNakcsaUJBQWlCLEdBQUcsQ0FBQ2lHLE1BQU0sR0FBRyxFQUFWLE1BQWtCO0FBQy9DbEYsRUFBQUEsSUFBSSxFQUFFOEwsdURBRHlDO0FBRS9DekMsRUFBQUEsR0FBRyxFQUFFLHNCQUYwQztBQUcvQzRDLEVBQUFBLElBQUksRUFBRSxvc0dBSHlDO0FBSS9DeEosRUFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSThILGtGQUFKLENBQTBCckYsTUFBMUI7QUFKZ0MsQ0FBbEIsQ0FBMUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUCxJQUFJbEMsTUFBTSxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLE1BQWQsSUFBeUIsVUFBVUMsQ0FBVixFQUFhcEIsQ0FBYixFQUFnQjtBQUNsRCxNQUFJcUIsQ0FBQyxHQUFHLEVBQVI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNGLENBQWQsRUFBaUIsSUFBSUcsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNOLENBQXJDLEVBQXdDRSxDQUF4QyxLQUE4Q3RCLENBQUMsQ0FBQzJCLE9BQUYsQ0FBVUwsQ0FBVixJQUFlLENBQWpFLEVBQ2JELENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU9GLENBQUMsQ0FBQ0UsQ0FBRCxDQUFSOztBQUNKLE1BQUlGLENBQUMsSUFBSSxJQUFMLElBQWEsT0FBT0csTUFBTSxDQUFDSyxxQkFBZCxLQUF3QyxVQUF6RCxFQUNJLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV1AsQ0FBQyxHQUFHQyxNQUFNLENBQUNLLHFCQUFQLENBQTZCUixDQUE3QixDQUFwQixFQUFxRFMsQ0FBQyxHQUFHUCxDQUFDLENBQUNRLE1BQTNELEVBQW1FRCxDQUFDLEVBQXBFLEVBQXdFO0FBQ3BFLFFBQUk3QixDQUFDLENBQUMyQixPQUFGLENBQVVMLENBQUMsQ0FBQ08sQ0FBRCxDQUFYLElBQWtCLENBQWxCLElBQXVCTixNQUFNLENBQUNDLFNBQVAsQ0FBaUJPLG9CQUFqQixDQUFzQ0wsSUFBdEMsQ0FBMkNOLENBQTNDLEVBQThDRSxDQUFDLENBQUNPLENBQUQsQ0FBL0MsQ0FBM0IsRUFDSVIsQ0FBQyxDQUFDQyxDQUFDLENBQUNPLENBQUQsQ0FBRixDQUFELEdBQVVULENBQUMsQ0FBQ0UsQ0FBQyxDQUFDTyxDQUFELENBQUYsQ0FBWDtBQUNQO0FBQ0wsU0FBT1IsQ0FBUDtBQUNILENBVkQ7O0FBV0E7QUFDQTtBQUNPLE1BQU11SyxvQkFBb0IsR0FBRyxDQUFDaEksRUFBRSxHQUFHLEVBQU4sS0FBYTtBQUM3QyxNQUFJO0FBQUVvRixJQUFBQTtBQUFGLE1BQWVwRixFQUFuQjtBQUFBLE1BQXVCUCxNQUFNLEdBQUdsQyxNQUFNLENBQUN5QyxFQUFELEVBQUssQ0FBQyxVQUFELENBQUwsQ0FBdEM7O0FBQ0EsU0FBUTtBQUNKekYsSUFBQUEsSUFBSSxFQUFFOEwsMERBREY7QUFFSnpDLElBQUFBLEdBQUcsRUFBRSxzQkFGRDtBQUdKNEMsSUFBQUEsSUFBSSxFQUFFLG9zR0FIRjtBQUlKeEosSUFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSWtJLDhFQUFKLENBQXdCdkgsTUFBTSxDQUFDNkYsTUFBUCxDQUFjO0FBQUU0QixNQUFBQSxRQUFRLEVBQUU7QUFBWixLQUFkLEVBQWtFM0YsTUFBbEUsQ0FBeEI7QUFKWCxHQUFSO0FBTUgsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQLElBQUlsQyxNQUFNLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsTUFBZCxJQUF5QixVQUFVQyxDQUFWLEVBQWFwQixDQUFiLEVBQWdCO0FBQ2xELE1BQUlxQixDQUFDLEdBQUcsRUFBUjs7QUFDQSxPQUFLLElBQUlDLENBQVQsSUFBY0YsQ0FBZCxFQUFpQixJQUFJRyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ04sQ0FBckMsRUFBd0NFLENBQXhDLEtBQThDdEIsQ0FBQyxDQUFDMkIsT0FBRixDQUFVTCxDQUFWLElBQWUsQ0FBakUsRUFDYkQsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBT0YsQ0FBQyxDQUFDRSxDQUFELENBQVI7O0FBQ0osTUFBSUYsQ0FBQyxJQUFJLElBQUwsSUFBYSxPQUFPRyxNQUFNLENBQUNLLHFCQUFkLEtBQXdDLFVBQXpELEVBQ0ksS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXUCxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0sscUJBQVAsQ0FBNkJSLENBQTdCLENBQXBCLEVBQXFEUyxDQUFDLEdBQUdQLENBQUMsQ0FBQ1EsTUFBM0QsRUFBbUVELENBQUMsRUFBcEUsRUFBd0U7QUFDcEUsUUFBSTdCLENBQUMsQ0FBQzJCLE9BQUYsQ0FBVUwsQ0FBQyxDQUFDTyxDQUFELENBQVgsSUFBa0IsQ0FBbEIsSUFBdUJOLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQk8sb0JBQWpCLENBQXNDTCxJQUF0QyxDQUEyQ04sQ0FBM0MsRUFBOENFLENBQUMsQ0FBQ08sQ0FBRCxDQUEvQyxDQUEzQixFQUNJUixDQUFDLENBQUNDLENBQUMsQ0FBQ08sQ0FBRCxDQUFGLENBQUQsR0FBVVQsQ0FBQyxDQUFDRSxDQUFDLENBQUNPLENBQUQsQ0FBRixDQUFYO0FBQ1A7QUFDTCxTQUFPUixDQUFQO0FBQ0gsQ0FWRDs7QUFXQTtBQUNBO0FBQ08sTUFBTWhFLGVBQWUsR0FBRyxDQUFDdUcsRUFBRSxHQUFHLEVBQU4sS0FBYTtBQUN4QyxNQUFJO0FBQUVvRixJQUFBQTtBQUFGLE1BQWVwRixFQUFuQjtBQUFBLE1BQXVCUCxNQUFNLEdBQUdsQyxNQUFNLENBQUN5QyxFQUFELEVBQUssQ0FBQyxVQUFELENBQUwsQ0FBdEM7O0FBQ0EsU0FBUTtBQUNKekYsSUFBQUEsSUFBSSxFQUFFOEwscURBREY7QUFFSnpDLElBQUFBLEdBQUcsRUFBRSx1QkFGRDtBQUdKNEMsSUFBQUEsSUFBSSxFQUFFLDRrQ0FIRjtBQUlKeEosSUFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSWtJLDhFQUFKLENBQXdCdkgsTUFBTSxDQUFDNkYsTUFBUCxDQUFjO0FBQUU0QixNQUFBQSxRQUFRLEVBQUU7QUFBWixLQUFkLEVBQXFEM0YsTUFBckQsQ0FBeEI7QUFKWCxHQUFSO0FBTUgsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQLElBQUlsQyxNQUFNLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsTUFBZCxJQUF5QixVQUFVQyxDQUFWLEVBQWFwQixDQUFiLEVBQWdCO0FBQ2xELE1BQUlxQixDQUFDLEdBQUcsRUFBUjs7QUFDQSxPQUFLLElBQUlDLENBQVQsSUFBY0YsQ0FBZCxFQUFpQixJQUFJRyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ04sQ0FBckMsRUFBd0NFLENBQXhDLEtBQThDdEIsQ0FBQyxDQUFDMkIsT0FBRixDQUFVTCxDQUFWLElBQWUsQ0FBakUsRUFDYkQsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBT0YsQ0FBQyxDQUFDRSxDQUFELENBQVI7O0FBQ0osTUFBSUYsQ0FBQyxJQUFJLElBQUwsSUFBYSxPQUFPRyxNQUFNLENBQUNLLHFCQUFkLEtBQXdDLFVBQXpELEVBQ0ksS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXUCxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0sscUJBQVAsQ0FBNkJSLENBQTdCLENBQXBCLEVBQXFEUyxDQUFDLEdBQUdQLENBQUMsQ0FBQ1EsTUFBM0QsRUFBbUVELENBQUMsRUFBcEUsRUFBd0U7QUFDcEUsUUFBSTdCLENBQUMsQ0FBQzJCLE9BQUYsQ0FBVUwsQ0FBQyxDQUFDTyxDQUFELENBQVgsSUFBa0IsQ0FBbEIsSUFBdUJOLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQk8sb0JBQWpCLENBQXNDTCxJQUF0QyxDQUEyQ04sQ0FBM0MsRUFBOENFLENBQUMsQ0FBQ08sQ0FBRCxDQUEvQyxDQUEzQixFQUNJUixDQUFDLENBQUNDLENBQUMsQ0FBQ08sQ0FBRCxDQUFGLENBQUQsR0FBVVQsQ0FBQyxDQUFDRSxDQUFDLENBQUNPLENBQUQsQ0FBRixDQUFYO0FBQ1A7QUFDTCxTQUFPUixDQUFQO0FBQ0gsQ0FWRDs7QUFXQTtBQUNBO0FBQ08sTUFBTTBLLHdCQUF3QixHQUFHLENBQUNuSSxFQUFFLEdBQUcsRUFBTixLQUFhO0FBQ2pELE1BQUk7QUFBRW9GLElBQUFBO0FBQUYsTUFBZXBGLEVBQW5CO0FBQUEsTUFBdUJQLE1BQU0sR0FBR2xDLE1BQU0sQ0FBQ3lDLEVBQUQsRUFBSyxDQUFDLFVBQUQsQ0FBTCxDQUF0Qzs7QUFDQSxTQUFRO0FBQ0p6RixJQUFBQSxJQUFJLEVBQUU4TCw4REFERjtBQUVKekMsSUFBQUEsR0FBRyxFQUFFLG1GQUZEO0FBR0o0QyxJQUFBQSxJQUFJLEVBQUUsdzVLQUhGO0FBSUp4SixJQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJa0ksOEVBQUosQ0FBd0J6RixNQUF4QjtBQUpYLEdBQVI7QUFNSCxDQVJNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQO0FBQ0E7QUFDTyxNQUFNNkksZUFBZSxHQUFHLENBQUM3SSxNQUFNLEdBQUcsRUFBVixNQUFrQjtBQUM3Q2xGLEVBQUFBLElBQUksRUFBRThMLHFEQUR1QztBQUU3Q3pDLEVBQUFBLEdBQUcsRUFBRSwwQkFGd0M7QUFHN0M0QyxFQUFBQSxJQUFJLEVBQUUsNHlFQUh1QztBQUk3Q3hKLEVBQUFBLE9BQU8sRUFBRSxNQUFNLElBQUlxTCw4RUFBSixDQUF3QjVJLE1BQXhCO0FBSjhCLENBQWxCLENBQXhCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7QUFDTyxNQUFNZ0osY0FBYyxHQUFJaEosTUFBRCxLQUFhO0FBQ3ZDbEYsRUFBQUEsSUFBSSxFQUFFOEwsb0RBRGlDO0FBRXZDekMsRUFBQUEsR0FBRyxFQUFFLGdCQUZrQztBQUd2QzRDLEVBQUFBLElBQUksRUFBRSxnNUJBSGlDO0FBSXZDeEosRUFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSXdMLDRFQUFKLENBQXVCL0ksTUFBdkI7QUFKd0IsQ0FBYixDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7QUNGQSxJQUFJNEcsVUFBSjs7QUFDUCxDQUFDLFVBQVVBLFVBQVYsRUFBc0I7QUFDbkI7QUFDQUEsRUFBQUEsVUFBVSxDQUFDLFFBQUQsQ0FBVixHQUF1QixRQUF2QjtBQUNBQSxFQUFBQSxVQUFVLENBQUMsUUFBRCxDQUFWLEdBQXVCLFFBQXZCO0FBQ0FBLEVBQUFBLFVBQVUsQ0FBQyxRQUFELENBQVYsR0FBdUIsUUFBdkI7QUFDQUEsRUFBQUEsVUFBVSxDQUFDLFFBQUQsQ0FBVixHQUF1QixRQUF2QjtBQUNBQSxFQUFBQSxVQUFVLENBQUMsUUFBRCxDQUFWLEdBQXVCLFFBQXZCO0FBQ0FBLEVBQUFBLFVBQVUsQ0FBQyxZQUFELENBQVYsR0FBMkIsWUFBM0I7QUFDQUEsRUFBQUEsVUFBVSxDQUFDLFNBQUQsQ0FBVixHQUF3QixTQUF4QjtBQUNBQSxFQUFBQSxVQUFVLENBQUMsU0FBRCxDQUFWLEdBQXdCLFNBQXhCO0FBQ0FBLEVBQUFBLFVBQVUsQ0FBQyxPQUFELENBQVYsR0FBc0IsT0FBdEI7QUFDQUEsRUFBQUEsVUFBVSxDQUFDLFVBQUQsQ0FBVixHQUF5QixVQUF6QjtBQUNBQSxFQUFBQSxVQUFVLENBQUMsYUFBRCxDQUFWLEdBQTRCLGdCQUE1QjtBQUNBQSxFQUFBQSxVQUFVLENBQUMsUUFBRCxDQUFWLEdBQXVCLFFBQXZCO0FBQ0FBLEVBQUFBLFVBQVUsQ0FBQyxpQkFBRCxDQUFWLEdBQWdDLG9CQUFoQztBQUNBQSxFQUFBQSxVQUFVLENBQUMsUUFBRCxDQUFWLEdBQXVCLFFBQXZCO0FBQ0FBLEVBQUFBLFVBQVUsQ0FBQyxPQUFELENBQVYsR0FBc0IsT0FBdEIsQ0FoQm1CLENBaUJuQjtBQUNILENBbEJELEVBa0JHQSxVQUFVLEtBQUtBLFVBQVUsR0FBRyxFQUFsQixDQWxCYjs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXJrYXRzLy4vY29udGV4dHMvTXlXYWxsZXRQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvcG9sbC5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9zaWduZXIuanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcGhhbnRvbS9saWIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvQ29ubmVjdGlvblByb3ZpZGVyLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9XYWxsZXRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvZXJyb3JzLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvdXNlQW5jaG9yV2FsbGV0LmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91c2VDb25uZWN0aW9uLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91c2VMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL3VzZVdhbGxldC5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1zb2xmbGFyZS9saWIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci1zb2xsZXQvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvYml0a2VlcC5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzL2xpYi9iaXRwaWUuanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvYmxvY3RvLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL2Nsb3Zlci5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzL2xpYi9jb2luOTguanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvbGVkZ2VyLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL21hdGh3YWxsZXQuanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvcGhhbnRvbS5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzL2xpYi9zYWZlcGFsLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3Nsb3BlLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3NvbGZsYXJlLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3NvbGZsYXJlV2ViLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3NvbGxldC5qcyIsIndlYnBhY2s6Ly9tZWVya2F0cy8uLi8uLi9ub2RlX21vZHVsZXMvQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzL2xpYi9zb2xsZXRFeHRlbnNpb24uanMiLCJ3ZWJwYWNrOi8vbWVlcmthdHMvLi4vLi4vbm9kZV9tb2R1bGVzL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvc29sb25nLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3RvcnVzLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3R5cGVzLmpzIiwid2VicGFjazovL21lZXJrYXRzLy4uLy4uL25vZGVfbW9kdWxlcy9Ac29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3dhbGxldGNvbm5lY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBXYWxsZXRQcm92aWRlciB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIGdldFBoYW50b21XYWxsZXQsXG4gIGdldFNvbGZsYXJlV2FsbGV0LFxuICBnZXRTb2xsZXRXYWxsZXQsXG59IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXdhbGxldHNcIjtcblxuZnVuY3Rpb24gTXlXYWxsZXRQcm92aWRlcihwcm9wcykge1xuICBjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbZ2V0UGhhbnRvbVdhbGxldCgpLCBnZXRTb2xmbGFyZVdhbGxldCgpLCBnZXRTb2xsZXRXYWxsZXQoKV0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gPFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9IHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15V2FsbGV0UHJvdmlkZXI7XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XG5leHBvcnQgY2xhc3MgQmFzZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xufVxuZXhwb3J0IHZhciBXYWxsZXRBZGFwdGVyTmV0d29yaztcbihmdW5jdGlvbiAoV2FsbGV0QWRhcHRlck5ldHdvcmspIHtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIk1haW5uZXRcIl0gPSBcIm1haW5uZXQtYmV0YVwiO1xuICAgIFdhbGxldEFkYXB0ZXJOZXR3b3JrW1wiVGVzdG5ldFwiXSA9IFwidGVzdG5ldFwiO1xuICAgIFdhbGxldEFkYXB0ZXJOZXR3b3JrW1wiRGV2bmV0XCJdID0gXCJkZXZuZXRcIjtcbn0pKFdhbGxldEFkYXB0ZXJOZXR3b3JrIHx8IChXYWxsZXRBZGFwdGVyTmV0d29yayA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCIsImV4cG9ydCBjbGFzcyBXYWxsZXRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RGb3VuZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RJbnN0YWxsZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdFJlYWR5RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RSZWFkeUVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Q29ubmVjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Q29ubmVjdGlvbkVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXREaXNjb25uZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldERpc2Nvbm5lY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldEFjY291bnRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldEFjY291bnRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFB1YmxpY0tleUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0UHVibGljS2V5RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRLZXlwYWlyRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRLZXlwYWlyRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdENvbm5lY3RlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0U2VuZFRyYW5zYWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRTZW5kVHJhbnNhY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFNpZ25NZXNzYWdlRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRTaWduTWVzc2FnZUVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFRpbWVvdXRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFRpbWVvdXRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFdpbmRvd0Jsb2NrZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFdpbmRvd0Nsb3NlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0V2luZG93Q2xvc2VkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2xsJztcbmV4cG9ydCAqIGZyb20gJy4vc2lnbmVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHBvbGwoY2FsbGJhY2ssIGludGVydmFsLCBjb3VudCkge1xuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkb25lID0geWllbGQgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICghZG9uZSlcbiAgICAgICAgICAgICAgICBwb2xsKGNhbGxiYWNrLCBpbnRlcnZhbCwgY291bnQgLSAxKTtcbiAgICAgICAgfSksIGludGVydmFsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcG9sbFVudGlsUmVhZHkoYWRhcHRlciwgcG9sbEludGVydmFsLCBwb2xsQ291bnQpIHtcbiAgICBwb2xsKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWFkeSB9ID0gYWRhcHRlcjtcbiAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgICBpZiAoIWFkYXB0ZXIuZW1pdCgncmVhZHknKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHthZGFwdGVyLmNvbnN0cnVjdG9yLm5hbWV9IGlzIHJlYWR5IGJ1dCBubyBsaXN0ZW5lciB3YXMgcmVnaXN0ZXJlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFkeTtcbiAgICB9LCBwb2xsSW50ZXJ2YWwsIHBvbGxDb3VudCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2xsLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgQmFzZVdhbGxldEFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXInO1xuaW1wb3J0IHsgV2FsbGV0RXJyb3IsIFdhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0IGNsYXNzIEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZVdhbGxldEFkYXB0ZXIge1xuICAgIHNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgY29ubmVjdGlvbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLmZlZVBheWVyIHx8ICh0cmFuc2FjdGlvbi5mZWVQYXllciA9IHRoaXMucHVibGljS2V5IHx8IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLnJlY2VudEJsb2NraGFzaCB8fCAodHJhbnNhY3Rpb24ucmVjZW50QmxvY2toYXNoID0gKHlpZWxkIGNvbm5lY3Rpb24uZ2V0UmVjZW50QmxvY2toYXNoKCdmaW5hbGl6ZWQnKSkuYmxvY2toYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzaWduZXJzIH0gPSBvcHRpb25zLCBzZW5kT3B0aW9ucyA9IF9fcmVzdChvcHRpb25zLCBbXCJzaWduZXJzXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgKHNpZ25lcnMgPT09IG51bGwgfHwgc2lnbmVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2lnbmVycy5sZW5ndGgpICYmIHRyYW5zYWN0aW9uLnBhcnRpYWxTaWduKC4uLnNpZ25lcnMpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IHlpZWxkIHRoaXMuc2lnblRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF3VHJhbnNhY3Rpb24gPSB0cmFuc2FjdGlvbi5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNvbm5lY3Rpb24uc2VuZFJhd1RyYW5zYWN0aW9uKHJhd1RyYW5zYWN0aW9uLCBzZW5kT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBXYWxsZXRFcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2VuZFRyYW5zYWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU1lc3NhZ2VTaWduZXJXYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZVNpZ25lcldhbGxldEFkYXB0ZXIge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lnbmVyLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQmFzZU1lc3NhZ2VTaWduZXJXYWxsZXRBZGFwdGVyLCBwb2xsVW50aWxSZWFkeSwgV2FsbGV0Q29ubmVjdGlvbkVycm9yLCBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciwgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yLCBXYWxsZXRFcnJvciwgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdEZvdW5kRXJyb3IsIFdhbGxldE5vdEluc3RhbGxlZEVycm9yLCBXYWxsZXRQdWJsaWNLZXlFcnJvciwgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IsIFdhbGxldFdpbmRvd0Nsb3NlZEVycm9yLCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5pbXBvcnQgeyBQdWJsaWNLZXkgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuZXhwb3J0IGNsYXNzIFBoYW50b21XYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZU1lc3NhZ2VTaWduZXJXYWxsZXRBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgICAgICAgICAgd2FsbGV0Lm9mZignZGlzY29ubmVjdCcsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FsbGV0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fd2FsbGV0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5KVxuICAgICAgICAgICAgcG9sbFVudGlsUmVhZHkodGhpcywgY29uZmlnLnBvbGxJbnRlcnZhbCB8fCAxMDAwLCBjb25maWcucG9sbENvdW50IHx8IDMpO1xuICAgIH1cbiAgICBnZXQgcHVibGljS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHVibGljS2V5O1xuICAgIH1cbiAgICBnZXQgcmVhZHkoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEhKChfYSA9IHdpbmRvdy5zb2xhbmEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc1BoYW50b20pO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpbmc7XG4gICAgfVxuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuICEhKChfYSA9IHRoaXMuX3dhbGxldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzQ29ubmVjdGVkKTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkIHx8IHRoaXMuY29ubmVjdGluZylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zb2xhbmE7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RGb3VuZEVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQuaXNQaGFudG9tKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXdhbGxldC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIQUNLOiBQaGFudG9tIGRvZXNuJ3QgcmVqZWN0IG9yIGVtaXQgYW4gZXZlbnQgaWYgdGhlIHBvcHVwIGlzIGNsb3NlZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gd2FsbGV0Ll9oYW5kbGVEaXNjb25uZWN0O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5vZmYoJ2Nvbm5lY3QnLCBjb25uZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Ll9oYW5kbGVEaXNjb25uZWN0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Lm9mZignY29ubmVjdCcsIGNvbm5lY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IFdhbGxldFdpbmRvd0Nsb3NlZEVycm9yKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlRGlzY29ubmVjdC5hcHBseSh3YWxsZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Lm9uKCdjb25uZWN0JywgY29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LmNvbm5lY3QoKS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5vZmYoJ2Nvbm5lY3QnLCBjb25uZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFdhbGxldEVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Ll9oYW5kbGVEaXNjb25uZWN0ID0gaGFuZGxlRGlzY29ubmVjdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXdhbGxldC5wdWJsaWNLZXkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBsZXQgcHVibGljS2V5O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY0tleSA9IG5ldyBQdWJsaWNLZXkod2FsbGV0LnB1YmxpY0tleS50b0J5dGVzKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFB1YmxpY0tleUVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdhbGxldC5vbignZGlzY29ubmVjdCcsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FsbGV0ID0gd2FsbGV0O1xuICAgICAgICAgICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IHB1YmxpY0tleTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgICAgICAgIHdhbGxldC5vZmYoJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB3YWxsZXQuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWduVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgICAgIGlmICghd2FsbGV0KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHlpZWxkIHdhbGxldC5zaWduVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pKSB8fCB0cmFuc2FjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWduQWxsVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoeWllbGQgd2FsbGV0LnNpZ25BbGxUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zKSkgfHwgdHJhbnNhY3Rpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgICAgIGlmICghd2FsbGV0KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNpZ25hdHVyZSB9ID0geWllbGQgd2FsbGV0LnNpZ25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKHNpZ25hdHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCIsImltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25uZWN0aW9uQ29udGV4dCB9IGZyb20gJy4vdXNlQ29ubmVjdGlvbic7XG5leHBvcnQgY29uc3QgQ29ubmVjdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4sIGVuZHBvaW50LCBjb25maWcgPSB7IGNvbW1pdG1lbnQ6ICdjb25maXJtZWQnIH0sIH0pID0+IHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gdXNlTWVtbygoKSA9PiBuZXcgQ29ubmVjdGlvbihlbmRwb2ludCwgY29uZmlnKSwgW2VuZHBvaW50LCBjb25maWddKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0aW9uQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBjb25uZWN0aW9uIH0gfSwgY2hpbGRyZW4pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbm5lY3Rpb25Qcm92aWRlci5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFdhbGxldE5vdENvbm5lY3RlZEVycm9yLCBXYWxsZXROb3RSZWFkeUVycm9yLCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3VzZUxvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSAnLi91c2VXYWxsZXQnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHdhbGxldDogbnVsbCxcbiAgICBhZGFwdGVyOiBudWxsLFxuICAgIHJlYWR5OiBmYWxzZSxcbiAgICBwdWJsaWNLZXk6IG51bGwsXG4gICAgY29ubmVjdGVkOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgV2FsbGV0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgd2FsbGV0cywgYXV0b0Nvbm5lY3QgPSBmYWxzZSwgb25FcnJvciA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksIGxvY2FsU3RvcmFnZUtleSA9ICd3YWxsZXROYW1lJywgfSkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZUxvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXksIG51bGwpO1xuICAgIGNvbnN0IFt7IHdhbGxldCwgYWRhcHRlciwgcmVhZHksIHB1YmxpY0tleSwgY29ubmVjdGVkIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgW2Nvbm5lY3RpbmcsIHNldENvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkaXNjb25uZWN0aW5nLCBzZXREaXNjb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBpc0Nvbm5lY3RpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGlzRGlzY29ubmVjdGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgLy8gTWFwIG9mIHdhbGxldCBuYW1lcyB0byB3YWxsZXRzXG4gICAgY29uc3Qgd2FsbGV0c0J5TmFtZSA9IHVzZU1lbW8oKCkgPT4gd2FsbGV0cy5yZWR1Y2UoKHdhbGxldHNCeU5hbWUsIHdhbGxldCkgPT4ge1xuICAgICAgICB3YWxsZXRzQnlOYW1lW3dhbGxldC5uYW1lXSA9IHdhbGxldDtcbiAgICAgICAgcmV0dXJuIHdhbGxldHNCeU5hbWU7XG4gICAgfSwge30pLCBbd2FsbGV0c10pO1xuICAgIC8vIFdoZW4gdGhlIHNlbGVjdGVkIHdhbGxldCBjaGFuZ2VzLCBpbml0aWFsaXplIHRoZSBzdGF0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdhbGxldCA9IChuYW1lICYmIHdhbGxldHNCeU5hbWVbbmFtZV0pIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB3YWxsZXQgJiYgd2FsbGV0LmFkYXB0ZXIoKTtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVhZHksIHB1YmxpY0tleSwgY29ubmVjdGVkIH0gPSBhZGFwdGVyO1xuICAgICAgICAgICAgc2V0U3RhdGUoeyB3YWxsZXQsIGFkYXB0ZXIsIGNvbm5lY3RlZCwgcHVibGljS2V5LCByZWFkeSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbbmFtZSwgd2FsbGV0c0J5TmFtZSwgc2V0U3RhdGVdKTtcbiAgICAvLyBJZiBhdXRvQ29ubmVjdCBpcyBlbmFibGVkLCB0cnkgdG8gY29ubmVjdCB3aGVuIHRoZSBhZGFwdGVyIGNoYW5nZXMgYW5kIGlzIHJlYWR5XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGluZy5jdXJyZW50IHx8IGNvbm5lY3RpbmcgfHwgY29ubmVjdGVkIHx8ICFhdXRvQ29ubmVjdCB8fCAhYWRhcHRlciB8fCAhcmVhZHkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCB0aHJvdyBlcnJvciwgYnV0IG9uRXJyb3Igd2lsbCBzdGlsbCBiZSBjYWxsZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtpc0Nvbm5lY3RpbmcsIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCwgYXV0b0Nvbm5lY3QsIGFkYXB0ZXIsIHJlYWR5LCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gU2VsZWN0IGEgd2FsbGV0IGJ5IG5hbWVcbiAgICBjb25zdCBzZWxlY3QgPSB1c2VDYWxsYmFjaygobmV3TmFtZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBuZXdOYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoYWRhcHRlcilcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICBzZXROYW1lKG5ld05hbWUpO1xuICAgIH0pLCBbbmFtZSwgYWRhcHRlciwgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIHJlYWR5IGV2ZW50XG4gICAgY29uc3Qgb25SZWFkeSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IHJlYWR5OiB0cnVlIH0pKSksIFtzZXRTdGF0ZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGNvbm5lY3QgZXZlbnRcbiAgICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBjb25uZWN0ZWQsIHB1YmxpY0tleSwgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGNvbm5lY3RlZCxcbiAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgIHJlYWR5IH0pKSk7XG4gICAgfSwgW2FkYXB0ZXIsIHNldFN0YXRlXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgZGlzY29ubmVjdCBldmVudFxuICAgIGNvbnN0IG9uRGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldE5hbWUobnVsbCksIFtzZXROYW1lXSk7XG4gICAgLy8gQ29ubmVjdCB0aGUgYWRhcHRlciB0byB0aGUgd2FsbGV0XG4gICAgY29uc3QgY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoaXNDb25uZWN0aW5nLmN1cnJlbnQgfHwgY29ubmVjdGluZyB8fCBkaXNjb25uZWN0aW5nIHx8IGNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF3YWxsZXQgfHwgIWFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHdhbGxldC51cmwsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdFJlYWR5RXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KSwgW2lzQ29ubmVjdGluZywgY29ubmVjdGluZywgZGlzY29ubmVjdGluZywgY29ubmVjdGVkLCB3YWxsZXQsIGFkYXB0ZXIsIG9uRXJyb3IsIHJlYWR5LCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gRGlzY29ubmVjdCB0aGUgYWRhcHRlciBmcm9tIHRoZSB3YWxsZXRcbiAgICBjb25zdCBkaXNjb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCB8fCBkaXNjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICByZXR1cm4gc2V0TmFtZShudWxsKTtcbiAgICAgICAgaXNEaXNjb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXREaXNjb25uZWN0aW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgc2V0RGlzY29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSksIFtpc0Rpc2Nvbm5lY3RpbmcsIGRpc2Nvbm5lY3RpbmcsIGFkYXB0ZXIsIHNldERpc2Nvbm5lY3RpbmcsIHNldE5hbWVdKTtcbiAgICAvLyBTZW5kIGEgdHJhbnNhY3Rpb24gdXNpbmcgdGhlIHByb3ZpZGVkIGNvbm5lY3Rpb25cbiAgICBjb25zdCBzZW5kVHJhbnNhY3Rpb24gPSB1c2VDYWxsYmFjaygodHJhbnNhY3Rpb24sIGNvbm5lY3Rpb24sIG9wdGlvbnMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLnNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgY29ubmVjdGlvbiwgb3B0aW9ucyk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICAvLyBTaWduIGEgdHJhbnNhY3Rpb24gaWYgdGhlIHdhbGxldCBzdXBwb3J0cyBpdFxuICAgIGNvbnN0IHNpZ25UcmFuc2FjdGlvbiA9IHVzZU1lbW8oKCkgPT4gYWRhcHRlciAmJiAnc2lnblRyYW5zYWN0aW9uJyBpbiBhZGFwdGVyXG4gICAgICAgID8gKHRyYW5zYWN0aW9uKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgIDogdW5kZWZpbmVkLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgLy8gU2lnbiBtdWx0aXBsZSB0cmFuc2FjdGlvbnMgaWYgdGhlIHdhbGxldCBzdXBwb3J0cyBpdFxuICAgIGNvbnN0IHNpZ25BbGxUcmFuc2FjdGlvbnMgPSB1c2VNZW1vKCgpID0+IGFkYXB0ZXIgJiYgJ3NpZ25BbGxUcmFuc2FjdGlvbnMnIGluIGFkYXB0ZXJcbiAgICAgICAgPyAodHJhbnNhY3Rpb25zKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLnNpZ25BbGxUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zKTtcbiAgICAgICAgfSlcbiAgICAgICAgOiB1bmRlZmluZWQsIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICAvLyBTaWduIGFuIGFyYml0cmFyeSBtZXNzYWdlIGlmIHRoZSB3YWxsZXQgc3VwcG9ydHMgaXRcbiAgICBjb25zdCBzaWduTWVzc2FnZSA9IHVzZU1lbW8oKCkgPT4gYWRhcHRlciAmJiAnc2lnbk1lc3NhZ2UnIGluIGFkYXB0ZXJcbiAgICAgICAgPyAobWVzc2FnZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5zaWduTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfSlcbiAgICAgICAgOiB1bmRlZmluZWQsIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICAvLyBTZXR1cCBhbmQgdGVhcmRvd24gZXZlbnQgbGlzdGVuZXJzIHdoZW4gdGhlIGFkYXB0ZXIgY2hhbmdlc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdyZWFkeScsIG9uUmVhZHkpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignY29ubmVjdCcsIG9uQ29ubmVjdCk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdyZWFkeScsIG9uUmVhZHkpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW2FkYXB0ZXIsIG9uUmVhZHksIG9uQ29ubmVjdCwgb25EaXNjb25uZWN0LCBvbkVycm9yXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHtcbiAgICAgICAgICAgIHdhbGxldHMsXG4gICAgICAgICAgICBhdXRvQ29ubmVjdCxcbiAgICAgICAgICAgIHdhbGxldCxcbiAgICAgICAgICAgIGFkYXB0ZXIsXG4gICAgICAgICAgICBwdWJsaWNLZXksXG4gICAgICAgICAgICByZWFkeSxcbiAgICAgICAgICAgIGNvbm5lY3RlZCxcbiAgICAgICAgICAgIGNvbm5lY3RpbmcsXG4gICAgICAgICAgICBkaXNjb25uZWN0aW5nLFxuICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgY29ubmVjdCxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QsXG4gICAgICAgICAgICBzZW5kVHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBzaWduVHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBzaWduQWxsVHJhbnNhY3Rpb25zLFxuICAgICAgICAgICAgc2lnbk1lc3NhZ2UsXG4gICAgICAgIH0gfSwgY2hpbGRyZW4pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XYWxsZXRQcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBXYWxsZXRFcnJvciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdFNlbGVjdGVkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL3VzZUFuY2hvcldhbGxldCc7XG5leHBvcnQgKiBmcm9tICcuL0Nvbm5lY3Rpb25Qcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2Vycm9ycyc7XG5leHBvcnQgKiBmcm9tICcuL3VzZUNvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi91c2VMb2NhbFN0b3JhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VXYWxsZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9XYWxsZXRQcm92aWRlcic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnLi91c2VXYWxsZXQnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuY2hvcldhbGxldCgpIHtcbiAgICBjb25zdCB7IHB1YmxpY0tleSwgc2lnblRyYW5zYWN0aW9uLCBzaWduQWxsVHJhbnNhY3Rpb25zIH0gPSB1c2VXYWxsZXQoKTtcbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiBwdWJsaWNLZXkgJiYgc2lnblRyYW5zYWN0aW9uICYmIHNpZ25BbGxUcmFuc2FjdGlvbnNcbiAgICAgICAgPyB7IHB1YmxpY0tleSwgc2lnblRyYW5zYWN0aW9uLCBzaWduQWxsVHJhbnNhY3Rpb25zIH1cbiAgICAgICAgOiB1bmRlZmluZWQsIFtwdWJsaWNLZXksIHNpZ25UcmFuc2FjdGlvbiwgc2lnbkFsbFRyYW5zYWN0aW9uc10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlQW5jaG9yV2FsbGV0LmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQ29ubmVjdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb25uZWN0aW9uKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KENvbm5lY3Rpb25Db250ZXh0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZUNvbm5lY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZShrZXksIGRlZmF1bHRTdGF0ZSkge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFN0YXRlO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IGRlZmF1bHRTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFN0YXRlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc2V0TG9jYWxTdG9yYWdlID0gdXNlQ2FsbGJhY2soKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbdmFsdWUsIHNldFZhbHVlLCBrZXldKTtcbiAgICByZXR1cm4gW3ZhbHVlLCBzZXRMb2NhbFN0b3JhZ2VdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlTG9jYWxTdG9yYWdlLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVdhbGxldCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXYWxsZXRDb250ZXh0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZVdhbGxldC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyLCBwb2xsVW50aWxSZWFkeSwgV2FsbGV0Q29ubmVjdGlvbkVycm9yLCBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciwgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yLCBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciwgV2FsbGV0Tm90Rm91bmRFcnJvciwgV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3IsIFdhbGxldFB1YmxpY0tleUVycm9yLCBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciwgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IHsgUHVibGljS2V5IH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcbmV4cG9ydCBjbGFzcyBTb2xmbGFyZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlU2lnbmVyV2FsbGV0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGlzY29ubmVjdGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgICAgICAgIHdhbGxldC5vZmYoJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldERpc2Nvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IG51bGw7XG4gICAgICAgIGlmICghdGhpcy5yZWFkeSlcbiAgICAgICAgICAgIHBvbGxVbnRpbFJlYWR5KHRoaXMsIGNvbmZpZy5wb2xsSW50ZXJ2YWwgfHwgMTAwMCwgY29uZmlnLnBvbGxDb3VudCB8fCAzKTtcbiAgICB9XG4gICAgZ2V0IHB1YmxpY0tleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1YmxpY0tleTtcbiAgICB9XG4gICAgZ2V0IHJlYWR5KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhISgoX2EgPSB3aW5kb3cuc29sZmxhcmUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc1NvbGZsYXJlKTtcbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGVkKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAhISgoX2EgPSB0aGlzLl93YWxsZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc0Nvbm5lY3RlZCk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLmNvbm5lY3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuc29sZmxhcmU7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RGb3VuZEVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQuaXNTb2xmbGFyZSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdEluc3RhbGxlZEVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHdhbGxldC5jb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Q29ubmVjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSEFDSzogU29sZmxhcmUgZG9lc24ndCByZWplY3QgaXRzIHByb21pc2UgaWYgdGhlIHBvcHVwIGlzIGNsb3NlZFxuICAgICAgICAgICAgICAgIGlmICghd2FsbGV0LnB1YmxpY0tleSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcigpO1xuICAgICAgICAgICAgICAgIGxldCBwdWJsaWNLZXk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcHVibGljS2V5ID0gbmV3IFB1YmxpY0tleSh3YWxsZXQucHVibGljS2V5LnRvQnl0ZXMoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0UHVibGljS2V5RXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FsbGV0Lm9uKCdkaXNjb25uZWN0JywgdGhpcy5fZGlzY29ubmVjdGVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWxsZXQgPSB3YWxsZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHVibGljS2V5ID0gcHVibGljS2V5O1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgICAgICAgICAgd2FsbGV0Lm9mZignZGlzY29ubmVjdCcsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FsbGV0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHdhbGxldC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoeWllbGQgd2FsbGV0LnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbikpIHx8IHRyYW5zYWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25BbGxUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgICAgICBpZiAoIXdhbGxldClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh5aWVsZCB3YWxsZXQuc2lnbkFsbFRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpKSB8fCB0cmFuc2FjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFdhbGxldCBmcm9tICdAcHJvamVjdC1zZXJ1bS9zb2wtd2FsbGV0LWFkYXB0ZXInO1xuaW1wb3J0IHsgQmFzZU1lc3NhZ2VTaWduZXJXYWxsZXRBZGFwdGVyLCBwb2xsVW50aWxSZWFkeSwgV2FsbGV0QWRhcHRlck5ldHdvcmssIFdhbGxldENvbm5lY3Rpb25FcnJvciwgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IsIFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvciwgV2FsbGV0RXJyb3IsIFdhbGxldE5vdENvbm5lY3RlZEVycm9yLCBXYWxsZXROb3RGb3VuZEVycm9yLCBXYWxsZXRTaWduTWVzc2FnZUVycm9yLCBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciwgV2FsbGV0VGltZW91dEVycm9yLCBXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3IsIFdhbGxldFdpbmRvd0Nsb3NlZEVycm9yLCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5leHBvcnQgY2xhc3MgU29sbGV0V2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGlzY29ubmVjdGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgICAgICAgIHdhbGxldC5vZmYoJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcHJvdmlkZXIgPSBjb25maWcucHJvdmlkZXIgfHwgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogd2luZG93LnNvbGxldCk7XG4gICAgICAgIHRoaXMuX25ldHdvcmsgPSBjb25maWcubmV0d29yayB8fCBXYWxsZXRBZGFwdGVyTmV0d29yay5NYWlubmV0O1xuICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgIGlmICghdGhpcy5yZWFkeSlcbiAgICAgICAgICAgIHBvbGxVbnRpbFJlYWR5KHRoaXMsIGNvbmZpZy5wb2xsSW50ZXJ2YWwgfHwgMTAwMCwgY29uZmlnLnBvbGxDb3VudCB8fCAzKTtcbiAgICB9XG4gICAgZ2V0IHB1YmxpY0tleSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKChfYSA9IHRoaXMuX3dhbGxldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnB1YmxpY0tleSkgfHwgbnVsbDtcbiAgICB9XG4gICAgZ2V0IHJlYWR5KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHRoaXMuX3Byb3ZpZGVyID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAoKF9hID0gd2luZG93LnNvbGxldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBvc3RNZXNzYWdlKSA9PT0gJ2Z1bmN0aW9uJykpO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpbmc7XG4gICAgfVxuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuICEhKChfYSA9IHRoaXMuX3dhbGxldCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbm5lY3RlZCk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLmNvbm5lY3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IHRoaXMuX3Byb3ZpZGVyIHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuc29sbGV0KTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb3ZpZGVyKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Rm91bmRFcnJvcigpO1xuICAgICAgICAgICAgICAgIGxldCB3YWxsZXQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0ID0gbmV3IFdhbGxldChwcm92aWRlciwgdGhpcy5fbmV0d29yayk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhBQ0s6IHNvbC13YWxsZXQtYWRhcHRlciBkb2Vzbid0IHJlamVjdCBvciBlbWl0IGFuIGV2ZW50IGlmIHRoZSBwb3B1cCBvciBleHRlbnNpb24gaXMgY2xvc2VkIG9yIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlRGlzY29ubmVjdCA9IHdhbGxldC5oYW5kbGVEaXNjb25uZWN0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQub2ZmKCdjb25uZWN0JywgY29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5oYW5kbGVEaXNjb25uZWN0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Lm9mZignY29ubmVjdCcsIGNvbm5lY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IFdhbGxldFdpbmRvd0Nsb3NlZEVycm9yKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlRGlzY29ubmVjdC5hcHBseSh3YWxsZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Lm9uKCdjb25uZWN0JywgY29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LmNvbm5lY3QoKS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5vZmYoJ2Nvbm5lY3QnLCBjb25uZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm92aWRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3B1cCA9IHdhbGxldC5fcG9wdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXAuY2xvc2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IFdhbGxldFdpbmRvd0Nsb3NlZEVycm9yKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gNTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgV2FsbGV0V2luZG93QmxvY2tlZEVycm9yKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhBQ0s6IHNvbC13YWxsZXQtYWRhcHRlciBkb2Vzbid0IHJlamVjdCBvciBlbWl0IGFuIGV2ZW50IGlmIHRoZSBleHRlbnNpb24gaXMgY2xvc2VkIG9yIGlnbm9yZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBXYWxsZXRUaW1lb3V0RXJyb3IoKSksIDEwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5oYW5kbGVEaXNjb25uZWN0ID0gaGFuZGxlRGlzY29ubmVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcnZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgV2FsbGV0RXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3YWxsZXQub24oJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IHdhbGxldDtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgICAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgICAgICAgIHdhbGxldC5vZmYoJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhbGxldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gSEFDSzogc29sLXdhbGxldC1hZGFwdGVyIGRvZXNuJ3QgcmVsaWFibHkgZnVsZmlsbCBpdHMgcHJvbWlzZSBvciBlbWl0IGFuIGV2ZW50IG9uIGRpc2Nvbm5lY3RcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gd2FsbGV0LmhhbmRsZURpc2Nvbm5lY3Q7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCAyNTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LmhhbmRsZURpc2Nvbm5lY3QgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSEFDSzogc29sLXdhbGxldC1hZGFwdGVyIHJlamVjdHMgd2l0aCBhbiB1bmNhdWdodCBwcm9taXNlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Ll9yZXNwb25zZVByb21pc2VzID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVEaXNjb25uZWN0LmFwcGx5KHdhbGxldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LmRpc2Nvbm5lY3QoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhBQ0s6IHNvbC13YWxsZXQtYWRhcHRlciByZWplY3RzIHdpdGggYW4gZXJyb3Igb24gZGlzY29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UpID09PSAnV2FsbGV0IGRpc2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHdhbGxldC5oYW5kbGVEaXNjb25uZWN0ID0gaGFuZGxlRGlzY29ubmVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoeWllbGQgd2FsbGV0LnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbikpIHx8IHRyYW5zYWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25BbGxUcmFuc2FjdGlvbnModHJhbnNhY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgICAgICAgICAgICBpZiAoIXdhbGxldClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh5aWVsZCB3YWxsZXQuc2lnbkFsbFRyYW5zYWN0aW9ucyh0cmFuc2FjdGlvbnMpKSB8fCB0cmFuc2FjdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnblRyYW5zYWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWxsZXQgPSB0aGlzLl93YWxsZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2lnbmF0dXJlIH0gPSB5aWVsZCB3YWxsZXQuc2lnbihtZXNzYWdlLCAndXRmOCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKHNpZ25hdHVyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0U2lnbk1lc3NhZ2VFcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkYXB0ZXIuanMubWFwIiwiLy8gaW1wb3J0IHsgQml0S2VlcFdhbGxldEFkYXB0ZXIsIEJpdEtlZXBXYWxsZXRBZGFwdGVyQ29uZmlnIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iaXRrZWVwJztcbi8vIGltcG9ydCB7IFdhbGxldCwgV2FsbGV0TmFtZSB9IGZyb20gJy4vdHlwZXMnO1xuLy9cbi8vIEBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYml0a2VlcCBpc24ndCBwdWJsaXNoZWQgdG8gTlBNIHlldFxuLy9cbi8vIGV4cG9ydCBjb25zdCBnZXRCaXRLZWVwV2FsbGV0ID0gKGNvbmZpZzogQml0S2VlcFdhbGxldEFkYXB0ZXJDb25maWcgPSB7fSk6IFdhbGxldCA9PiAoe1xuLy8gICAgIG5hbWU6IFdhbGxldE5hbWUuQml0S2VlcCxcbi8vICAgICB1cmw6ICdodHRwczovL3d3dy5iaXRrZWVwLm9yZycsXG4vLyAgICAgaWNvbjogJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxQSE4yWnlCbWFXeHNQU0p1YjI1bElpQm9aV2xuYUhROUlqRXdNQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXdNQ0F4TURBaUlIZHBaSFJvUFNJeE1EQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQR2NnWm1sc2JEMGlJelE1TldKbVppSStQSEJoZEdnZ1pEMGliVFl5TGpJNE5UY2dPRGN1T1RZME5DMHpOaTQ0TVRJNUxUSXhMakkyTXpoakxURXVNamt6TWkwdU56UTNOaTB5TGpBNE9Ea3RNaTR4TWpjdE1pNHdPRGc1TFRNdU5qSXdPWFl0TkRJdU5UYzVOR013TFM0Mk5EUXlMUzQyT1RjdE1TNHdORFk1TFRFdU1qVTFMUzQzTWpReWJDMDNMalV6TWpVZ05DNHpOVFZqTFRJdU9EUTFJREV1TmpRMU5DMDBMalU1TmpRZ05DNDJPREV6TFRRdU5UazJOQ0EzTGprMk5qRjJNelV1T0RBM09XTXdJRE11TWpnMklERXVOelV4TkNBMkxqTXlNVGtnTkM0MU9UWTBJRGN1T1RZMk1Xd3pNQzQ1TlRBMElERTNMamc1TWpsak1pNDRORGc0SURFdU5qUTNPU0EyTGpNMk1UTWdNUzQyTkRjNUlEa3VNakV4TXlBd2JEY3VOVEkzTmkwMExqTTFNalZqTGpVMU56a3RMak15TURJdU5UVTNPUzB4TGpFeU5EVWdNQzB4TGpRME56SjZJaTgrUEhCaGRHZ2daRDBpYlRNeUxqRTFPVFlnTmpJdU9ERTROU0F4TlM0NE9URTFJRGt1TVRnM09XTXhMakk1TlRjdU56UTRPQ0F5TGpnNU1Ua3VOelE0T0NBMExqRTROak1nTUd3eE5TNDRPVFV5TFRrdU1UZzNPV014TGpJNU16SXRMamMwTnpZZ01pNHdPRGc0TFRJdU1USTNJREl1TURnNE9DMHpMall5TURsMkxURTRMak00Tmpoak1DMHhMalE1TXprdExqYzVOamd0TWk0NE56TXpMVEl1TURnNE9DMHpMall5TURsc0xURTFMamc1TkMwNUxqRTRPVEZqTFRFdU1qazFOaTB1TnpRNE9DMHlMamc1TVRndExqYzBPRGd0TkM0eE9EWXlJREJzTFRNdU9UUXpOeUF5TGpJM09UZGpMUzR5TnprMUxqRTJNVFF0TGpZeU9ERXRMakEwTURZdExqWXlPREV0TGpNMk1qRnNMakF5TlRrdE1qRXVNREUzTkRkakxqQXdNVEl0TGpZME5ERTBMUzQyT1RjeExURXVNRFE0TVRFdE1TNHlOVFV0TGpjeU5UUXliQzB4TUM0d05qTTJJRFV1T0RFNE1UbGpMVEV1TWpreE9TNDNORFl6TFRJdU1EZzNOU0F5TGpFeU5UY3RNaTR3T0RnNElETXVOakU0Tkd3dExqQXlOekVnTkRFdU5UZ3pZeTB1TURBeU5DQXhMalE1TkM0M09UUTBJREl1T0RjMU9DQXlMakE0TnpZZ015NDJNak0wZW0wNUxqSXdNall0TVRZdU1UZzNNV013TFRFdU1EVTFOUzQxTmpJNUxUSXVNRE13T1NBeExqUTNOamN0TWk0MU5Ua3piRFV1T0RJNExUTXVNelk0TkdNdU9URTFNUzB1TlRJNU5pQXlMakEwTXpNdExqVXlPVFlnTWk0NU5UZzBJREJzTlM0NE1qZ2dNeTR6TmpnMFl5NDVNVE00TGpVeU9EUWdNUzQwTnpZM0lERXVOVEF6T0NBeExqUTNOamNnTWk0MU5Ua3pkall1TnpRME0yTXdJREV1TURVMU5TMHVOVFl5T1NBeUxqQXpNUzB4TGpRM05qY2dNaTQxTlRremJDMDFMamd5T0NBekxqTTJPRFZqTFM0NU1UVXhMalV5T1RZdE1pNHdORE16TGpVeU9UWXRNaTQ1TlRnMElEQnNMVFV1T0RJNExUTXVNelk0TldNdExqa3hNemd0TGpVeU9ETXRNUzQwTnpZM0xURXVOVEF6T0MweExqUTNOamN0TWk0MU5Ua3plaUl2UGp4d1lYUm9JR1E5SW0wNE5TNDNNRFEzSURJMExqRXlMVE13TGprMU1EVXRNVGN1T0RrME1EbGpMVEV1TWprMk9DMHVOelV3TURVdE1pNDNNekEwTFRFdU1UVTNOekV0TkM0eE56WTBMVEV1TWpJMU5EVXRMakl6TnpjdExqQXhNVEE1TFM0ME16WXVNVGd4TURRdExqUXpOaTQwTVRnM05YWXhNeTR4TWpRd09XTXdJQzR5T1RrekxqRTFPRGt1TlRjMU1TNDBNVGMyTGpjeU5ESnNNalF1TWpZNE9TQXhOQzR3TWpNeFl6RXVNamt6TWk0M05EYzJJREl1TURnNE9DQXlMakV5TnlBeUxqQTRPRGdnTXk0Mk1qRjJNall1TVRVMU9HTXdJREV1TkRrek9TMHVOemsyT0NBeUxqZzNNek10TWk0d09EZzRJRE11TmpJd09Xd3RNVFl1TnpNeE5TQTVMalkzTXpGakxTNDFOVFkzTGpNeU1qY3RMalUxTmpjZ01TNHhNalk1SURBZ01TNDBORGcwYkRFeExqSTRPU0EyTGpVeE56ZGpMalV4T0RVdU1qazVNeUF4TGpFMU5qVXVNams1TXlBeExqWTNNemdnTUd3eE5DNDJORFV4TFRndU5EWTJNV015TGpnME16Z3RNUzQyTkRReUlEUXVOVGsyTkMwMExqWTRNRElnTkM0MU9UWTBMVGN1T1RZMk1YWXRNelV1T0RBNU1tTXdMVE11TWpnMU9TMHhMamMxTVRRdE5pNHpNakU1TFRRdU5UazJOQzAzTGprMk5qRjZJaTgrUEM5blBqd3ZjM1puUGc9PScsXG4vLyAgICAgYWRhcHRlcjogKCkgPT4gbmV3IEJpdEtlZXBXYWxsZXRBZGFwdGVyKGNvbmZpZyksXG4vLyB9KTtcbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpdGtlZXAuanMubWFwIiwiaW1wb3J0IHsgQml0cGllV2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYml0cGllJztcbmltcG9ydCB7IFdhbGxldE5hbWUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCBjb25zdCBnZXRCaXRwaWVXYWxsZXQgPSAoY29uZmlnID0ge30pID0+ICh7XG4gICAgbmFtZTogV2FsbGV0TmFtZS5CaXRwaWUsXG4gICAgdXJsOiAnaHR0cHM6Ly9iaXRwaWVjbi5jb20nLFxuICAgIGljb246IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJvWldsbmFIUTlJalkwSWlCMmFXVjNRbTk0UFNJd0lEQWdOalFnTmpRaUlIZHBaSFJvUFNJMk5DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSmhJajQ4YzNSdmNDQnZabVp6WlhROUlqQWlJSE4wYjNBdFkyOXNiM0k5SWlNeFpUTmtZVEFpTHo0OGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTXpOelV3WkdVaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlZaUlnZURFOUlqVXlMalUwTlRjMUpTSWdlREk5SWpVeUxqVTBOVGMxSlNJZ2VHeHBibXM2YUhKbFpqMGlJMkVpSUhreFBTSXhNREFsSWlCNU1qMGlNQ1VpTHo0OGJHbHVaV0Z5UjNKaFpHbGxiblFnYVdROUltTWlJSGd4UFNJMU1DVWlJSGd5UFNJMU1DVWlJSGt4UFNJd0pTSWdlVEk5SWpFd01DVWlQanh6ZEc5d0lHOW1abk5sZEQwaU1DSWdjM1J2Y0MxamIyeHZjajBpSXpGa00ySmhNeUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXdJaTgrUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJak1UY3pOemt6SWlCemRHOXdMVzl3WVdOcGRIazlJaTQyTlRJNU16Z2lMejQ4TDJ4cGJtVmhja2R5WVdScFpXNTBQanhzYVc1bFlYSkhjbUZrYVdWdWRDQnBaRDBpWkNJZ2VERTlJalV3SlNJZ2VESTlJalV3SlNJZ2VHeHBibXM2YUhKbFpqMGlJMkVpSUhreFBTSXhNREFsSWlCNU1qMGlNQ1VpTHo0OFp5Qm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGp4d1lYUm9JR1E5SW0weE9DQXdhREk0WXprdU9UUXhNVEkxTlNBd0lERTRJRGd1TURVNE9EYzBOU0F4T0NBeE9IWXlPR013SURrdU9UUXhNVEkxTlMwNExqQTFPRGczTkRVZ01UZ3RNVGdnTVRob0xUSTRZeTA1TGprME1URXlOVFVnTUMweE9DMDRMakExT0RnM05EVXRNVGd0TVRoMkxUSTRZekF0T1M0NU5ERXhNalUxSURndU1EVTRPRGMwTlMweE9DQXhPQzB4T0hvaUlHWnBiR3c5SW5WeWJDZ2pZaWtpTHo0OFkybHlZMnhsSUdONFBTSXpNaTR5T0RVM01UUWlJR041UFNJek1pNHlPRFUzTVRRaUlHWnBiR3c5SWlObVptWWlJSEk5SWpJMExqSTROVGN4TkNJdlBqeHdZWFJvSUdROUltMHpNaUF3WXpFM0xqWTNNekV4TWlBd0lETXlJREUwTGpNeU5qZzRPQ0F6TWlBek1uTXRNVFF1TXpJMk9EZzRJRE15TFRNeUlETXlMVE15TFRFMExqTXlOamc0T0Mwek1pMHpNaUF4TkM0ek1qWTRPRGd0TXpJZ016SXRNeko2YlMwdU1UUXpORGszT0NBM0xqWXdOVE00TVRFM1l5MHhNeTQwTnpJM056VTVJREF0TWpRdU16azBOakU0TnprZ01UQXVPVEl4T0RReU9ETXRNalF1TXprME5qRTROemtnTWpRdU16azBOakU0T0ROek1UQXVPVEl4T0RReU9Ea2dNalF1TXprME5qRTRPQ0F5TkM0ek9UUTJNVGczT1NBeU5DNHpPVFEyTVRnNFl6RXpMalEzTWpjM05pQXdJREkwTGpNNU5EWXhPRGt0TVRBdU9USXhPRFF5T0NBeU5DNHpPVFEyTVRnNUxUSTBMak01TkRZeE9EaHpMVEV3TGpreU1UZzBNamt0TWpRdU16azBOakU0T0RNdE1qUXVNemswTmpFNE9TMHlOQzR6T1RRMk1UZzRNM29pSUdacGJHdzlJblZ5YkNnall5a2lMejQ4Y0dGMGFDQmtQU0p0TWprdU1Ea3dPVEE1TVNBME5DNHpOak0yTXpZMFl6QWdNaTR3TURnek1EZ3hMVEV1TmpJNE1EVTFOU0F6TGpZek5qTTJNell0TXk0Mk16WXpOak0ySURNdU5qTTJNell6TmkweUxqQXdPRE13T0RJZ01DMHpMall6TmpNMk16Y3RNUzQyTWpnd05UVTFMVE11TmpNMk16WXpOeTB6TGpZek5qTTJNelpzTFM0d01EQXhPREU0TFRJdU1UZ3lOak0yTkMweUxqRTRNVFl6TmpRdU1EQXdPREU0TW1NdE1pNHdNRGd6TURneElEQXRNeTQyTXpZek5qTTJMVEV1TmpJNE1EVTFOUzB6TGpZek5qTTJNell0TXk0Mk16WXpOak0zSURBdE1pNHdNRGd6TURneElERXVOakk0TURVMU5TMHpMall6TmpNMk16WWdNeTQyTXpZek5qTTJMVE11TmpNMk16WXpObXd5TGpFNE1UWXpOalF0TGpBd01EQTVNRGwyTFRVdU9ERTViQzB5TGpFNE1UWXpOalF1TURBd09UQTVNV010TWk0d01EZ3pNRGd4SURBdE15NDJNell6TmpNMkxURXVOakk0TURVMU5TMHpMall6TmpNMk16WXRNeTQyTXpZek5qTTJJREF0TWk0d01EZ3pNRGd5SURFdU5qSTRNRFUxTlMwekxqWXpOak0yTXpjZ015NDJNell6TmpNMkxUTXVOak0yTXpZek4yd3lMakU0TVRZek5qUXRMakF3TURFNE1UZ3VNREF3TVRneE9DMHlMakU0TVRZek5qUmpNQzB5TGpBd09ETXdPREVnTVM0Mk1qZ3dOVFUxTFRNdU5qTTJNell6TmlBekxqWXpOak0yTXpjdE15NDJNell6TmpNMklESXVNREE0TXpBNE1TQXdJRE11TmpNMk16WXpOaUF4TGpZeU9EQTFOVFVnTXk0Mk16WXpOak0ySURNdU5qTTJNell6Tm13dExqQXdNRGt3T1RFZ01pNHhPREUyTXpZMGFEVXVPREU1YkM0d01EQXdPVEE1TFRJdU1UZ3hOak0yTkdNd0xUSXVNREE0TXpBNE1TQXhMall5T0RBMU5UVXRNeTQyTXpZek5qTTJJRE11TmpNMk16WXpOaTB6TGpZek5qTTJNellnTWk0d01EZ3pNRGd5SURBZ015NDJNell6TmpNM0lERXVOakk0TURVMU5TQXpMall6TmpNMk16Y2dNeTQyTXpZek5qTTJiQzB1TURBd09ERTRNaUF5TGpFNE1UWXpOalFnTWk0eE9ESTJNelkwTGpBd01ERTRNVGhqTWk0d01EZ3pNRGd4SURBZ015NDJNell6TmpNMklERXVOakk0TURVMU5TQXpMall6TmpNMk16WWdNeTQyTXpZek5qTTNJREFnTWk0d01EZ3pNRGd4TFRFdU5qSTRNRFUxTlNBekxqWXpOak0yTXpZdE15NDJNell6TmpNMklETXVOak0yTXpZek5td3RNaTR4T0RJMk16WTBMUzR3TURBNU1Ea3hkalV1T0RFNWJESXVNVGd5TmpNMk5DNHdNREF3T1RBNVl6SXVNREE0TXpBNE1TQXdJRE11TmpNMk16WXpOaUF4TGpZeU9EQTFOVFVnTXk0Mk16WXpOak0ySURNdU5qTTJNell6TmlBd0lESXVNREE0TXpBNE1pMHhMall5T0RBMU5UVWdNeTQyTXpZek5qTTNMVE11TmpNMk16WXpOaUF6TGpZek5qTTJNemRzTFRJdU1UZ3lOak0yTkMwdU1EQXdPREU0TWk0d01EQTRNVGd5SURJdU1UZ3lOak0yTkdNd0lESXVNREE0TXpBNE1TMHhMall5T0RBMU5UVWdNeTQyTXpZek5qTTJMVE11TmpNMk16WXpOeUF6TGpZek5qTTJNell0TWk0d01EZ3pNRGd4SURBdE15NDJNell6TmpNMkxURXVOakk0TURVMU5TMHpMall6TmpNMk16WXRNeTQyTXpZek5qTTJiQzB1TURBd01Ea3dPUzB5TGpFNE1qWXpOalJvTFRVdU9ERTVlbTB0TGpBd01Ea3dPVEV0T1M0ME5UUTJNelkwYURVdU9ERTVkaTAxTGpneE9XZ3ROUzQ0TVRsNklpQm1hV3hzUFNKMWNtd29JMlFwSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNndU9EWTJNREkxTkNBdExqVWdMalVnTGpnMk5qQXlOVFFnTFRFeExqY3hNamd4TXlBeU1DNHlPRGN4T0RjcElpOCtQQzluUGp3dmMzWm5QZz09YCxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgQml0cGllV2FsbGV0QWRhcHRlcihjb25maWcpLFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iaXRwaWUuanMubWFwIiwiaW1wb3J0IHsgQmxvY3RvV2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmxvY3RvJztcbmltcG9ydCB7IFdhbGxldE5hbWUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCBjb25zdCBnZXRCbG9jdG9XYWxsZXQgPSAoY29uZmlnID0ge30pID0+ICh7XG4gICAgbmFtZTogV2FsbGV0TmFtZS5CbG9jdG8sXG4gICAgdXJsOiAnaHR0cHM6Ly93YWxsZXQuYmxvY3RvLmFwcCcsXG4gICAgaWNvbjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNKdWIyNWxJaUJvWldsbmFIUTlJakkwSWlCMmFXVjNRbTk0UFNJd0lEQWdNalFnTWpRaUlIZHBaSFJvUFNJeU5DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhaeUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK1BIQmhkR2dnWkQwaWJURTVMalE0TXpnZ01UVXVNalE1WXk0eU56WTVJREFnTGpVd05EZ3VNakE1T1M0MU16STFMalEzT0Roc0xqQXdNakl1TURReU9TMHVNREEwTXk0eE1UUXlZeTB1TXpNMUlETXVPVGd6TXkwekxqYzVNRFFnTnk0eE1UVXhMVGd1TURBek55QTNMakV4TlRFdE5DNHhOekEySURBdE55NDFPVGcyTXkwekxqQTJPRGN0Tnk0NU9USTJPUzAyTGprNU5EWnNMUzR3TVRZek9DMHVNVGd4TVMwdU1EQXhNRFl0TGpBMU16SXVNREF4TnpndExqQXpPVGhqTGpBeU5UazRMUzR5TnpBMkxqSTFORGczTFM0ME9ESXpMalV6TWpnNUxTNDBPREl6ZWlJZ1ptbHNiRDBpSTJGbVpEaG1OeUl2UGp4d1lYUm9JR1E5SW0wMExqTXdNREE1SURGak15NDNPRGMxTlNBd0lEWXVPREkxT0RFZ01pNDVNRGt4TVNBMkxqZ3lOVGd4SURZdU5UQXlOemQyTmk0ek5UTTBNMk10TGpBd01EUXVNamt4TnkwdU1qTTVNaTQxTWpnMExTNDFNelF1TlRJNE9Hd3ROaTR3TlRjMU9DNHdNRE15WXkwdU1qazFNVEV1TURBd055MHVOVE0wTXpJdExqSXpOakV0TGpVek5ETXlMUzQxTWpjNGJDNHdNREF6TmkweE1pNDFOak0zTldNd0xTNHhOVEUwT1M0eE1UUXlOaTB1TWpjMk1qSXVNall4T1RrdExqSTVOREU0ZWlJZ1ptbHNiRDBpSXpFNE1tRTNNU0l2UGp4d1lYUm9JR1E5SW0weE9TNDJPVEl4SURFeUxqSXpPRE11TURNNE9DNHhNamd6TFM0d01qZzRMUzR3T0RRMll5NHhOakUyTGpRMU16UXVNalkyTmk0M056WTVMak14TlRNZ01TNHpOREV6TGpBek16VXVNemczT1MwdU1qVTNMamN5T0RrdExqWTBPRFV1TnpZeWJDMHVNRE13TXk0d01ESXlMVE11TURnd09TNHdNREEzWXkweUxqRXdOak1nTUMwekxqZ3lNRFF0TVM0ME56UXhMVE11T0RjMU1pMHpMalUwTWpOc0xTNHdNREUwTFM0eE1ESXhkaTB6TGpRMk5UaGpNQzB1TWpBeE5UTXVNVFk1TkMwdU16WTVOVGt1TXpjME1TMHVNell3TURjZ015NHpNREF6TGpFMU5EWTJJRFV1T1RrM09DQXlMak0wTVRVeElEWXVPVE0yT1NBMUxqTXlNRE0zZWlJZ1ptbHNiRDBpSXpNME9EVmpOQ0l2UGp3dlp6NDhMM04yWno0PScsXG4gICAgYWRhcHRlcjogKCkgPT4gbmV3IEJsb2N0b1dhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY3RvLmpzLm1hcCIsImltcG9ydCB7IENsb3ZlcldhbGxldEFkYXB0ZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWNsb3Zlcic7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0Q2xvdmVyV2FsbGV0ID0gKGNvbmZpZyA9IHt9KSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuQ2xvdmVyLFxuICAgIHVybDogJ2h0dHBzOi8vY2xvdmVyLmZpbmFuY2UnLFxuICAgIGljb246ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOelFpSUdobGFXZG9kRDBpTnpRaUlIWnBaWGRDYjNnOUlqQWdNQ0EzTkNBM05DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUY3pMamc1TkRjZ01UZ3VOVGM0T0VNM015NDRPVFEzSURJNExqYzRNVFVnTmpVdU5qSXpPQ0F6Tnk0d05USTFJRFUxTGpReU1URWdNemN1TURVeU5VTTBOUzR5TlRjeklETTNMakExTWpVZ016Y3VNREV3TmlBeU9DNDRORFEySURNMkxqazBOemNnTVRndU5qazFOa016Tmk0NE9EVXpJREk0TGpneE15QXlPQzQyT0RrNUlETTNMakF3TVRVZ01UZ3VOVFk1T1NBek55NHdOVEkzUXpJNExqY3lPRFFnTXpjdU1UQTBOU0F6Tmk0NU5EYzBJRFExTGpNMU5UVWdNell1T1RRM05DQTFOUzQxTWpZeVF6TTJMamswTnpRZ05qVXVOekk0T1NBeU9DNDJOelkwSURjekxqazVPVGdnTVRndU5EY3pOeUEzTXk0NU9UazRRemd1TWpjd09UVWdOek11T1RrNU9DQXdJRFkxTGpjeU9Ea2dNQ0ExTlM0MU1qWXlRekFnTkRVdU16VTFNeUE0TGpJeE9UTTVJRE0zTGpFd05ERWdNVGd1TXpjNE1pQXpOeTR3TlRJM1F6Z3VNakU1TnpJZ016Y3VNREF3T1NBd0xqQXdNRGN4T1RVM01pQXlPQzQzTkRrNUlEQXVNREF3TnpFNU5UY3lJREU0TGpVM09UTkRNQzR3TURBM01UazFOeklnT0M0ek56WTFOQ0E0TGpJM01UWTNJREF1TVRBMU5Ua3hJREU0TGpRM05EUWdNQzR4TURVMU9URkRNamd1TmpNNE1pQXdMakV3TlRVNU1TQXpOaTQ0T0RRNUlEZ3VNekV6TkRnZ016WXVPVFEzTnlBeE9DNDBOakkxUXpNM0xqQXhNRE1nT0M0ek1UTXlOaUEwTlM0eU5UY3hJREF1TVRBMU1UQXpJRFUxTGpReU1URWdNQzR4TURVeE1ETkROalV1TmpJek9DQXdMakV3TlRFd015QTNNeTQ0T1RRM0lEZ3VNemMyTURVZ056TXVPRGswTnlBeE9DNDFOemc0V2swMU5TNDBNakV4SURNM0xqQTFNalZETkRVdU1qRTRNeUF6Tnk0d05USTFJRE0yTGprME56UWdORFV1TXpJek5DQXpOaTQ1TkRjMElEVTFMalV5TmpKRE16WXVPVFEzTkNBMk5TNDNNamc1SURRMUxqSXhPRE1nTnpNdU9UazVPQ0ExTlM0ME1qRXhJRGN6TGprNU9UaEROalV1TmpJek9DQTNNeTQ1T1RrNElEY3pMamc1TkRjZ05qVXVOekk0T1NBM015NDRPVFEzSURVMUxqVXlOakpETnpNdU9EazBOeUEwTlM0ek1qTTBJRFkxTGpZeU16Z2dNemN1TURVeU5TQTFOUzQwTWpFeElETTNMakExTWpWYUlpQm1hV3hzUFNJak1qZEJOVGMzSWk4K1BDOXpkbWMrQ2c9PScsXG4gICAgYWRhcHRlcjogKCkgPT4gbmV3IENsb3ZlcldhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xvdmVyLmpzLm1hcCIsImltcG9ydCB7IENvaW45OFdhbGxldEFkYXB0ZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWNvaW45OCc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0Q29pbjk4V2FsbGV0ID0gKGNvbmZpZyA9IHt9KSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuQ29pbjk4LFxuICAgIHVybDogJ2h0dHBzOi8vY29pbjk4LmNvbScsXG4gICAgaWNvbjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNKdWIyNWxJaUJvWldsbmFIUTlJalF5SWlCM2FXUjBhRDBpTkRJaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaWJUZ3dMakUxTmlBeU55NHpNRFZqTFM0NE56RXRMak0wTWkweExqWXlOeTB1T0RVMUxUSXVNekkwTFRFdU5UUXRMalkwTFM0Mk9EVXRNUzR4TmpNdE1TNDBNamN0TVM0MU55MHlMakk0TXkwdU16UTRMUzQ0TlRZdExqVTRMVEV1T0RJMkxTNDFPQzB5TGpjNU5uTXVNVGMwTFRFdU9EZ3pMalU0TFRJdU56azJZeTR6TlMwdU9EVTJMamczTWkweExqVTVPQ0F4TGpVM0xUSXVNamd5TGpZek9TMHVOakk0SURFdU5EVXpMVEV1TVRReElESXVNekkwTFRFdU5UUXVPRGN5TFM0ek5ETWdNUzQ0TmkwdU5UY3lJREl1T0RRNExTNDFOekp6TVM0NU1UZ3VNVGN5SURJdU9EUTRMalUzTVdNdU9EY3lMak0wTWlBeExqWXlOeTQ0TlRZZ01pNHlOallnTVM0MU5DNDJOQzQyTWprZ01TNHhOak1nTVM0ME1qY2dNUzQxTVRJZ01pNHlPRE11TkRBMkxqa3hNeTQxT0NBeExqZ3lOaTQxT0NBeUxqYzVObk10TGpFM05DQXhMamc0TXkwdU5UZ2dNaTQzT1RaakxTNHpOUzQ0TlRZdExqZzNNaUF4TGpVNU9DMHhMalUzSURJdU1qZ3pMUzQyT1RjdU5qSTNMVEV1TkRVeklERXVNVFF4TFRJdU16STBJREV1TlRRdExqZzNNaTR6TkRNdE1TNDROaTQxTnpFdE1pNDRORGd1TlRjeExTNDVNeUF3TFRFdU9EWXRMakUzTVMweUxqY3pNaTB1TlRkNmJTMHhMakEwTmkweE5TNDFNbU10TVM0eE5qSXVOVEV6TFRJdU1qWTJJREV1TVRrNExUTXVNVE00SURJdU1URXhMUzQ1TXk0NU1UTXRNUzQyTWpjZ01TNDVOQzB5TGpFMUlETXVNRGd4TFM0MU1qTWdNUzR4T1RrdExqYzFOaUF5TGpRMU5DMHVOelUySURNdU56WTJJREFnTVM0ek1UTXVNak16SURJdU5UWTRMamMxTlNBekxqYzJOaTQxTWpRZ01TNHhORElnTVM0eU1qRWdNaTR5TWpZZ01pNHhOU0F6TGpBNE1pNDVNeTQ1TVRNZ01TNDVOemNnTVM0MU9UY2dNeTR4TkNBeUxqRXhNU0F4TGpJeUxqVXhNeUF5TGpRNU9DNDNORElnTXk0NE16VXVOelF5Y3pJdU5qRTFMUzR5TWprZ015NDRNell0TGpjME1tTXhMakUyTWkwdU5URTBJREl1TWpZMkxURXVNVGs0SURNdU1UTTRMVEl1TVRFeExqa3pMUzQ1TVRNZ01TNDJNamN0TVM0NU5DQXlMakUxTFRNdU1EZ3lMalV5TkMweExqRTVPQzQzTlRZdE1pNDBOVE11TnpVMkxUTXVOelkySURBdE1TNHpNVEl0TGpJek1pMHlMalUyTnkwdU56VTFMVE11TnpZMkxTNDFNalF0TVM0eE5DMHhMakl5TVMweUxqSXlOUzB5TGpFMUxUTXVNRGd4TFM0NU15MHVPVEV6TFRFdU9UYzNMVEV1TlRrNExUTXVNVFF0TWk0eE1URXRNUzR5TWkwdU5URTBMVEl1TkRrNExTNDNOREl0TXk0NE16VXRMamMwTW5NdE1pNDJNVFV1TWpJNExUTXVPRE0yTGpjME1ucHRMVEl4TGpBNU5pQXdZeTB4TGpFMk15NDFNVE10TWk0eU5qY2dNUzR4T1RndE15NHhNemtnTWk0eE1URXRMams0T0M0NE5UWXRNUzQyT0RVZ01TNDVOQzB5TGpFMUlETXVNRGd4TFM0MU1qTWdNUzR4T1RrdExqYzFOaUF5TGpVeE1TMHVOelUySURNdU56WTJJREFnTVM0ek1UTXVNamtnTWk0MU5qZ3VOelUySURNdU9ESXpMalEyTlNBeExqRTBNaUF4TGpJeUlESXVNVFk1SURJdU1UVWdNeTR3T0RKek1TNDVOellnTVM0MU9UZ2dNeTR4TXprZ01pNHhNVEZqTVM0eU1pNDFNVFFnTWk0MU5UY3VOelF5SURNdU9ETTFMamMwTWlBeExqTXpOeUF3SURJdU5qRTJMUzR5T0RZZ015NDRNell0TGpjME1pQXhMakl5TFM0MU1UUWdNaTR5TmpjdE1TNHhPVGdnTXk0eE16Z3RNaTR3TlRRdU9UTXRMamt4TXlBeExqWXlPQzB4TGprMElESXVNVFV0TXk0eE16a3VNVEUzTFM0eU1qZ3VNak16TFM0MU1UTXVNamt4TFM0M09UaG9MVEl1T1RBMll5MHVNelE0TGpjME1TMHVPREV6SURFdU5ESTJMVEV1TkRVeklESXVNRFUwTFM0Mk16a3VOakk0TFRFdU5EVXlJREV1TVRReExUSXVNekkwSURFdU5UUXRMamczTWk0ek5ETXRNUzQ0Tmk0MU56RXRNaTQ0TkRndU5UY3hjeTB4TGpreE9DMHVNVGN4TFRJdU56a3RMalUzWXkwdU9EY3hMUzR6TkRNdE1TNDJNamN0TGpnMU55MHlMak15TkMweExqVTBNUzB1TmpRdExqWTROUzB4TGpFMk15MHhMalF5TnkweExqVTNMVEl1TWpnekxTNHpORGd0TGpnMU5pMHVOVGd0TVM0NE1qWXRMalU0TFRJdU56azJjeTR4TnpRdE1TNDRPRE11TlRndE1pNDNPVFpqTGpNMUxTNDROVFl1T0RjeUxURXVOVGszSURFdU5UY3RNaTR5T0RJdU5qTTVMUzQyTWpnZ01TNDBOVE10TVM0eE5ERWdNaTR6TWpRdE1TNDFOQzQ0TnpJdExqTTBNeUF4TGpnMkxTNDFOekVnTWk0NE5EZ3RMalUzTVhNeExqa3hPQzR4TnlBeUxqZzBPQzQxTjJNdU9EY3lMak0wTXlBeExqWXlOeTQ0TlRZZ01pNHpNalVnTVM0MU5DNDFPQzQxTnpJZ01TNHdORFlnTVM0eU5UWWdNUzQwTlRNZ01pNHdOVFZvTWk0NU1EWmpMUzR3TlRrdExqSTROUzB1TVRjMUxTNDFNVFF0TGpJNU1TMHVOems1TFM0MU1qTXRNUzR4TkRFdE1TNHlNaTB5TGpJeU5TMHlMakUxTFRNdU1EZ3hMUzQ0TnpJdExqZzFOaTB4TGprM055MHhMalU1T0MwekxqRXpPUzB5TGpFeE1TMHhMakl5TFM0MU1UUXRNaTQwT1RrdExqYzBNaTB6TGpnek5pMHVOelF5TFRFdU16azBMakExTnkweUxqY3pNUzR5T0RVdE15NDRPVE11TnprNWVtMHpOeTQ0T1RJZ01UZ3VOekUxYURJdU5qYzBkaTB4T1M0ME5UZG9MVEl1TmpjMGVtMHpNeTR3TmprdE1USXVOakZqTUMweUxqVTJPQ0F5TGpFMU1TMDBMalk0SURRdU56WTJMVFF1Tmpoek5DNDNNRGNnTWk0eE1URWdOQzQzTURjZ05DNDJPR013SURJdU5URXRNaTR3T1RJZ05DNDJNakV0TkM0M01EY2dOQzQyTWpFdE1pNDJOek1nTUMwMExqYzJOaTB5TGpBMU5DMDBMamMyTmkwMExqWXlNbnB0TFRJdU16Z3pMakExTm1Nd0lETXVPREl6SURNdU1UazNJRFl1TnprZ055NHlOalVnTmk0M09XZ3hMall5TjJ3dE15NHhNemdnTlM0NE56aG9NaTQyTnpSc05DNDVOQzA1TGpJME5HTXVOamszTFRFdU1qVTFMams0T0MweUxqTTVOeTQ1T0RndE15NDBPQ0F3TFRNdU9ESTBMVE11TVRNNUxUWXVPRFE0TFRjdU1UUTVMVFl1T0RRNExUUXVNRFk0TFM0d05UY3ROeTR5TURjZ015NHdNalF0Tnk0eU1EY2dOaTQ1TURSNmJURTRMamswTnlBMkxqYzVZekF0TWk0eU1qVWdNUzQ0TmkwekxqazVOQ0EwTGpFeU5pMHpMams1TkNBeUxqTXlOU0F3SURRdU1UZzFJREV1TnpjZ05DNHhPRFVnTXk0NU9UVnpMVEV1T0RZZ05DNHdOVEV0TkM0eE9EVWdOQzR3TlRFdE5DNHhNall0TVM0NE1qWXROQzR4TWpZdE5DNHdOVEY2YlRFdU16TTNMVGd1T1dNd0xURXVORGcxSURFdU1qSXRNaTQzTkNBeUxqY3pNUzB5TGpjMGN6SXVOemtnTVM0eU5UVWdNaTQzT1NBeUxqYzBZekFnTVM0ME9ETXRNUzR5TnprZ01pNDNNemd0TWk0M09TQXlMamN6T0MweExqUTFNeUF3TFRJdU56TXhMVEV1TWpVMUxUSXVOek14TFRJdU56TTVlbTB0TWk0eU1Ea2dNR013SURFdU1EZ3pMak0wT1NBeUxqRXhMams0T0NBeUxqazJObXd1TlRJekxqYzBNaTB1TmprM0xqVTNZeTB4TGpNNU5TQXhMakUwTWkweUxqSXdPU0F5TGpnMU5DMHlMakl3T1NBMExqWXlNeUF3SURNdU5ESXpJREl1T0RRNElEWXVNaklnTmk0ek16VWdOaTR5TWlBekxqVTBOU0F3SURZdU16a3pMVEl1TnprM0lEWXVNemt6TFRZdU1qSWdNQzB4TGpneU5pMHVPREUwTFRNdU5EZ3hMVEl1TWpBNExUUXVOamhzTFM0Mk9UZ3RMalUzTGpVNE1TMHVOelF5WXk0Mk5DMHVOems1TGprNE9DMHhMamd5Tmk0NU9EZ3RNaTQ1TVNBd0xUSXVOamd5TFRJdU1qQTRMVFF1TnprekxUUXVPVGs0TFRRdU56a3pMVEl1T0RRNExTNHdOVGN0TkM0NU9UZ2dNaTR3TlRRdE5DNDVPVGdnTkM0M09UTjZiUzB5TkM0MU1qWXROQzQzT1RSMk1UVXVNVEl4WXpBZ0xqZzFOaTB1TkRZMUlERXVNemN0TVM0eU56Z2dNUzQwTWpjdExqZ3hOQ0F3TFRFdU1qYzVMUzQyTWpndE1TNDBOVE10TGprM2JDMDJMakV3TXkweE1pNDVOVE5qTFM0ek5EZ3RMamd0TGpnM01TMHhMalF5TnkweExqWXlOeTB4TGprMExTNDJPVGN0TGpRMU55MHhMalV4TVMwdU5qZzFMVEl1TXpnekxTNDJPRFV0TVM0d05EWWdNQzB4TGprM05pNHpOREl0TWk0M016RXVPVEV6TFM0d05UZ2dNQzB1TURVNExqQTFOeTB1TVRFMkxqQTFOeTB1T0RjeUxqYzBNaTB4TGpJM09TQXhMalkxTlMweExqSTNPU0F5TGpjek9YWXhOUzQzTkRsb01pNDRORGgyTFRFMUxqTTFZekF0TGpjNU9TNDFPREV0TVM0ek55QXhMak16TmkweExqTTNMalU0TWlBd0lERXVNVEExTGpNME15QXhMalExTXlBeExqQXlPR3d1TURVNUxqRXhOR014TGpRMU1pQXpMakV6T0NBMExqWTBPU0E1TGprNE5pQTJMalUyTnlBeE15NDJNemd1TmpNNUlERXVNVGs0SURFdU56UXpJREV1TnpZNUlETXVORGczSURFdU56WTVJREV1TURRMklEQWdNaTR3TXpRdExqSTROaUF5TGpjNUxTNDVNVE11T0RjeExTNDJPRFVnTVM0ek16WXRNUzR5TlRZZ01TNHpNell0TWk0Mk1qVjJMVEUxTGpjMWFDMHlMamt3Tm5wdExUZzFMamcwTFRFd0xqQTBNbWd0TWpVdU9EWXhZeTAwTGpFeU55QXdMVGN1TkRRZ015NHlOVEl0Tnk0ME5DQTNMak13TkhZeU5TNHpPVEpqTUNBMExqQTFNaUF6TGpNeE15QTNMak13TkNBM0xqUTBJRGN1TXpBMGFESTFMamcyWXpRdU1EWTVJREFnTnk0ME5DMHpMakkxTWlBM0xqUTBMVGN1TXpBMGRpMHlOUzR6T1RKak1DMDBMakExTWkwekxqTXhNeTAzTGpNd05DMDNMalEwTFRjdU16QTBhQzR3TURGNmJTMDJMakkzTmlBNUxqazRObU16TGpBeU1pQXdJRFV1TkRZeklESXVNemsySURVdU5EWXpJRFV1TXpZMElEQWdMamt4TWkwdU1qTXpJREV1TnpZNExTNDJOQ0F5TGpVMk55MHVOamszTFM0MU1UTXRNUzQwTlRJdExqazNMVEl1TWpZMkxURXVNalUxTGpJek1pMHVOQzR6TkRrdExqZzFOaTR6TkRrdE1TNHpNVElnTUMweExqVTBNUzB4TGpJM09TMHlMamM1TmkweUxqZzBPQzB5TGpjNU5pMHhMalUzSURBdE1pNDRORGdnTVM0eU5UVXRNaTQ0TkRnZ01pNDNPVFlnTUNBdU5EVTJMakV4Tmk0NU1USXVNelE1SURFdU16RXlMUzQ0TVRRdU1qZzFMVEV1TmpJNExqWTROUzB5TGpJMk55QXhMakkxTlMwdU5EWTFMUzQzT1RrdExqWTBMVEV1TmpVMUxTNDJOQzB5TGpVMk9DMHVNVEUxTFRJdU9UWTNJREl1TXpJMkxUVXVNell6SURVdU16UTRMVFV1TXpZemVtMHRNVE11TXpFZ01qQXVNREk0WXkwekxqQXlNU0F3TFRVdU5EWXlMVEl1TXprMkxUVXVORFl5TFRVdU16WXphREl1TmpFMVl6QWdNUzQxTkNBeExqSTNPU0F5TGpjNU5pQXlMamcwT0NBeUxqYzVObk15TGpnME9DMHhMakkxTmlBeUxqZzBPQzB5TGpjNU5tZ3lMall4TldNd0lESXVPVFkzTFRJdU5EUXhJRFV1TXpZekxUVXVORFl6SURVdU16WXplbTB3TFRjdU5UTXlZeTB6TGpRNE5pQXdMVFl1TXpNMExUSXVOemsyTFRZdU16TTBMVFl1TWpJZ01DMHpMalF5TXlBeUxqZzBPQzAyTGpJM05pQTJMak16TlMwMkxqSTNObk0yTGpNNU15QXlMamM1TmlBMkxqTTVNeUEyTGpJM05tTXRMakExT0NBekxqUXlOQzB5TGprd05pQTJMakl5TFRZdU16a3pJRFl1TWpKNmJURXpMak14SURjdU5UTXlZeTB6TGpRNE55QXdMVFl1TXprekxUSXVOemsyTFRZdU16a3pMVFl1TWpJZ01DMHpMalE0SURJdU9EUTRMVFl1TWpjMklEWXVNemt6TFRZdU1qYzJJRE11TkRnM0lEQWdOaTR6TXpVZ01pNDNPVFlnTmk0ek16VWdOaTR5TnpjZ01DQXpMalF5TXkweUxqZzBPQ0EyTGpJeUxUWXVNek0xSURZdU1qSjZiVE11TnpjM0xUWXVNamMyWXpBZ01pNHdOVFF0TVM0Mk9EVWdNeTQyTlRFdE15NDNOemNnTXk0Mk5URnpMVE11TnpjNExURXVOalUwTFRNdU56YzRMVE11TmpVeFl6QXRNaTR3TlRVZ01TNDJPRFl0TXk0M01TQXpMamMzT0MwekxqY3hJREl1TURreUxqQTFPQ0F6TGpjM055QXhMamN4TWlBekxqYzNOeUF6TGpjeGVtMHRNVE11TXpZM0xUY3VORGMyWXpBZ01pNHdOVFV0TVM0Mk9EVWdNeTQzTVMwekxqYzNOeUF6TGpjeExUSXVNRGt6SURBdE15NDNOemd0TVM0Mk5UVXRNeTQzTnpndE15NDNNU0F3TFRJdU1EVTBJREV1TmpnMUxUTXVOekE1SURNdU56YzRMVE11TnpBNUlESXVNVFVnTUNBekxqYzNOeUF4TGpZMU5TQXpMamMzTnlBekxqY3hlaUlnWm1sc2JEMGlJMlE1WWpRek1pSXZQand2YzNablBnPT0nLFxuICAgIGFkYXB0ZXI6ICgpID0+IG5ldyBDb2luOThXYWxsZXRBZGFwdGVyKGNvbmZpZyksXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvaW45OC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2JpdGtlZXAnO1xuZXhwb3J0ICogZnJvbSAnLi9iaXRwaWUnO1xuZXhwb3J0ICogZnJvbSAnLi9ibG9jdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9jbG92ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb2luOTgnO1xuZXhwb3J0ICogZnJvbSAnLi9sZWRnZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tYXRod2FsbGV0JztcbmV4cG9ydCAqIGZyb20gJy4vcGhhbnRvbSc7XG5leHBvcnQgKiBmcm9tICcuL3NhZmVwYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9zbG9wZSc7XG5leHBvcnQgKiBmcm9tICcuL3NvbGZsYXJlJztcbmV4cG9ydCAqIGZyb20gJy4vc29sZmxhcmVXZWInO1xuZXhwb3J0ICogZnJvbSAnLi9zb2xsZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9zb2xsZXRFeHRlbnNpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zb2xvbmcnO1xuZXhwb3J0ICogZnJvbSAnLi90b3J1cyc7XG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0Y29ubmVjdCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBMZWRnZXJXYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1sZWRnZXInO1xuaW1wb3J0IHsgV2FsbGV0TmFtZSB9IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IGNvbnN0IGdldExlZGdlcldhbGxldCA9IChjb25maWcgPSB7fSkgPT4gKHtcbiAgICBuYW1lOiBXYWxsZXROYW1lLkxlZGdlcixcbiAgICB1cmw6ICdodHRwczovL3d3dy5sZWRnZXIuY29tJyxcbiAgICBpY29uOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMmFXVjNRbTk0UFNJd0lEQWdNelVnTXpVaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2dabWxzYkQwaUkyWm1aaUkrUEhCaGRHZ2daRDBpYlRJekxqVTRPQ0F3YUMweE5uWXlNUzQxT0ROb01qRXVObll0TVRaaE5TNDFPRFVnTlM0MU9EVWdNQ0F3SURBZ0xUVXVOaTAxTGpVNE0zb2lJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RVdU56TTVLU0l2UGp4d1lYUm9JR1E5SW0wNExqTTBNaUF3YUMweUxqYzFOMkUxTGpVNE5TQTFMalU0TlNBd0lEQWdNQ0F0TlM0MU9EVWdOUzQxT0RWMk1pNDNOVGRvT0M0ek5ESjZJaTgrUEhCaGRHZ2daRDBpYlRBZ055NDFPV2c0TGpNME1uWTRMak0wTW1ndE9DNHpOREo2SWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3dJRFV1TnpNNUtTSXZQanh3WVhSb0lHUTlJbTB4TlM0eE9DQXlNeTQwTlRGb01pNDNOVGRoTlM0MU9EVWdOUzQxT0RVZ01DQXdJREFnTlM0MU9EVXROUzQyZGkweUxqWTNNV2d0T0M0ek5ESjZJaUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNneE1TNDBOemdnTVRFdU5EYzRLU0l2UGp4d1lYUm9JR1E5SW0wM0xqVTVJREUxTGpFNGFEZ3VNelF5ZGpndU16UXlhQzA0TGpNME1ub2lJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RVdU56TTVJREV4TGpRM09Da2lMejQ4Y0dGMGFDQmtQU0p0TUNBeE5TNHhPSFl5TGpjMU4yRTFMalU0TlNBMUxqVTROU0F3SURBZ01DQTFMalU0TlNBMUxqVTROV2d5TGpjMU4zWXRPQzR6TkRKNklpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d3SURFeExqUTNPQ2tpTHo0OEwyYytQQzl6ZG1jKycsXG4gICAgYWRhcHRlcjogKCkgPT4gbmV3IExlZGdlcldhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGVkZ2VyLmpzLm1hcCIsImltcG9ydCB7IE1hdGhXYWxsZXRXYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1tYXRod2FsbGV0JztcbmltcG9ydCB7IFdhbGxldE5hbWUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCBjb25zdCBnZXRNYXRoV2FsbGV0ID0gKGNvbmZpZyA9IHt9KSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuTWF0aFdhbGxldCxcbiAgICB1cmw6ICdodHRwczovL21hdGh3YWxsZXQub3JnJyxcbiAgICBpY29uOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCb1pXbG5hSFE5SWpFeU9DSWdkbWxsZDBKdmVEMGlNQ0F3SURFeU9DQXhNamdpSUhkcFpIUm9QU0l4TWpnaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2dabWxzYkQwaUkyWm1aaUlnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWo0OGNHRjBhQ0JrUFNKdE1DQXdhREV5T0hZeE1qaG9MVEV5T0hvaUlHOXdZV05wZEhrOUlqQWlMejQ4Y0dGMGFDQmtQU0p0T1RBdU9EUTNNREE0TmlBMU55NDNOakV3TURJell5MHlMakkzTnpBek5qTXRNaTR5Tnpjd016WXpMVEl1TWpjM01ETTJNeTAxTGprMk9EZzBNVFlnTUMwNExqSTBOVGczTnpnZ01pNHlOemN3TXpZeUxUSXVNamMzTURNMk15QTFMamsyT0RnME1UVXRNaTR5Tnpjd016WXpJRGd1TWpRMU9EYzNPQ0F3SURJdU1qYzNNRE0yTmlBeUxqSTNOekF6TmpJZ01pNHlOemN3TXpZMklEVXVPVFk0T0RReE5TQXdJRGd1TWpRMU9EYzNPQzB5TGpJM056QXpOak1nTWk0eU56Y3dNell5TFRVdU9UWTRPRFF4TmlBeUxqSTNOekF6TmpJdE9DNHlORFU0TnpjNElEQjZiUzB4T1M0MU9ETTVOVGs0SURFNUxqVTRNemsxT1RkakxURXVOekEzTnpjM01pMHhMamN3TnpjM056SXRNUzQzTURjM056Y3lMVFF1TkRjMk5qTXhNU0F3TFRZdU1UZzBOREE0TTNNMExqUTNOall6TVRFdE1TNDNNRGMzTnpjeUlEWXVNVGcwTkRBNE15QXdJREV1TnpBM056YzNNaUEwTGpRM05qWXpNVEVnTUNBMkxqRTRORFF3T0RNdE5DNDBOelkyTXpFeElERXVOekEzTnpjM01pMDJMakU0TkRRd09ETWdNSHB0TXpBdU9USXlNRFF5TWkweE1DNHpNRGN6TkRjeVl5MHhMamN3TnpjM09DMHhMamN3TnpjM056SXRNUzQzTURjM056Z3ROQzQwTnpZMk16RXlJREF0Tmk0eE9EUTBNRGcwSURFdU56QTNOemMzTFRFdU56QTNOemMzTWlBMExqUTNOall6TVMweExqY3dOemMzTnpJZ05pNHhPRFEwTURnZ01ITXhMamN3TnpjM055QTBMalEzTmpZek1USWdNQ0EyTGpFNE5EUXdPRFF0TkM0ME56WTJNekVnTVM0M01EYzNOemN5TFRZdU1UZzBOREE0SURCNmJTMHhNQzR6TURjek5EYzNJREV3TGpNd056TTBOekpqTFRFdU56QTNOemMzTWkweExqY3dOemMzTnpJdE1TNDNNRGMzTnpjeUxUUXVORGMyTmpNeE1TQXdMVFl1TVRnME5EQTRNM00wTGpRM05qWXpNVEV0TVM0M01EYzNOemN5SURZdU1UZzBOREE0TXlBd0lERXVOekEzTnpjM01pQTBMalEzTmpZek1URWdNQ0EyTGpFNE5EUXdPRE10TkM0ME56WTJNekV4SURFdU56QTNOemMzTWkwMkxqRTRORFF3T0RNZ01IcHRNakV1TmpRMU5ESTROeTB4TGpBek1EY3pORGRqTFRFdU1UTTROVEU0TFRFdU1UTTROVEU0TVMweExqRXpPRFV4T0MweUxqazRORFF5TURnZ01DMDBMakV5TWprek9Ea2dNUzR4TXpnMU1Ua3RNUzR4TXpnMU1UZ3hJREl1T1RnME5ESXhMVEV1TVRNNE5URTRNU0EwTGpFeU1qa3pPU0F3SURFdU1UTTROVEU1SURFdU1UTTROVEU0TVNBeExqRXpPRFV4T1NBeUxqazRORFF5TURnZ01DQTBMakV5TWprek9Ea3RNUzR4TXpnMU1UZ2dNUzR4TXpnMU1UZ3hMVEl1T1RnME5ESWdNUzR4TXpnMU1UZ3hMVFF1TVRJeU9UTTVJREI2YlMweE1DNHpNRGN6TkRjZ01UQXVNekEzTXpRM01tTXRNUzR4TXpnMU1UZ3RNUzR4TXpnMU1UZ3hMVEV1TVRNNE5URTRMVEl1T1RnME5ESXdOeUF3TFRRdU1USXlPVE00T1NBeExqRXpPRFV4T0MweExqRXpPRFV4T0RFZ01pNDVPRFEwTWpFdE1TNHhNemcxTVRneElEUXVNVEl5T1RNNUlEQWdNUzR4TXpnMU1UZ2dNUzR4TXpnMU1UZ3lJREV1TVRNNE5URTRJREl1T1RnME5ESXdPQ0F3SURRdU1USXlPVE00T1MweExqRXpPRFV4T0NBeExqRXpPRFV4T0RJdE1pNDVPRFEwTWpFZ01TNHhNemcxTVRneUxUUXVNVEl5T1RNNUlEQjZiUzB5TWk0Mk56WXhOak0zTFRFNExqVTFNekl5TldNdE1pNHlOemN3TXpZekxUSXVNamMzTURNMk15MHlMakkzTnpBek5qTXROUzQ1TmpnNE5ERTFJREF0T0M0eU5EVTROemM0Y3pVdU9UWTRPRFF4TlMweUxqSTNOekF6TmpNZ09DNHlORFU0TnpjNElEQWdNaTR5Tnpjd016WXpJRFV1T1RZNE9EUXhOU0F3SURndU1qUTFPRGMzT0MwMUxqazJPRGcwTVRVZ01pNHlOemN3TXpZekxUZ3VNalExT0RjM09DQXdlbTB3TFRJd0xqWXhORFk1TkRWakxUSXVNamMzTURNMk15MHlMakkzTnpBek5qTXRNaTR5Tnpjd016WXpMVFV1T1RZNE9EUXhOU0F3TFRndU1qUTFPRGMzT0hNMUxqazJPRGcwTVRVdE1pNHlOemN3TXpZeklEZ3VNalExT0RjM09DQXdJREl1TWpjM01ETTJNeUExTGprMk9EZzBNVFVnTUNBNExqSTBOVGczTnpndE5TNDVOamc0TkRFMUlESXVNamMzTURNMk15MDRMakkwTlRnM056Z2dNSHB0TFRFd0xqTXdOek0wTnpJZ01UQXVNekEzTXpRM00yTXRNaTR5Tnpjd016WXpMVEl1TWpjM01ETTJNeTB5TGpJM056QXpOak10TlM0NU5qZzROREUySURBdE9DNHlORFU0TnpjNElESXVNamMzTURNMk1pMHlMakkzTnpBek5qTWdOUzQ1TmpnNE5ERTFMVEl1TWpjM01ETTJNeUE0TGpJME5UZzNOemdnTUNBeUxqSTNOekF6TmpJZ01pNHlOemN3TXpZeUlESXVNamMzTURNMk1pQTFMamsyT0RnME1UVWdNQ0E0TGpJME5UZzNOemd0TWk0eU56Y3dNell6SURJdU1qYzNNRE0yTWkwMUxqazJPRGcwTVRZZ01pNHlOemN3TXpZeUxUZ3VNalExT0RjM09DQXdlbTB0TWpBdU56RXdOVEEySURCakxUSXVNamMzTURNMk1pMHlMakkzTnpBek5qTXRNaTR5Tnpjd016WXlMVFV1T1RZNE9EUXhOaUF3TFRndU1qUTFPRGMzT0NBeUxqSTNOekF6TmpNdE1pNHlOemN3TXpZeklEVXVPVFk0T0RReE5pMHlMakkzTnpBek5qTWdPQzR5TkRVNE56YzRJREFnTWk0eU56Y3dNell6SURJdU1qYzNNRE0yTWlBeUxqSTNOekF6TmpNZ05TNDVOamc0TkRFMUlEQWdPQzR5TkRVNE56YzRMVEl1TWpjM01ETTJNaUF5TGpJM056QXpOakl0TlM0NU5qZzROREUxSURJdU1qYzNNRE0yTWkwNExqSTBOVGczTnpnZ01IcHRMVEU1TGpVNE16azFPVGNnTVRrdU5UZ3pPVFU1TjJNdE1TNDNNRGMzTnpjeUxURXVOekEzTnpjM01pMHhMamN3TnpjM056SXROQzQwTnpZMk16RXhJREF0Tmk0eE9EUTBNRGd6Y3pRdU5EYzJOak14TVMweExqY3dOemMzTnpJZ05pNHhPRFEwTURneklEQWdNUzQzTURjM056Y3lJRFF1TkRjMk5qTXhNU0F3SURZdU1UZzBOREE0TXkwMExqUTNOall6TVRFZ01TNDNNRGMzTnpjeUxUWXVNVGcwTkRBNE15QXdlbTB6TUM0NU1qSXdOREUzTFRFd0xqTXdOek0wTnpKakxURXVOekEzTnpjM01pMHhMamN3TnpjM056SXRNUzQzTURjM056Y3lMVFF1TkRjMk5qTXhNaUF3TFRZdU1UZzBOREE0TkhNMExqUTNOall6TVRJdE1TNDNNRGMzTnpjeUlEWXVNVGcwTkRBNE5DQXdJREV1TnpBM056YzNNaUEwTGpRM05qWXpNVElnTUNBMkxqRTRORFF3T0RRdE5DNDBOelkyTXpFeUlERXVOekEzTnpjM01pMDJMakU0TkRRd09EUWdNSHB0TFRFd0xqTXdOek0wTnpJZ01UQXVNekEzTXpRM01tTXRNUzQzTURjM056Y3lMVEV1TnpBM056YzNNaTB4TGpjd056YzNOekl0TkM0ME56WTJNekV4SURBdE5pNHhPRFEwTURnemN6UXVORGMyTmpNeE1TMHhMamN3TnpjM056SWdOaTR4T0RRME1EZ3pJREFnTVM0M01EYzNOemN5SURRdU5EYzJOak14TVNBd0lEWXVNVGcwTkRBNE15MDBMalEzTmpZek1URWdNUzQzTURjM056Y3lMVFl1TVRnME5EQTRNeUF3ZW0wdE5EQXVNVGs0TmpVME15MHhMakF6TURjek5EZGpMVEV1TVRNNE5URTRNVE10TVM0eE16ZzFNVGd4TFRFdU1UTTROVEU0TVRNdE1pNDVPRFEwTWpBNElEQXROQzR4TWpJNU16ZzVJREV1TVRNNE5URTRNUzB4TGpFek9EVXhPREVnTWk0NU9EUTBNakE0TFRFdU1UTTROVEU0TVNBMExqRXlNamt6T0RrZ01ITXhMakV6T0RVeE9ERWdNaTQ1T0RRME1qQTRJREFnTkM0eE1qSTVNemc1TFRJdU9UZzBOREl3T0NBeExqRXpPRFV4T0RFdE5DNHhNakk1TXpnNUlEQjZiVEV3TGpNd056TTBOek1nTVRBdU16QTNNelEzTW1NdE1TNHhNemcxTVRneUxURXVNVE00TlRFNE1TMHhMakV6T0RVeE9ESXRNaTQ1T0RRME1qQTNJREF0TkM0eE1qSTVNemc1SURFdU1UTTROVEU0TVMweExqRXpPRFV4T0RFZ01pNDVPRFEwTWpBM0xURXVNVE00TlRFNE1TQTBMakV5TWprek9EZ2dNQ0F4TGpFek9EVXhPRElnTVM0eE16ZzFNVGd5SURFdU1UTTROVEU0TWlBeUxqazRORFF5TURnZ01DQTBMakV5TWprek9Ea3RNUzR4TXpnMU1UZ3hJREV1TVRNNE5URTRNaTB5TGprNE5EUXlNRGNnTVM0eE16ZzFNVGd5TFRRdU1USXlPVE00T0NBd2VtMDBNUzR5TWprek9EZzVJREJqTFRFdU1UTTROVEU0TVMweExqRXpPRFV4T0RFdE1TNHhNemcxTVRneExUSXVPVGcwTkRJd055QXdMVFF1TVRJeU9UTTRPU0F4TGpFek9EVXhPREl0TVM0eE16ZzFNVGd4SURJdU9UZzBOREl3T0MweExqRXpPRFV4T0RFZ05DNHhNakk1TXpnNUlEQWdNUzR4TXpnMU1UZ3lJREV1TVRNNE5URTRNaUF4TGpFek9EVXhPRElnTWk0NU9EUTBNakE0SURBZ05DNHhNakk1TXpnNUxURXVNVE00TlRFNE1TQXhMakV6T0RVeE9ESXRNaTQ1T0RRME1qQTNJREV1TVRNNE5URTRNaTAwTGpFeU1qa3pPRGtnTUhwdExUUXlMakkyTURFeU16Y3RNVGt1TlRnek9UVTVOMk10TVM0M01EYzNOemN5TFRFdU56QTNOemMzTWkweExqY3dOemMzTnpJdE5DNDBOelkyTXpFeUlEQXROaTR4T0RRME1EZzBjelF1TkRjMk5qTXhNaTB4TGpjd056YzNOeklnTmk0eE9EUTBNRGcwSURBZ01TNDNNRGMzTnpjeUlEUXVORGMyTmpNeE1pQXdJRFl1TVRnME5EQTROQzAwTGpRM05qWXpNVElnTVM0M01EYzNOemN5TFRZdU1UZzBOREE0TkNBd2VtMHhPUzQxT0RNNU5UazRJREV1TURNd056TTBOMk10TWk0eU56Y3dNell6TFRJdU1qYzNNRE0yTXkweUxqSTNOekF6TmpNdE5TNDVOamc0TkRFMUlEQXRPQzR5TkRVNE56YzRjelV1T1RZNE9EUXhOUzB5TGpJM056QXpOak1nT0M0eU5EVTROemM0SURBZ01pNHlOemN3TXpZeklEVXVPVFk0T0RReE5TQXdJRGd1TWpRMU9EYzNPQzAxTGprMk9EZzBNVFVnTWk0eU56Y3dNell6TFRndU1qUTFPRGMzT0NBd2VtMHdMVEl3TGpZeE5EWTVORFZqTFRJdU1qYzNNRE0yTXkweUxqSTNOekF6TmpNdE1pNHlOemN3TXpZekxUVXVPVFk0T0RReE5TQXdMVGd1TWpRMU9EYzNPSE0xTGprMk9EZzBNVFV0TWk0eU56Y3dNell6SURndU1qUTFPRGMzT0NBd0lESXVNamMzTURNMk15QTFMamsyT0RnME1UVWdNQ0E0TGpJME5UZzNOemd0TlM0NU5qZzROREUxSURJdU1qYzNNRE0yTXkwNExqSTBOVGczTnpnZ01IcHRMVEV3TGpNd056TTBOek1nTVRBdU16QTNNelEzTTJNdE1pNHlOemN3TXpZeUxUSXVNamMzTURNMk15MHlMakkzTnpBek5qSXROUzQ1TmpnNE5ERTJJREF0T0M0eU5EVTROemM0SURJdU1qYzNNRE0yTXkweUxqSTNOekF6TmpNZ05TNDVOamc0TkRFMkxUSXVNamMzTURNMk15QTRMakkwTlRnM056Z2dNQ0F5TGpJM056QXpOak1nTWk0eU56Y3dNell5SURJdU1qYzNNRE0yTXlBMUxqazJPRGcwTVRVZ01DQTRMakkwTlRnM056Z3RNaTR5Tnpjd016WXlJREl1TWpjM01ETTJNaTAxTGprMk9EZzBNVFVnTWk0eU56Y3dNell5TFRndU1qUTFPRGMzT0NBd2VpSXZQand2Wno0OEwzTjJaejQ9JyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgTWF0aFdhbGxldFdhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0aHdhbGxldC5qcy5tYXAiLCJpbXBvcnQgeyBQaGFudG9tV2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcGhhbnRvbSc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0UGhhbnRvbVdhbGxldCA9IChjb25maWcgPSB7fSkgPT4gKHtcbiAgICBuYW1lOiBXYWxsZXROYW1lLlBoYW50b20sXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucGhhbnRvbS5hcHAnLFxuICAgIGljb246ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSnViMjVsSWlCb1pXbG5hSFE5SWpNMElpQjNhV1IwYUQwaU16UWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQR3hwYm1WaGNrZHlZV1JwWlc1MElHbGtQU0poSWlCNE1UMGlMalVpSUhneVBTSXVOU0lnZVRFOUlqQWlJSGt5UFNJeElqNDhjM1J2Y0NCdlptWnpaWFE5SWpBaUlITjBiM0F0WTI5c2IzSTlJaU0xTXpSaVlqRWlMejQ4YzNSdmNDQnZabVp6WlhROUlqRWlJSE4wYjNBdFkyOXNiM0k5SWlNMU5URmlaamtpTHo0OEwyeHBibVZoY2tkeVlXUnBaVzUwUGp4c2FXNWxZWEpIY21Ga2FXVnVkQ0JwWkQwaVlpSWdlREU5SWk0MUlpQjRNajBpTGpVaUlIa3hQU0l3SWlCNU1qMGlNU0krUEhOMGIzQWdiMlptYzJWMFBTSXdJaUJ6ZEc5d0xXTnZiRzl5UFNJalptWm1JaTgrUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalptWm1JaUJ6ZEc5d0xXOXdZV05wZEhrOUlpNDRNaUl2UGp3dmJHbHVaV0Z5UjNKaFpHbGxiblErUEdOcGNtTnNaU0JqZUQwaU1UY2lJR041UFNJeE55SWdabWxzYkQwaWRYSnNLQ05oS1NJZ2NqMGlNVGNpTHo0OGNHRjBhQ0JrUFNKdE1qa3VNVGN3TWlBeE55NHlNRGN4YUMweUxqazVOamxqTUMwMkxqRXdOelF0TkM0NU5qZ3pMVEV4TGpBMU9ERTNMVEV4TGpBNU56VXRNVEV1TURVNE1UY3ROaTR3TlRNeU5TQXdMVEV3TGprM05EWXpJRFF1T0RJNU5UY3RNVEV1TURrMU1EZ2dNVEF1T0RNeU16Y3RMakV5TkRZeElEWXVNakExSURVdU56RTNOVElnTVRFdU5Ua3pNaUF4TVM0NU5EVXpPQ0F4TVM0MU9UTXlhQzQzT0RNMFl6VXVORGt3TmlBd0lERXlMamcwT1RjdE5DNHlPREk1SURFekxqazVPVFV0T1M0MU1ERXpMakl4TWpNdExqazJNVGt0TGpVMU1ESXRNUzQ0TmpZeExURXVOVE00T0MweExqZzJOakY2YlMweE9DNDFORGM1TGpJM01qRmpNQ0F1T0RFMk55MHVOamN3TXpnZ01TNDBPRFEzTFRFdU5Ea3dNREVnTVM0ME9EUTNMUzQ0TVRrMk5DQXdMVEV1TkRnNU9UZ3RMalkyT0RNdE1TNDBPRGs1T0MweExqUTRORGQyTFRJdU5EQXhPV013TFM0NE1UWTNMalkzTURNMExURXVORGcwTnlBeExqUTRPVGs0TFRFdU5EZzBOeTQ0TVRrMk15QXdJREV1TkRrd01ERXVOalk0SURFdU5Ea3dNREVnTVM0ME9EUTNlbTAxTGpFM016Z2dNR013SUM0NE1UWTNMUzQyTnpBeklERXVORGcwTnkweExqUTRPVGtnTVM0ME9EUTNMUzQ0TVRrM0lEQXRNUzQwT1MwdU5qWTRNeTB4TGpRNUxURXVORGcwTjNZdE1pNDBNREU1WXpBdExqZ3hOamN1Tmpjd05pMHhMalE0TkRjZ01TNDBPUzB4TGpRNE5EY3VPREU1TmlBd0lERXVORGc1T1M0Mk5qZ2dNUzQwT0RrNUlERXVORGcwTjNvaUlHWnBiR3c5SW5WeWJDZ2pZaWtpTHo0OEwzTjJaejRLJyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgUGhhbnRvbVdhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGhhbnRvbS5qcy5tYXAiLCJpbXBvcnQgeyBTYWZlUGFsV2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItc2FmZXBhbCc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0U2FmZVBhbFdhbGxldCA9IChjb25maWcgPSB7fSkgPT4gKHtcbiAgICBuYW1lOiBXYWxsZXROYW1lLlNhZmVQYWwsXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuc2FmZXBhbC5pbycsXG4gICAgaWNvbjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm9aV2xuYUhROUlqSTFOaUlnZG1sbGQwSnZlRDBpTUNBd0lESTFOaUF5TlRZaUlIZHBaSFJvUFNJeU5UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQR2NnWm1sc2JEMGlibTl1WlNJZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lqNDhjR0YwYUNCa1BTSnRNalUySURFeU9HTXdJRGN3TGpZNU16ZzNNeTAxTnk0ek1EYzVNek1nTVRJNExURXlPQ0F4TWpndE56QXVOamt5TURZMk55QXdMVEV5T0MwMU55NHpNRFl4TWpjdE1USTRMVEV5T0NBd0xUY3dMalk1TWpBMk5qY2dOVGN1TXpBM09UTXpNeTB4TWpnZ01USTRMVEV5T0NBM01DNDJPVEl3TmpjZ01DQXhNamdnTlRjdU16QTNPVE16TXlBeE1qZ2dNVEk0SWlCbWFXeHNQU0lqTURBd0lpOCtQSEJoZEdnZ1pEMGliVEl3TUM0NU9URTBPVGtnTVRReExqTTRORE0zT1hZeE1TNDVNelEwTURSak1DQXpNaTQwT1Rjd056Z3RORFl1TWpBMU9ESTJJRFV4TGpRM05UTTBOaTAyTVM0NU16VXpPVGdnTlRZdU9UZzJOVE15YkMwMkxqSTRPVE0zTVNBeUxqRTNORFk0TlhZdE1qQXVOakk1TkRBeGJESXVOakl4T1RFMkxTNDVPRGt5T0dNeU1pNDNNVFEzTkRVdE9DNDFORGc0TXpZZ05EVXVOak15TWpneUxUSXpMakk1TlRRMk5TQTBOaTR3T0Rnek5qRXRNemN1TVRJek56ZzBiQzR3TURZNU1qSXRMalF4T0RjMU1uWXRNVEV1T1RNME5EQTBlbTB0TnpJdU9EWTFNVGN5TFRrM0xqZzJORE0zT1NBeE9TNDJOakV4TXpVZ05pNHdOak16T0RJeWRqSXhMakEwT0RBMk4yd3RNVGt1TmpZeE1UTTFMVFl1TURnME16azJNeTB4TGpJNE5qY3hNUzR6T1RreU5qZ3pkalEzTGpNMU5EVXhNemhvTWpBdU9UUTNPRFEyZGpFNUxqVXhNRGd3TTJndE1qQXVPVFEzT0RRMmRqZ3dMak00TURZemJDMDJMak0yTWpnNU1pMHlMak0zTlRRMk4yTXRNaTQwTkRnMk16VXRMamt5T0RVd01pMDFMamszTXpFMk55MHlMak16T1RnNE5pMHhNQzR5TVRVNE56VXROQzR5TkRreE5ESnNMUzQxTlRjME5DMHVNalV4T0RVNExUSXVNemMwTlRrMkxURXVNRGcwTmpVeWRpMHhOVFF1TWprek56VTVOM3B0TFRJMkxqazJPVElnT0M0ME1EQTBOelU0ZGpJd0xqazFNVEEzT0Roc0xUSTJMalkwTVRBMU5UZ2dPQzR5TmprNE5qUTVkak14TGpFMU9UQTVNalZvTWpZdU5qUXhNRFUxT0hZNU1DNHlOREkzTVRoc0xUVXVPVEF3TVRFNE1pMHpMakF6TkRFeE5XTXRNVGd1TVRjMk1qYzNNeTA1TGpNMU5UTTVMVE01TGpneE1UQTRPREl0TWpVdU1EY3dNVGN6TFRRd0xqSTBNVGsyTmpndE5EWXVPVGN3TWpRNGJDMHVNREEyTlRReE1TMHVOalkxTlRNeWRpMHhNQzQwT0RreU9HZ3hPUzQxTURjMU56QXpkakV3TGpRNE9USTRZekFnTkM0ME5qWTNNemNnTWk0eU5UZ3lPRFkzSURrdU1UVTFPQ0EyTGpjeE9EWTVOak1nTVRNdU9UZ3lPVFEwYkM0ME1URTFOVFkyTGpRek9USXdPWFl0TXpRdU5EZzBNVGN6YUMweU5pNDJNemM0TWpNeWRpMDJOUzQyTkRZME9UaDZiVFV5TGpVMU1qWXRMalE1T1RFMk5qSWdORGN1TWpneE56Y3lJREUwTGpZek16a3hNRFoyTmpVdU56VTJOREUzT0dndE1qY3VOelU0TURNM2RqSTRMalEzTlRjMU1Xd3RMakk0TlRRNE9TNHpOVFF5TURaakxURXVNelUxTWpVZ01TNDJNelEwTlRVdE55NDFOak0xTnpVZ09DNDJNakkyTlRVdE1Ua3VNakl3TkRZMUlERTBMalU1TkRreE5ucHRNVGt1TlRJek56TTFJREkzTGpBM056VXdNek4yTXpNdU9EQXlNREl5TVdnNExqSTFNRFEyTjNZdE16RXVNalUwTkRZMGVpSWdabWxzYkQwaUkyWm1aaUl2UGp3dlp6NDhMM04yWno0PScsXG4gICAgYWRhcHRlcjogKCkgPT4gbmV3IFNhZmVQYWxXYWxsZXRBZGFwdGVyKGNvbmZpZyksXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNhZmVwYWwuanMubWFwIiwiaW1wb3J0IHsgU2xvcGVXYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1zbG9wZSc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0U2xvcGVXYWxsZXQgPSAoY29uZmlnID0ge30pID0+ICh7XG4gICAgbmFtZTogV2FsbGV0TmFtZS5TbG9wZSxcbiAgICB1cmw6ICdodHRwczovL3d3dy5zbG9wZS5maW5hbmNlLyMvd2FsbGV0JyxcbiAgICBpY29uOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCbWFXeHNQU0p1YjI1bElpQm9aV2xuYUhROUlqRXlPQ0lnZG1sbGQwSnZlRDBpTUNBd0lERXlPQ0F4TWpnaUlIZHBaSFJvUFNJeE1qZ2lJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQR05wY21Oc1pTQmplRDBpTmpRaUlHTjVQU0kyTkNJZ1ptbHNiRDBpSXpabE5qWm1ZU0lnY2owaU5qUWlMejQ4WnlCbWFXeHNQU0lqWm1abUlqNDhjR0YwYUNCa1BTSnRNelV1TVRrMk15QTFOQzR6T1RrNGFERTVMakoyTVRrdU1tZ3RNVGt1TW5vaUx6NDhjR0YwYUNCa1BTSnROek11TlRrM0lEVTBMak01T1RndE1Ua3VNaUF4T1M0eWRpMHhPUzR5YkRFNUxqSXRNVGt1TW5vaUlHWnBiR3d0YjNCaFkybDBlVDBpTGpRaUx6NDhjR0YwYUNCa1BTSnROek11TlRrM0lEY3pMalU1T1RndE1Ua3VNaUF4T1M0eWRpMHhPUzR5YkRFNUxqSXRNVGt1TW5vaUlHWnBiR3d0YjNCaFkybDBlVDBpTGpjMUlpOCtQSEJoZEdnZ1pEMGliVGN6TGpZd05DQTFOQzR6T1RrNGFERTVMakoyTVRrdU1tZ3RNVGt1TW5vaUx6NDhjR0YwYUNCa1BTSnROVFF1TXprMk9DQXpOUzR5SURFNUxqSXRNVGt1TW5ZeE9TNHliQzB4T1M0eUlERTVMakpvTFRFNUxqSjZJaUJtYVd4c0xXOXdZV05wZEhrOUlpNDNOU0l2UGp4d1lYUm9JR1E5SW0wM015NDFPVEUxSURreUxqZ3RNVGt1TWlBeE9TNHlkaTB4T1M0eWJERTVMakl0TVRrdU1tZ3hPUzR5ZWlJZ1ptbHNiQzF2Y0dGamFYUjVQU0l1TkNJdlBqd3ZaejQ4TDNOMlp6ND0nLFxuICAgIGFkYXB0ZXI6ICgpID0+IG5ldyBTbG9wZVdhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xvcGUuanMubWFwIiwiaW1wb3J0IHsgU29sZmxhcmVXYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1zb2xmbGFyZSc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0U29sZmxhcmVXYWxsZXQgPSAoY29uZmlnID0ge30pID0+ICh7XG4gICAgbmFtZTogV2FsbGV0TmFtZS5Tb2xmbGFyZSxcbiAgICB1cmw6ICdodHRwczovL3NvbGZsYXJlLmNvbScsXG4gICAgaWNvbjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNKdWIyNWxJaUJvWldsbmFIUTlJalV3SWlCMmFXVjNRbTk0UFNJd0lEQWdOVEFnTlRBaUlIZHBaSFJvUFNJMU1DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSmhJajQ4YzNSdmNDQnZabVp6WlhROUlqQWlJSE4wYjNBdFkyOXNiM0k5SWlObVptTXhNR0lpTHo0OGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTm1Zak5tTW1VaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlZaUlnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaUlIZ3hQU0kyTGpRM09ETTFJaUI0TWowaU16UXVPVEV3TnlJZ2VHeHBibXM2YUhKbFpqMGlJMkVpSUhreFBTSTNMamt5SWlCNU1qMGlNek11TmpVNU15SXZQanh5WVdScFlXeEhjbUZrYVdWdWRDQnBaRDBpWXlJZ1kzZzlJakFpSUdONVBTSXdJaUJuY21Ga2FXVnVkRlJ5WVc1elptOXliVDBpYldGMGNtbDRLRFF1T1RreU1UZzRNeklnTVRJdU1EWXpPRGM1TmpNZ0xURXlMakU0TVRFek5qVTFJRFV1TURRd056RXdOelFnTWpJdU5USXdNaUF5TUM0Mk1UZ3pLU0lnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaUlISTlJakVpSUhoc2FXNXJPbWh5WldZOUlpTmhJaTgrUEhCaGRHZ2daRDBpYlRJMUxqRTNNRGdnTkRjdU9URXdOR011TlRJMUlEQWdMamsxTURjdU5ESXhMamsxTURjdU9UUXdNM010TGpReU5UY3VPVFF3TWkwdU9UVXdOeTQ1TkRBeUxTNDVOVEEzTFM0ME1qQTVMUzQ1TlRBM0xTNDVOREF5TGpReU5UY3RMamswTURNdU9UVXdOeTB1T1RRd00zcHRMVEV1TURNeU9DMDBOQzQ1TVRVMk5XTXVORFkwTmk0d016Z3pOaTQ0TXprNExqTTVNRFF1T1RBeU55NDRORFk0TVd3eExqRXpNRGNnT0M0eU1UVTNOR011TXpjNU9DQXlMamN4TkRNZ015NDJOVE0xSURNdU9Ea3dOQ0ExTGpZM05ETWdNaTR3TkRVNWJERXhMak15T1RFdE1UQXVNekV4TlRoakxqSTNNek10TGpJME9EY3pMalk1T0RrdExqSXpNVFE1TGprMU1EY3VNRE00TlRFdU1qTXdPUzR5TkRjM01pNHlNemM1TGpZeU5qazNMakF4TmpFdU9EZ3lOemRzTFRrdU9EYzVNU0F4TVM0ek9UVTRZeTB4TGpneE9EY2dNaTR3T1RReUxTNDBOelk0SURVdU16WTBNeUF5TGpJNU5UWWdOUzQxT1RjNGJEZ3VOekUyT0M0NE5EQXpZeTQwTXpReExqQTBNVGd1TnpVeE55NDBNak0wTGpjd09UTXVPRFV5TkMwdU1ETTBPUzR6TlRNM0xTNHpNRGMwTGpZek9UVXRMalkyTWpndU5qazBPV3d0T1M0eE5UazBJREV1TkRNd01tTXRNaTQyTlRrekxqTTJNalV0TXk0NE5qTTJJRE11TlRFeE55MHlMakV6TXprZ05TNDFOVGMyYkRNdU1qSWdNeTQzT1RZeFl5NHlOVGswTGpNd05UZ3VNakU0T0M0M05qRTFMUzR3T1RBNElERXVNREUzT0MwdU1qWXlNaTR5TVRjeUxTNDJOREU1TGpJeU5UWXRMamt4TXpndU1ESXdNMnd0TXk0NU5qazBMVEl1T1RrM09HTXRNaTR4TkRJeExURXVOakV3T1MwMUxqSXlPVGN0TGpJME1UY3ROUzQwTlRZeElESXVOREkwTTJ3dExqZzNORGNnTVRBdU16azNObU10TGpBek5qSXVOREk1TlMwdU5ERTNPQzQzTkRnM0xTNDROVEkxTGpjeE15MHVNelk1TFM0d016QXpMUzQyTmpjeExTNHpNRGszTFM0M01UY3hMUzQyTnpJeGJDMHhMak00TnpFdE1UQXVNRFF6TjJNdExqTTNNVGN0TWk0M01UUTBMVE11TmpRMU5DMHpMamc1TURRdE5TNDJOelF6TFRJdU1EUTFPV3d0TVRJdU1EVXhPVFVnTVRBdU9UYzBZeTB1TWpRNU5EY3VNakkzTVMwdU5qTTRNRGt1TWpFeE5DMHVPRFk0TFM0d016VXRMakl4TURrMExTNHlNall5TFM0eU1UY3pOUzB1TlRjeU5DMHVNREUwT1RNdExqZ3dObXd4TUM0MU1UZ3hPQzB4TWk0eE16ZzFZekV1T0RFNE55MHlMakE1TkRJdU5EZzBPUzAxTGpNMk5EUXRNaTR5T0RjMkxUVXVOVGszT0d3dE9DNDNNVGczTWkwdU9EUXdOV010TGpRek5ERXpMUzR3TkRFNExTNDNOVEUzTWkwdU5ESXpOUzB1TnpBNU16WXRMamcxTWpRdU1ETTBPVE10TGpNMU16Y3VNekEzTXprdExqWXpPVFF1TmpZeU55MHVOamsxYkRrdU1UVXpNemd0TVM0ME1qazVZekl1TmpVNU5DMHVNell5TlNBekxqZzNNVGd0TXk0MU1URTNJREl1TVRReU1TMDFMalUxTnpac0xUSXVNVGt5TFRJdU5UZzBNV010TGpNeU1UY3RMak0zT1RJdExqSTNNVE10TGprME5ETXVNVEV5TmkweExqSTJNakV1TXpJMU15MHVNalk1TkM0M09UWXpMUzR5TnprM0lERXVNVE16TkMwdU1ESTBPV3d5TGpZNU1UZ2dNaTR3TXpRM1l6SXVNVFF5TVNBeExqWXhNRGtnTlM0eU1qazNMakkwTVRjZ05TNDBOVFl4TFRJdU5ESTBNMnd1TnpJME1TMDRMalUxT1RrNFl5NHdORFUzTFM0MU5EQTRMalV5TmpVdExqazBNalUzSURFdU1EY3pPUzB1T0RrM016ZDZiUzB5TXk0eE9EY3pNeUF5TUM0ME16azJOV011TlRJMU1EUWdNQ0F1T1RVd05qY3VOREl4TGprMU1EWTNMamswTUROekxTNDBNalUyTXk0NU5EQXpMUzQ1TlRBMk55NDVOREF6WXkwdU5USTFNRFF4SURBdExqazFNRFkzTFM0ME1qRXRMamsxTURZM0xTNDVOREF6Y3k0ME1qVTJNamt0TGprME1ETXVPVFV3TmpjdExqazBNRE42YlRRM0xqWTNPVGN6TFM0NU5UUTNZeTQxTWpVZ01DQXVPVFV3Tnk0ME1qRXVPVFV3Tnk0NU5EQXpjeTB1TkRJMU55NDVOREF5TFM0NU5UQTNMamswTURJdExqazFNRGN0TGpReU1Ea3RMamsxTURjdExqazBNREl1TkRJMU55MHVPVFF3TXk0NU5UQTNMUzQ1TkRBemVtMHRNalF1TmpJNU5pMHlNaTQwTnprM1l5NDFNalVnTUNBdU9UVXdOaTQwTWpBNU56TXVPVFV3Tmk0NU5EQXlOeUF3SUM0MU1Ua3pMUzQwTWpVMkxqazBNREkzTFM0NU5UQTJMamswTURJM0xTNDFNalV4SURBdExqazFNRGN0TGpReU1EazNMUzQ1TlRBM0xTNDVOREF5TnlBd0xTNDFNVGt5T1RjdU5ESTFOaTB1T1RRd01qY3VPVFV3TnkwdU9UUXdNamQ2SWlCbWFXeHNQU0oxY213b0kySXBJaTgrUEhCaGRHZ2daRDBpYlRJMExqVTNNU0F6TWk0M056a3lZelF1T1RVNU5pQXdJRGd1T1Rnd01pMHpMamszTmpVZ09DNDVPREF5TFRndU9EZ3hPU0F3TFRRdU9UQTFNeTAwTGpBeU1EWXRPQzQ0T0RFNUxUZ3VPVGd3TWkwNExqZzRNVGx6TFRndU9UZ3dNaUF6TGprM05qWXRPQzQ1T0RBeUlEZ3VPRGd4T1dNd0lEUXVPVEExTkNBMExqQXlNRFlnT0M0NE9ERTVJRGd1T1Rnd01pQTRMamc0TVRsNklpQm1hV3hzUFNKMWNtd29JMk1wSWk4K1BDOXpkbWMrJyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgU29sZmxhcmVXYWxsZXRBZGFwdGVyKGNvbmZpZyksXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNvbGZsYXJlLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IFNvbGxldFdhbGxldEFkYXB0ZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXNvbGxldCc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0U29sZmxhcmVXZWJXYWxsZXQgPSAoX2EgPSB7fSkgPT4ge1xuICAgIHZhciB7IHByb3ZpZGVyIH0gPSBfYSwgY29uZmlnID0gX19yZXN0KF9hLCBbXCJwcm92aWRlclwiXSk7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIG5hbWU6IFdhbGxldE5hbWUuU29sZmxhcmVXZWIsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vc29sZmxhcmUuY29tJyxcbiAgICAgICAgaWNvbjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm1hV3hzUFNKdWIyNWxJaUJvWldsbmFIUTlJalV3SWlCMmFXVjNRbTk0UFNJd0lEQWdOVEFnTlRBaUlIZHBaSFJvUFNJMU1DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJK1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSmhJajQ4YzNSdmNDQnZabVp6WlhROUlqQWlJSE4wYjNBdFkyOXNiM0k5SWlObVptTXhNR0lpTHo0OGMzUnZjQ0J2Wm1aelpYUTlJakVpSUhOMGIzQXRZMjlzYjNJOUlpTm1Zak5tTW1VaUx6NDhMMnhwYm1WaGNrZHlZV1JwWlc1MFBqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlZaUlnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaUlIZ3hQU0kyTGpRM09ETTFJaUI0TWowaU16UXVPVEV3TnlJZ2VHeHBibXM2YUhKbFpqMGlJMkVpSUhreFBTSTNMamt5SWlCNU1qMGlNek11TmpVNU15SXZQanh5WVdScFlXeEhjbUZrYVdWdWRDQnBaRDBpWXlJZ1kzZzlJakFpSUdONVBTSXdJaUJuY21Ga2FXVnVkRlJ5WVc1elptOXliVDBpYldGMGNtbDRLRFF1T1RreU1UZzRNeklnTVRJdU1EWXpPRGM1TmpNZ0xURXlMakU0TVRFek5qVTFJRFV1TURRd056RXdOelFnTWpJdU5USXdNaUF5TUM0Mk1UZ3pLU0lnWjNKaFpHbGxiblJWYm1sMGN6MGlkWE5sY2xOd1lXTmxUMjVWYzJVaUlISTlJakVpSUhoc2FXNXJPbWh5WldZOUlpTmhJaTgrUEhCaGRHZ2daRDBpYlRJMUxqRTNNRGdnTkRjdU9URXdOR011TlRJMUlEQWdMamsxTURjdU5ESXhMamsxTURjdU9UUXdNM010TGpReU5UY3VPVFF3TWkwdU9UVXdOeTQ1TkRBeUxTNDVOVEEzTFM0ME1qQTVMUzQ1TlRBM0xTNDVOREF5TGpReU5UY3RMamswTURNdU9UVXdOeTB1T1RRd00zcHRMVEV1TURNeU9DMDBOQzQ1TVRVMk5XTXVORFkwTmk0d016Z3pOaTQ0TXprNExqTTVNRFF1T1RBeU55NDRORFk0TVd3eExqRXpNRGNnT0M0eU1UVTNOR011TXpjNU9DQXlMamN4TkRNZ015NDJOVE0xSURNdU9Ea3dOQ0ExTGpZM05ETWdNaTR3TkRVNWJERXhMak15T1RFdE1UQXVNekV4TlRoakxqSTNNek10TGpJME9EY3pMalk1T0RrdExqSXpNVFE1TGprMU1EY3VNRE00TlRFdU1qTXdPUzR5TkRjM01pNHlNemM1TGpZeU5qazNMakF4TmpFdU9EZ3lOemRzTFRrdU9EYzVNU0F4TVM0ek9UVTRZeTB4TGpneE9EY2dNaTR3T1RReUxTNDBOelk0SURVdU16WTBNeUF5TGpJNU5UWWdOUzQxT1RjNGJEZ3VOekUyT0M0NE5EQXpZeTQwTXpReExqQTBNVGd1TnpVeE55NDBNak0wTGpjd09UTXVPRFV5TkMwdU1ETTBPUzR6TlRNM0xTNHpNRGMwTGpZek9UVXRMalkyTWpndU5qazBPV3d0T1M0eE5UazBJREV1TkRNd01tTXRNaTQyTlRrekxqTTJNalV0TXk0NE5qTTJJRE11TlRFeE55MHlMakV6TXprZ05TNDFOVGMyYkRNdU1qSWdNeTQzT1RZeFl5NHlOVGswTGpNd05UZ3VNakU0T0M0M05qRTFMUzR3T1RBNElERXVNREUzT0MwdU1qWXlNaTR5TVRjeUxTNDJOREU1TGpJeU5UWXRMamt4TXpndU1ESXdNMnd0TXk0NU5qazBMVEl1T1RrM09HTXRNaTR4TkRJeExURXVOakV3T1MwMUxqSXlPVGN0TGpJME1UY3ROUzQwTlRZeElESXVOREkwTTJ3dExqZzNORGNnTVRBdU16azNObU10TGpBek5qSXVOREk1TlMwdU5ERTNPQzQzTkRnM0xTNDROVEkxTGpjeE15MHVNelk1TFM0d016QXpMUzQyTmpjeExTNHpNRGszTFM0M01UY3hMUzQyTnpJeGJDMHhMak00TnpFdE1UQXVNRFF6TjJNdExqTTNNVGN0TWk0M01UUTBMVE11TmpRMU5DMHpMamc1TURRdE5TNDJOelF6TFRJdU1EUTFPV3d0TVRJdU1EVXhPVFVnTVRBdU9UYzBZeTB1TWpRNU5EY3VNakkzTVMwdU5qTTRNRGt1TWpFeE5DMHVPRFk0TFM0d016VXRMakl4TURrMExTNHlNall5TFM0eU1UY3pOUzB1TlRjeU5DMHVNREUwT1RNdExqZ3dObXd4TUM0MU1UZ3hPQzB4TWk0eE16ZzFZekV1T0RFNE55MHlMakE1TkRJdU5EZzBPUzAxTGpNMk5EUXRNaTR5T0RjMkxUVXVOVGszT0d3dE9DNDNNVGczTWkwdU9EUXdOV010TGpRek5ERXpMUzR3TkRFNExTNDNOVEUzTWkwdU5ESXpOUzB1TnpBNU16WXRMamcxTWpRdU1ETTBPVE10TGpNMU16Y3VNekEzTXprdExqWXpPVFF1TmpZeU55MHVOamsxYkRrdU1UVXpNemd0TVM0ME1qazVZekl1TmpVNU5DMHVNell5TlNBekxqZzNNVGd0TXk0MU1URTNJREl1TVRReU1TMDFMalUxTnpac0xUSXVNVGt5TFRJdU5UZzBNV010TGpNeU1UY3RMak0zT1RJdExqSTNNVE10TGprME5ETXVNVEV5TmkweExqSTJNakV1TXpJMU15MHVNalk1TkM0M09UWXpMUzR5TnprM0lERXVNVE16TkMwdU1ESTBPV3d5TGpZNU1UZ2dNaTR3TXpRM1l6SXVNVFF5TVNBeExqWXhNRGtnTlM0eU1qazNMakkwTVRjZ05TNDBOVFl4TFRJdU5ESTBNMnd1TnpJME1TMDRMalUxT1RrNFl5NHdORFUzTFM0MU5EQTRMalV5TmpVdExqazBNalUzSURFdU1EY3pPUzB1T0RrM016ZDZiUzB5TXk0eE9EY3pNeUF5TUM0ME16azJOV011TlRJMU1EUWdNQ0F1T1RVd05qY3VOREl4TGprMU1EWTNMamswTUROekxTNDBNalUyTXk0NU5EQXpMUzQ1TlRBMk55NDVOREF6WXkwdU5USTFNRFF4SURBdExqazFNRFkzTFM0ME1qRXRMamsxTURZM0xTNDVOREF6Y3k0ME1qVTJNamt0TGprME1ETXVPVFV3TmpjdExqazBNRE42YlRRM0xqWTNPVGN6TFM0NU5UUTNZeTQxTWpVZ01DQXVPVFV3Tnk0ME1qRXVPVFV3Tnk0NU5EQXpjeTB1TkRJMU55NDVOREF5TFM0NU5UQTNMamswTURJdExqazFNRGN0TGpReU1Ea3RMamsxTURjdExqazBNREl1TkRJMU55MHVPVFF3TXk0NU5UQTNMUzQ1TkRBemVtMHRNalF1TmpJNU5pMHlNaTQwTnprM1l5NDFNalVnTUNBdU9UVXdOaTQwTWpBNU56TXVPVFV3Tmk0NU5EQXlOeUF3SUM0MU1Ua3pMUzQwTWpVMkxqazBNREkzTFM0NU5UQTJMamswTURJM0xTNDFNalV4SURBdExqazFNRGN0TGpReU1EazNMUzQ1TlRBM0xTNDVOREF5TnlBd0xTNDFNVGt5T1RjdU5ESTFOaTB1T1RRd01qY3VPVFV3TnkwdU9UUXdNamQ2SWlCbWFXeHNQU0oxY213b0kySXBJaTgrUEhCaGRHZ2daRDBpYlRJMExqVTNNU0F6TWk0M056a3lZelF1T1RVNU5pQXdJRGd1T1Rnd01pMHpMamszTmpVZ09DNDVPREF5TFRndU9EZ3hPU0F3TFRRdU9UQTFNeTAwTGpBeU1EWXRPQzQ0T0RFNUxUZ3VPVGd3TWkwNExqZzRNVGx6TFRndU9UZ3dNaUF6TGprM05qWXRPQzQ1T0RBeUlEZ3VPRGd4T1dNd0lEUXVPVEExTkNBMExqQXlNRFlnT0M0NE9ERTVJRGd1T1Rnd01pQTRMamc0TVRsNklpQm1hV3hzUFNKMWNtd29JMk1wSWk4K1BDOXpkbWMrJyxcbiAgICAgICAgYWRhcHRlcjogKCkgPT4gbmV3IFNvbGxldFdhbGxldEFkYXB0ZXIoT2JqZWN0LmFzc2lnbih7IHByb3ZpZGVyOiAnaHR0cHM6Ly9zb2xmbGFyZS5jb20vYWNjZXNzLXdhbGxldCcgfSwgY29uZmlnKSksXG4gICAgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c29sZmxhcmVXZWIuanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgU29sbGV0V2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItc29sbGV0JztcbmltcG9ydCB7IFdhbGxldE5hbWUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCBjb25zdCBnZXRTb2xsZXRXYWxsZXQgPSAoX2EgPSB7fSkgPT4ge1xuICAgIHZhciB7IHByb3ZpZGVyIH0gPSBfYSwgY29uZmlnID0gX19yZXN0KF9hLCBbXCJwcm92aWRlclwiXSk7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIG5hbWU6IFdhbGxldE5hbWUuU29sbGV0LFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy5zb2xsZXQuaW8nLFxuICAgICAgICBpY29uOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCb1pXbG5hSFE5SWpVek1DSWdkMmxrZEdnOUlqVXpNQ0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajQ4Y0dGMGFDQmtQU0p0TFRFdE1XZzFNekoyTlRNeWFDMDFNeko2SWlCbWFXeHNQU0p1YjI1bElpOCtQR2NnWm1sc2JEMGlJekF3Wm1aaE15SStQSEJoZEdnZ1pEMGliVGc0TGpnNE9UTTFJRE0zTWk0NU9ESXdNV016TGpFNU15MHpMakU1SURjdU5USXlMVFF1T1RneUlERXlMakF6TlMwMExqazRNbWcwTVRZdU5EWXhZemN1TlRnMklEQWdNVEV1TXpnMElEa3VNVGMwSURZdU1ERTNJREUwTGpVek5td3RPREl1TWpreElEZ3lMakl5Tm1NdE15NHhPVE1nTXk0eE9URXROeTQxTWpJZ05DNDVPRE10TVRJdU1ETTJJRFF1T1RnemFDMDBNVFl1TkRZd01XTXROeTQxT0RZMklEQXRNVEV1TXpnME5TMDVMakUzTkMwMkxqQXhOemd0TVRRdU5UTTNiRGd5TGpJNU1Ua3RPREl1TWpJMmVpSXZQanh3WVhSb0lHUTlJbTA0T0M0NE9Ea3pOU0EyTlM0NU9ESTFZek11TVRrekxUTXVNVGt3TkNBM0xqVXlNaTAwTGprNE1qVWdNVEl1TURNMUxUUXVPVGd5TldnME1UWXVORFl4WXpjdU5UZzJJREFnTVRFdU16ZzBJRGt1TVRjek9TQTJMakF4TnlBeE5DNDFNell6YkMwNE1pNHlPVEVnT0RJdU1qSTJOMk10TXk0eE9UTWdNeTR4T1MwM0xqVXlNaUEwTGprNE1pMHhNaTR3TXpZZ05DNDVPREpvTFRReE5pNDBOakF4WXkwM0xqVTROallnTUMweE1TNHpPRFExTFRrdU1UYzBMVFl1TURFM09DMHhOQzQxTXpac09ESXVNamt4T1MwNE1pNHlNalkxZWlJdlBqeHdZWFJvSUdROUltMDBOREV1TVRFeE16VWdNakU1TGpFd09UVmpMVE11TVRrekxUTXVNVGt0Tnk0MU1qSXROQzQ1T0RJdE1USXVNRE0yTFRRdU9UZ3lhQzAwTVRZdU5EWXdNV010Tnk0MU9EWTJJREF0TVRFdU16ZzBOU0E1TGpFM015MDJMakF4TnpnZ01UUXVOVE0yYkRneUxqSTVNVGtnT0RJdU1qSTJZek11TVRreklETXVNVGtnTnk0MU1qSWdOQzQ1T0RNZ01USXVNRE0xSURRdU9UZ3phRFF4Tmk0ME5qRmpOeTQxT0RZZ01DQXhNUzR6T0RRdE9TNHhOelFnTmk0d01UY3RNVFF1TlRNM2VpSXZQand2Wno0OEwzTjJaejQ9JyxcbiAgICAgICAgYWRhcHRlcjogKCkgPT4gbmV3IFNvbGxldFdhbGxldEFkYXB0ZXIoT2JqZWN0LmFzc2lnbih7IHByb3ZpZGVyOiAnaHR0cHM6Ly93d3cuc29sbGV0LmlvJyB9LCBjb25maWcpKSxcbiAgICB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb2xsZXQuanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgU29sbGV0V2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItc29sbGV0JztcbmltcG9ydCB7IFdhbGxldE5hbWUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCBjb25zdCBnZXRTb2xsZXRFeHRlbnNpb25XYWxsZXQgPSAoX2EgPSB7fSkgPT4ge1xuICAgIHZhciB7IHByb3ZpZGVyIH0gPSBfYSwgY29uZmlnID0gX19yZXN0KF9hLCBbXCJwcm92aWRlclwiXSk7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIG5hbWU6IFdhbGxldE5hbWUuU29sbGV0RXh0ZW5zaW9uLFxuICAgICAgICB1cmw6ICdodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9zb2xsZXQvZmhtZmVuZGdkb2NtY2JtZmlrZGNvZ29mcGhpbW5rbm8nLFxuICAgICAgICBpY29uOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQ0FZQUFBRERQbUhMQUFBUDUwbEVRVlI0QWV5WlJaSWNNUkJGTmJRM016U1pWcWFsVjJabXVKWFpUV1ptT29aWFpqaUJ0d2FwYXpPVTgvOU1UaFJjb0VIWkVhOHpWQ0JGNlAxaU4vOHIxZjBRY0tWR0dDNDMvQWpBc3Y5aldMWVAxTUhuVXNQL3cvcXBjajFJdVdIMEVuUkNOM1JFVitwc0h4MENSNmQwQzFMWFlQYXZqQVdBZGJnRWRPVlpkUFlKdFRDUXRuc1BvK0NHN3RUaFdYVTZYQ1laNTlrMGpHaGRWS3FIOTNxVVR5dElGbXZ2eXpjZ1haM04rNk5MT3FYYmd1c2hWMWl3SG9uNXBaMU1vRTdaaFBZN2ZrcGRDdDNTY2RhNXk1enlGMlBENzZuOElNYmdrSVlnZktkcmRUN3NzSEFZb0JGZXh5SGZRa0RYWU5ZOS81aUVDM3JObndSaUREU1RkRTNud0xtMTlkOURwWWIvd0pWMnpZOEFkVXpuZE0rai93Q3dpWWtNT3FkN0J1QUcwc0NGZHZUSHd4U2QwejNmL0gzbVF0UnBWbVBRU1YzVFBjOEFmOW13bHp3Um9hN3BuZ0d3VTMrazBMMkw5OE9PUWZjdTVna3dCam9BaGdYQXNBQVlGZ0REQW1CWUFBd0xRRVdwa21ZS2x5a1dnRUdCWW1zSzIrdHVlRmx6M2N2S2ExNVdYUFd5VEZrT1ZtRFpLcXhiaTIzVzE3MVUwdjAxSUJhQW5xWlV6MHVuUklwZGVNbkxvc3RlVmtQdWxuYVFuWGM3c3VkSlI0NjhTT1QwNjBUT3ZFbmsyTXRFRGp4TFpOZkRqbXk3RTJSVEs4Z3FCR0x4NWJuOWwxNlpDdzVEVU11RW9WUzNBUFNBZUkrYUh1V1V0UWpTTmtJaXhjNndkdzVBc2p0ZEd5L3orMTdidG0zYnR2MytiZHUyYmR2WHRtM2I5KzRZU2IvenkrYXAyNVdhU1RKM1ppZTdWZDFWWGRuaFR1VThmZFRuUEgzcXVKSjVjSEhWek5wU041dHpuc2xWZkZQemZNUHdmV2IvMzE3aldxcjVabS9aTit2M2VXYkc1cnA1YkZuVm5EZTViSDczWk5GODdMYWNBSVVHRVJqMEd4d0FzbGp4M0hpRXdKVlZqdnIrN1JNRmMvZUNhaUJFaEt1cG9ULzF2R2U5emtVakNwQjlaZCtNWDE4ejUwNHFtNi9lbThka29DSFFOTDBHZ2dQQVd5d2IvWW9yK29WdzFNaVNXYkM5YmdtWEs2dTlmOVk5Q1R0NThqN2VyODk2QWtoNHJkWjlNM2xqelJ3NnJJVHcwUXI0RjcwQWdnT0FWajJyblJYNHQyZUxadWxPQ1Q0UWxvUzJId2ptd0llQXhCUW9iSzJ5YnA5bnpwcFFOdSs1TVFDQ3JaVWEwd0ZnUUZRK2R2NzlOK1hNNDh1cWhpSGhNQzExM3UzQmQ3YjhmL2dYcDQ4djh4dlJTbklXZWV3QTBNMlZqNjMveVNPRndNWXpwTjRaUHROdloxVkhaM29nNksweUZ3TENzbDJlK2RQVFJYNG5wZ2t6MVNrSUhBQWtmTHo3Zno1WHhBWkwrTEVyWHM5RlZiaEFFNTMyYThrbVJJQnJEb1I3RmxiNXpVUU8wZ1FPQUoydS9MOC9XN1NjdEhTQ2wzRHRsWnRlMVFzUXlVRFQ4d0lTQTkrRWlPSDFWd3NFRGdCdFRkdm0vK2poQW5HNlZwdHVmS3dnUEV1dDk1VjlNMzFUdlJFaVZnS243YkRoSmJSSkFLci92bEEweDR3cUJTSGVMWE1yWnZqcW1sbTUyNU9ta2Nsb1MrTUlCQnY3UFBPQm04bENPZzNRdHRQSHFzSGI1d2F1MmVNWmhyMmE0MWE5Z0RKaFE4MGNQS3cva1VPcUZ6T0N0MDRFd1h4RmVFWEQ4THd5Zi96dnI5eVROeWVNS1psSkcyb1NxS1hxVGZQZkVja2Y5RlY4ODhuYmM4b2tPZ0Mwcy9weG9CQVFtVHhHclEzaHo5eFNONzk4dkJEaytoSHdHNjdabjczVGZMczFvOC96LzhuNEFRajJEYjc5UU1FOHZLUnFLcUZXU0RRTEZnQSs0UURRL3VwL2U2ajZ5ZXd4NUpURkNkOEw1OFZUeStUeStieUVlMEEzMzg3OUF3SzBCRUFnSTJnN2w4Mkduczg1QUJ6NHRpMHJjT0tHbWxaY3FrUU50djMvTDlrWHlkVjNZWk1wL0Q2QUFMRE9uRkFPVmI1QTRBRFExVzNjVnpWdThpOGZTMTc5dHRvL2FXd2dmRGFDWkVZR3hDeHAwMm54am5vL09CMEF1anNWOWhGTHkvYTM4cm9sL0NlV1ZmbU12ZW9IRktERTk4TldTenM1QUhSMXZxbXgwdDU5WTg0bzIrYzFXLzNXVFNZOC9OTGRlZXgrVHpKdjJnQzZmbmJGQnFnRFFCZFhGK25lUkVkTFVjRlR5NnRFQzlxRTZabUdPbnBVeVk0SUhBQTZ0ckhXNnNLZVI5Tzk5ckJ0LzhIRFNvUjZmTGFuUHNvdkxCL0ZBYURMNnZXR0dQVnEzMkRpOGkrRzZ2OXRQWXhRU085KzVzNjhLVlNWQzNBQTZNcFU4dWV4cFZieXA4bFFPbmhMM2pQdnU2bjNxVlpWQXEwT001U2VBMEIzcGhKQXcxYkp3NDRId1BKZFhpYTdiZnhQZkJVbGhlcWVBMEJYQVRCeVRUb0FyTmp0eWZQUEpGUzlZMzVGWldMQmI5S3N1MVJ3WndCNGJtVTZBR3d2WkxQYkpsL2x0UEZseTFkeEdxQm5TU0M3blBzYjkrVlZxdDN6Yk9Wdm5pZ0VRdDZXOTh5T3d2NEpNSGVYZkxOMnI4ZE9wQU5BdXl2ci9NbmxSQURJUVR4eGJJbHRYdVVCZWw2ZGpBWnFOZC9mbUs0aUtQMVVxVGQxZFMxamJLV0JaV2ZuYkszM2VJVWhVRjNwUjJnNU1VMFN2cXNJU3VsZEkwenNKbDA2ZHAxL2JETG9pQkVsODVLd0k2Z25xeTM5cW01YitHNDNNQXl4Um1pekpXWXpTTm9CZTB0Q0NPMGhFQXpCM2owSEFJU0dMU2UxeTk2K0FCQlhES0tJWU0xZXozemhyancrUk9aMStRNEFuV2ZhV01sV3BpMCtHcEEvc0t2b1UreEpKRUVOWVBwcUlBZUF3VmtLVGxHbW5SSk9DZ21aRExxR1BudG5YdDI4cXYwYmFzSnhmUUY0MHRNM2g1VTNLVUdnOStVcnZybHRYb1hhZkpKTDdER29pZE9CWWFoVUJkT0dqUUJ6RlFrNGZVT0kzbHV1K3ppVW1BWklJdEFzZ0FGdzJTd2dEZ0NEMlJRYzlFSlJXaUFXQkZFZ1JMdDV0K1k5Yy8raXF2bmJNMFh6NFZ1Q3RETm1ncWhEdlh5RGtBWEV0WVloSkNweGswRVFBd1E1aW5ib09HSk56Wnc5c1V6bkVVNG4wWWNjU0xzczNBRWdlKzRmTklFcWhWalI2YnVDbzcwRFVUQm9idGpuNFR6U0pnWmZFQ1hnQUkvaUR6bVJXUkZBdU81Z2dRQ0JvTDczbHRRaG5LQU5Fc0Jna3o0d2RDM1dmRnJDMk8yajhvY0VFMVA3RlZrQXdmRURjRldTNkhOMzVpRnlrbU1ZRVdLN0RDQVI3UkR4Ry9KVlA5aWUvdlBUUlJ4SE5CRy9KMHNnT0lvWWFnQlJ6V2RNS0VQZ1pBT0JhK3AyOE9hTm5hWVZKUXc4UlBBUllab0FvcmlLZWcwQ1J4SWxlNHhKK1BRZGVYUDcvQW9GbWwyampQR2JPSkhhbVZUdlAyM2xKSm1JSUd4dDRBRFFZNU9BSmdBSU9HNDN6YW1RRHJZY3ZLaGFOOHl1Y1FQQkZ2YnRCL0xVSTJnMzA3R0VaVUVaRjVpRkVBZ2Z2alhYY041SzFBa2dyQWdZMHJLSUpUT0JNQmxWTCtoSUptbkZWcllLVXh3QXNnSUNqcHJDdCs4L1ZEQlh6YWhndTYzOUJGMmpnTkR6N1dzRUJoWENIN3lacld3TEJBNEEyUUdCcStoZEFjVzM3czhIVkc3UHJxaEIzUklOL2FJY2cyMG5taGpVQUdydm9aY2djQUJJNk92bmIxUTBZQ0NlZjNmSUpYeGFDQWhTeEUzQWtBZ0UrM21CWUdmUk05OXNnTzFWTmdnY0FMSUhnelREMnkwMmNRR0M3aUlxZkdsSmd5REt6aENtU1RZSktESUhWQWwvN3E2OHRxSmRVZWhnbkcrM0FNRTJzVGFHZUExeWlvZVdWRTJmdFF1WmxoY0l3S2hZRmRDOTJXbUFvWFhBQktzVjlVM0c3MU4zNU0wVjA4dG1UOGxQdFJFbEVGUkRFTnc4dDhMMzZIc2RBSWJhd1JPRWRWUWJmL0wyUEN3azBjcWpsaVhyU2kzejRPZVB3VlltVStBQU1PUWlpbmVHeWFhWGhZV3ErWVRpRkQyVVB3RFJsVHFYbkFZWTRxSGxTeTd0NDdnWjJyK1NXVXN0VGZIN0o0dWlyWE1BR01xcFo0cEdjQlIvS09yYTJNWVZPWVFHdmdQSzBCd0FVdDFzZFFuRmRBOUpLRmtBQVJDOCtOSSt6aU9TcW0vcEMwZ0RvREU0a0lxRTFOc2NBSkxicDdoUk1aUFFLak1RMkdCWXNyT2UyTGNnRUZCUDhJb2tNK0E2ZzVqOUJORnM2bEM0R1oyc3BIZXFCekRiT2tWU3kvRmtWcFlaWUUrQ3p5U1RXVGtBMEF0QU9UZUZtelNKYXJMVnkwMGxoYXY0T3JNbVZvcFNZQlMzTnBsaXlTeXBLbklhSUNVQVd0Q3c2bWJEK3k4QVpCNGRRRk1qTTlCc0NBQnp0OVV4WDJtKzJ3RmdrUURnK2RHOHZMWmVkUnhMcHBsREVqemoxcVdqczJHUEFjQzJreHAyQVBEOVZqZFRteXhEaHM5b1E1OEhCYTREUUFjQWlCekVrTStVZTBkc0pta0JRSzBBSWFRRFFJY0FFQWpZejhjTVpPVlU2U0FKVXIwcEFFREkyUGhjWDZkYXl3RkFOL3JmenhjcHpRWUFtWElZck51WHpnbWswZVExbmZrdERnQldYQTJUV0daeDlkdkQxYysrZ0g1WFFoNEE2cnRPSXhjSEFEc1V2TmU2b1ZrbGdxNmVrVXhxTFExdzNPaVNBMEJuQU1oZXBkckgyVkVCdkMyZjdsQUxmak9FbHEvcGVGdllBVUMyRnY2Z0h0UEM5Vi9mR1c0RzBZU1N4R0ltc003Y0RKZGhOMzZuQTREZHRFa3hKMXJBUGlocXdMZURYM1NwQ0N1U2o3T1R1V0xuVVA1S0Y2cUNIQUNrQlZpRnJFaHVyamo4M3pZQXExNTIrLzh2M1FmVlRIQlFoUjJTK2pGYndadjZQUFArTGhKYU93QllRTkQ1dktlTUsxSHJULzJlVGcvcG1QdkhiakFoNFVOWkdDMWdDRmFUa2JUNmFWTnJvekRVQWVETkVRQWt0V1lKQ0RCOFhEcXR6QWxpbUlXbTNEOENSYk9wMTdYYVZRZElQZDl2bnloUzVtM1ovSGpoeS9aUDNkU0o3WGU3Z1ZaelovcXoreW5Wb21zWDdoK3loZVRmWHdVZ3JJT2p5ZUZUK3MzelhIbk04N3orc3ZDc1lYZ0dvWXRoYTFycVBvM3dwUm5nTGZqeVBXMDNoN2lTTUc3K3BJMDFuY1FSUy9qQWM4eFc3Vno4allrWXM3YUd2OUJ3eHNybVA4OFg2UUtpWERzNG5vN3I3NTRzQnFlUG5kVUFEU3hpODdiVm9ZbXhmUTRMalBIQ2w5YjYxM1BGQTFIOXJpUU1aK2xEdCtUTUkwdXFocEcrUGNzMkRSM1J4bWlrSXBxdzFiNkVmK3hvMit0M0pxRHRJZ3UwQUNvWmo1c1RSSnV2OE5UY1B3SUVVOTA5elAydk4zbVBIZDc1S2J1RDBWaUhERVA0SFIxajY3aUN4YjBEQ0lpOXFhY3JWR080Z1B5MHE5dFBtQWZFR0tKb2hNTWtPeFcrQTREdERLcUNocHVLVTNaSEV5NmdtazMvd2pUZEgwbkVrdzh2cVJMcjI3d0FFcjREd0VCd0FhRVJOdWM4Q2NBQ2cxUzdadWRDajM2L0hpdk1ZOVcvTE9BZVJ2aU9JNmduWEVBa2ZONTdVODRjT3F3RUViU3RGYUxhUWM2WmdKRTRvejZCelRNazhtbk9OYVRkaTgwZEVVRzh6YkdFOVJZSVJBdUs2V0h6UEhKa0NhcFhFa0syMEZwbUViM0lqRHFYZm9RNWRGcGp0Vjh3cFN3S0dLYk5FNmlPcGw1UFJ4UDNkcXQ3VjA0amZFQkhqaWlabStkVXpQQ0dobGk4c3g2YzVWZW9XczVqa3l0SkpOcTR5RVMrc0twbXJwNVpNZjk0dGdnektTbm02QUVVbVR0NmppYU9heFA2RjFRemdFQmdyRlFBOC82YmNwQktOc0JSZ0IwOHNOMGtoSDcxZU1IODdOR0MrZjZEQldoZDZFcmlPOGovSzNNSXdLTHM0WU41eGJ2dVlBbUxLV0lHVEFhQ0JCeXZ0bExBVEZMQ1BNZnJhdDU0dXo0L2xNNFBjQUJJQmdhejZZWVFyN2tUUS83WG5obmNOQXlEVWRodHhRS0lJeEptRjhRQ2xaaU1aQW9Pak1FTk9MQUJkOEE1RmhmZWwveVFpZ21vOHc1ZmZ1UFlGMzhQMTRwYnh6Z0F4Z0V3RG9CeEFJd0RZQndBQjZDallaWUk3bFB1U3ZWaUxKRHBBcXVtM0plM3FiTjRVUlpER2YvN2NjOE84QlNYRzN1cWFaM1pOZTRKd0cyOHFOUkZZQ29WOXdUZ1dpeHNBUXpPY1ovT3U5ZFY3c3ZEOUtMNUE2RUp4empIUFFGZ0Y3aVpEZ1hEcHhlb2JYQ01hNXlMbEpTSXRWQUloanRWQnUyYVhRQ3p3ekd1eGVnK1pUMEU5VXk4akFPYUM0SEpJUi9INFhwMHo0T2ZnSTJnZmFHQmN3Z2FPQk9ZVW4vazR4YkhoODVwck1Sdmh6ak4zWEFmbjRqM1FjMnEvbGgwQkNBNm5PRU9jSWxUM1A1eHZlS1JMdFVRMUxVbUEvMWJKZVZSOVN0Yi9OR0JzM0NIdzYxSXVKVmpNVHVuQVljN0FZZkNqZENFanhQOWZTVjZUWDVXZlJmMS8xMGdHWnpnQmtmaHFzY2REa1hDS1c3RjdGcDhBMS9KSnlVTGY2WDJBQUFBQUVsRlRrU3VRbUNDJyxcbiAgICAgICAgYWRhcHRlcjogKCkgPT4gbmV3IFNvbGxldFdhbGxldEFkYXB0ZXIoY29uZmlnKSxcbiAgICB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb2xsZXRFeHRlbnNpb24uanMubWFwIiwiaW1wb3J0IHsgU29sb25nV2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItc29sb25nJztcbmltcG9ydCB7IFdhbGxldE5hbWUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCBjb25zdCBnZXRTb2xvbmdXYWxsZXQgPSAoY29uZmlnID0ge30pID0+ICh7XG4gICAgbmFtZTogV2FsbGV0TmFtZS5Tb2xvbmcsXG4gICAgdXJsOiAnaHR0cHM6Ly9zb2xvbmd3YWxsZXQuY29tJyxcbiAgICBpY29uOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGQUFBQUJRQ0FZQUFBQ09FZkt0QUFBR2xrbEVRVlI0QWUzYkE1RHN5aGZIOFROcjQ5cjIvZHUyYmR1MmJkdTJ6Y2ROcm0zYjl0b3o1MzNydmN0VW4zVW1rOXAwMVdmZHZWVy82blJPQnhKVlMxclNrcGEwcENVdGFVbExXdEtTcGw0VlhvczNHSjRzdWpRRnVVS2ZXbCtxVDczMGFyekI4RXg5WWtzS2NnWGpGT0NWZUlQaEJZeWRCOG1hd1EreWlHQzhuMEVONnpBVmNnWGhwUWpvcTFERGRzeURBQUI5UHdvMUhNQzlJTmswRklNOEJ0MVFoOVdvaFFRQ3ZEK0J0RU1kdG1DOEk3eTVhSUU2N01WMFNCd0R2QjNxc0UvVUh3TUpJcEMvUUIxT1lpTEVFZUNQb1E3bk1SY1N3d0RyYW8zWmw4YVRJRUdFVVlsTDBJQU1YdVFPcjY2VXZzZWdEbStFeERKQVBOaWFmU2cwQWx5SWJtakFXWDFhUXpFa2lINlQwUWtOYUVkcG5BTjhOTlJoUGNTRjllOWVsMmViQmh5QXVOQnZHdExRZ0l1UU9BZDRENmpETVJRYk0zQW1PcUVCRGZxMHhqSklFUDNHb2hrYWtFRlZqQVAweTQwMXNBc0xuQUUrcGI2RXNDNUFBOUo0c0hzRytrWDBQUVIxZUZKOEF3VFdRaDArRGpGbTRhMVFoMi9BT296L0JIWDRaZHdEL0NEVTRhaW9YMkdVTVcrQU9uQjJicWlCQkRIZTg2RU9UWXc1R1JLSndRL2lqVU05MU9HVHhneXN4U21vd3plTnc3ajA4bTVESFg0bDdJZ2cyVFkwZzloYkxCWitmN294Qzk4Q2RXakR2WXpEK01WUWgwN0dmRVFzWnlEZ1ZXQTcxT0d2b3JmblFRQ0FjcWFZVUZaREhXNmovaXRBb0I3MEdjZXJnenFzRWEwcmhHVFRFQTdtUDBrb0s0eGR5ZU9NbXZCQmhKVTJ6c2pQTXc3bHU5TzN6U2hwWGhlSGs0aGhjWjR3MjZBT0c0UlN4RGlVZndaMTJLZFBxeStGQkRIZVY2RU9aeGl6SWc2SHNNR2JpUTVqZGp6QlhSZmVlZkdnM3RnYnY5QllDMGZoWkU3c2pVTVk5UGY5cmRjSTVYdFFoMzlCakJBL0MzVlluTTB6Y2dpRGVrK0dPaHpoOTNtUW9NczdrSXh6ZS9lTWhueElFT1BOTTliY0Z0VEVlQWI2STQxOWF4dS9tMkNzZ3hVNEF3MUEvVXhJVU0vYk8vOStjVmtERGQ1eDQyeDhOMWlIOFRhb3cwTmhIY1pMb1E1UGkvTU16RE1XK0RUdTdnNnZJWTlBZGtBZEhtYVVNeW42cm9BNlBEMjJBZUxCNkRiV3BsSEc3THViZlkra2ZpSWtpSDVUMEFKMXVGdE1BMXhVek9jMVVJY2x6dkNlWEYrbzdEeWdEbHZkczI5UmdWVnpZaitLNHhoZ0VYNE5kY2pnZWNFKytyU0wrWmRMbUl4UkI3N09zZTdsNFhQSVFCM2VGOE02MEMvbjgrK2dobHRFL1FMSUZmcVVpeVVFOGtPb1lTVzdqbUxJRlhlTjRYME5hYWpERGxHL05HNlhzd3J4S2R4dStHL3dlaDI3ajN3Q2VqOXVOOXpFT2pjM3NPYmw0UzI0M1hCTGhEZldFMG1BTVFqd1pmaHhEbmc3cEcvOFNqNC9FUi9HZC9CZGZCaFBSR1cyQS93eE5BZmNCT25GQ0h3Wlo2R0dzL2dxYXBNQWIvUUVuSVQyMFVrOElRa1FlQjdhb2YzVWloY005d0R2aHlib0FOSFh2MStJZFdCT0IyaHNJZnR0bytpU1BFaWY4YUdQY2pyQTUwR0h5UE1pT0lUOUIvTjVhcGFNZ1FUOEQycG94TWR3dDhzK2hrYW80WDlaRHhCVElkSHd5L2g4QWVxUXhoTWhBVTlCQjlUaFBNcUhUWUNZalU2b3d5M3VQc3RTZkw0WjZ1WlBDK01rOGdPb216OERFZzN2WHNoQUhiNE1NWHdaYXJoWEdEUHdhNzM5dzJqNDg2MjNCUEFuaU9GUFVNUHNNQUw4SU5UdzlBZ0RyTFpPQ21qRlBFakEzV0QxYVVKVkdBRytDR3I0RUNSQ3k2R0dnM2l5YUYwK24vUHdGQnlFR3BhSitxa3cxc0I3UUEzL2hVVG96ZEJldEZ5bXZYaFRXR1ZNT2M3YnAzNi9GaEtSYW1OVzlkY3habXBaaUkrMzJhZCt2QVFTb1dlakd6cEFYWGgyMkZlazN3WTFyREQya1ZuaWpSM0V4WVFNUGdrSk9VQi9uRlcwSXMzdm53NkpobEhYOWE0TjcwSXEvQUNCdjBNTnU3SjlXeEh3N2phQTJkZUZPdHczMnplVkh0SExXdk1OMGR0U2tPendTM3NwWXk3aUgxaHgyZC93WWR5VHZua1IzQmRlUWpqZXJWQkROMTRKeVpJZlFXSDVSQzdlMXJ3MzJucFpWNTRMQ2MrU1BENS9IZ3FZRDNXVzUrZ1RxdDZYK3JBNHYwNzAxaFJrS0YwK2JMK0hUTTlIZ3YvTUhINjB3eXZIV2lnc2Fmd0ExWkFoTWd1TG9MMzRrYkRjUUVJMXVBSDhtY2J1eFBISW1mOGk1RU1HeHF2RVI5RUk3Y1VxVk1UbDBZNkhveEhhQnp2eE5reUM5RUVlN29FdjRTeTBEL1lRK0lTNHZlcjFKTlQzOHo3c1dud2JiOFRUOENnOEdzL0d1L0FyN0VFWHRJLzJ1ZDdOaTBHQVlDYmlKRFFpYXpBNTdrOW5UY2RxYUpiOVV0U3ZpdFhibWphdkNKOUFNelJrSi9CODBib1VKQkxoRGU3TncxL1FDUjFpOWZnS1JnNkhCeXp2alovaEluUVFNamlDVDJQU01IeEMxYS9sOHd2d0d4eUc5a0VhVy9FdFBJNHhpaUU1SmNMcmQ2UHhjTHdNNzhTSDhFRzhGYy9IL1VVWFZVQnlHaDhTU1lCSmdFbUFTWUNKSk1Ba3dCaTZBM3hDcVpoaUJ6OCtBQUFBQUVsRlRrU3VRbUNDJyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgU29sb25nV2FsbGV0QWRhcHRlcihjb25maWcpLFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb2xvbmcuanMubWFwIiwiaW1wb3J0IHsgVG9ydXNXYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci10b3J1cyc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0VG9ydXNXYWxsZXQgPSAoY29uZmlnKSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuVG9ydXMsXG4gICAgdXJsOiAnaHR0cHM6Ly90b3IudXMnLFxuICAgIGljb246ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJtYVd4c1BTSnViMjVsSWlCb1pXbG5hSFE5SWpjeUlpQjNhV1IwYUQwaU56SWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0p0T1M0ME1EWTVNU0F3WXkwekxqY3lNamN4SURBdE5pNDNOREExTmlBekxqQXhOemcwTFRZdU56UXdOVFlnTmk0M05EQTFOWFkzTGpnMU1qSTFZekFnTXk0M01qSTNJRE11TURFM09EVWdOaTQzTkRBMUlEWXVOelF3TlRVZ05pNDNOREExYURFeExqa3lOVGcxZGpRekxqa3lOakZqTUNBekxqY3lNamNnTXk0d01UYzVJRFl1TnpRd05pQTJMamMwTURZZ05pNDNOREEyYURjdU9EVXlNbU16TGpjeU1qY2dNQ0EyTGpjME1EWXRNeTR3TVRjNUlEWXVOelF3TmkwMkxqYzBNRFoyTFRVd0xqWXdPVFZqTGpBd01ERXRMakF4T1RFdU1EQXdNaTB1TURNNE1TNHdNREF5TFM0d05UY3hkaTAzTGpnMU1qSTBZekF0TXk0M01qSTNNUzB6TGpBeE56a3ROaTQzTkRBMU5pMDJMamMwTURZdE5pNDNOREExTm1ndE55NDROVEkwTFRFNExqWTJOalEwZWlJZ1ptbHNiRDBpSXpBek5qUm1aaUlnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWk4K1BIQmhkR2dnWkQwaWJUVTRMalkyTmprMUlESXhMak16TXpOak5TNDRPVEV4SURBZ01UQXVOalkyTnkwMExqYzNOVFlnTVRBdU5qWTJOeTB4TUM0Mk5qWTJJREF0TlM0NE9URXdOeTAwTGpjM05UWXRNVEF1TmpZMk55MHhNQzQyTmpZM0xURXdMalkyTmpjdE5TNDRPVEVnTUMweE1DNDJOalkySURRdU56YzFOak10TVRBdU5qWTJOaUF4TUM0Mk5qWTNJREFnTlM0NE9URWdOQzQzTnpVMklERXdMalkyTmpZZ01UQXVOalkyTmlBeE1DNDJOalkyZWlJZ1ptbHNiRDBpSXpGaFl6ZG1aU0l2UGp3dmMzWm5QZz09JyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgVG9ydXNXYWxsZXRBZGFwdGVyKGNvbmZpZyksXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvcnVzLmpzLm1hcCIsImV4cG9ydCB2YXIgV2FsbGV0TmFtZTtcbihmdW5jdGlvbiAoV2FsbGV0TmFtZSkge1xuICAgIC8vIEJpdEtlZXAgPSAnQml0S2VlcCcsIC8vIG5vdCBwdWJsaXNoZWQgeWV0XG4gICAgV2FsbGV0TmFtZVtcIkJpdHBpZVwiXSA9IFwiQml0cGllXCI7XG4gICAgV2FsbGV0TmFtZVtcIkJsb2N0b1wiXSA9IFwiQmxvY3RvXCI7XG4gICAgV2FsbGV0TmFtZVtcIkNsb3ZlclwiXSA9IFwiQ2xvdmVyXCI7XG4gICAgV2FsbGV0TmFtZVtcIkNvaW45OFwiXSA9IFwiQ29pbjk4XCI7XG4gICAgV2FsbGV0TmFtZVtcIkxlZGdlclwiXSA9IFwiTGVkZ2VyXCI7XG4gICAgV2FsbGV0TmFtZVtcIk1hdGhXYWxsZXRcIl0gPSBcIk1hdGhXYWxsZXRcIjtcbiAgICBXYWxsZXROYW1lW1wiUGhhbnRvbVwiXSA9IFwiUGhhbnRvbVwiO1xuICAgIFdhbGxldE5hbWVbXCJTYWZlUGFsXCJdID0gXCJTYWZlUGFsXCI7XG4gICAgV2FsbGV0TmFtZVtcIlNsb3BlXCJdID0gXCJTbG9wZVwiO1xuICAgIFdhbGxldE5hbWVbXCJTb2xmbGFyZVwiXSA9IFwiU29sZmxhcmVcIjtcbiAgICBXYWxsZXROYW1lW1wiU29sZmxhcmVXZWJcIl0gPSBcIlNvbGZsYXJlIChXZWIpXCI7XG4gICAgV2FsbGV0TmFtZVtcIlNvbGxldFwiXSA9IFwiU29sbGV0XCI7XG4gICAgV2FsbGV0TmFtZVtcIlNvbGxldEV4dGVuc2lvblwiXSA9IFwiU29sbGV0IChFeHRlbnNpb24pXCI7XG4gICAgV2FsbGV0TmFtZVtcIlNvbG9uZ1wiXSA9IFwiU29sb25nXCI7XG4gICAgV2FsbGV0TmFtZVtcIlRvcnVzXCJdID0gXCJUb3J1c1wiO1xuICAgIC8vIFdhbGxldENvbm5lY3QgPSAnV2FsbGV0Q29ubmVjdCcsIC8vIG5vdCBwdWJsaXNoZWQgeWV0XG59KShXYWxsZXROYW1lIHx8IChXYWxsZXROYW1lID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsIi8vIGltcG9ydCB7IFdhbGxldCwgV2FsbGV0TmFtZSB9IGZyb20gJy4vdHlwZXMnO1xuLy9cbi8vIEBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0Y29ubmVjdCBpc24ndCBwdWJsaXNoZWQgdG8gTlBNIHlldFxuLy9cbi8vIGV4cG9ydCBjb25zdCBnZXRXYWxsZXRDb25uZWN0V2FsbGV0ID0gKGNvbmZpZzogV2FsbGV0Q29ubmVjdFdhbGxldEFkYXB0ZXJDb25maWcpOiBXYWxsZXQgPT4gKHtcbi8vICAgICBuYW1lOiBXYWxsZXROYW1lLldhbGxldENvbm5lY3QsXG4vLyAgICAgdXJsOiAnaHR0cHM6Ly93YWxsZXRjb25uZWN0Lm9yZycsXG4vLyAgICAgaWNvbjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5Qm9aV2xuYUhROUlqRTROU0lnZG1sbGQwSnZlRDBpTUNBd0lETXdNQ0F4T0RVaUlIZHBaSFJvUFNJek1EQWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGliVFl4TGpRek9EVTBNamtnTXpZdU1qVTJNall4TW1NME9DNDVNVEV5TWpReExUUTNMamc0T0RFMk5qTWdNVEk0TGpJeE1UazROekV0TkRjdU9EZzRNVFkyTXlBeE56Y3VNVEl6TWpBNU1TQXdiRFV1T0RnMk5UUTFJRFV1TnpZek5ERTNOR015TGpRME5UVTJNU0F5TGpNNU5EUXdPREVnTWk0ME5EVTFOakVnTmk0eU56WTFNVEV5SURBZ09DNDJOekE1TWpBMGJDMHlNQzR4TXpZMk9UVWdNVGt1TnpFMU5UQXpZeTB4TGpJeU1qYzRNU0F4TGpFNU56SXdOVEV0TXk0eU1EVXpJREV1TVRrM01qQTFNUzAwTGpReU9EQTRNU0F3YkMwNExqRXdNRFU0TkMwM0xqa3pNVEUwTnpsakxUTTBMakV5TVRZNU1pMHpNeTQwTURjNU9ERTNMVGc1TGpRME16ZzROaTB6TXk0ME1EYzVPREUzTFRFeU15NDFOalUxTnpnNElEQnNMVGd1TmpjMU1EVTJNaUE0TGpRNU16WXdOVEZqTFRFdU1qSXlOemd4TmlBeExqRTVOekl3TkRFdE15NHlNRFV6TURFZ01TNHhPVGN5TURReExUUXVOREk0TURnd05pQXdiQzB5TUM0eE16WTJPVFE1TFRFNUxqY3hOVFV3TXpGakxUSXVORFExTlRZeE1pMHlMak01TkRRd09USXRNaTQwTkRVMU5qRXlMVFl1TWpjMk5URXlNaUF3TFRndU5qY3dPVEl3TkhwdE1qRTRMamMyTnpjNU5qRWdOREF1Tnpjek56UTBPU0F4Tnk0NU1qRTJPVGNnTVRjdU5UUTJPRGszWXpJdU5EUTFOVFE1SURJdU16azBNemsyT1NBeUxqUTBOVFUyTXlBMkxqSTNOalEzTmprdU1EQXdNRE14SURndU5qY3dPRGc1T1d3dE9EQXVPREV3TVRjeElEYzVMakV5TVRFek5HTXRNaTQwTkRVMU5EUWdNaTR6T1RRME1qWXROaTQwTVRBMU9ESWdNaTR6T1RRME5UTXRPQzQ0TlRZeE5pNHdNREF3TmpJdExqQXdNREF4TFM0d01EQXdNUzB1TURBd01ESXlMUzR3TURBd01qSXRMakF3TURBek1pMHVNREF3TURNeWJDMDFOeTR6TlRReE5ETXROVFl1TVRVME5UY3lZeTB1TmpFeE16a3RMalU1T0RZd01pMHhMall3TWpZMUxTNDFPVGcyTURJdE1pNHlNVFF3TkNBd0xTNHdNREF3TURRdU1EQXdNREEwTFM0d01EQXdNRGN1TURBd01EQTRMUzR3TURBd01URXVNREF3TURFeGJDMDFOeTR6TlRJNU1qRXlJRFUyTGpFMU5EVXpNV010TWk0ME5EVTFNelk0SURJdU16azBORE15TFRZdU5ERXdOVGMxTlNBeUxqTTVORFEzTWkwNExqZzFOakUyTVRJdU1EQXdNRGczTFM0d01EQXdNVFF6TFM0d01EQXdNVFF0TGpBd01EQXlPVFl0TGpBd01EQXlPQzB1TURBd01EUTBPUzB1TURBd01EUTBiQzA0TUM0NE1USTBNVGswTXkwM09TNHhNakl4T0RWakxUSXVORFExTlRZd01qRXRNaTR6T1RRME1EZ3RNaTQwTkRVMU5qQXlNUzAyTGpJM05qVXhNVFVnTUMwNExqWTNNRGt4T1Rkc01UY3VPVEl4TnpJNU5qTXRNVGN1TlRRMk9EWTNNMk15TGpRME5UVTJNREl0TWk0ek9UUTBNRGd5SURZdU5ERXdOVGs0T1MweUxqTTVORFF3T0RJZ09DNDROVFl4TmpBeUlEQnNOVGN1TXpVME9UYzNOU0ExTmk0eE5UVXpOVGRqTGpZeE1UTTVNRGd1TlRrNE5qQXlJREV1TmpBeU5qUTVMalU1T0RZd01pQXlMakl4TkRBek9UZ2dNQ0F1TURBd01EQTVNaTB1TURBd01EQTVMakF3TURBeE56UXRMakF3TURBeE55NHdNREF3TWpZMUxTNHdNREF3TWpSc05UY3VNelV5TVRBek1TMDFOaTR4TlRVek16TmpNaTQwTkRVMU1EVXRNaTR6T1RRME5qTXpJRFl1TkRFd05UUTBMVEl1TXprME5UVXpNU0E0TGpnMU5qRTJNUzB1TURBd01pNHdNREF3TXpRdU1EQXdNRE16Tmk0d01EQXdOamd1TURBd01EWTNNeTR3TURBeE1ERXVNREF3TVRBeGJEVTNMak0xTkRrd01pQTFOaTR4TlRVME16SmpMall4TVRNNUxqVTVPRFl3TVNBeExqWXdNalkxTGpVNU9EWXdNU0F5TGpJeE5EQTBJREJzTlRjdU16VXpPVGMxTFRVMkxqRTFORE15TkRsak1pNDBORFUxTmpFdE1pNHpPVFEwTURreUlEWXVOREV3TlRrNUxUSXVNemswTkRBNU1pQTRMamcxTmpFMklEQjZJaUJtYVd4c1BTSWpNMkk1T1daaklpOCtQQzl6ZG1jKycsXG4vLyAgICAgYWRhcHRlcjogKCkgPT4gbmV3IFdhbGxldENvbm5lY3RXYWxsZXRBZGFwdGVyKGNvbmZpZyksXG4vLyB9KTtcbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldGNvbm5lY3QuanMubWFwIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJXYWxsZXRQcm92aWRlciIsImdldFBoYW50b21XYWxsZXQiLCJnZXRTb2xmbGFyZVdhbGxldCIsImdldFNvbGxldFdhbGxldCIsIk15V2FsbGV0UHJvdmlkZXIiLCJwcm9wcyIsIndhbGxldHMiLCJFdmVudEVtaXR0ZXIiLCJCYXNlV2FsbGV0QWRhcHRlciIsIldhbGxldEFkYXB0ZXJOZXR3b3JrIiwiV2FsbGV0RXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsImVycm9yIiwiV2FsbGV0Tm90Rm91bmRFcnJvciIsImFyZ3VtZW50cyIsIm5hbWUiLCJXYWxsZXROb3RJbnN0YWxsZWRFcnJvciIsIldhbGxldE5vdFJlYWR5RXJyb3IiLCJXYWxsZXRDb25uZWN0aW9uRXJyb3IiLCJXYWxsZXREaXNjb25uZWN0ZWRFcnJvciIsIldhbGxldERpc2Nvbm5lY3Rpb25FcnJvciIsIldhbGxldEFjY291bnRFcnJvciIsIldhbGxldFB1YmxpY0tleUVycm9yIiwiV2FsbGV0S2V5cGFpckVycm9yIiwiV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IiLCJXYWxsZXRTZW5kVHJhbnNhY3Rpb25FcnJvciIsIldhbGxldFNpZ25NZXNzYWdlRXJyb3IiLCJXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciIsIldhbGxldFRpbWVvdXRFcnJvciIsIldhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciIsIldhbGxldFdpbmRvd0Nsb3NlZEVycm9yIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwicG9sbCIsImNhbGxiYWNrIiwiaW50ZXJ2YWwiLCJjb3VudCIsInNldFRpbWVvdXQiLCJwb2xsVW50aWxSZWFkeSIsImFkYXB0ZXIiLCJwb2xsSW50ZXJ2YWwiLCJwb2xsQ291bnQiLCJyZWFkeSIsImVtaXQiLCJjb25zb2xlIiwid2FybiIsIl9fcmVzdCIsInMiLCJ0IiwicCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwibGVuZ3RoIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJCYXNlU2lnbmVyV2FsbGV0QWRhcHRlciIsInNlbmRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uIiwiY29ubmVjdGlvbiIsIm9wdGlvbnMiLCJmZWVQYXllciIsInB1YmxpY0tleSIsInVuZGVmaW5lZCIsInJlY2VudEJsb2NraGFzaCIsImdldFJlY2VudEJsb2NraGFzaCIsImJsb2NraGFzaCIsInNpZ25lcnMiLCJzZW5kT3B0aW9ucyIsInBhcnRpYWxTaWduIiwic2lnblRyYW5zYWN0aW9uIiwicmF3VHJhbnNhY3Rpb24iLCJzZXJpYWxpemUiLCJzZW5kUmF3VHJhbnNhY3Rpb24iLCJCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIiLCJQdWJsaWNLZXkiLCJQaGFudG9tV2FsbGV0QWRhcHRlciIsImNvbmZpZyIsIl9kaXNjb25uZWN0ZWQiLCJ3YWxsZXQiLCJfd2FsbGV0Iiwib2ZmIiwiX3B1YmxpY0tleSIsIl9jb25uZWN0aW5nIiwiX2EiLCJ3aW5kb3ciLCJzb2xhbmEiLCJpc1BoYW50b20iLCJjb25uZWN0aW5nIiwiY29ubmVjdGVkIiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0IiwiaGFuZGxlRGlzY29ubmVjdCIsIl9oYW5kbGVEaXNjb25uZWN0IiwiYXJncyIsIm9uIiwiY2F0Y2giLCJyZWFzb24iLCJ0b0J5dGVzIiwiZGlzY29ubmVjdCIsInNpZ25BbGxUcmFuc2FjdGlvbnMiLCJ0cmFuc2FjdGlvbnMiLCJzaWduTWVzc2FnZSIsInNpZ25hdHVyZSIsIlVpbnQ4QXJyYXkiLCJmcm9tIiwiQ29ubmVjdGlvbiIsIlJlYWN0IiwiQ29ubmVjdGlvbkNvbnRleHQiLCJDb25uZWN0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsImVuZHBvaW50IiwiY29tbWl0bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXYWxsZXROb3RTZWxlY3RlZEVycm9yIiwidXNlTG9jYWxTdG9yYWdlIiwiV2FsbGV0Q29udGV4dCIsImluaXRpYWxTdGF0ZSIsImF1dG9Db25uZWN0Iiwib25FcnJvciIsImxvY2FsU3RvcmFnZUtleSIsInNldE5hbWUiLCJzZXRTdGF0ZSIsInNldENvbm5lY3RpbmciLCJkaXNjb25uZWN0aW5nIiwic2V0RGlzY29ubmVjdGluZyIsImlzQ29ubmVjdGluZyIsImlzRGlzY29ubmVjdGluZyIsIndhbGxldHNCeU5hbWUiLCJyZWR1Y2UiLCJjdXJyZW50Iiwic2VsZWN0IiwibmV3TmFtZSIsIm9uUmVhZHkiLCJzdGF0ZSIsImFzc2lnbiIsIm9uQ29ubmVjdCIsIm9uRGlzY29ubmVjdCIsIm9wZW4iLCJ1cmwiLCJ1c2VXYWxsZXQiLCJ1c2VBbmNob3JXYWxsZXQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUNvbm5lY3Rpb24iLCJrZXkiLCJkZWZhdWx0U3RhdGUiLCJzZXRWYWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRMb2NhbFN0b3JhZ2UiLCJuZXdWYWx1ZSIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiU29sZmxhcmVXYWxsZXRBZGFwdGVyIiwic29sZmxhcmUiLCJpc1NvbGZsYXJlIiwiV2FsbGV0IiwiU29sbGV0V2FsbGV0QWRhcHRlciIsIl9wcm92aWRlciIsInByb3ZpZGVyIiwic29sbGV0IiwiX25ldHdvcmsiLCJuZXR3b3JrIiwiTWFpbm5ldCIsInBvc3RNZXNzYWdlIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsInNldEludGVydmFsIiwicG9wdXAiLCJfcG9wdXAiLCJjbG9zZWQiLCJjbGVhckludGVydmFsIiwiX3Jlc3BvbnNlUHJvbWlzZXMiLCJNYXAiLCJzaWduIiwiQml0cGllV2FsbGV0QWRhcHRlciIsIldhbGxldE5hbWUiLCJnZXRCaXRwaWVXYWxsZXQiLCJCaXRwaWUiLCJpY29uIiwiQmxvY3RvV2FsbGV0QWRhcHRlciIsImdldEJsb2N0b1dhbGxldCIsIkJsb2N0byIsIkNsb3ZlcldhbGxldEFkYXB0ZXIiLCJnZXRDbG92ZXJXYWxsZXQiLCJDbG92ZXIiLCJDb2luOThXYWxsZXRBZGFwdGVyIiwiZ2V0Q29pbjk4V2FsbGV0IiwiQ29pbjk4IiwiTGVkZ2VyV2FsbGV0QWRhcHRlciIsImdldExlZGdlcldhbGxldCIsIkxlZGdlciIsIk1hdGhXYWxsZXRXYWxsZXRBZGFwdGVyIiwiZ2V0TWF0aFdhbGxldCIsIk1hdGhXYWxsZXQiLCJQaGFudG9tIiwiU2FmZVBhbFdhbGxldEFkYXB0ZXIiLCJnZXRTYWZlUGFsV2FsbGV0IiwiU2FmZVBhbCIsIlNsb3BlV2FsbGV0QWRhcHRlciIsImdldFNsb3BlV2FsbGV0IiwiU2xvcGUiLCJTb2xmbGFyZSIsImdldFNvbGZsYXJlV2ViV2FsbGV0IiwiU29sZmxhcmVXZWIiLCJTb2xsZXQiLCJnZXRTb2xsZXRFeHRlbnNpb25XYWxsZXQiLCJTb2xsZXRFeHRlbnNpb24iLCJTb2xvbmdXYWxsZXRBZGFwdGVyIiwiZ2V0U29sb25nV2FsbGV0IiwiU29sb25nIiwiVG9ydXNXYWxsZXRBZGFwdGVyIiwiZ2V0VG9ydXNXYWxsZXQiLCJUb3J1cyJdLCJzb3VyY2VSb290IjoiIn0=