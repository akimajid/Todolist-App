module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id", // Column name in database
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "createdAt", // Column name in database
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updatedAt", // Column name in database
      },
      dueDate: {
        type: DataTypes.DATE,
        field: "due_date", // Column name in database
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
        field: "user_id", // Column name in database
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "title", // Column name in database
      },
      description: {
        type: DataTypes.TEXT,
        field: "description", // Column name in database
      },
      status: {
        type: DataTypes.ENUM("pending", "completed"),
        defaultValue: "pending",
        field: "status", // Column name in database
      },
    },
    {
      tableName: "Todos", // Specify table name if it doesn't match default model name
      timestamps: true, // Enable timestamps for createdAt and updatedAt fields
    }
  );

  return Todo;
};
