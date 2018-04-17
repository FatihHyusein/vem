const { Router } = require('express');
const OrganisationController = require('./organisation.controller');

class OrganisationRoutes {
    constructor() {
        this.router = Router();
        this.router.get('/', OrganisationController.getAll);
        this.router.post('/', OrganisationController.create);
    }
}

module.exports = (new OrganisationRoutes()).router;
