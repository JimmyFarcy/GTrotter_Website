var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
	Login: String,
	Password: String,
	FirstName: String,
	LastName: String,
	Age: Number,
	Genre: String,
	Email: String,
	Location: String,
	Langue: String
});

module.exports = mongoose.model('Account', AccountSchema);