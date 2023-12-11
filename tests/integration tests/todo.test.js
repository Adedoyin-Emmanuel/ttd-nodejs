const request = require("supertest");
const { ToDo } = require("./../../models");
let server;

describe("/api/todos", () => {
  beforeEach(() => {
    server = require("./../../index");
  });

  afterEach(async () => {
    server.close();
    await ToDo.collection.deleteMany({});
  });

  // create a todo

  describe("GET /", () => {
    it("should return all todos in the database", async () => {
      await ToDo.collection.insertMany([
        { name: "Play Call Of Duty" },
        { name: "Call Amanda and remind her of the tech event" },
      ]);

      const response = await request(server).get("/api/todos");
      expect(response.status).toBe(200);
      expect(response.body.length == 2);
      expect(
        response.body.data.some((todo) => todo.name === "Play Call Of Duty")
      ).toBeTruthy();
      expect(
        response.body.data.some(
          (todo) => todo.name === "Call Amanda and remind her of the tech event"
        )
      ).toBeTruthy();
    });
  });

  // get a todo by id

  //delete a todo
});
