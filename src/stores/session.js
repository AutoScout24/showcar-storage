"use strict";

module.exports = class SessionStore {
    get (key) {
        return sessionStorage.getItem(key);
    }

    set (key, value) {
        sessionStorage.setItem(key, value);
    }

    has (key) {
        return null !== sessionStorage.getItem(key);
    }

    remove (key) {
        sessionStorage.removeItem(key);
    }
};
