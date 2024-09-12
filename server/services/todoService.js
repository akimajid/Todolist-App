const { Todo } = require("../models");

const createTodo = async (data, userId) => {
  if (!data.title || typeof data.title !== "string") {
    throw new Error("Title is required and must be a string");
  }

  const newTodo = await Todo.create({
    ...data,
    userId,
  });

  return newTodo;
};

const getTodosByUser = async (userId) => {
  const todos = await Todo.findAll({
    where: { userId },
    order: [["createdAt", "DESC"]],
  });

  return todos;
};

const getTodoById = async (id, userId) => {
  const todo = await Todo.findOne({
    where: { id, userId },
  });

  if (!todo) {
    throw new Error("Todo not found");
  }
  return todo;
};

const updateTodo = async (id, data, userId) => {
  const todo = await getTodoById(id, userId);

  todo.title = data.title || todo.title;
  todo.description = data.description || todo.description;
  todo.status = data.status || todo.status;
  todo.dueDate = data.dueDate || todo.dueDate;

  await todo.save();

  return todo;
};

const deleteTodo = async (todoId) => {
  const todo = await Todo.findByPk(todoId);

  if (!todo) {
    throw new Error("Todo not found");
  }

  await todo.destroy();
  return { message: "Todo deleted successfully" };
};

module.exports = {
  createTodo,
  getTodosByUser,
  getTodoById,
  updateTodo,
  deleteTodo,
};
