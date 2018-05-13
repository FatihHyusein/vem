const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: String,
    assignedPermissions: Array,
});

module.exports = mongoose.model('Role', schema);
