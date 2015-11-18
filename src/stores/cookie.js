"use strict";

module.exports = class CookieStore {
    get (key) {
        const matchedCookie = this.matchSingleCookie(document.cookie, key);

        if (matchedCookie instanceof Array && matchedCookie[1] !== undefined) {
            try {
                return decodeURIComponent(matchedCookie[1]);
            } catch (e) {
                return matchedCookie[1];
            }
        }

        return null;
    }

    set (key, value, { expires = "Fri, 31 Dec 9999 23:59:59 GMT", path = "/" } = {}) {

        // support expires in seconds
        if (!isNaN(parseFloat(expires)) && isFinite(expires)) {
            expires = (new Date(Date.now() + parseInt(expires) * 1000)).toUTCString();
        }

        // support expires as date-object
        if (expires instanceof Date) {
            expires = expires.toUTCString();
        }

        document.cookie = [
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
            `expires=${expires}`,
            `path=${path}`
        ].join("; ");
    }

    has (key) {
        return null !== this.get(key);
    }

    remove (key) {
        this.set(key, "", "Thu, 01 Jan 1970 00:00:00 GMT");
    }

    matchSingleCookie (cookies, key) {
        const saneKey = encodeURIComponent(key).replace(/[-\.+\*]/g, "$&");
        const regExp = new RegExp(`(?:(?:^|.*;)\s*${saneKey}\s*=\s*([^;]*).*$)|^.*$`);
        return cookies.match(regExp);
    }
};
