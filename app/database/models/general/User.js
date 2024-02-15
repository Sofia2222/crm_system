const {DataTypes, Model} = require('sequelize');
const db = require('../../connect');
const {Company} = require("./Company");

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
    website: {
        type: DataTypes.STRING,
        allowNull: true
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},{
    sequelize: db,
    tableName: 'users',
    timestamps: false
});

model.hasOne(Company, {as: 'Companies', foreignKey: 'id'})
Company.belongsTo(User, {as: 'UserCom', foreignKey: 'company_id'})

module.exports = model;