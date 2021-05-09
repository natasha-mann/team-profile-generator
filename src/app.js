const getAnswers = require("./getAnswers");
const generateHTML = require("./utils/generateHTML");
const writeToFile = require("./writeToFile");
const createManager = require("./createManager");

const app = async () => {
  console.log("App started");

  const initialQuestion = [
    {
      message: "What is the name of your team?",
      name: "teamName",
    },
  ];

  const answers = await getAnswers(initialQuestion);

  const manager = await createManager();

  // const teamMembers = await getAllTeamMembers();

  const html = generateHTML(answers);

  writeToFile(html);
};

module.exports = app;
