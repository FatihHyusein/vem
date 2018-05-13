const UserModel = require('./user.model');

class UsersController {
    static async create(req, res, next) {
        try {
            let model = new UserModel(req.body.user);
            const newUser = req.organisation.users.push(model);
            const result = await req.organisation.save();

            res.locals.data = {
                result: model
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async getAll(req, res, next) {
        try {
            res.locals.data = {
                result: req.organisation.users
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async getById(req, res, next) {
        try {
            let result = await req.organisation.users.id(req.params.userId);

            res.locals.data = {
                result: result
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async updateById(req, res, next) {
        try {
            let userToUpdate = await req.organisation.users.id(req.params.userId);
            userToUpdate.name = req.body.user.name;
            await req.organisation.save();

            res.locals.data = {
                result: userToUpdate
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async deleteById(req, res, next) {
        try {
            let result = req.organisation.users.id(req.params.userId).remove();
            await req.organisation.save();

            res.locals.data = {
                result: result
            };

            next();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UsersController;
