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
    },
    {
      message: "What is the engineer's github username?",
      name: "github",
    },
    {
      message: "What is the engineer's email address?",
      name: "email",
    },
  ];

  const engineerAnswers = await getAnswers(engineerQuestions);

  return new Engineer(engineerAnswers);
};

module.exports = createEngineer;
