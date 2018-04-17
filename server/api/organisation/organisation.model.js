const mongoose = require('mongoose');
const OrganisationModel = require('../../../models/OrganizationModel');

let schema = new mongoose.Schema(OrganisationModel.dbSchema);
schema.methods = OrganisationModel.methods;

module.exports = mongoose.model('Organisation', schema);
