const Employee = require("./employee");

class Intern extends Employee {
  constructor({ school, ...rest }) {
    super(rest);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
