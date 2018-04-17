const { Router } = require('express');
const UserController = require('./user.controller');

class UserRoutes {
    constructor() {
        this.router = Router();
        this.router.get('/', UserController.getAll);
        this.router.post('/', UserController.create);
    }
}

module.exports = (new UserRoutes()).router;
