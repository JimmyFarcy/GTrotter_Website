var mongoose = require('mongoose');
var restful = require('node-restful');
var role = 'unverify basic admin'.split(' ');

var userSchema = new mongoose.Schema({
	name: { 
		firstname: String,
		lastname: String
	},
	age : Number,
	email: String,
	role: String,
	password: String
});

module.exports = restful.model('User', userSchema);