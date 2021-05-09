const getAnswers = require("./getAnswers");
const Intern = require("./employees/intern");

const createIntern = async () => {
  const internQuestions = [
    {
      message: "What is the intern's name?",
      name: "name",
    },
    {
      type: "number",
      message: "What is the intern's employee ID number?",
      name: "employeeID",
    },
    {
      message: "Which school is the intern from?",
      name: "school",
    },
    {
      message: "What is the intern's email address?",
      name: "email",
    },
  ];

  const internAnswers = await getAnswers(internQuestions);

  return new Intern(internAnswers);
};

module.exports = createIntern;
