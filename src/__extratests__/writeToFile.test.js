const writeToFile = require("../writeToFile");
const fs = require("fs");

describe("writeToFile", () => {
  test("should produce a html file with given file name", () => {
    const fileName = "test";
    const generatedHTML = "test string";
    // __dirname = path.__dirname(__filename)
    console.log("__dirname:    ", __dirname);

    writeToFile(fileName, generatedHTML);

    const filePath = fs.existsSync("app.test.js");

    expect(filePath).toBe(true);
  });

  test("should produce a html with contents matching the html passed in", () => {
    fs.readFile("");
  });
});
