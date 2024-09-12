const todoService = require("../services/todoService");

const createTodo = async (req, res) => {
  try {
    const userId = req.user.id; // Dapatkan ID user dari token (middleware)
    const todo = await todoService.createTodo(req.body, userId);
    return res.status(201).json(todo);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const userId = req.user.id;
    const todos = await todoService.getTodosByUser(userId);
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    const todo = await todoService.getTodoById(todoId, userId);
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    const updatedTodo = await todoService.updateTodo(todoId, req.body, userId);
    return res.status(200).json(updatedTodo);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const result = await todoService.deleteTodo(todoId); // Panggil service

    return res.status(200).json(result); // Kirim respons sukses
  } catch (error) {
    if (error.message === 'Todo not found') {
      return res.status(404).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Error deleting todo', error: error.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
