const Client = require('../models/Client')
const Address = require('../models/Address')
const Product = require('../models/Product')
const Comment = require('../models/Comment')

//-----
Client.belongsToMany(Address, {
    foreignKey: "clientId",
    through: "client_adresses",
    as: "addresses"
})

Address.belongsToMany(Client, {
    foreignKey: "addressId",
    through: "client_adresses",
    as: "clients"
})
//-----
Product.belongsToMany(Comment, {
    foreignKey: "productId",
    through: "product_comments",
    as: "comments"
})

Comment.belongsToMany(Product, {
    foreignKey: "commentId",
    through: "product_comments",
    as: "products"
})
//-----
Comment.hasOne(Client,  {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Client.belongsTo(Comment, {
    foreignKey: "authorId",
    as: "author"
})


module.exports = {Client, Address, Product, Comment}