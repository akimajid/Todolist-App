'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Todos', 'due_date', {
      type: Sequelize.DATE,
      allowNull: true, // or false if the column is required
    });
    await queryInterface.addColumn('Todos', 'status', {
      type: Sequelize.STRING,
      allowNull: true, // or false if the column is required
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Todos', 'due_date');
    await queryInterface.removeColumn('Todos', 'status');
  }
};
