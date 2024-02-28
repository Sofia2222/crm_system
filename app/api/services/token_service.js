const jwt = require('jsonwebtoken')


class Token_service {
    async generateToken(payload){
        const access_token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});

        const refresh_token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '15m'});
    }
}

module.exports = new Token_service();
