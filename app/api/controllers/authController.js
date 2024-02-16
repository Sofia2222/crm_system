// import { save_user } from '../function/user_function'
class authController {
    async postLogin (req, res) {
        try{
            let {email, password} = req.body;
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
            res.status(200).json('login');
        }catch (e) {
            console.log(e.message);
            res.status(400).json(e.message);
        }
    }
    async postRegister (req, res){
        try{
            // await save_user(req.body);
            res.status(200).json('register');
        }catch (e) {
            console.log(e.message);
            res.status(400).json(e.message);
        }
    }
}

export default new authController();