const { Router } = require('express');
const OrganisationsRoutes = require('./organisations/organisations.routes');

module.exports = class Routes {
    constructor(app) {
        this.router = Router();
        this.router.use('/organisations', OrganisationsRoutes);
    }
};
