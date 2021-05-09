const getAnswers = require("./getAnswers");

const app = () => {
  console.log("App started");

  const initialQuestion = [
    {
      message: "What is the name of your team?",
      name: "teamName",
    },
  ];

  const answers = getAnswers(initialQuestion);

  // const teamMembers = getAllTeamMembers();

  const html = generateHTML(answers);

  writeToFile(html);
};

module.exports = app;
