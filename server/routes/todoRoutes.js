const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, todoController.getTodos);
router.get("/:id", authMiddleware, todoController.getTodoById);
router.post("/", authMiddleware, todoController.createTodo);
router.put("/:id", authMiddleware, todoController.updateTodo);
router.delete("/:id", authMiddleware, todoController.deleteTodo);

module.exports = router;
