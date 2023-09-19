const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const ToDo = mongoose.model("Todo", TodoSchema);
module.exports = ToDo;
