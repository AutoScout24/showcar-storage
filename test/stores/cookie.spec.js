"use strict";
var CookieStore = require("../../dist/stores/cookie.js");

describe("The cookieStore", function () {
    let cookieStore;

    const key = "myعKöy", value = "myVثاälue";
    const pair = [key, value]
        .map(encodeURIComponent)
        .join("=");

    describe("The accessors", function () {
        beforeEach(function () {
            clearAllCookies();
            cookieStore = new CookieStore();
        });

        it("should implement a getter returning the correct value for a key found", function () {
            ['a=b;path=/foo', pair, 'c=d;secure']
                .forEach(e => document.cookie = e);

            expect(cookieStore.get(key)).toBe(value);
        });

        it("should implement a setter", function () {
            cookieStore.set(key, value);

            expect(document.cookie.indexOf(pair)).toBeGreaterThan(-1);
        });

        it("should implement a hasser", function () {
            cookieStore.set(key, value);

            expect(cookieStore.has(key)).toBe(true);
        });
    });

    const clearAllCookies = () => {
        let replacement = `=;expires=${new Date().toUTCString()};path=/`;
        let replacer = c => c.trim().replace(/=.*/, replacement);
        document.cookie.split(";").map(replacer).forEach(c => document.cookie = c);
    };
});
