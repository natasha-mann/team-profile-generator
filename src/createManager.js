const getAnswers = require("./getAnswers");
const Manager = require("./employees/manager");

const createManager = async () => {
  const managerQuestions = [
    {
      message: "What is the name of the team manager?",
      name: "name",
    },
    {
      type: "number",
      message: "What is the manager's employee ID number?",
      name: "employeeID",
    },
    {
      type: "number",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
    {
      message: "What is the manager's email address?",
      name: "email",
    },
  ];

  const managerAnswers = await getAnswers(managerQuestions);

  return new Manager(managerAnswers);
};

module.exports = createManager;
