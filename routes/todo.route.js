const express = require("express");
const router = express.Router();
const { response } = require("../utils");
const { TodoController } = require("./../controllers");

router.get("/", (req, res) => {
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

router.delete("/", (req, res) => {
  TodoController.delete(req, res);
});

module.exports = router;
