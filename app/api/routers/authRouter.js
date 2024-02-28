const {authController} = require('../controllers');
const {error_validation_middleware} = require('../middlewares');
const {body} = require('express-validator');
const authRouter = require('express').Router();


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


module.exports = authRouter;