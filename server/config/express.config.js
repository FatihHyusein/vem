const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const Routes = require("../api");
const PassportAuth = require("../auth/passport.auth");
const { environment } = require('../environments/environment');

class Express {
    constructor() {
        this.connectToMongo();
        this.app = express();

        new PassportAuth();
        this.setMiddleware();
    }

    async connectToMongo() {
        try {
            await mongoose.connect(environment.MONGO_URI, {
                db: { safe: true }
            });
        }
        catch (e) {
            console.log('could not connect to db');
        }
    }

    setMiddleware() {
        this.app.use(logger("dev"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(this.requestReceiveWrapper);
        this.app.use('/api', (new Routes(this.app)).router);
        this.app.use(this.responseSendWrapper);
        this.app.use(this.errorHandler);
    }

    requestReceiveWrapper(req, res, next) {
        next();
    }

    responseSendWrapper(req, res) {
        const response = {};

        if (res.locals.data) {
            Object.assign(response, res.locals.data);
        }

        res.json(response);
    }

    errorHandler(err, req, res, next) {
        //add morgan here too
        //use env not to leak in prod with backend error messages
        res.status(500);
        res.json({ error: err });
    }
}

export default new Express().app;
