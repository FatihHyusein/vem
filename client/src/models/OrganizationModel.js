import { PermissionModel } from "./PermissionModel";
import { RoleModel } from "./RoleModel";
import { UserModel } from "./UserModel";
import { VehicleModel } from "./VehicleModel";

export class OrganizationModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.permissions = [];
        this.roles = [];
        this.users = [];
        this.vehicles = [];
        this.createdOn = '';
        this.updatedOn = '';
    }

    static fromJson(json) {
        const instance = new OrganizationModel();

        instance.id = json._id;
        instance.name = json.name;
        instance.permissions = json.permissions.map(permissionJson => PermissionModel.fromJson(permissionJson));
        instance.roles = json.roles.map(roleJson => RoleModel.fromJson(roleJson));
        instance.users = json.users.map(userJson => UserModel.fromJson(userJson));
        instance.vehicles = json.vehicles.map(vehicleJson => VehicleModel.fromJson(vehicleJson));
        instance.createdOn = new Date(json.createdOn);
        instance.updatedOn = new Date(json.updatedOn);

        return instance;
    }
}
