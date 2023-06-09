const Product = require('../models/Product')
const Client = require('../models/Client')
const Comment = require('../models/Comment')

module.exports = {
    async store(requisition, response) {
        const {productId} = requisition.params
        const {authorId, rating, text} = requisition.body
        const author = await Client.findByPk(authorId)

        const product = await Product.findByPk(productId)
        if(!product || !author){
            return response.send(`Product or author were not found!`)
        }
        const [comments] = await Comment.findOrCreate({
            where: {authorId, rating, text}
        })

        await product.addComment(comments)

        return response.json(comments)

    },
    async index(requisition, response) {
        const {productId} = requisition.params
        const product = await Product.findByPk(productId, {
            include: {association: "comments"}
        })
        if(!product){
            return response.send(`Product or author were not found!`)
        }
        return response.json(product.comments)
    },
    async put(requisition, response) {
        const {productId, id} = requisition.params
        const product = await Product.findByPk(productId)
        const comment = await Comment.findByPk(id)

        if(!product || !comment){
            return response.send(`Product or comment were not found!`)
        }
        const {authorId, rating, text} = requisition.body
        await Comment.update(
            {authorId, rating, text},
            {
                where:  {
                    id: requisition.params.id
                },
            },
        )
        return response.send(`Your comment has been succesfully edited!`)
    },
    async delete(requisition, response) {
        const {productId, id} = requisition.params
        const product = await Product.findByPk(productId)
        const comment = await Comment.findByPk(id)

        if(!product || !comment){
            return response.send(`Product or comment were not found!`)
        }
        await Comment.destroy({
            where:  {
                id: requisition.params.id
            }
        })
        return response.send(`Comment has been removed from your database.`)
    }
}