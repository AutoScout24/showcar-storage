"use strict";
var Storage = require("../dist/storage.js");

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
            get: function() {}
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
    });
});
