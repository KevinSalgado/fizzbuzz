const fs = require("fs");

class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        const usernamesInNode = explorersInNodeToGetUsernames.map(
            (explorer) => explorer.githubUsername
        );
        return usernamesInNode;
    }

    static getStack(explorers, mission) {
        const StackExplorers = function (explorer) {
            if (explorer.stacks.includes(mission)) {
                return explorer;
            } else {
                return {};
            }
        };
        const explorersInMission = explorers.map((explorer) =>
            StackExplorers(explorer)
        );

        return explorersInMission;
    }
}

module.exports = ExplorerService;
