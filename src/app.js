const getAnswers = require("./getAnswers");
const generateHTML = require("./utils/generateHTML");
const writeToFile = require("./writeToFile");
const createManager = require("./createManager");
const getAllTeamMembers = require("./getAllTeamMembers");

const app = async () => {
  console.log("App started");

  const initialQuestion = [
    {
      message: "What is the name of your team?",
      name: "teamName",
    },
    {
      message:
        "What would you like to name your HTML file? **Please don't include the .html",
      name: "fileName",
    },
  ];

  const initialAnswers = await getAnswers(initialQuestion);

  const manager = await createManager();

  const teamMembers = await getAllTeamMembers();

  const generatedHTML = generateHTML(
    initialAnswers.teamName,
    manager,
    teamMembers
  );

  writeToFile(initialAnswers.fileName, generatedHTML);
};

module.exports = app;
