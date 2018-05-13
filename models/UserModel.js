class UserModel {
    constructor() {
        this.id = '';
        this.name = '';
        this.pass = '';
        this.assignedRoleIds = [];
    }

    static fromJson(json) {
        const instance = new UserModel();

        instance.id = json.id;
        instance.name = json.name;
        instance.pass = json.pass;
        instance.assignedRoleIds = json.assignedRoleIds;

        return instance;
    }
}

UserModel.dbSchema = {
    name: String,
    pass: {type: String, select: false},
    assignedRoleIds: Array,
};
UserModel.methods = {};

module.exports = UserModel;
