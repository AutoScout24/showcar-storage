"use strict";
var CookieStore = require("../../src/stores/cookie.js");

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
            writeCookies();

            expect(cookieStore.get(key)).toBe(value);
        });

        it("should implement a getter returning null for a key not found", function () {
            writeCookies();

            expect(cookieStore.get("nonexistent_element")).toBeNull();
        });

        it("should implement a hasser", function () {
            writeCookies();

            expect(cookieStore.has(key)).toBe(true);
        });

        it("should implement a remover", function () {
            writeCookies();

            cookieStore.remove(key);

            expect(document.cookie.indexOf(pair)).toBe(-1);
        });

        describe("the setter", function () {
            it("should set a cookie", function () {
                cookieStore.set(key, value);

                expect(document.cookie.indexOf(pair)).toBeGreaterThan(-1);
            });

            it("should set a cookie with expiration in seconds", function (done) {
                cookieStore.set(key, value, { expires: 1 });
                checkIfCookieGoesAway({after: 1000, then: done});
            });

            it("should set a cookie with expiration as date-object", function (done) {
                var expiration = new Date(Date.now() + 1000);
                cookieStore.set(key, value, { expires: expiration });
                checkIfCookieGoesAway({after: 1000, then: done});
            });

            it("should set a cookie with expiration as UTC string", function (done) {
                var expiration = (new Date(Date.now() + 1000)).toUTCString();
                cookieStore.set(key, value, { expires: expiration });
                checkIfCookieGoesAway({after: 1000, then: done});
            });

            it("should accept an optional path [intentionally skipped]");
        });
    });

    const checkIfCookieGoesAway = ({after = 1000, then: done = ()=>{} } = {} ) => {
        expect(document.cookie.indexOf(pair)).toBeGreaterThan(-1);
        setTimeout(function () {
            expect(document.cookie.indexOf(pair)).toBe(-1);
            done();
        }, after + 100);
    };

    const writeCookies = () => {
        ['a=b;path=/foo', pair, 'c=d;secure']
            .forEach(e => document.cookie = e);
    };

    const clearAllCookies = () => {
        let replacement = `=;expires=${new Date().toUTCString()};path=/`;
        let replacer = c => c.trim().replace(/=.*/, replacement);
        document.cookie.split(";").map(replacer).forEach(c => document.cookie = c);
    };
});
