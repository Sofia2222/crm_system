import {DataTypes, Model} from'sequelize';
import db from '../../connect.js';

class Role extends Model{

}

const model = Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: db,
    tableName: 'roles'
});

export default model;