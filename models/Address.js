const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Address = sequelize.define("addresses", {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.INTEGER,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    neighborhood: DataTypes.INTEGER,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING
});

module.exports = Address