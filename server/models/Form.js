var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema({
	name: String,
	email: String,
	subject: String,
	contact: String,
	description: String
});

module.exports = mongoose.model('Form', FormSchema);