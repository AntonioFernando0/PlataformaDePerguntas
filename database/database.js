const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'Ajunior1!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;