const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Comment = sequelize.define("comments", {
    rating: DataTypes.DECIMAL,
    text: DataTypes.TEXT,
});

module.exports = Comment