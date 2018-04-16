const { Router } = require('express');
const UserRoutes = require('./users/user.routes');

export default class Routes {
    public router;

    constructor(app) {
        this.router = Router();
        this.router.use('/users', UserRoutes);
    }
}
