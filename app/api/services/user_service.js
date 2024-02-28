import User from "../../database/models/general/User.js";
import * as bcrypt from 'bcrypt';

export class User_service {
    async login(body){
        const email = body.email;
        const password = body.password;
        const user = await this.findOne(email);
        if (user == null) {
            throw new Error(`No user with this email: ${email} was found.`)
        }else{
            const resultCompare = await bcrypt.compare(password, user.password);
            if (resultCompare === false){
                throw new Error('Wrong password!');
            }else{
                console.log('User authentication successful');
            }
        }
    }
    async create(body, company_id){
        const tempCompany = await this.findOne(body.email);
        if (tempCompany == null){
            const data = {
                name: body.name,
                surname: body.surname,
                phone: body.phone,
                email: body.email,
                password: await bcrypt.hash(body.password, 6),
                company_id: company_id
            }
            const user = new User(data);
            await user.save();
            return user;
        }else{
            throw new Error(`User with email: ${body.email} is already exists`);
        }
    }

    async logout(){

    }

    async refresh(){

    }

    async findOne(email){
        return await User.findOne({
            where: {
                'email': email,
            }
        })
    }
}

// console.info(email, password)
// const result = await User.findAll({
//     where: {},
//     include: [{
//         where:{},
//         association: 'Companies',
//         required: true
//     }]
// })
// console.log(result[0]);