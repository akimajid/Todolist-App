const commentService = require("../services/commentService");

const getComments = async (req, res) => {
  try {
    const comments = await commentService.getComments(req.params.todoId);
    res
      .status(200)
      .json({ message: "Comments fetched successfully", comments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await commentService.getCommentById(
      req.params.todoId,
      req.params.commentId
    );
    res.status(200).json({ message: "Comment fetched successfully", comment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const newComment = await commentService.createComment(
      req.params.todoId,
      req.body
    );
    res
      .status(201)
      .json({ message: "Comment created successfully", comment: newComment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const updatedComment = await commentService.updateComment(
      req.params.todoId,
      req.params.commentId,
      req.body
    );
    res
      .status(200)
      .json({
        message: "Comment updated successfully",
        comment: updatedComment,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    await commentService.deleteComment(req.params.todoId, req.params.commentId);
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
