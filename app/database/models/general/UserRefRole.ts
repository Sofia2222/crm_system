import {DataTypes, Model} from'sequelize';
import db from '../../connect';

interface UserRefRoleAttribute {
    user_id: number,
    role_id: number
}

class UserRefRole extends Model<UserRefRoleAttribute>
implements UserRefRoleAttribute{
    user_id: number;
    role_id: number;
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