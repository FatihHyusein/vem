const jwt = require('passport-jwt');
const UserModel = require('../api/organisations/users/user.model');

const jwtOptions = {
    jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'superSecret'
};

const jwtStrategyInstance = new jwt.Strategy(jwtOptions, async (jwt_payload, done) => {
    try {
        let user = await UserModel.findOne({id: jwt_payload.sub}).exec();
        if (user) {
            return done(null, user);
        }

        return done(null, false);
    }
    catch (err) {
        return done(err, false);
    }
});

module.exports = jwtStrategyInstance;
