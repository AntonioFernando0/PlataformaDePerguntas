const express = require ("express")
const app = express()
require('events').EventEmitter.defaultMaxListeners = 15;



// Estou dizendo para o Express usar o EJS como view enginer

app.set ('view engine', 'ejs')

app.use (express.static('public'))


app.get ("/",(req, res) => {
    
    res.render("index")
        

   
})

app.get("/perguntar", (req, res)=> {
    res.render("perguntar")

})

app.listen ( 80, () => {
    console.log(" App rodando!")
})