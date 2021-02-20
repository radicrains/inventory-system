const mongoose = require('mongoose');

const toolsSchema = new mongoose.Schema({
    type: {type: String},
    name: {type: String, require: true},
    img: {type: String, require: true},
    qty: {type: Number, min: 1},
    price: {type: Number, min: 0},
});

const Tools = mongoose.model('Tools',toolsSchema);

module.exports = Tools;