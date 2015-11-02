"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stores = {
    local: require('./stores/local.js'),
    session: require('./stores/session.js'),
    cookie: require('./stores/cookie.js')
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