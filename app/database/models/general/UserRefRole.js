const {DataTypes, Model} = require('sequelize');
const db = require('../../connect');
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
    sequelize: db,
    tableName: 'users_ref_roles'
});

module.exports = model;