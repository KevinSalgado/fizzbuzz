const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para controllers", () => {
  test("1. test de getExplorersByMission", () => {
    resul = ExplorerController.getExplorersByMission("node");
    expect(resul).not.toBeUndefined;
  });

  test("2. test de getExplorersUsernamesByMission", () => {
    resul = ExplorerController.getExplorersUsernamesByMission("node");
    expect(resul).toBe(10);
  });

  test("3 test de getExplorersAmonutByMission", () => {
    resul = ExplorerController.getExplorersAmonutByMission("node");
    expect(resul).not.toBeUndefined;
  });
});
