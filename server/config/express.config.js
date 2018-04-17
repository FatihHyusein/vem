const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require("../api");
const PassportAuth = require("../auth/passport.auth");
const environment = require('../environments/environment');

class Express {
    constructor() {
        Express.connectToMongo();
        this.app = express();

        new PassportAuth();
        this.setMiddleware();
    }

    static async connectToMongo() {
        try {
            await mongoose.connect(environment.MONGO_URI, {});
        }
        catch (e) {
            console.log('Could not connect to MONGO!!!');
            console.log(e);
            process.exit(1);
        }
    }

    static requestReceiveWrapper(req, res, next) {
        next();
    }

    static responseSendWrapper(req, res) {
        const response = {};

        if (res.locals.data) {
            Object.assign(response, res.locals.data);
        }

        res.json(response);
    }

    static errorHandler(err, req, res, next) {
        //add morgan here too
        //use env not to leak in prod with backend error messages
        res.status(500);
        res.json({ error: err });
    }

    setMiddleware() {
        this.app.use(logger("dev"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(Express.requestReceiveWrapper);
        this.app.use('/api', (new Routes(this.app)).router);
        this.app.use(Express.responseSendWrapper);
        this.app.use(Express.errorHandler);
    }
}

module.exports = new Express().app;
