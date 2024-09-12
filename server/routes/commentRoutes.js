const express = require("express");
const router = express.Router({ mergeParams: true });
const commentController = require("../controllers/commentControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, commentController.getComments);
router.get("/:commentId", authMiddleware, commentController.getCommentById);
router.post("/", authMiddleware, commentController.createComment);
router.put("/:commentId", authMiddleware, commentController.updateComment);
router.delete("/:commentId", authMiddleware, commentController.deleteComment);

module.exports = router;
