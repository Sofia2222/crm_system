import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
    host: process.env.DB_host,
    logging: console.log,
    dialect: process.env.DB_dialect,
    database: process.env.DB_database,
    username: process.env.DB_username,
    password: process.env.DB_password,
    timezone: '+00:00',
    define: {
        timestamps: false
    }
})

export default sequelize;