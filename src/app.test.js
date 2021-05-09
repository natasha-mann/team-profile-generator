const app = require("./app");

describe("app", () => {
  const consoleSpy = jest.spyOn(console, "log");
  test("should console log App started", () => {
    const expected = "App started";
    app();
    expect(consoleSpy).toHaveBeenCalledWith(expected);
  });
});
