const { Item, Todo } = require("../models");

const getItems = async (todoId) => {
  const todo = await Todo.findByPk(todoId);
  if (!todo) {
    throw new Error("Todo not found");
  }
  return await Item.findAll({ where: { todoId } });
};

const getItemById = async (todoId, itemId) => {
  const todo = await Todo.findByPk(todoId);
  if (!todo) {
    throw new Error("Todo not found");
  }
  const item = await Item.findOne({ where: { todoId, id: itemId } });
  if (!item) {
    throw new Error("Item not found");
  }
  return item;
};

const createItem = async (todoId, data) => {
  const todo = await Todo.findByPk(todoId);
  if (!todo) {
    throw new Error("Todo not found");
  }
  return await Item.create({ ...data, todoId });
};

const updateItem = async (todoId, itemId, data) => {
  const item = await getItemById(todoId, itemId);
  return await item.update(data);
};

const deleteItem = async (todoId, itemId) => {
  const item = await getItemById(todoId, itemId);
  return await item.destroy();
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
