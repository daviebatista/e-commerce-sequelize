'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("product_comments",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        },
        commentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "comments", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
        },
        productId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "products", key: "id"},
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
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
    await queryInterface.dropTable("product_comments");
  }
};

