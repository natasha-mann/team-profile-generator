const getAnswers = require("./getAnswers");
const Intern = require("../lib/Intern");

const createIntern = async () => {
  const internQuestions = [
    {
      message: "What is the intern's name?",
      name: "name",
      validate: function (name) {
        return /[^0-9]/.test(name) || "Please enter the intern's name.";
      },
    },
    {
      message: "What is the intern's employee ID number?",
      name: "employeeID",
      validate: function (employeeID) {
        return /^[0-9]+$/.test(employeeID) || "Please enter a number";
      },
    },
    {
      message: "Which school is the intern from?",
      name: "school",
      validate: function (school) {
        return /[^0-9]/.test(school) || "Please enter the intern's school.";
      },
    },
    {
      message: "What is the intern's email address?",
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

  const internAnswers = await getAnswers(internQuestions);

  return new Intern(internAnswers);
};

module.exports = createIntern;
