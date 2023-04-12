'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        type: {
        type: Sequelize.STRING,
        allowNull: false,
        },
        price: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false
        },
        dimensions: {
          type: Sequelize.STRING,
          allowNull: false
        },
        rating: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        totalRatings: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        imageUrl: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        inStock: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        description: {
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
    await queryInterface.dropTable("products");
  }
};
