const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
  response.json({ message: "FizzBuzz Api welcome!" });
});

app.listen(port, () => {
  console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorersInMission = ExplorerController.getExplorersByMission(mission);

  response.status(200).json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorersAmount =
    ExplorerController.getExplorersAmonutByMission(mission);
  response.status(200).json(explorersAmount);
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
  const mission = request.params.mission;
  const explorersNames =
    ExplorerController.getExplorersUsernamesByMission(mission);
  response.status(200).json(explorersNames);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
  const score = request.params.score;
  const trick = ExplorerController.getFizzBuzz(score);
  response.status(200).json({ score: score, trick: trick });
});

app.get("/v1/explorers/stack/:mission", (request, response) => {
  const mission = request.params.mission;
  const newExp = ExplorerController.getStackCor(mission);
  response.status(200).json(newExp);
});
