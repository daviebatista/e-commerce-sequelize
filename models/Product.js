const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Product = sequelize.define("products", {
    name: DataTypes.STRING,
    type: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    brand: DataTypes.STRING,
    dimensions: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    totalRatings: DataTypes.INTEGER,
    imageUrl: DataTypes.TEXT,
    inStock: DataTypes.INTEGER,
    description: DataTypes.TEXT
});

module.exports = Product