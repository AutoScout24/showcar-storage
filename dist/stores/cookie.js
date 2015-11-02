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