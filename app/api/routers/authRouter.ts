import {authController} from '../controllers';
import {Router} from'express';

const authRouter: Router = Router();

authRouter.post('/login', authController.postLogin);
authRouter.post('/register', authController.postRegister);


export default authRouter;