// Chamado do Express para inicialização das requisições
const express = require('express')
// Chamado das rotas pelo método 'Router' do Express
const routes = express.Router()

const ClientController = require('../controller/ClientController')
const AddressController = require('../controller/AddressController')
const ProductController = require('../controller/ProductController')
const CommentController = require('../controller/CommentController')

// Necessário dar o registro de todas as rotas a serem usadas
// Rotas dos clientes
routes.post("/client", ClientController.store);
routes.get("/client", ClientController.index);
routes.put("/clients/:id", ClientController.put);
routes.delete("/clients/:id", ClientController.delete);

//Rotas dos endereços
routes.post("/clients/:clientId/addresses", AddressController.store);
routes.get("/clients/:clientId/addresses", AddressController.index);
routes.put("/clients/:clientId/addresses/:id", AddressController.put);
routes.delete("/clients/:clientId/addresses/:id", AddressController.delete);

//Rotas dos produtos
routes.post("/product", ProductController.store);
routes.get("/product", ProductController.index);
routes.put("/products/:id", ProductController.put);
routes.delete("/products/:id", ProductController.delete);

//Rotas dos comentários
routes.post("/products/:productId/comments", CommentController.store);
routes.get("/products/:productId/comments", CommentController.index);
routes.put("/products/:productId/comments/:id", CommentController.put);
routes.delete("/products/:productId/comments/:id", CommentController.delete);

module.exports = routes

