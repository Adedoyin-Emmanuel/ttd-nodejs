const express = require("express");
const router = express.Router();
const { TodoController } = require("./../controllers");
const { validateObjectId } = require("./../middlewares");
const { validate } = require("../models/todo.model");

router.get("/", TodoController.getAll);

router.get("/:id", [validateObjectId], TodoController.getById);

router.post("/", TodoController.create);

router.put("/", TodoController.update);

router.delete("/:id", [validateObjectId], TodoController.delete);

module.exports = router;
