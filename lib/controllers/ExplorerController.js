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

    static bot() {
        const TelegramBot = require("node-telegram-bot-api");
        const ExplorerController = require("./../controllers/ExplorerController");

        // replace the value below with the Telegram token you receive from @BotFather
        const token = "5379532853:AAGG3bYqVkkOJXrIzTmtLSqkWYJRVC3Ij3s";

        // Create a bot that uses 'polling' to fetch new updates
        const bot = new TelegramBot(token, { polling: true });

        // Matches "/echo [whatever]"
        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message

            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"

            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });

        // Listen for any kind of message. There are different kinds of
        // messages.
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
            const mission = msg.text;

            if (!isNaN(numberToApplyFb)) {
                const fizzbuzzTrick = ExplorerController.getFizzBuzz(numberToApplyFb);
                const responseBot = `Tu n??mero es: ${numberToApplyFb}. Validaci??n: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else if (mission == "node" || mission == "java") {
                const explorers =
          ExplorerController.getExplorersUsernamesByMission(mission);
                const respuesta = JSON.stringify(explorers);
                console.log(respuesta);
                //const responseBot = { explorers };
                //console.log(responseBot);
                bot.sendMessage(chatId, respuesta);
            } else {
                bot.sendMessage(chatId, "Env??a un n??mero v??lido");
                const mission = msg.text;
                console.log(mission);
                if (mission == NaN) {
                    console.log("No es un numero");
                }
            }
        });
    }
}

module.exports = ExplorerController;
