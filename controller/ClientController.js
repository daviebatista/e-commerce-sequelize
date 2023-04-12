const Client = require('../models/Client')

module.exports = {
    async store(requisition, response) {
        const {name, age, gender, cpf, email, phoneNumber, password} = requisition.body

        const client = await Client.create({name, age, gender, cpf, email, phoneNumber, password})
        return response.json(client)
    },
    async index(requisition, response) {
        const client = await Client.findAll()
        return response.json(client)
    },
    async put(requisition, response) {
        const {name, age, gender, cpf, email, phoneNumber, password} = requisition.body
        await Client.update(
            {name, age, gender, cpf, email, phoneNumber, password},
            {
                where:  {
                    id: requisition.params.id
                },
            },
        )
        return response.send(`Client info was succesfully updated!`)
    },
    async delete(requisition, response) {
        await Client.destroy({
            where:  {
                id: requisition.params.id
            }
        })
        return response.send(`The client has been succesfully removed from the database :(`)
    }
}