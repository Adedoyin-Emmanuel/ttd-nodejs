const express = require("express");
const router = express.Router();
const { TodoController } = require("./../controllers");
const { limiter } = require("./../middlewares");

router.get("/", limiter, (req, res) => {
  TodoController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  TodoController.getById(req, res);
});

router.post("/", (req, res) => {
  TodoController.create(req, res);
});

router.put("/", (req, res) => {
  TodoController.update(req, res);
});

router.delete("/:id", (req, res) => {
  TodoController.delete(req, res);
});

router.all("*", (req, res) => {
  TodoController.routeNotFound(req, res);
});

module.exports = router;
