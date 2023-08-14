const mongoose = require('mongoose');

const scootersSchema = new mongoose.Schema({
scootyName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('scooters', scootersSchema);