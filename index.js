const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./database/database")
const pergunta = require("./database/Pergunta")

//Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

// Configuração do EJS como view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Express já suporta o parsing de body nativamente (não é necessário body-parser)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Rota da pág principal
app.get("/", (req, res) => {
    pergunta.findAll( {raw: true, order: [ [
        'id', 'DESC' // ASC = Crescente || DESC = Decrescente
    ]

    ]}).then(perguntas => {
        console.log(perguntas); // Verificar se os dados estão corretos
        res.render('index', { perguntas: perguntas });
    }).catch(error => {
        console.log(error);
    });
});


app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

// Rota para processar o formulário
app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    pergunta.create({
        título: titulo,
        descricao: descricao
    }).then(()=> {
        res.redirect("/")
    })
});

app.get("/pergunta/:id", (req, res) => {
var id = req.params.id
pergunta.findOne({
    where:{id: id}
}).then(pergunta => {
    if(pergunta != undefined){
        res.render("pergunta", {
            pergunta: pergunta
        })
        // pergunta achada
    }else{// não encontrada
        res.redirect("/")
    }
})

})

app.listen(80, () => {
    console.log("App rodando!");
});