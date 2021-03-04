const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    role: {type: String, default: "user"}

});

const User = mongoose.model('User', userSchema);

module.exports = User;