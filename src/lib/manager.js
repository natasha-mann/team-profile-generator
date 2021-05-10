const Employee = require("./employee");

class Manager extends Employee {
  constructor({ officeNumber, ...rest }) {
    super(rest);

    this.officeNumber = officeNumber;
  }

  getOfficeNum() {
    return this.officeNum;
  }
}

module.exports = Manager;
