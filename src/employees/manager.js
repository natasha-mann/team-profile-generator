const Employee = require("./employee");

class Manager extends Employee {
  constructor({ officeNum, ...rest }) {
    super(rest);

    this.officeNum = officeNum;
  }

  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
