const express = require('express')//chamei o exprees que estava no node
const app = express()//cria uma constante para executar
const routes = require ('./routes')

app.use('/', routes)

app.listen(3000, () =>{
    console.log('Servidor iniciado com sucesso!')
})