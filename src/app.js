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
  ];

  const teamName = await getAnswers(initialQuestion);

  const manager = await createManager();

  const teamMembers = await getAllTeamMembers();

  console.log(teamMembers);

  const html = generateHTML({ teamName, manager, teamMembers });

  writeToFile(html);
};

module.exports = app;
