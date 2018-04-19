const { Router } = require('express');
const OrganisationRoutes = require('./organisation/organisation.routes');

module.exports = class Routes {
    constructor(app) {
        this.router = Router();
        this.router.use('/organisation', OrganisationRoutes);
    }
};
