'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("comments",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        },
        authorId:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "clients", key: "id"},
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        },
        rating: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        },
        text: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        createdAt: {
        type: Sequelize.DATE
        },
        updatedAt: {
        type: Sequelize.DATE
        }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("comments");
  }
};
