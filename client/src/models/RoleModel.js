export class RoleModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.assignedPermissions = [];
    }

    static fromJson(json) {
        const instance = new RoleModel();

        instance.id = json.id;
        instance.name = json.name;

        return instance;
    }
}
