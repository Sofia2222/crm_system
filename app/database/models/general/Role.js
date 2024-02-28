const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../connect');

class Role extends Model{

}

const model = Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: sequelize,
    tableName: 'roles'
});

module.exports = model;