const Model = require('./user.model');

class UserController {
    static async getAll(req, res, next) {
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

    static async create(req, res, next) {
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

module.exports = UserController;

var main = {
    expenseCategories: [
        {
            id: 3, name: 'Gas', subCategories: [{ id: 4, name: 'Personal' }]
        }
    ],
    organisation: {
        name: '',
        pass: 1234,
        users: [
            { name: '', pass: 1234, roles: [1, 2, 3] }
        ],
        roles: [
            { name: '', permissions: [1, 2, 3, 4, 5] },
            { name: '', permissions: [1] }
        ],
        vehicles: [
            {
                name: '', expenses: [
                    { date: '', category: "3|4", amount: 0, notes: '' }
                ]
            }
        ]
    }
};
