const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para controllers", () => {
    test("1. test de getExplorersByMission", () => {
        resul = ExplorerController.getExplorersByMission("node");
        expect(resul).not.toBeUndefined;
    });

    test("2. test de getExplorersUsernamesByMission", () => {
        resul = ExplorerController.getExplorersUsernamesByMission("node");
        expect(resul).not.toBeUndefined;
    });

    test("3. test de getExplorersAmonutByMission", () => {
        resul = ExplorerController.getExplorersAmonutByMission("node");
        expect(resul).toBe(10);
    });

    test("4. test de getFizzBuzz", () => {
        resul = ExplorerController.getFizzBuzz(3);
        expect(resul).toBe("FIZZ");
    });

    test("5. test de getStackCor", () => {
        resul = ExplorerController.getStackCor("javascript");
        expect(resul).not.toBeUndefined;
    });
});
