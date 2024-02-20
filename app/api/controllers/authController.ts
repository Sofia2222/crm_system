import {User_repository, Company_repository} from '../repository'
import {Response, Request} from "express";
import db from '../../database/connect'

class authController {
    async postLogin (req: Request, res: Response) {
        try{
            await db.transaction(async () => {
                await User_repository.authentication(req.body);
            })
            res.status(200).json('login');
        }catch (e:any) {
            console.log(e.message);
            res.status(404).json(e.message);
        }
    }

    async postRegister (req: Request, res: Response){
        try{
            await db.transaction(async () =>{
                const company  = await Company_repository.create(req.body);
                await User_repository.create(req.body, company.id);
            })
            res.status(200).json('register');
        }catch (e: any) {
            console.log(e.message);
            res.status(404).json(e.message);
        }
    }

    //TODO: roles to just string?
    //TODO: logout, refreshToken

}

export default new authController();