const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Address = sequelize.define("addresses", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    cpf: DataTypes.STRING,
    clientId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING
});

module.exports = Address