"use strict";

module.exports = class CookieStore {
    get (key) {
        var sanitizedKey = encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&");
        var regExp = new RegExp(`(?:(?:^|.*;)\\s*${sanitizedKey}\\s*\\=\\s*([^;]*).*$)|^.*$`);
        var content = document.cookie.replace(regExp, "$1");
        return decodeURIComponent(content);
    }

};
