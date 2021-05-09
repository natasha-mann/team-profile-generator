const getAnswers = require("./getAnswers");
const generateHTML = require("./utils/generateHTML");
const writeToFile = require("./writeToFile");

const app = async () => {
  console.log("App started");

  const initialQuestion = [
    {
      message: "What is the name of your team?",
      name: "teamName",
    },
  ];

  const answers = await getAnswers(initialQuestion);

  // const teamMembers = getAllTeamMembers();

  const html = generateHTML(answers);

  writeToFile(html);
};

module.exports = app;
