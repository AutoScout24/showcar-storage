"use strict";

module.exports = class Storage {
    constructor(type) {
        if (!Storage.isSupportedType(type)) {
            throw new Error(`Unsupported type ${type}`);
        }
        this.type = type;
    }

    static isSupportedType(type) {
        const supportedTypes = ["local", "session", "cookie"];
        return supportedTypes.indexOf(type) > -1;
    }
};
