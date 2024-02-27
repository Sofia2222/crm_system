import Company from "../../database/models/general/Company.js";

export class Company_service {
    static async create(body){
        const dbName = body.company_name;
        console.log(dbName)
        const tempCompany = await this.findOne(dbName);
        if (tempCompany == null){
            const company = new Company({website: body.website, dbName: dbName});
            await company.save();
            return company;
        }else{
            throw new Error(`Company name: ${dbName} is already exists`);
        }
    }
    static async findOne(dbName){
        console.log(dbName)
        return await Company.findOne({
            where: {
                'dbName': dbName,
            }
        })
    }
}