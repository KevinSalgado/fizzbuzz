const fs = require("fs");

class reader {
    static readJsonFile(path) {
        const rawdata = fs.readFileSync(path);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}

module.exports = reader;
