const { Router } = require('express');
const OrganisationController = require('./organisation.controller');
const UserRoutes = require('./users/user.routes');

class OrganisationRoutes {
    constructor() {
        this.router = Router();
        this.router.get('/', OrganisationController.getAll);
        this.router.post('/', OrganisationController.create);
        this.router.use('/:organisationId/users', UserRoutes);
    }
}

module.exports = (new OrganisationRoutes()).router;
