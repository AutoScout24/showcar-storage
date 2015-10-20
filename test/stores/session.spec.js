"use strict";
var SessionStore = require("../../dist/stores/session.js");

describe("The sessionStore", function () {
    describe("The accessors", function () {
        var sessionStore;

        beforeEach(function () {
            sessionStorage.clear();

            sessionStore = new SessionStore();
        });

        it("should implement a getter", function () {
            sessionStorage.setItem('myKey', 'myValue');

            var value = sessionStore.get('myKey');

            expect(value).toBe('myValue');
        });

        it("should implement a setter", function () {
            sessionStore.set('myKey', 'myValue');

            expect(sessionStorage.getItem('myKey')).toBe('myValue');
        });

        it("should implement a hasser", function () {
            sessionStorage.setItem('myKey', 'myValue');

            var value = sessionStore.has('myKey');

            expect(value).toBe(true);
        });

        it("should implement a remover", function () {
            sessionStorage.setItem('myKey', 'myValue');

            sessionStore.remove('myKey');

            expect(sessionStorage.getItem('myKey')).toBeNull();
        });
    });
});
