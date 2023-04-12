const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Client = sequelize.define("clients", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    password: DataTypes.STRING
});

module.exports = Client