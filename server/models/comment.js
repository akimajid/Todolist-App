module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Comment.associate = function (models) {
    // Belongs to Item
    Comment.belongsTo(models.Item, {
      foreignKey: "itemId",
      as: "item",
    });
  };

  return Comment;
};
