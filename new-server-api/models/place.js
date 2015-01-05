var restful = require('node-restful');
var mongoose = require('mongoose');

var tags = '#Food&Drink#Attractions#Nightlife#Shopping'.split('#');

var placeSchema = new mongoose.Schema({
	name: String,
	location: {
		latitude: Number,
		longitude: Number
	},
	tags: [String]
	//Trouver pour les tags
});

module.exports = restful.model('Place', placeSchema);