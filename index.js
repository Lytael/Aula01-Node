const express = require('express')//chamei o exprees que estava no node
const app = express()//cria uma constante para executar

app.get('/', (req,res)=>{
    res.send ('Olá mundo!')
})

app.get('/imagens', (req,res)=>{
    res.send ('Olá imagens!')
})

app.listen(3000, () =>{
    console.log('Servidor iniciado com sucesso!')
})