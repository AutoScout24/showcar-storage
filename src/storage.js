"use strict";

var stores = {
    local: require('./stores/local.js'),
    session: require('./stores/session.js'),
    cookie: require('./stores/cookie.js')
};

module.exports = class Storage {
    constructor (type) {
        if (!(type in stores)) {
            throw new Error(`Unsupported type ${type}`);
        }

        this.store = new (stores[type])();
    }

    get (key, defaultValue = null) {
        const result = this.store.get(key);

        if (null === result) {
            return defaultValue;
        }
        return result;
    }

    set (key, value, options) {
        this.store.set(key, value, options);
        return this;
    }

    has (key) {
        return this.store.has(key);
    }

    remove (key) {
        this.store.remove(key);
        return this;
    }
};
