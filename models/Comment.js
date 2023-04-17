const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Comment = sequelize.define("comments", {
    authorId: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL,
    text: DataTypes.TEXT,
});

module.exports = Comment