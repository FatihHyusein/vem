const jwt = require('passport-jwt');
const UserModel = require('../api/organisation/users/user.model');

class JWTStrategy {
    constructor() {
        const jwtOptions = {
            jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'superSecret'
        };

        this.jwtStrategyInstance = new jwt.Strategy(jwtOptions, async (jwt_payload, done) => {
            try {
                let user = await UserModel.findOne({ id: jwt_payload.sub }).exec();
                if (user) {
                    return done(null, user);
                }

                return done(null, false);
            }
            catch (err) {
                return done(err, false);
            }
        });
    }
}

module.exports = new JWTStrategy().jwtStrategyInstance;
