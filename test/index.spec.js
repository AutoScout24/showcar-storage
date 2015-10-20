"use strict";
var Storage = require("../dist/index.js");

describe("The Showcar Storage Module", function () {
    describe ("Supported types", function () {
        it("should accept storage type 'local'", function () {
            var storage = new Storage("local");
            expect(storage.type).toBe("local");

        });
        it("should accept storage type 'session'", function () {
            var storage = new Storage("session");
            expect(storage.type).toBe("session");

        });
        it("should accept storage type 'cookie'", function () {
            var storage = new Storage("cookie");
            expect(storage.type).toBe("cookie");

        });
        it("should throw an exception on an unsupported type", function () {
            function wrapper() {
                var storage = new Storage("someOtherStore");
            }
            expect(wrapper).toThrow();
        });
    });
});
