"use strict";

module.exports = class Storage {
    constructor(type) {
        if (!Storage.isSupportedType(type)) {
            throw new Error(`Unsupported type ${type}`);
        }

        this.store = new (require(`../lib/stores/${type}.js`))();
    }

    get(key) {
        return this.store.get(key);
    }

    static isSupportedType(type) {
        const supportedTypes = ["local", "session", "cookie"];
        return supportedTypes.indexOf(type) > -1;
    }
};
