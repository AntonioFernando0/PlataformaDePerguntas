const express = require ("express")
const app = express()



// Estou dizendo para o Express usar o EJS como view enginer

app.set ('view engine', 'ejs')


app.get ("/:nome/:lang",(req, res) => {
    let nome = req.params.nome
    let lang = req.params.lang 
    let exibirmsg = true


    let produtos = 
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Fernando Santana",
        inscritos: 10000,
        msg: exibirmsg

    })
})

app.listen ( 800, () => {
    console.log(" App rodando!")
})