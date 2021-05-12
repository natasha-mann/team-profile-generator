const {
  generateHTML,
  generateManagerCard,
  generateEngineerCard,
  generateInternCard,
} = require("../utils/generateHTML");

const inquirer = require("inquirer");

jest.mock("../utils/generateHTML.js");
const inquirerSpy = jest.spyOn(inquirer, "prompt");

describe("generateHTML", () => {
  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return the expected HTML markup", () => {
    const mockData = {
      teamName: "international",
      manager: {
        name: "test",
        employeeID: "test",
        email: "test",
        officeNumber: "test",
      },
      teamMember: {
        name: "test",
        employeeID: "test",
        email: "test",
        github: "test",
        school: "test",
      },
    };

    mockAnswers(mockData);

    const actual = generateHTML();

    expect(actual).toMatchSnapshot();
  });
});

describe("generateManagerCard", () => {
  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };

  test("should return the expected HTML markup", () => {
    const mockData = {
      manager: {
        name: "test",
        employeeID: "test",
        email: "test",
        officeNumber: "test",
      },
    };

    mockAnswers(mockData);

    const actual = generateManagerCard(mockData);

    expect(actual).toMatchSnapshot();
  });
});

describe("generateEngineerCard", () => {
  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };

  test("should return the expected HTML markup", () => {
    const mockData = {
      teamMember: {
        name: "test",
        employeeID: "test",
        email: "test",
        github: "test",
        school: "test",
      },
    };

    mockAnswers(mockData);

    const actual = generateEngineerCard(mockData);

    expect(actual).toMatchSnapshot();
  });
});

describe("generateInternCard", () => {
  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };

  test("should return the expected HTML markup", () => {
    const mockData = {
      teamMember: {
        name: "test",
        employeeID: "test",
        email: "test",
        github: "test",
        school: "test",
      },
    };

    mockAnswers(mockData);

    const actual = generateInternCard(mockData);

    expect(actual).toMatchSnapshot();
  });
});
