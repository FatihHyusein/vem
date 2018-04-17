const passport = require('passport');
const JWTStrategyInstance = require('./passport-jwt.strategy');

class PassportAuth {
    constructor() {
        passport.use(JWTStrategyInstance);
    }
}

module.exports = PassportAuth;
