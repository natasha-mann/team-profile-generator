const getAnswers = require("./getAnswers");
const createEngineer = require("./createEngineer");
const createIntern = require("./createIntern");

const promptQuestionAndGetAnswers = async () => {
  const questions = [
    {
      type: "list",
      message: "Select the type of employee you want to add to your team:",
      name: "employeeType",
      choices: [
        {
          name: "Engineer",
          value: "engineer",
        },
        {
          name: "Intern",
          value: "intern",
        },
        {
          name: "None",
          value: "none",
        },
      ],
    },
  ];

  return await getAnswers(questions);
};

const getAllTeamMembers = async () => {
  const teamMembers = [];

  let inProgress = true;

  while (inProgress) {
    const { employeeType } = await promptQuestionAndGetAnswers();

    if (employeeType === "none") {
      inProgress = false;
    } else {
      if (employeeType === "engineer") {
        const engineer = await createEngineer();
        teamMembers.push(engineer);
      }

      if (employeeType === "intern") {
        const intern = await createIntern();
        teamMembers.push(intern);
      }
    }
  }

  return teamMembers;
};

module.exports = getAllTeamMembers;
