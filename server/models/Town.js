var mongoose = require('mongoose');
var Country = require('./Country');
var Place = require('./Place');
var Schema = mongoose.Schema;

var TownSchema = new mongoose.Schema({
	name: String,
	capital: Boolean,
	country: {type: Schema.ObjectId, ref: Country},
	places: [{type: Schema.ObjectId, ref: Place}]
});

module.exports = mongoose.model('Town', TownSchema);