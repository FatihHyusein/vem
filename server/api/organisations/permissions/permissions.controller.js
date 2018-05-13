const PermissionModel = require('./permission.model');

class PermissionsController {
    static async create(req, res, next) {
        try {
            let model = new PermissionModel(req.body.permission);
            const newPermission = req.organisation.permissions.push(model);
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
                result: req.organisation.permissions
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async getById(req, res, next) {
        try {
            let result = await req.organisation.permissions.id(req.params.permissionId);

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
            let permissionToUpdate = await req.organisation.permissions.id(req.params.permissionId);
            permissionToUpdate.name = req.body.permission.name;
            await req.organisation.save();

            res.locals.data = {
                result: permissionToUpdate
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async deleteById(req, res, next) {
        try {
            let result = req.organisation.permissions.id(req.params.permissionId).remove();
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

module.exports = PermissionsController;
