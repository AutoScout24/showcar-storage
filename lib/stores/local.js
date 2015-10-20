"use strict";

module.exports = class LocalStore {
    get (key) {
        return localStorage.getItem(key);
    }
};
