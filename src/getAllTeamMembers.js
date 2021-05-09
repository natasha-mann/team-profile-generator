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

  const answers = await getAnswers(questions);

  return answers;
};

const getAllTeamMembers = async () => {
  const teamMembers = [];

  let inProgress = true;

  while (inProgress) {
    const answers = await promptQuestionAndGetAnswers();

    if (answers.employeeType === "none") {
      inProgress = false;
    } else {
      if (answers.employeeType === "engineer") {
        const engineer = await createEngineer();
        teamMembers.push(engineer);
      }

      if (answers.employeeType === "intern") {
        const intern = await createIntern();
        teamMembers.push(intern);
      }
    }
  }

  return teamMembers;
};

module.exports = getAllTeamMembers;
