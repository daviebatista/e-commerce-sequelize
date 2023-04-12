// Chamado do Express
const express = require('express')
// Chamado das rotas
const routes = require('./routes')
// Chamado da associação
require('../config/associations')
// Chamado do Express
const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000)