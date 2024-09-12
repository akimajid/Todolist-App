const { Todo } = require("../models");

const getTodos = async () => {
  return await Todo.findAll();
};

const getTodoById = async (id) => {
  const todo = await Todo.findByPk(id);
  if (!todo) {
    throw new Error("Todo not found");
  }
  return todo;
};

const createTodo = async (data) => {
  return await Todo.create(data);
};

const updateTodo = async (id, data) => {
  const todo = await getTodoById(id);
  return await todo.update(data);
};

const deleteTodo = async (id) => {
  const todo = await getTodoById(id);
  return await todo.destroy();
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
