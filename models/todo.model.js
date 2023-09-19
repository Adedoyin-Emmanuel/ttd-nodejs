const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 500,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "not-done",
  },
});

const ToDo = mongoose.model("Todo", TodoSchema);
module.exports = ToDo;
