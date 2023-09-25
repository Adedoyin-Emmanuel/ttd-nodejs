const { throwError, throwErrorUsingCatch } = require("./../../libs/exception");

describe("Exception", () => {
  it("should throw a custom error we defined when calle", () => {
    expect(throwError).toThrow();
  });

  it("should also throw a method doesn't exist error on the varible when called", () => {
    expect(throwErrorUsingCatch).toThrow();
  });
});
