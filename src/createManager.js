const getAnswers = require("./getAnswers");

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
  return;
};

module.exports = createManager;
