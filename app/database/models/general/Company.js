const {DataTypes, Model} = require('sequelize');
const db = require('../../connect');
class Company extends Model{

}

const model = Company.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dbName: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize: db,
    tableName: 'companies'
});

module.exports = model;