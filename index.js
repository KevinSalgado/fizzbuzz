const Reader = require("./lib/utils/reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

/*const explorers = Reader.readJsonFile("explorers.json");
//expect(explorers).not.toBeUndefined;

result = ExplorerService.filterByMission(explorers, "node");

console.log(result);*/

const explorers = Reader.readJsonFile("explorers.json");
//const explorer1 = { name: "Explorer1", score: 1 };
result = FizzbuzzService.assignFizzBuzz(explorers);

console.log(result);
