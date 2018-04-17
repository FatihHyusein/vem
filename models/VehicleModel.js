class VehicleModel {
    constructor() {
        this.id = '';
        this.make = '';
        this.model = '';
        this.manufactureYear = '';
        this.expenses = [];
    }

    static fromJson(json) {
        const instance = new OrganizationModel();

        instance.id = json.id;
        instance.make = json.make;
        instance.model = json.model;
        instance.manufactureYear = json.manufactureYear;

        return instance;
    }
}
