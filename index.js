const express = require ("express")
const app = express()
require('events').EventEmitter.defaultMaxListeners = 15;



// Estou dizendo para o Express usar o EJS como view enginer

app.set ('view engine', 'ejs')


app.get ("/:nome/:lang",(req, res) => {
    let nome = req.params.nome
    let lang = req.params.lang 
    let exibirmsg = true


    let produtos = [

        {nome: "Doritos", preco: 3.14},
        {nome: "Cola", preco: 5.10},
        {nome: "Carne", preco: 40.25},
        {nome: "RedBull", preco: 10.00},
        {nome: "Água", preco: 3.50},
        {nome: "Ovos", preco: 1.05}
    ]
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Fernando Santana",
        inscritos: 10000,
        msg: exibirmsg,
        produtos: produtos

    })
})

app.listen ( 800, () => {
    console.log(" App rodando!")
})