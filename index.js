require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2800;
const morgan = require("morgan");
const { connectToDb } = require("./utils");
const { todoRouter } = require("./routes");
const { errorHandler, rateLimiter, notFound } = require("./middlewares");

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/todos", todoRouter);
app.use(rateLimiter);
app.use(errorHandler);
app.use(notFound);

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  connectToDb();
});

module.exports = server;
