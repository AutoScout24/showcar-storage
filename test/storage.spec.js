"use strict";
var Storage = require("../src/storage.js");

describe("The Showcar Storage Module", function () {
    describe("The supported types", function () {
        function storageInstantiator(type) {
            new Storage(type);
        }

        it("should accept storage type 'local'", function () {
            expect(storageInstantiator.bind(null, "local")).not.toThrow();
        });
        it("should accept storage type 'session'", function () {
            expect(storageInstantiator.bind(null, "session")).not.toThrow();
        });
        it("should accept storage type 'cookie'", function () {
            expect(storageInstantiator.bind(null, "cookie")).not.toThrow();
        });
        it("should throw an exception on an unsupported type", function () {
            expect(storageInstantiator.bind(null, "unsupported store type")).toThrow();
        });
    });

    describe("The store backend", function () {
        it("should have the correct store instance", function () {
            var storage = new Storage("local");
            expect(storage.store.constructor.name).toBe("LocalStore");
        });
    });

    describe("The accessors", function () {
        var storage;
        var storeStub = {
            get: function () {},
            set: function () {},
            has: function () {},
            remove: function () {}
        };

        beforeEach(function () {
            storage = new Storage("local");
            storage.store = storeStub;
        });

        it("should pass through get call to the store", function () {
            spyOn(storeStub, "get").and.returnValue(4);

            var result = storage.get('myKey');

            expect(storeStub.get).toHaveBeenCalledWith('myKey');
            expect(result).toBe(4);
        });

        it("should accept a default value which is returned if the key is not found", function () {
            spyOn(storeStub, "get").and.returnValue(null);

            var result = storage.get('myKey', 'myDefaultValue');

            expect(result).toBe('myDefaultValue');
        });

        it("should pass through set call to the store", function () {
            spyOn(storeStub, "set");

            var options = { path: "/foo", expires: 123456 };

            var result = storage.set('myKey', 4, options);

            expect(storeStub.set).toHaveBeenCalledWith('myKey', 4, options);
            expect(result).toBe(storage);
        });

        it("should pass through has call to the store", function () {
            spyOn(storeStub, "has").and.returnValue(true);

            var result = storage.has('myKey');

            expect(storeStub.has).toHaveBeenCalledWith('myKey');
            expect(result).toBe(true);
        });

        it("should pass through remove call to the store", function () {
            spyOn(storeStub, "remove");

            var result = storage.remove('myKey');

            expect(storeStub.remove).toHaveBeenCalledWith('myKey');
            expect(result).toBe(storage);
        });
    });
});
