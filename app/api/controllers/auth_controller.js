import {User_service, Company_service} from '../services/index.js'
import db from '../../database/connect.js'

class auth_controller {
    async postLogin (req, res) {
        try{
            await db.transaction(async () => {
                await User_service.login(req.body);
            })
            res.status(200).json('login');
        }catch (e) {
            console.log(e.message);
            res.status(404).json(e.message);
        }
    }

    async postRegistration (req, res){
        try{
            await db.transaction(async () =>{
                const company  = await Company_service.create(req.body);
                await User_service.create(req.body, company.id);
            })
            res.status(200).json('register');
        }catch (e) {
            console.log(e.message);
            res.status(404).json(e.message);
        }
    }
    async logout (req, res){
        try{

            res.status(200).json('logout');
        }catch (e) {
            console.log(e.message);
            res.status(404).json(e.message);
        }
    }
    async refresh (req, res){
        try{

            res.status(200).json('refresh');
        }catch (e) {
            console.log(e.message);
            res.status(404).json(e.message);
        }
    }

    //TODO: roles to just string?
    //TODO: logout, refreshToken

}

export default new auth_controller();