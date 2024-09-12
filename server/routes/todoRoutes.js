const express = require("express");
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");
const { authenticateUser } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, createTodo);
router.get("/", authenticateUser, getTodos);
router.get("/:id", authenticateUser, getTodo);
router.patch("/:id", authenticateUser, updateTodo);
router.delete("/:id", authenticateUser, deleteTodo);

module.exports = router;
