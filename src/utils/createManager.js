const getAnswers = require("./getAnswers");
const Manager = require("../lib/Manager");

const createManager = async () => {
  const managerQuestions = [
    {
      message: "What is the name of the team manager?",
      name: "name",
      validate: function (name) {
        return /[^0-9]/.test(name) || "Please enter the manager's name.";
      },
    },
    {
      message: "What is the manager's employee ID number?",
      name: "employeeID",
      validate: function (employeeID) {
        return /^[0-9]+$/.test(employeeID) || "Please enter a number";
      },
    },
    {
      message: "What is the manager's office number?",
      name: "officeNumber",
      validate: function (officeNumber) {
        return /^[0-9]+$/.test(officeNumber) || "Please enter a number";
      },
    },
    {
      message: "What is the manager's email address?",
      name: "email",
      validate: function (email) {
        // Regex mail check (return true if valid mail)
        return (
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
            email
          ) || "Please enter a valid email"
        );
      },
    },
  ];

  const managerAnswers = await getAnswers(managerQuestions);

  return new Manager(managerAnswers);
};

module.exports = createManager;
