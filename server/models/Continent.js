var mongoose = require('mongoose');
var Town = require('./Town');
var Schema = mongoose.Schema;

var ContinentSchema = new mongoose.Schema({
	name: String,
	towns: [{type: Schema.ObjectId, ref: Town}]
});

module.exports = mongoose.model('Continent', ContinentSchema);