const generateHTML = require("../utils/generateHTML");

describe("generateHTML", () => {
  test("should return the expected HTML markup", () => {
    const actual = generateHTML({ teamName: "International Team" });

    expect(actual).toMatchSnapshot();
  });
});
