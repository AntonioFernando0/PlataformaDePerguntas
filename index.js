const express = require("express");
const app = express();

const bodyParser = require("body-parser")

// Configuração do EJS como view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Express já suporta o parsing de body nativamente (não é necessário body-parser)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

// Rota para processar o formulário
app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido! Título: " + titulo + " Descrição: " + descricao);
});


app.listen(80, () => {
    console.log("App rodando!");
});