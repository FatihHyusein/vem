const passport = require('passport');
const { JWTStrategyInstance } = require('./passport-jwt.strategy');

export default class PassportAuth {
    constructor() {
        passport.use(JWTStrategyInstance);
    }
}

export { PassportAuth };
