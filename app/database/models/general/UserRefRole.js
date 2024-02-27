import {DataTypes, Model} from'sequelize';
import db from '../../connect.js';


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

export default model;