const mongoose = require('mongoose');
const UserModel = require('../../../models/UserModel');

let schema = new mongoose.Schema(UserModel.dbSchema);
schema.methods = UserModel.methods;

module.exports = mongoose.model('User', schema);
