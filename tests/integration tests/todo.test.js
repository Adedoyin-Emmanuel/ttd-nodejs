const request = require("supertest");
let server;

describe("/api/todos", () => {
  beforeEach(() => {
    server = require("./../../index");
  });

  afterEach(() => {
    server.close();
  });

  describe("GET /", () => {
    it("should return all todos in the database", async () => {
      const response = await request(server).get("/api/todos");
      expect(response.status).toBe(200);
    });
  });
});
