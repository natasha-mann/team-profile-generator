// const inquirer = require("inquirer");

// const app = require("../app");
// const getAnswers = require("../getAnswers");
// const createManager = require("../createManager");
// // const getAllTeamMembers = require("../getAllTeamMembers");
// const generateHTML = require("../utils/generateHTML.js");
// // const writeToFile = require("../writeToFile");
// // const getAnswers = require("../getAnswers");

// jest.mock("inquirer");
// jest.mock("../utils/generateHTML.js");
// jest.mock("../writeToFile.js");
// jest.mock("../getAnswers.js");

// describe("app", () => {
//   const inquirerSpy = jest.spyOn(inquirer, "prompt");
//   const consoleSpy = jest.spyOn(console, "log");

//   const mockAnswers = (answers = {}) => {
//     inquirerSpy.mockResolvedValue(answers);
//   };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test("should console log App started", async () => {
//     const expected = "App started";
//     await app();
//     expect(consoleSpy).toHaveBeenCalledWith(expected);
//   });

//   test("should call getAnswers with the initialQuestions", async () => {
//     const initialQuestions = [
//       {
//         message: "What is the name of your team?",
//         name: "teamName",
//       },
//       {
//         message:
//           "What would you like to name your HTML file? **Please don't include the .html",
//         name: "fileName",
//       },
//     ];

//     await app();

//     expect(getAnswers).toHaveBeenCalledWith(initialQuestions);
//   });

//   // test("should call generateHTML with the answers", async () => {
//   //   const mockData = {
//   //     teamName: "international",
//   //   };

//   //   mockAnswers(mockData);

//   //   await app();

//   //   expect(generateHTML).toHaveBeenCalledWith(mockData);
//   // });

//   // test("should call writeToFile with the html", async () => {
//   //   const mockData = {
//   //     teamName: "international",
//   //   };

//   //   const mockHtml = "html string";

//   //   mockAnswers(mockData);
//   //   generateHTML.mockReturnValue(mockHtml);

//   //   await app();

//   //   expect(writeToFile).toHaveBeenCalledWith(mockHtml);
//   // });
// });
