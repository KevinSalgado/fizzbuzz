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
}

module.exports = FizzbuzzService;
