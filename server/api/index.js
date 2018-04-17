const { Router } = require('express');
const UserRoutes = require('./users/user.routes');
const OrganisationRoutes = require('./organisation/organisation.routes');

module.exports = class Routes {
    constructor(app) {
        this.router = Router();
        this.router.use('/users', UserRoutes);
        this.router.use('/organisation', OrganisationRoutes);
    }
};
