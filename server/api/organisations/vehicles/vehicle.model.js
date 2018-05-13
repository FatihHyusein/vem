const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    make: String,
    model: String,
    manufactureYear: String,
});

module.exports = mongoose.model('Vehicle', schema);
