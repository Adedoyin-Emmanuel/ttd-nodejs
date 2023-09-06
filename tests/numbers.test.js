const numbers = require("../libs/numbers");

// Detailed test to test all edge cases for adding 2 integers
describe("Add two integers", () => {
  it("Adds 2 + 2 and expects the value equal 4", () => {
    const value = numbers.add(2, 2);
    expect(value).toEqual(4);
  });

  it("Adds undefined + undefined and expects an error", () => {
    expect(() => {
      numbers.add(undefined, undefined).throwError(Error);
    });
  });

  it("Adds null + null and expects an error", () => {
    expect(() => {
      numbers.add(null, null).throwError(Error);
    });
  });
  it("Adds two floating point numbers - adds 3.2 + 2 to be close to 5.2", () => {
    const value = numbers.add(3.2, 2);
    expect(value).toBeCloseTo(5.2);
  });
});
