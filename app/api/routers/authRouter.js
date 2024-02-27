import {authController} from '../controllers/index.js';
import {Router} from'express';
import {error_validation_middleware} from "../middlewares/index.js";
import {body} from "express-validator";

const authRouter = Router();


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
    authController.postRegistration
);

authRouter.post('/logout', authController.logout);
authRouter.post('/refresh', authController.refresh);


export default authRouter;