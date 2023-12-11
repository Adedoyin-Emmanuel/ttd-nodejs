const request = require("supertest");
const { ToDo } = require("./../../models");
let server;
const BASE_ENDPOINT = "/api/todos";

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

      const response = await request(server).get(BASE_ENDPOINT);
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

  describe("GET /:id", () => {
    it("should return a 404 since TODO Id is invalid", async () => {
      const response = await request(server).get(`${BASE_ENDPOINT}/1`);

      expect(response.status).toBe(404);
    });

    it("should return a 200 since TODO Id is valid", async () => {
      const todo = new ToDo({ name: "Read the book Welcome HolySpirit" });
      await todo.save();

      const response = await request(server).get(
        `${BASE_ENDPOINT}/${todo._id}`
      );

      expect(response.status).toBe(200);
      console.log(response.body.data);
      expect(response.body.data).toHaveProperty("name", todo.name);
    });
  });

  //delete a todo
});
