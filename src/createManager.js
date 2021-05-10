const getAnswers = require("./getAnswers");
const Manager = require("./lib/manager");

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
      validate: function (employeeID) {
        const regex = /^[0-9]+$/;
        return regex.test(employeeID);
      },
    },
    {
      type: "number",
      message: "What is the manager's office number?",
      name: "officeNumber",
      validate: function (officeNumber) {
        const regex = /^[0-9]+$/;
        return regex.test(officeNumber);
      },
    },
    {
      message: "What is the manager's email address?",
      name: "email",
      validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        );
      },
    },
  ];

  const managerAnswers = await getAnswers(managerQuestions);

  return new Manager(managerAnswers);
};

module.exports = createManager;
