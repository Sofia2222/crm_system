import {DataTypes, Model} from'sequelize';
import db from '../../connect.js';

class Token extends Model{

}

const model = Token.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: db,
    tableName: 'tokens'
});

export default model;