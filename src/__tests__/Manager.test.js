const Manager = require("../lib/Manager");

describe("Manager class", () => {
  const mockAnswers = {
    name: "Natasha",
    employeeID: "54",
    email: "natasha@test.com",
    officeNumber: "12",
  };
  describe("Constructor tests", () => {
    it("should create an instance of a Manager object", () => {
      const actual = new Manager(mockAnswers);

      expect(actual).toBeInstanceOf(Manager);
    });

    it("set the data properties in the constructor function", () => {
      const actual = new Manager(mockAnswers);

      expect(actual.name).toEqual("Natasha");
      expect(actual.employeeID).toEqual("54");
      expect(actual.email).toEqual("natasha@test.com");
      expect(actual.officeNumber).toEqual("12");
    });
  });

  describe("Method tests", () => {
    it("should get the value of officeNumber", () => {
      const manager = new Manager(mockAnswers);
      const actual = manager.getOfficeNumber();

      expect(actual).toEqual(manager.officeNumber);
    });

    it("should get the role of the employee", () => {
      const manager = new Manager(mockAnswers);
      const actual = manager.getRole();

      expect(actual).toEqual("Manager");
    });
  });
});
