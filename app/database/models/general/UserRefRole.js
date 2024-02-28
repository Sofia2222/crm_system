const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../connect');

class UserRefRole extends Model{

}

const model = UserRefRole.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    sequelize: sequelize,
    tableName: 'users_ref_roles'
});

module.exports = model;