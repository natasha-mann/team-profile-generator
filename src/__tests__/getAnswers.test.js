const inquirer = require("inquirer");

const getAnswers = require("../utils/getAnswers");

jest.mock("inquirer");

describe("getAnswers", () => {
  const inquirerSpy = jest.spyOn(inquirer, "prompt");

  const mockQuestions = [
    {
      message: "mock message",
      name: "mock",
    },
  ];

  const mockAnswers = (answers = {}) => {
    inquirerSpy.mockResolvedValue(answers);
  };

  beforeAll(() => {
    jest.clearAllMocks();
  });

  test("should pass questions to inquirer prompt", async () => {
    mockAnswers();

    await getAnswers(mockQuestions);

    expect(inquirerSpy).toHaveBeenCalledWith(mockQuestions);
  });

  test("should return the expected answers", async () => {
    mockAnswers({ mock: "foo bar" });

    const actual = await getAnswers(mockQuestions);

    expect(actual).toEqual({ mock: "foo bar" });
  });
});
