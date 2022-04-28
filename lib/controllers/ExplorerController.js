const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const reader = require("./../utils/reader");

class ExplorerController {
  static getExplorersByMission(mission) {
    const explorers = reader.readJsonFile("explorers.json");
    const explorersInNode = explorers.filter(
      (explorer) => explorer.mission == mission
    );

    return explorersInNode;
  }

  static getExplorersAmonutByMission(mission) {
    const explorers = reader.readJsonFile("explorers.json");
    const explorersInNode = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInNode.length;
  }

  static getExplorersUsernamesByMission(mission) {
    const explorers = reader.readJsonFile("explorers.json");
    const explorersInNodeToGetUsernames = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    const usernamesInNode = explorersInNodeToGetUsernames.map(
      (explorer) => explorer.githubUsername
    );
    return usernamesInNode;
  }

  static getFizzBuzz(score) {
    const trick = FizzbuzzService.applyValidationInNumber(score);
    //console.log(trick);
    return trick;
  }

  static getStackCor(mission) {
    const explorers = reader.readJsonFile("explorers.json");
    const newExp = ExplorerService.getStack(explorers, mission);

    return newExp;
  }
}

module.exports = ExplorerController;
