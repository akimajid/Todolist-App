const { Comment, Todo } = require("../models");

const getComments = async (todoId) => {
  const todo = await Todo.findByPk(todoId);
  if (!todo) {
    throw new Error("Todo not found");
  }
  return await Comment.findAll({ where: { todoId } });
};

const getCommentById = async (todoId, commentId) => {
  const todo = await Todo.findByPk(todoId);
  if (!todo) {
    throw new Error("Todo not found");
  }
  const comment = await Comment.findOne({ where: { todoId, id: commentId } });
  if (!comment) {
    throw new Error("Comment not found");
  }
  return comment;
};

const createComment = async (todoId, data) => {
  const todo = await Todo.findByPk(todoId);
  if (!todo) {
    throw new Error("Todo not found");
  }
  return await Comment.create({ ...data, todoId });
};

const updateComment = async (todoId, commentId, data) => {
  const comment = await getCommentById(todoId, commentId);
  return await comment.update(data);
};

const deleteComment = async (todoId, commentId) => {
  const comment = await getCommentById(todoId, commentId);
  return await comment.destroy();
};

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
