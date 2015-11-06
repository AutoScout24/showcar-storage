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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var stores = {
	    local: __webpack_require__(1),
	    session: __webpack_require__(2),
	    cookie: __webpack_require__(3)
	};
	
	module.exports = (function () {
	    function Storage(type) {
	        _classCallCheck(this, Storage);
	
	        if (!(type in stores)) {
	            throw new Error('Unsupported type ' + type);
	        }
	
	        this.store = new stores[type]();
	    }
	
	    _createClass(Storage, [{
	        key: 'get',
	        value: function get(key) {
	            var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	            var result = this.store.get(key);
	
	            if (null === result) {
	                return defaultValue;
	            }
	            return result;
	        }
	    }, {
	        key: 'set',
	        value: function set(key, value) {
	            this.store.set(key, value);
	            return this;
	        }
	    }, {
	        key: 'has',
	        value: function has(key) {
	            return this.store.has(key);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            this.store.remove(key);
	            return this;
	        }
	    }]);
	
	    return Storage;
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = (function () {
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
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = (function () {
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
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _instanceof(left, right) { if (right != null && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = (function () {
	    function CookieStore() {
	        _classCallCheck(this, CookieStore);
	    }
	
	    _createClass(CookieStore, [{
	        key: "get",
	        value: function get(key) {
	            var matchedCookie = this.matchSingleCookie(document.cookie, key);
	
	            if (_instanceof(matchedCookie, Array) && matchedCookie[1] !== undefined) {
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
	            var expires = arguments.length <= 2 || arguments[2] === undefined ? "Fri, 31 Dec 9999 23:59:59 GMT" : arguments[2];
	
	            document.cookie = [encodeURIComponent(key) + "=" + encodeURIComponent(value), "expires=" + expires, "path=/"].join("; ");
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
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=showcar-storage.js.map