const Reader = require("./../lib/utils/reader");
const ExplorerService = require("./../lib/services/ExplorerService");

describe("Tests para servicios", () => {
    test("1. Test para filtrar los explorers que esten en node", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        //expect(explorers).not.toBeUndefined;
        result = ExplorerService.filterByMission(explorers, "node");
        expect(result).toBe(10);
    });

    test("2. Test para tener los nombres de los explorers que esten en node", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        resultado = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "node"
        );
        expect(resultado).not.toBeUndefined;
    });
});
