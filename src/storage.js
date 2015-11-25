"use strict";

var stores = {
    local: require('./stores/local.js'),
    session: require('./stores/session.js'),
    cookie: require('./stores/cookie.js')
};

module.exports = class Storage {
    constructor (type, { silent = false } = {}) {
        if (!(type in stores)) {
            this.fail(`Storage: Unsupported type ${type}`);
        }

        this.silent = !!silent;
        this.store = new (stores[type])();
    }

    get (key, defaultValue = null) {
        try {
            const result = this.store.get(key);

            if (null === result) {
                return defaultValue;
            }
            return result;
        } catch (e) {
            return this.fail(e);
        }
    }

    set (key, value, options) {
        try {
            this.store.set(key, value, options);
            return this;
        } catch (e) {
            return this.fail(e);
        }

    }

    has (key) {
        try {
            return this.store.has(key);
        } catch (e) {
            return this.fail(e);
        }
    }

    remove (key) {
        try {
            this.store.remove(key);
            return this;
        } catch (e) {
            return this.fail(e);
        }
    }

    fail (reason) {
        if (this.silent) {
            return false;
        }

        if (!reason instanceof Error) {
            reason = new Error(reason);
        }

        throw reason;
    }
};
