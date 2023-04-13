const Client = require('../models/Client')
const Address = require('../models/Address')

module.exports = {
    async store(requisition, response) {
        const {clientId} = requisition.params
        const {name, country, state, city, postalCode, neighborhood, street, number, complement} = requisition.body

        const client = await Client.findByPk(clientId)
        if(!client){
            response.send(`This client does not exist!`)
        }
        const [addresses] = await Address.findOrCreate({
            where: {name, country, state, city, postalCode, neighborhood, street, number, complement}
        })

        await client.addAddress(addresses)

        return response.json(addresses)

    },
    async index(requisition, response) {
        const { clientId } = requisition.params
        const client = await Client.findByPk(clientId,{
            include: {association: "addresses"}
        })
        return response.json(client.addresses)
    },
    async put(requisition, response) {
        const {name, country, state, city, postalCode, neighborhood, street, number, complement} = requisition.body
        await Address.update(
            {name, country, state, city, postalCode, neighborhood, street, number, complement},
            {
                where:  {
                    id: requisition.params.id
                },
            },
        )
        return response.send(`Address info was succesfully updated!`)
    },
    async delete(requisition, response) {
        await Address.destroy({
            where:  {
                id: requisition.params.id
            }
        })
        return response.send(`Address has been removed from your database.`)
    }
}