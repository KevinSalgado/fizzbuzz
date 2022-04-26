const Reader = require("./lib/utils/reader");
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

console.log(explorers);
