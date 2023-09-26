const express = require("express");
const router = express.Router();
const { TodoController } = require("./../controllers");

router.get("/", TodoController.getAll);

router.get("/:id", TodoController.getById);

router.post("/", TodoController.create);

router.put("/", TodoController.update);

router.delete("/:id", TodoController.delete);

module.exports = router;
