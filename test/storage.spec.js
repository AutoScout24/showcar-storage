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
        it("should throw an exception for an unsupported type", function () {
            expect(storageInstantiator.bind(null, "an unsupported type")).toThrow();
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

        const setupStorage = (silent = false) => {
            storage = new Storage("local", { silent });
            storage.store = {
                get: _ => {},
                set: _ => {},
                has: _ => {},
                remove: _ => {}
            };
        };

        beforeEach(setupStorage);

        it("should pass through get call to the store", function () {
            spyOn(storage.store, "get").and.returnValue(4);

            var result = storage.get('myKey');

            expect(storage.store.get).toHaveBeenCalledWith('myKey');
            expect(result).toBe(4);
        });

        it("should accept a default value which is returned if the key is not found", function () {
            spyOn(storage.store, "get").and.returnValue(null);

            var result = storage.get('myKey', 'myDefaultValue');

            expect(result).toBe('myDefaultValue');
        });

        it("should pass through set call to the store", function () {
            spyOn(storage.store, "set");

            var options = { path: "/foo", expires: 123456789 };

            var result = storage.set("myKey", 4, options);

            expect(storage.store.set).toHaveBeenCalledWith("myKey", 4, options);
            expect(result).toBe(storage);
        });

        it("should pass through has call to the store", function () {
            spyOn(storage.store, "has").and.returnValue(true);

            var result = storage.has('myKey');

            expect(storage.store.has).toHaveBeenCalledWith('myKey');
            expect(result).toBe(true);
        });

        it("should pass through remove call to the store", function () {
            spyOn(storage.store, "remove");

            var result = storage.remove('myKey');

            expect(storage.store.remove).toHaveBeenCalledWith('myKey');
            expect(result).toBe(storage);
        });

        it("should re-throw an exception from the underlying store", function () {
            ["get", "set", "has", "remove"].forEach(method => {
                spyOn(storage.store, method).and.throwError("myError");

                expect(_ => storage[method]()).toThrowError("myError");
            });
        });

        it("should fail silently and return false on exception from the underlying store", () => {
            setupStorage(true); // re-initialize storage in silent mode
            ["get", "set", "has", "remove"].forEach(method => {
                spyOn(storage.store, method).and.throwError("myError");

                var result = storage[method]();

                expect(result).toBe(false);
            });
        });
    });
});
