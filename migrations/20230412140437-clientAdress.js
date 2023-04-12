'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("clientAdresses",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        },
        clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "clients", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
        },
        addressId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "addresses", key: "id"},
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
    await queryInterface.dropTable("clientAdresses");
  }
};

