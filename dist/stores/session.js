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