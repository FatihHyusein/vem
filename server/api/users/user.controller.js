const Model = require('./user.model');

export default class UserController {
    public static async getAll(req, res, next) {
        try {
            let result = await Model.find().exec();

            res.locals.data = {
                message: 'it works! We got all examples',
                result: result
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    public static async create(req, res, next) {
        let model = new Model({
            title: 'Test title',
            subtitle: 'test subtitle'
        });

        await model.save();
        res.locals.data = {
            message: 'Created!',
            result: model
        };

        next();
    }
}
