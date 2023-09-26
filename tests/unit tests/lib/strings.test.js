const { printName } = require("./../../../libs/strings");

describe("Strings", () => {
  it("should throw an error if argument is not a string", () => {
    expect(() => {
      printName(undefined);
    }).toThrow();
  });

  it("should print a phrase containing the argument passed", () => {
    const result = printName("Adedoyin Emmanuel");
    expect(result).toContain("Adedoyin Emmanuel");
  });
});
