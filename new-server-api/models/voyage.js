var mongoose = require('mongoose');
var restful = require('node-restful');

var Place = require('./place');

var voyageSchema = new mongoose.Schema({
	name: String,
	place: [Place],
	start: {
		latitude: Number,
		longitude: Number
	},
	end: {
		latitude: Number,
		longitude: Number
	}
});

module.exports = restful.model('Voyage', voyageSchema);