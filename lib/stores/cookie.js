"use strict";

module.exports = class CookieStore {
    get (key) {
        const val = this.extractVal(key);

        if (val instanceof Array && val[1] !== undefined) {
            return decodeURIComponent(val[1]);
        }

        return null;
    }

    set (key, value) {
        document.cookie = [
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
            "expires=Fri, 31 Dec 9999 23:59:59 GMT",
            "path=/"
        ].join('; ');
    }

    has (key) {
        return null !== this.get(key);
    }

    extractVal (key) {
        const regExp = new RegExp(`(?:(?:^|.*;)\s*${this.sanitizeKey(key)}\s*=\s*([^;]*).*$)|^.*$`);
        return document.cookie.match(regExp);
    }

    sanitizeKey(key) {
        return encodeURIComponent(key).replace(/[-\.+\*]/g, "$&");
    }
};

};
