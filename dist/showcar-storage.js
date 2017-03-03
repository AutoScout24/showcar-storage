/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var stores = {
	    local: __webpack_require__(1),
	    session: __webpack_require__(2),
	    cookie: __webpack_require__(3)
	};
	
	var Storage = function () {
	    /**
	     * @constructor
	     * @param {string} type The store backend to use
	     * @param {boolean} [silent=true] Whether to throw exceptions or fail silently returning false
	     */
	    function Storage(type) {
	        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	            _ref$silent = _ref.silent,
	            silent = _ref$silent === undefined ? true : _ref$silent;
	
	        _classCallCheck(this, Storage);
	
	        if (!(type in stores)) {
	            this.fail('Storage: Unsupported type ' + type);
	        }
	
	        this.silent = !!silent;
	        this.store = new stores[type]();
	    }
	
	    /**
	     * Gets the stored value for a specified key
	     * @param {string} key The key to look up
	     * @param defaultValue Return this if no value has been found
	     * @throws {Error} If not silent
	     * @returns {string} The stored value or defaultValue
	     */
	
	
	    _createClass(Storage, [{
	        key: 'get',
	        value: function get(key) {
	            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	            try {
	                var result = this.store.get(key);
	
	                if (null === result) {
	                    return defaultValue;
	                }
	                return result;
	            } catch (e) {
	                return this.fail(e);
	            }
	        }
	
	        /**
	         * Writes a value to the store under the specified key
	         * @param {string} key The key to use when storing
	         * @param {string} value The value to store
	         * @param {object} [options] A map of options. See the respective backends.
	         * @throws {Error} If not silent
	         * @returns {Storage|boolean} If silent, returns false on error. Returns this on success.
	         */
	
	    }, {
	        key: 'set',
	        value: function set(key, value, options) {
	            try {
	                this.store.set(key, value, options);
	                return this;
	            } catch (e) {
	                return this.fail(e);
	            }
	        }
	
	        /**
	         * Checks whether the store knows about the specified key
	         * @param {string} key The key to check for existance
	         * @throws {Error} If not silent
	         * @returns {boolean} If silent, returns false on error (!!)
	         */
	
	    }, {
	        key: 'has',
	        value: function has(key) {
	            try {
	                return this.store.has(key);
	            } catch (e) {
	                return this.fail(e);
	            }
	        }
	
	        /**
	         * Deletes the specified key and its value from the store
	         * @param {string} key The key to delete
	         * @returns {Storage|boolean} If silent, returns false on error
	         */
	
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            try {
	                this.store.remove(key);
	                return this;
	            } catch (e) {
	                return this.fail(e);
	            }
	        }
	
	        /**
	         * Wrapper for error handling
	         * @private
	         * @param {Error|string} reason What is happening?
	         * @returns {boolean}
	         */
	
	    }, {
	        key: 'fail',
	        value: function fail(reason) {
	            if (this.silent) {
	                return false;
	            }
	
	            if (!reason instanceof Error) {
	                reason = new Error(reason);
	            }
	
	            throw reason;
	        }
	    }]);
	
	    return Storage;
	}();
	
	module.exports = Storage;
	exports.default = Storage;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
	    function LocalStore() {
	        _classCallCheck(this, LocalStore);
	    }
	
	    _createClass(LocalStore, [{
	        key: "get",
	        value: function get(key) {
	            return localStorage.getItem(key);
	        }
	    }, {
	        key: "set",
	        value: function set(key, value) {
	            localStorage.setItem(key, value);
	        }
	    }, {
	        key: "has",
	        value: function has(key) {
	            return null !== localStorage.getItem(key);
	        }
	    }, {
	        key: "remove",
	        value: function remove(key) {
	            localStorage.removeItem(key);
	        }
	    }]);
	
	    return LocalStore;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
	    function SessionStore() {
	        _classCallCheck(this, SessionStore);
	    }
	
	    _createClass(SessionStore, [{
	        key: "get",
	        value: function get(key) {
	            return sessionStorage.getItem(key);
	        }
	    }, {
	        key: "set",
	        value: function set(key, value) {
	            sessionStorage.setItem(key, value);
	        }
	    }, {
	        key: "has",
	        value: function has(key) {
	            return null !== sessionStorage.getItem(key);
	        }
	    }, {
	        key: "remove",
	        value: function remove(key) {
	            sessionStorage.removeItem(key);
	        }
	    }]);
	
	    return SessionStore;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function () {
	    function CookieStore() {
	        _classCallCheck(this, CookieStore);
	    }
	
	    _createClass(CookieStore, [{
	        key: "get",
	        value: function get(key) {
	            var matchedCookie = this.matchSingleCookie(document.cookie, key);
	
	            if (matchedCookie instanceof Array && matchedCookie[1] !== undefined) {
	                try {
	                    return decodeURIComponent(matchedCookie[1]);
	                } catch (e) {
	                    return matchedCookie[1];
	                }
	            }
	
	            return null;
	        }
	    }, {
	        key: "set",
	        value: function set(key, value) {
	            var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	                _ref$expires = _ref.expires,
	                expires = _ref$expires === undefined ? "Fri, 31 Dec 9999 23:59:59 GMT" : _ref$expires,
	                _ref$path = _ref.path,
	                path = _ref$path === undefined ? "/" : _ref$path;
	
	            // support expires in seconds
	            if (!isNaN(parseFloat(expires)) && isFinite(expires)) {
	                expires = new Date(Date.now() + parseInt(expires) * 1000).toUTCString();
	            }
	
	            // support expires as date-object
	            if (expires instanceof Date) {
	                expires = expires.toUTCString();
	            }
	
	            document.cookie = [encodeURIComponent(key) + "=" + encodeURIComponent(value), "expires=" + expires, "path=" + path].join("; ");
	        }
	    }, {
	        key: "has",
	        value: function has(key) {
	            return null !== this.get(key);
	        }
	    }, {
	        key: "remove",
	        value: function remove(key) {
	            this.set(key, "", "Thu, 01 Jan 1970 00:00:00 GMT");
	        }
	    }, {
	        key: "matchSingleCookie",
	        value: function matchSingleCookie(cookies, key) {
	            var saneKey = encodeURIComponent(key).replace(/[-\.+\*]/g, "$&");
	            var regExp = new RegExp("(?:(?:^|.*;)s*" + saneKey + "s*=s*([^;]*).*$)|^.*$");
	            return cookies.match(regExp);
	        }
	    }]);
	
	    return CookieStore;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=showcar-storage.js.map