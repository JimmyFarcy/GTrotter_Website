var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
	name: String,
	desc: String,
	lat: Number,
	lon: Number
});
module.exports = mongoose.model('Place', PlaceSchema);