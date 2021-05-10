const Employee = require("./employee");

class Engineer extends Employee {
  constructor({ github, ...rest }) {
    super(rest);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
