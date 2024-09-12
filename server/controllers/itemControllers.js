const itemService = require("../services/itemService");

const getItems = async (req, res) => {
  try {
    const items = await itemService.getItems(req.params.todoId);
    res.status(200).json({ message: "Items fetched successfully", items });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await itemService.getItemById(
      req.params.todoId,
      req.params.itemId
    );
    res.status(200).json({ message: "Item fetched successfully", item });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createItem = async (req, res) => {
  try {
    const newItem = await itemService.createItem(req.params.todoId, req.body);
    res
      .status(201)
      .json({ message: "Item created successfully", item: newItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const updatedItem = await itemService.updateItem(
      req.params.todoId,
      req.params.itemId,
      req.body
    );
    res
      .status(200)
      .json({ message: "Item updated successfully", item: updatedItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    await itemService.deleteItem(req.params.todoId, req.params.itemId);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
