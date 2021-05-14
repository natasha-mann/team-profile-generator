const getAnswers = require("./getAnswers");
const Engineer = require("../lib/Engineer");

const createEngineer = async () => {
  const engineerQuestions = [
    {
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      message: "What is the engineer's employee ID number?",
      name: "employeeID",
      validate: function (employeeID) {
        return /^[0-9]+$/.test(employeeID) || "Please enter a number";
      },
    },
    {
      message: "What is the engineer's github username?",
      name: "github",
    },
    {
      message: "What is the engineer's email address?",
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

  const engineerAnswers = await getAnswers(engineerQuestions);

  return new Engineer(engineerAnswers);
};

module.exports = createEngineer;
