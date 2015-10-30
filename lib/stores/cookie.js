"use strict";

module.exports = class CookieStore {
    get (key) {
        const val = this.extractVal(key);

        if (val instanceof Array && val[1] !== undefined) {
            return decodeURIComponent(val[1]);
        }

        return null;
    }

    set (key, value, expires = "Fri, 31 Dec 9999 23:59:59 GMT") {
        document.cookie = [
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
            `expires=${expires}`,
            "path=/"
        ].join("; ");
    }

    has (key) {
        return null !== this.get(key);
    }

    remove (key) {
        this.set(key, "", "Thu, 01 Jan 1970 00:00:00 GMT");
    }

    extractVal (key) {
        const regExp = new RegExp(`(?:(?:^|.*;)\s*${this.sanitizeKey(key)}\s*=\s*([^;]*).*$)|^.*$`);
        return document.cookie.match(regExp);
    }

    sanitizeKey(key) {
        return encodeURIComponent(key).replace(/[-\.+\*]/g, "$&");
    }
};
