const Reader = require("./lib/utils/reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json");
//expect(explorers).not.toBeUndefined;

result = ExplorerService.filterByMission(explorers, "node");

console.log(result);
