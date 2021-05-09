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
      validate: function (employeeID) {
        const regex = /^[0-9]+$/;
        return regex.test(employeeID);
      },
    },
    {
      message: "Which school is the intern from?",
      name: "school",
    },
    {
      message: "What is the intern's email address?",
      name: "email",
      validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        );
      },
    },
  ];

  const internAnswers = await getAnswers(internQuestions);

  return new Intern(internAnswers);
};

module.exports = createIntern;
