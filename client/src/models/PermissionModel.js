export class PermissionModel {
    constructor() {
        this.id = '';
        this.name = '';
    }

    static fromJson(json) {
        const instance = new PermissionModel();

        instance.id = json._id;
        instance.name = json.name;

        return instance;
    }
}
