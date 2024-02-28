const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../connect');


class Token extends Model{

}

const model = Token.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: sequelize,
    tableName: 'tokens'
});

module.exports = model;