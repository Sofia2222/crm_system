import {DataTypes, Model} from'sequelize';
import db from '../../connect';

interface CompanyAttribute {
    id: number,
    name: string,
    dbName: string
}

class Company extends Model<CompanyAttribute>
implements CompanyAttribute
{
    id: number;
    name: string;
    dbName: string;
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