'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("addresses",{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        },
        clientId: {
          type: Sequelize.INTEGER,
          references: { model: "clients", key: "id"},
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
        },
        country: {
        type: Sequelize.STRING,
        allowNull: false,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: false
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false
        },
        postalCode: {
          type: Sequelize.STRING,
          allowNull: false
        },
        neighborhood: {
          type: Sequelize.STRING,
          allowNull: false
        },
        street: {
          type: Sequelize.STRING,
          allowNull: false
        },
        number: {
          type: Sequelize.STRING,
          allowNull: false
        },
        complement: {
          type:Sequelize.STRING,
          allowNull: true
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
    await queryInterface.dropTable("addresses");
  }
};

