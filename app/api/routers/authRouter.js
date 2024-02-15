const {authController} = require('../controllers');
const authRouter = require('express').Router();

authRouter.post('/login', authController.postLogin);
authRouter.post('/register', authController.postRegister);


module.exports = authRouter;