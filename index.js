const Reader = require("./lib/utils/reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

//const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers.mission);

//result = ExplorerService.filterByMission(explorers, "node");

//console.log(result);*/

//const explorers = Reader.readJsonFile("explorers.json");
//const explorer1 = { name: "Explorer1", score: 1 };
//result = FizzbuzzService.assignFizzBuzz(explorers);

//console.log(result);

//const trick = FizzbuzzService.applyValidationInNumber(12);
//console.log(trick);

const explorers = Reader.readJsonFile("explorers.json");
const stack = ExplorerService.getStack(explorers, "javascript");
console.log(stack);
