const passport = require('passport');
const JWTStrategyInstance = require('./passport-jwt.strategy');

module.exports = passport.use(JWTStrategyInstance);
