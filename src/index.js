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
      default: "My Team",
    },
    {
      message:
        "What would you like to name your HTML file? **Please don't include the .html",
      name: "fileName",
      default: "team",
      validate: function (fileName) {
        const regex = /(\.html|\.)/g;
        return (
          !regex.test(fileName) ||
          "Please ensure to only include the file name, without .html"
        );
      },
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
