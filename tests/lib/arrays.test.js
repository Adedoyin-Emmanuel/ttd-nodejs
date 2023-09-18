const { supportedNetworks, supportedClasses } = require("./../../libs/arrays");

describe("Arrays", () => {
  it("should return supported ethereum networks", () => {
    const result = supportedNetworks();
    expect(result).toEqual(
      expect.arrayContaining(["Goeril Eth", "Sepolia Eth", "Mainnet Eth"])
    );
  });

  it("should return the supported classes", () => {
    const result = supportedClasses();
    expect(result).toEqual(
      expect.arrayContaining(["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"])
    );
  });
});
