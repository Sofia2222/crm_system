import {DataTypes, Model} from'sequelize';
import db from '../../connect.js';

class Company extends Model{

}

const model = Company.init({
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
    dbName: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    sequelize: db,
    tableName: 'companies',
    timestamps: false
});



export default model;