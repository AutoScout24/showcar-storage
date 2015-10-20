"use strict";
var CookieStore = require("../../dist/stores/cookie.js");

describe("The cookieStore", function () {
    describe("The accessors", function () {
        it("should implement a getter", function () {
            document.cookie = 'a=b;path=/foo';
            document.cookie = 'myKey=myValue';
            document.cookie = 'c=d;secure';

            var cookieStore = new CookieStore();

            var value = cookieStore.get('myKey');

            expect(value).toBe('myValue');
        });
    });
});
