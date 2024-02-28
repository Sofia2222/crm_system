const {DataTypes, Model} = require('sequelize');
const {sequelize} = require('../../connect');
const Role = require( './Role');
const UserRefRole = require( './UserRefRole');
const Company = require( './Company');

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
    sequelize: sequelize,
    tableName: 'users',
    timestamps: false
});



User.belongsTo(Company, {as: 'Companies', foreignKey: 'company_id'})
model.belongsToMany(Role, {as: 'Role', through: UserRefRole, foreignKey: 'role_id', otherKey: 'user_id'})

module.exports = model;