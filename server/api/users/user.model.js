const { Schema, model } = require('mongoose');

let schema = new Schema({
    username: String,
    email: String
});

export default model('User', schema);
