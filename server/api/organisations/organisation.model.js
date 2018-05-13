const mongoose = require('mongoose');
const PermissionModel = require('./permissions/permission.model');
const RoleModel = require('./roles/role.model');
const UserModel = require('./users/user.model');
const VehicleModel = require('./vehicles/vehicle.model');

let schema = new mongoose.Schema({
    name: {type: String, index: true},
    permissions: [PermissionModel.schema],
    roles: [RoleModel.schema],
    users: [UserModel.schema],
    vehicles: [VehicleModel.schema],
    createdOn: {type: Date, default: Date.now},
    updatedOn: {type: Date,},
});

schema.pre('save', function (next) {
    this.updatedOn = Date.now();
    next();
});

module.exports = mongoose.model('Organisation', schema);
