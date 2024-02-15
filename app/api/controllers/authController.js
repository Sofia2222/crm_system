const {Company, User} = require("../../database/models");

class authController {
    postLogin (req, res) {
        try{
            let {email, password} = req.body;
            console.log(email, password)
            // const result = Company.findAll({
            //     where: {},
            //     include: {
            //         required: true,
            //         association: ['Companies']
            //     }
            // })
            // console.log(result);
            res.status(200).json('login');
        }catch (e) {
            console.log(e.message);
            res.status(400).json(e.message);
        }
    }
    async postRegister (req, res){
        try{
            let {email, name, surname, phone, password, website, companyName} = req.body;
            console.log(email, name, surname, phone, password, website, companyName);
            const company = new Company({name: companyName, dbName: companyName});
            await company.save();

            const user = new User({name: name, surname: surname, phone: phone, email: email, password: password, website: website, company_id: company.id});
            await user.save();
            res.status(200).json('register');
        }catch (e) {
            console.log(e.message);
            res.status(400).json(e.message);
        }
    }
}

module.exports = new authController();