const Intern = require("../lib/Intern");

describe("Intern class", () => {
  const mockAnswers = {
    name: "Natasha",
    employeeID: "54",
    email: "natasha@test.com",
    school: "testSchool",
  };
  describe("Constructor tests", () => {
    it("should create an instance of an Intern object", () => {
      const actual = new Intern(mockAnswers);

      expect(actual).toBeInstanceOf(Intern);
    });

    it("set the data properties in the constructor function", () => {
      const actual = new Intern(mockAnswers);

      expect(actual.name).toEqual("Natasha");
      expect(actual.employeeID).toEqual("54");
      expect(actual.email).toEqual("natasha@test.com");
      expect(actual.school).toEqual("testSchool");
    });
  });

  describe("Method tests", () => {
    it("should get the value of school", () => {
      const intern = new Intern(mockAnswers);
      const actual = intern.getSchool();

      expect(actual).toEqual(intern.school);
    });

    it("should get the role of the employee", () => {
      const intern = new Intern(mockAnswers);
      const actual = intern.getRole();

      expect(actual).toEqual("Intern");
    });
  });
});
