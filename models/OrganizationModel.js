const UserModel = require('./UserModel');
const RoleModel = require('./RoleModel');
const VehicleModel = require('./VehicleModel');

class OrganizationModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.pass = '';
        this.users = [];
        this.definedRoles = [];
        this.vehicles = [];
    }

    static fromJson(json) {
        const instance = new OrganizationModel();
        instance.id = json.id;
        instance.name = json.name;
        instance.pass = json.pass;
        instance.users = json.users.map((user) => UserModel.fromJson(user));
        instance.definedRoles = json.definedRoles.map((role) => RoleModel.fromJson(role));
        instance.vehicles = json.vehicles.map((vehicle) => VehicleModel.fromJson(vehicle));

        return instance;
    }
}

OrganizationModel.dbSchema = {

};
OrganizationModel.methods = {};

module.exports = OrganizationModel;
