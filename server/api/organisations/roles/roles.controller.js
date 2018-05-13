const RoleModel = require('./role.model');

class RolesController {
    static async create(req, res, next) {
        try {
            let model = new RoleModel(req.body.role);
            const newRoles = req.organisation.roles.push(model);
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
                result: req.organisation.roles
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async getById(req, res, next) {
        try {
            let result = await req.organisation.roles.id(req.params.roleId);

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
            let roleToUpdate = await req.organisation.roles.id(req.params.roleId);
            roleToUpdate.name = req.body.role.name;
            await req.organisation.save();

            res.locals.data = {
                result: roleToUpdate
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async deleteById(req, res, next) {
        try {
            let result = req.organisation.roles.id(req.params.roleId).remove();
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

module.exports = RolesController;
