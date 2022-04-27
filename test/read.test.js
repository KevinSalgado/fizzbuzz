const Reader = require("./../lib/utils/reader");

describe("Tests for reader", () => {
    test("1. Hacer un reader del package.json", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).not.toBeUndefined();
    });
});
