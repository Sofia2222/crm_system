import {authController} from '../controllers';
import {Router} from'express';
import {error_validation_middleware} from "../middlewares";
import {body} from "express-validator";

const authRouter: Router = Router();


authRouter.post(
    '/login',
    body('email').notEmpty().escape().isString().trim().isEmail(),
    body('password').notEmpty().escape().isString().trim(),
    error_validation_middleware,
    authController.postLogin
);

authRouter.post(
    '/register',
    body('name').notEmpty().escape().isString().trim(),
    body('surname').notEmpty().escape().isString().trim(),
    body('phone').notEmpty().escape().isString().trim().isMobilePhone("uk-UA"),
    body('email').notEmpty().escape().isString().trim().isEmail(),
    body('password').notEmpty().escape().isString().trim(),
    error_validation_middleware,
    authController.postRegister
);


export default authRouter;