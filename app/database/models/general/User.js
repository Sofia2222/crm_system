import {DataTypes, Model} from'sequelize';
import db from '../../connect.js';
import Role from './Role.js';
import UserRefRole from './UserRefRole.js';
import Company from './Company.js';

class User extends Model{

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