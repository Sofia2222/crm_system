const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../connect');

class Company extends Model
{

}

const model = Company.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    website: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dbName: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize: sequelize,
    tableName: 'companies',
    timestamps: false
});

module.exports = model;