const mongoose = require('mongoose');
const UserModel = require('../../../../client/src/models/UserModel');

let schema = new mongoose.Schema({
    name: String,
    pass: {type: String, select: false},
    assignedRoles: Array,
});

module.exports = mongoose.model('User', schema);
