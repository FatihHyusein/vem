const VehicleModel = require('./vehicle.model');

class VehiclesController {
    static async create(req, res, next) {
        try {
            let model = new VehicleModel(req.body.vehicle);
            const newVehicle = req.organisation.vehicles.push(model);
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
                result: req.organisation.vehicles
            };

            next();
        } catch (err) {
            next(err);
        }
    }

    static async getById(req, res, next) {
        try {
            let result = await req.organisation.vehicles.id(req.params.vehicleId);

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
            let permissionToUpdate = await req.organisation.vehicles.id(req.params.vehicleId);
            permissionToUpdate.name = req.body.vehicle.name;
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
            let result = req.organisation.vehicles.id(req.params.vehicleId).remove();
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

module.exports = VehiclesController;
