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

  static getExplorersUsernamesByMission(mission) {
    const explorers = reader.readJsonFile("explorers.json");
    const explorersInNode = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInNode.length;
  }

  static getExplorersAmonutByMission(mission) {
    const explorers = reader.readJsonFile("explorers.json");
    const explorersInNodeToGetUsernames = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    const usernamesInNode = explorersInNodeToGetUsernames.map(
      (explorer) => explorer.githubUsername
    );
    return usernamesInNode;
  }
}

module.exports = ExplorerController;
