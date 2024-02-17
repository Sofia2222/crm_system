import {DataTypes, Model} from'sequelize';
import db from '../../connect';
import Role from './Role';
import UserRefRole from './UserRefRole';
import Company from './Company';

interface UserAttribute {
    id: number,
    name: string,
    surname: string,
    phone: string,
    email: string,
    password: string,
    website: string,
    company_id: number
}

class User extends Model<UserAttribute>
implements UserAttribute{
    id: number;
    name: string;
    surname: string;
    phone: string;
    email: string;
    password: string;
    website: string;
    company_id: number;
}

const model = User.init({
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
    surname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize: db,
    tableName: 'users',
    timestamps: false
});



User.belongsTo(Company, {as: 'Companies', foreignKey: 'company_id'})
model.belongsToMany(Role, {as: 'Role', through: UserRefRole, foreignKey: 'role_id', otherKey: 'user_id'})

export default model;