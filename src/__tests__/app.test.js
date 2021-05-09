const inquirer = require("inquirer");

const app = require("../app");
const generateHTML = require("../utils/generateHTML.js");
const writeToFile = require("../writeToFile");

jest.mock("inquirer");
jest.mock("../utils/generateHTML.js");
jest.mock("../writeToFile.js");

describe("app", () => {
  const inquirerSpy = jest.spyOn(inquirer, "prompt");
  const consoleSpy = jest.spyOn(console, "log");

  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should console log App started", async () => {
    const expected = "App started";
    await app();
    expect(consoleSpy).toHaveBeenCalledWith(expected);
  });

  test("should call generateHTML with the answers", async () => {
    const mockData = {
      teamName: "international",
    };

    mockAnswers(mockData);

    await app();

    expect(generateHTML).toHaveBeenCalledWith(mockData);
  });

  test("should call writeToFile with the html", async () => {
    const mockData = {
      teamName: "international",
    };

    const mockHtml = "html string";

    mockAnswers(mockData);
    generateHTML.mockReturnValue(mockHtml);

    await app();

    expect(writeToFile).toHaveBeenCalledWith(mockHtml);
  });
});
