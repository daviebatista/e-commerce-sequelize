const Product = require('../models/Product')

module.exports = {
    async store(requisition, response) {
        const {name, type, price, brand, dimensions, rating, totalRatings, imageUrl, inStock, description} = requisition.body

        const product = await Product.create({name, type, price, brand, dimensions, rating, totalRatings, imageUrl, inStock, description})
        return response.json(product)
    },
    async index(requisition, response) {
        const product = await Product.findAll()
        return response.json(product)
    },
    async put(requisition, response) {
        const {name, type, price, brand, dimensions, rating, totalRatings, imageUrl, inStock, description} = requisition.body
        await Product.update(
            {name, type, price, brand, dimensions, rating, totalRatings, imageUrl, inStock, description},
            {
                where:  {
                    id: requisition.params.id
                },
            },
        )
        return response.send(`Product info was succesfully updated!`)
    },
    async delete(requisition, response) {
        await Product.destroy({
            where:  {
                id: requisition.params.id
            }
        })
        return response.send(`The product has been succesfully removed from the database :(`)
    }
}