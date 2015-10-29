"use strict";

module.exports = class CookieStore {
    get (key) {
        var regExp = new RegExp(`(?:(?:^|.*;)\\s*${CookieStore.sanitizeKey(key)}\\s*\\=\\s*([^;]*).*$)|^.*$`);
        var content = document.cookie.replace(regExp, "$1");
        return decodeURIComponent(content);
    }
    set (key, value) {
        document.cookie = [
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
            "expires=Fri, 31 Dec 9999 23:59:59 GMT",
            "path=/"
        ].join('; ');
    }
    has (key) {
        const regExp = new RegExp(`(?:^|;\\s*)${CookieStore.sanitizeKey(key)}\\s*\\=`);
        return regExp.test(document.cookie);
    }
    static sanitizeKey(key) {
        return encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&");
    }
};

};
