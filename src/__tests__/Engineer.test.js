const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  const mockAnswers = {
    name: "Natasha",
    employeeID: "54",
    email: "natasha@test.com",
    github: "natasha-mann",
  };
  describe("Constructor tests", () => {
    it("should create an instance of an Engineer object", () => {
      const actual = new Engineer(mockAnswers);

      expect(actual).toBeInstanceOf(Engineer);
    });

    it("set the data properties in the constructor function", () => {
      const actual = new Engineer(mockAnswers);

      expect(actual.name).toEqual("Natasha");
      expect(actual.employeeID).toEqual("54");
      expect(actual.email).toEqual("natasha@test.com");
      expect(actual.github).toEqual("natasha-mann");
    });
  });

  describe("Method tests", () => {
    it("should get the value of github", () => {
      const engineer = new Engineer(mockAnswers);
      const actual = engineer.getGithub();

      expect(actual).toEqual(engineer.github);
    });

    it("should get the role of the employee", () => {
      const engineer = new Engineer(mockAnswers);
      const actual = engineer.getRole();

      expect(actual).toEqual("Engineer");
    });
  });
});
