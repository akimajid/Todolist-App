module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      defaultValue: "pending",
    },
  });

  Item.associate = function (models) {
    // Belongs to Todo
    Item.belongsTo(models.Todo, {
      foreignKey: "todoId",
      as: "todo",
    });

    // One-to-many relationship with Comment
    Item.hasMany(models.Comment, {
      foreignKey: "itemId",
      as: "comments",
    });
  };

  return Item;
};
