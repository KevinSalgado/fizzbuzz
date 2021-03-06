const fs = require("fs");

class FizzbuzzService {
    static assignFizzBuzz(explorersInNode) {
    //console.log(explorersInNode);
        const assignFizzBuzzTrick = function (explorer) {
            if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
                explorer.trick = "FIZZBUZZ";
                return explorer;
            } else {
                if (explorer.score % 5 === 0) {
                    explorer.trick = "BUZZ";
                    return explorer;
                } else {
                    if (explorer.score % 3 === 0) {
                        explorer.trick = "FIZZ";
                        return explorer;
                    } else {
                        explorer.trick = explorer.score;
                        return explorer;
                    }
                }
            }
        };

        const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) =>
            assignFizzBuzzTrick(explorer)
        );

        return explorersInNodeAndFizzBuzzTrick;
    }

    static applyValidationInNumber(explorer) {
        let trick;
        if (explorer % 5 === 0 && explorer % 3 === 0) {
            trick = "FIZZBUZZ";
            return trick;
        } else {
            if (explorer % 5 === 0) {
                trick = "BUZZ";
                return trick;
            } else {
                if (explorer % 3 === 0) {
                    trick = "FIZZ";
                    return trick;
                } else {
                    trick = explorer;
                    return trick;
                }
            }
        }

    //const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) =>
    //assignFizzBuzzTrick(explorer)
    //);
    }
}

module.exports = FizzbuzzService;
