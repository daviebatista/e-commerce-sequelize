const Product = require('../models/Product')
const Client = require('../models/Client')
const Comment = require('../models/Comment')

module.exports = {
    async store(requisition, response) {
        const {productId} = requisition.params
        const {clientId} = requisition.params
        const {rating, text} = requisition.body

        const product = await Product.findByPk(productId)
        const client = await Client.findByPk(clientId)
        if(!product && !client){
            response.send(`Product or author were not found!`)
        }
        const [comments] = await Comment.findOrCreate({
            where: {rating, text}
        })

        await product.addComment(comments)

        return response.json(comments)

    },
    async index(requisition, response) {
        const {productId} = requisition.params
        const product = await Product.findByPk(productId, {
            include: {association: "comments"}
        })
        return response.json(product.comments)
    },
    async put(requisition, response) {
        const {rating, text} = requisition.body
        await Comment.update(
            {rating, text},
            {
                where:  {
                    id: requisition.params.id
                },
            },
        )
        return response.send(`Your comment has been succesfully edited!`)
    },
    async delete(requisition, response) {
        await Comment.destroy({
            where:  {
                id: requisition.params.id
            }
        })
        return response.send(`Comment has been removed from your database.`)
    }
}