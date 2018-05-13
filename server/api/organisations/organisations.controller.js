const Model = require('./organisation.model');

class OrganisationsController {
    static async create(req, res, next) {
        try {
            let model = new Model(req.body.organisation);

            const result = await model.save();
            res.locals.data = {
                result: result
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async getAll(req, res, next) {
        try {
            let result = await Model.find().exec();

            res.locals.data = {
                result: result
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async getById(req, res, next) {
        try {
            let result = await Model.findById(req.params.organisationId).exec();

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
            let result = await Model.findByIdAndUpdate(req.params.organisationId, req.body.organisation, {new: true}).exec();

            res.locals.data = {
                result: result
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async deleteById(req, res, next) {
        try {
            let result = await Model.findByIdAndRemove(req.params.organisationId).exec();

            res.locals.data = {
                result: result
            };

            next();
        } catch (err) {
            next(err);
        }
    }
}

module.exports = OrganisationsController;

