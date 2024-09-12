const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const todoRoutes = require("./todoRoutes");
const itemRoutes = require("./itemRoutes");
const commentRoutes = require("./commentRoutes");

// Register routes
router.use("/users", userRoutes);
router.use("/todos", todoRoutes);

// Nested routes for items and comments under todos
router.use("/todos/:todoId/items", itemRoutes);
router.use("/todos/:todoId/comments", commentRoutes);

module.exports = router;
