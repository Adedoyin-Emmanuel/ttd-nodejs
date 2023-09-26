const { getPosition, getUser } = require("./../../../libs/objects");

describe("Objects", () => {
  it("should return a location object with city, logitude and latitude", () => {
    const result = getPosition("Lagos");
    expect(result).toMatchObject({
      city: "Lagos",
      longitude: 0.28,
      latitude: 2.8,
    });
  });

  it("should return a user object with id, name and hobby", () => {
    const result = getUser(28);
    expect(result).toMatchObject({
      id: 28,
      name: "Adedoyin Emmanuel",
      hobby: "programming",
    });
  });
});
