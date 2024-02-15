const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('postgres', 'admin', 'root', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;