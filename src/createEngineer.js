const getAnswers = require("./getAnswers");
const Engineer = require("./employees/engineer");

const createEngineer = async () => {
  const engineerQuestions = [
    {
      message: "What is the engineer's name?",
      name: "name",
    },
    {
      type: "number",
      message: "What is the engineer's employee ID number?",
      name: "employeeID",
      validate: function (employeeID) {
        const regex = /^[0-9]+$/;
        return regex.test(employeeID);
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
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        );
      },
    },
  ];

  const engineerAnswers = await getAnswers(engineerQuestions);

  return new Engineer(engineerAnswers);
};

module.exports = createEngineer;
