module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
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
    dueDate: {
      type: DataTypes.DATE,
    },
  });

  Todo.associate = function (models) {
    // Belongs to User
    Todo.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });

    // One-to-many relationship with Item
    Todo.hasMany(models.Item, {
      foreignKey: "todoId",
      as: "items",
    });
  };

  return Todo;
};
