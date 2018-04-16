const { Router } = require('express');
const UserController = require('./user.controller');

export class UserRoutes {
    public router;

    constructor() {
        this.router = Router();
        this.router.get('/', UserController.getAll);
        this.router.post('/', UserController.create);
    }
}

export default (new UserRoutes()).router;
