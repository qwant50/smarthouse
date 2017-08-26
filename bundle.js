/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Helper__ = __webpack_require__(4);



class DeviceCore {
    constructor(name) {
        this.availableStates = ['on', 'off', 'idle'];
        this._state = this.availableStates[1];
        this.id = __WEBPACK_IMPORTED_MODULE_0__Helper__["a" /* default */].uuidv4;
        this.name = name || 'Unnamed device';
    }

    toString() {
        return 'Name: ' + this.name + ' ID:' + this.id + ', State: ' + this.state;
    }

    validateState(state) {
        return this.availableStates.indexOf(state) > -1;
    }

    set state(state) {
        state = state.toLowerCase();
        if (this.validateState(state)) {
            this._state = state;
        } else {
            throw new RangeError('Incorrect state. Available states are: ' + this.availableStates.join(','));
        }
    }

    get state() {
        return this._state;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DeviceCore;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DeviceCore__ = __webpack_require__(0);



class Television extends __WEBPACK_IMPORTED_MODULE_0__DeviceCore__["a" /* default */] {
    constructor(name, wifiModule, options) {
        super(name);
        this.options = Object.assign({
            MIN_CHANNEL_NUMBER: 1,
            MAX_CHANNEL_NUMBER: 999,
            MIN_VOLUME_LEVEL: 0,
            MAX_VOLUME_LEVEL: 100
        }, options || {});
        this._channelNumber = this.options.MIN_CHANNEL_NUMBER;
        this.volumeLevel = this.options.MIN_VOLUME_LEVEL;
        this.wifi = wifiModule;
    }

    set wiFiState(state) {
        this.wifi.state = state;
    }

    get wiFiState() {
        return this.wifi.state;
    }

    get channel() {
        return this._channelNumber;
    }

    isChannelValid(channelNumber) {
        if (isNaN(channelNumber)) {
            throw new TypeError('Channel number must be a number');
        }
        if (channelNumber < this.options.MIN_CHANNEL_NUMBER || channelNumber > this.options.MAX_CHANNEL_NUMBER) {
            throw new RangeError('Incorrect channel number. Channel number must be in range from ' +
                this.options.MIN_CHANNEL_NUMBER + ' to ' + this.options.MAX_CHANNEL_NUMBER);
        }
        return true;
    }

    set channel(channelNumber) {
        if (this.isChannelValid(channelNumber)) {
            this._channelNumber = channelNumber;
        }
    };

    setNextChannel() {
        this._channelNumber = this._channelNumber === this.options.MAX_CHANNEL_NUMBER ? this.options.MIN_CHANNEL_NUMBER : this._channelNumber++;
    };

    setPrevChannel() {
        this._channelNumber = this._channelNumber === this.options.MIN_CHANNEL_NUMBER ? this.options.MAX_CHANNEL_NUMBER : this._channelNumber--;
    };
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Television;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DeviceCore__ = __webpack_require__(0);



class Timer extends __WEBPACK_IMPORTED_MODULE_0__DeviceCore__["a" /* default */] {
    constructor(name, wifiModule) {
        super(name);
    }

    static getCurrentTime() {
        return (new Date).toString();
    };

    /**
     *  set timer
     *
     * @param delayInMinutes
     * @param callback
     * @returns {number} id's timer
     */
    static setDelay(delayInMinutes, callback) {
        return setTimeout(callback, delayInMinutes * 60 * 1000);
    };
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DeviceCore__ = __webpack_require__(0);



class WiFi extends __WEBPACK_IMPORTED_MODULE_0__DeviceCore__["a" /* default */] {
    constructor(name, state, DCHPStatus, IP, mask, gateway) {
        super(name);
        this.isDHCPActive = true;
        this.IP = '127.0.0.1';
        this.mask = '255.255.255.0';
        this.gateway = '127.0.0.1';
        this.state = state;
    }

    connect() {

    }

    getData() {

    }

    sendData() {

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WiFi;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Helper {
    static get uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    };
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Helper;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Timer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WiFi__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Television__ = __webpack_require__(1);





'use strict';

console.log(__WEBPACK_IMPORTED_MODULE_0__Timer__["a" /* default */].getCurrentTime());
let television = new __WEBPACK_IMPORTED_MODULE_2__Television__["a" /* default */]('Kitchen TV', new __WEBPACK_IMPORTED_MODULE_1__WiFi__["a" /* default */]('Kitchen WiFi', 'idle', true));
television.state = 'on';
television.channel = 31;

console.dir(television.state);
console.dir(television);
alert(television.channel);
alert(television.toString());

// set delay 1 min
__WEBPACK_IMPORTED_MODULE_0__Timer__["a" /* default */].setDelay(1, () => {
    television.state = 'off';
    alert('TV has been taken off after 1 minute. Current state is: ' + television.state);
});

/***/ })
/******/ ]);