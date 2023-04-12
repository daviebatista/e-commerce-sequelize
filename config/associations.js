const Client = require('../models/Client')
const Address = require('../models/Address')



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

module.exports = {Client, Address}