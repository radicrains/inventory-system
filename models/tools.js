const { urlencoded } = require('express');
const mongoose = require('mongoose');
const url = "/public/img/default.png"

const toolsSchema = new mongoose.Schema({
    type: {type: String},
    name: {type: String, require: true},
    img: {type: String, default: url},
    qty: {type: Number, min: 1},
    price: {type: Number, min: 0},
});

const Tools = mongoose.model('Tools',toolsSchema);

module.exports = Tools;