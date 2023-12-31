const { ToDo } = require("./../models");
const Joi = require("joi");
const { response } = require("./../utils");
const _ = require("lodash");
const { default: mongoose } = require("mongoose");

class TodoController {
  static async create(req, res) {
    const requestSchema = Joi.object({
      name: Joi.string().required().max(500),
    });

    const { error, value } = requestSchema.validate(req.body);
    if (error) return response(res, 400, error.details[0].message);

    const todoCreationResult = await ToDo.create(value);
    return response(res, 201, "Todo created successfully", todoCreationResult);
  }

  static async getAll(req, res) {
    const allTodos = await ToDo.find();
    return response(res, 200, "Todos fetched successfully", allTodos);
  }

  static async getById(req, res) {
    const requestSchema = Joi.object({
      id: Joi.string().required(),
    });

    const { error, value } = requestSchema.validate(req.params);

    const todo = await ToDo.findById(value.id);
    if (!todo) return response(res, 404, "Todo not found");
    return response(res, 200, "Todo fetched successfully", todo);
  }

  static async update(req, res) {
    const requestSchema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required().max(500),
      status: Joi.boolean().required(),
    });

    const { error, value } = requestSchema.validate(req.body);
    if (error) return response(res, 400, error.details[0].message);
    const updatedTodo = await ToDo.findByIdAndUpdate(
      value.id,
      {
        name: value.name,
        status: value.status,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!updatedTodo) return response(res, 404, "Todo not found");
    return response(res, 200, "Todo updated successfully", updatedTodo);
  }

  static async delete(req, res) {
    const requestSchema = Joi.object({
      id: Joi.string().required(),
    });

    const { value } = requestSchema.validate(req.params);

    const deletedTodo = await ToDo.findByIdAndDelete(value.id);
    if (!deletedTodo) return response(res, 404, "Todo not found");
    return response(res, 200, "Todo deleted successfully");
  }
}

module.exports = TodoController;
