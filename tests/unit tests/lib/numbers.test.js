const { add, subtract, absolute } = require("./../../../libs/numbers");

describe("Numbers", () => {
  it("should add a number to the other", () => {
    const result = add(2, 2);
    expect(result).toEqual(4);
  });

  it("should add a float to another", () => {
    const result = add(2.8, 2.8);
    expect(result).toBeCloseTo(5.6);
  });

  it("should throw an error if argument is not a number", () => {
    expect(() => {
      add(undefined, undefined);
    }).toThrow();
  });

  it("should subtract a number from the other", () => {
    const result = subtract(4, 2);
    expect(result).toBe(2);
  });

  it("should throw an error if argument is not a number", () => {
    expect(() => {
      subtract(undefined, undefined);
    }).toThrow();
  });

  it("should throw an error if argument is not a number", () => {
    expect(() => {
      absolute("foo");
    }).toThrow();
  });

  it("should return an equal positive number if a negative number is passed", () => {
    const result = absolute(-28);

    expect(result).toEqual(28);
  });

  it("should return a positive number if a positive number is passed", () => {
    const result = absolute(28);
    expect(result).toBe(28);
  });

  it("should return 0 if 0 is passed as the argument", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
});
