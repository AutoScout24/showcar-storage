"use strict";
var LocalStore = require("../../src/stores/local.js");

describe("The localStore", function () {
    describe("The accessors", function () {
        var localStore;

        beforeEach(function () {
            localStorage.clear();

            localStore = new LocalStore();
        });

        it("should implement a getter", function () {
            localStorage.setItem('myKey', 'myValue');

            var value = localStore.get('myKey');

            expect(value).toBe('myValue');
        });

        it("should implement a setter", function () {
            localStore.set('myKey', 'myValue');

            expect(localStorage.getItem('myKey')).toBe('myValue');
        });

        it("should implement a hasser", function () {
            localStorage.setItem('myKey', 'myValue');

            var value = localStore.has('myKey');

            expect(value).toBe(true);
        });

        it("should implement a remover", function () {
            localStorage.setItem('myKey', 'myValue');

            localStore.remove('myKey');

            expect(localStorage.getItem('myKey')).toBeNull();
        });
    });
});
