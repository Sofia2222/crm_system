import {authController} from '../controllers/index.js';
import {Router} from'express';

const authRouter: Router = Router();

authRouter.post('/login', authController.postLogin);
authRouter.post('/register', authController.postRegister);


export default authRouter;