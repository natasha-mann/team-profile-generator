const getAnswers = require("./utils/getAnswers");
const generateHTML = require("./utils/generateHTML");
const writeToFile = require("./utils/writeToFile");
const createManager = require("./utils/createManager");
const getAllTeamMembers = require("./utils/getAllTeamMembers");

const init = async () => {
  console.log("App started");

  const initialQuestions = [
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

  const initialAnswers = await getAnswers(initialQuestions);

  const manager = await createManager();

  const teamMembers = await getAllTeamMembers();

  const generatedHTML = generateHTML(
    initialAnswers.teamName,
    manager,
    teamMembers
  );

  writeToFile(initialAnswers.fileName, generatedHTML);
};

init();
