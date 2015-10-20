"use strict";
var Storage = require("../dist/index.js");

describe("The Showcar Storage Module", function () {
    describe("Supported types", function () {
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

    it ("should call through get function to the store", function () {
        var store = {
            get: function() {}
        };
        spyOn(store, "get").and.returnValue(4);

        var storage = new Storage("local");
        storage.store = store;
        var result = storage.get('myKey');

        expect(store.get).toHaveBeenCalledWith('myKey');
        expect(result).toBe(4);
    });
});
