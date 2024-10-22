const Sequelize = require("sequelize")
const connection = require ("./database")
const { type } = require("express/lib/response")

const Resposta = connection.define("respostas", { 
    corpo: { 
        type: Sequelize.TEXT,
        allowNull: false
        }, 
        perguntaId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    })


Resposta.sync({force:false})

module.exports = Resposta;
