const Model = require('./organisation.model');

class OrganisationController {
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
            id: "1",
            name: "Test",
            pass: "test",
            users: [{
                name: 'user',
                pass: 'asd',
                assignedRoleIds: [1, 2]
            }],
            definedRoles: [{
                id: '12',
                name: 'role1'
            }],
            vehicles: [{
                id: "23",
                make: 'Seat',
                model: "Leon",
                manufactureYear: 2003,
            }],
        });

        await model.save();
        res.locals.data = {
            message: 'Created!',
            result: model
        };

        next();
    }
}

module.exports = OrganisationController;

