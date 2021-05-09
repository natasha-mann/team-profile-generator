const app = () => {
  console.log("App started");

  const initialQuestion = [
    {
      message: "What is the name of your team?",
      name: "teamName",
    },
  ];

  const { teamName } = getAnswers(initialQuestion);

  const teamMembers = getAllTeamMembers();

  const html = generateHtmL({ teamName, teamMembers });

  writeToFile(html);
};

module.exports = app;
