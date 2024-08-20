const express = require ("express")
const app = express()



// Estou dizendo para o Express usar o EJS como view enginer

app.set ('view engine', 'ejs')


app.get ("/",(req, res) => {
    let nome = "Antonio Júnior"
    let lang = "Javascript"
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Fernando Santana",
        inscritos: 10000

    })
})

app.listen ( 8080, () => {
    console.log(" App rodando!")
})