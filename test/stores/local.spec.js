"use strict";
var LocalStore = require("../../dist/stores/local.js");

describe("The localStore", function () {
    describe("The accessors", function () {
        it("should implement a getter", function () {
            localStorage.clear();
            localStorage.setItem('myKey', 'myValue');

            var localStore = new LocalStore();

            var value = localStore.get('myKey');

            expect(value).toBe('myValue');
        });
    });
});
