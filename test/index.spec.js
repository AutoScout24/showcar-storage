var Storage = require("../dist/index.js");

describe("The Showcar Storage Module", function () {
    it("should be of the supplied type", function () {
        var storage = new Storage("local");
        expect(storage.type).toBe("local");
    });
});
