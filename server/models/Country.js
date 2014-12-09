var mongoose = require('mongoose');
var Continent = require('./Continent');
var Town = require('./Town');
var Schema = mongoose.Schema;

var CountrySchema = new mongoose.Schema({
	name: String,
	continent: {type: Schema.ObjectId, ref: Continent},
	capital: {type: Schema.ObjectId, ref: Town}
});

module.exports = mongoose.model('Country', CountrySchema);