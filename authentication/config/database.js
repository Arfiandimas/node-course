const Sequelize = require('sequelize');

const db = new Sequelize('authexpress', 'barjono', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db;