class RoleModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.assignedPermissions = [];
    }

    static fromJson(json) {
        const instance = new OrganizationModel();

        instance.id = json.id;
        instance.name = json.name;

        return instance;
    }
}

RoleModel.dbSchema = {

};

module.exports = RoleModel;
