"use strict";
var CookieStore = require("../../dist/stores/cookie.js");

describe("The cookieStore", function () {
    describe("The accessors", function () {
        function clearAllCookies() {
            var replaceDate = "=;expires=" + new Date().toUTCString() + ";path=/";
            document.cookie
                .split(";")
                .forEach(function(c) {
                    document.cookie = c.replace(/^ +/, "").replace(/=.*/, replaceDate);
                });
        }

        var cookieStore;

        beforeEach(function () {
            clearAllCookies();
            cookieStore = new CookieStore();
        });

        it("should implement a getter", function () {
            document.cookie = 'a=b;path=/foo';
            document.cookie = `${encodeURIComponent('myعKöy')}=${encodeURIComponent('myVثاälue')}`;
            document.cookie = 'c=d;secure';

            var value = cookieStore.get('myعKöy');

            expect(value).toBe('myVثاälue');
        });
        it("should implement a setter", function () {
            cookieStore.set('myعKöy', 'myVثاälue');

            var keyValPair = `${encodeURIComponent('myعKöy')}=${encodeURIComponent('myVثاälue')}`;

            expect(document.cookie.indexOf(keyValPair)).toBeGreaterThan(-1);
        });
    });
});
