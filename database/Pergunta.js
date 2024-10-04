const Sequelize = require("sequelize")
const connection = require ("./database")

const pergunta = connection.define('pergunta', {
    título: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

pergunta.sync({force: false}).then(() => {
    console.log("Tabele criada!")
})

module.exports = pergunta