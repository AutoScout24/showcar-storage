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

    get (key) {
        return this.store.get(key);
    }

    set (key, value) {
        this.store.set(key, value);
        return this;
    }

    has (key) {
        return this.store.has(key);
    }
};
