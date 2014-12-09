var mongoose = require('mongoose');
var Place = require('./Place');
var Schema = mongoose.Schema;

var VoyageSchema = new mongoose.Schema({
	name: String,
	desc: String,
	places: [{type: Schema.ObjectId, ref: Place}]
});

module.exports = mongoose.model('Voyage', VoyageSchema);