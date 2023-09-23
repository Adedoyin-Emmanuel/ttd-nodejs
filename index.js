require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2800;
const morgan = require("morgan");
const { connectToDb } = require("./utils");
const { todoRouter } = require("./routes");


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  connectToDb();
});
