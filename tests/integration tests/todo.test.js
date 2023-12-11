const request = require("supertest");
const { default: mongoose } = require("mongoose");
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

  describe("POST /", () => {
    let todo;
    beforeEach(async () => {
      todo = new ToDo({ name: "Read the book Welcome HolySpirit" });
      await todo.save();
    });

    it("should create a todo in the database", async () => {
      const checkTodo = await ToDo.find({ name: todo.name });
      expect(checkTodo).not.toBeNull();
    });

    it("should create a todo by visiting the endpoint", async () => {
      const response = await request(server)
        .post(BASE_ENDPOINT)
        .send({ name: todo.name });

      expect(response.status).toBe(201);
    });

    it("should return the created todo in the response body", async () => {
      const response = await request(server).get(BASE_ENDPOINT);
      expect(response.status).toBe(200);
      expect(response.body.data[0]).toHaveProperty("name", todo.name);
    });

    it("should return 400 if name is not passed in request body", async () => {
      const response = await request(server).post(BASE_ENDPOINT);
      expect(response.status).toBe(400);
    });
  });

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
      expect(response.body.data).toHaveProperty("name", todo.name);
    });

    it("should return a 404 error if the TODO Id is valid but not in the database", async () => {
      const todoId = "6576c9bf97a1ef484661f101";
      const response = await request(server).get(`${BASE_ENDPOINT}/${todoId}`);

      expect(response.status).toBe(404);
    });
  });

  //update a todo

  describe("UPDATE /:id", () => {
    let todo;

    beforeEach(async () => {
      todo = new ToDo({ name: "Read the book Welcome HolySpirit" });
      await todo.save();
    });

    it("should return 404 if TODO Id is invalid", async () => {
      const response = await request(server).put(`${BASE_ENDPOINT}/1`);

      expect(response.status).toBe(404);
    });

    it("should return a 404 if TODO Id is not found", async () => {
      const todoId = "6576c9bf97a1ef484661f102";
      const response = await request(server).put(`${BASE_ENDPOINT}/${todoId}`);

      expect(response.status).toBe(404);
    });

    it("should return a 200 on TODO update", async () => {
      const response = await request(server).put(`${BASE_ENDPOINT}`).send({
        id: todo._id,
        name: "Read the book Good Morning HolySpirit",
        status: true,
      });

      expect(response.status).toBe(200);
      expect(response.body.data).not.toBeNull();
      expect(response.body.data).toHaveProperty(
        "name",
        "Read the book Good Morning HolySpirit"
      );
    });
  });

  //delete a todo

  describe("DELETE /:id", () => {
    let todo;
    beforeEach(async () => {
      todo = new ToDo({ name: "Read the book Welcome HolySpirit" });
      await todo.save();
    });
    it("should return 404 if TODO Id is invalid", async () => {
      const response = await request(server).get(`${BASE_ENDPOINT}/1`);

      expect(response.status).toBe(404);
    });

    it("should return 404 if TODO Id is not found", async () => {
      const todoId = "6576c9bf97a1ef484661f102";
      const response = await request(server).get(`${BASE_ENDPOINT}/${todoId}`);

      expect(response.status).toBe(404);
    });

    it("should delete the TODO from the database", async () => {
      const response = await request(server).delete(
        `${BASE_ENDPOINT}/${todo._id}`
      );

      expect(response.status).toBe(200);
      expect(response.body.data).not.toBeNull();
    });
  });
});
