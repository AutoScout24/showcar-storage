"use strict";

module.exports = class LocalStore {
    get (key) {
        return localStorage.getItem(key);
    }

    set (key, value) {
        localStorage.setItem(key, value);
    }

    has (key) {
        return null !== localStorage.getItem(key);
    }

    remove (key) {
        localStorage.removeItem(key);
    }
};
