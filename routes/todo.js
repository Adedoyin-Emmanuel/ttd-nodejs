const express = require("express");
const router = express.Router();
const { response } = require("./../utils");

router.get("/", (req, res) => {
  response(res, 200, "Welcome to todo API");
});

router.get("/:id", (req, res) => {
  response(res, 200, "Welcome to todo API");
});

router.post("/", (req, res) => {
  response(res, 200, "Welcome to todo API");
});

router.put("/", (req, res) => {
  response(res, 200, "Welcome to todo API");
});

router.delete("/", (req, res) => {
  response(res, 200, "Welcome to todo API");
});

module.exports = router;
