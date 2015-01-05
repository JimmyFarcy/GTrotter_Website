var main = require('./main');
var check = require('../utils/usefulCheckers');
var Place = require('../models/place');

exports.verifyPlaceInfosPost = function (req, res) {
	/*
	name: String,
	location: {
		latitude: Number,
		longitude: Number
	}*/
}

exports.getPlacesByTags = function (req, res, next) {
	
}

exports.beforeAdding = function (req, res, next) {
	if (main.checkUser(req.session.user, ['user', 'admin'])) {
		var name = req.params.name,
			lat = req.params.location.latitude,
			lon = req.params.location.longitude
			tags = req.params.tags.split('#');
		var rgUserName = new RegExp("^[a-z0-9_]{3,16}$"),
			rgDecimalValue = new RegExp("^[0-9]+$");
		if (!name || !check.type(name, 'string') || !rgUserName.test(name))
			res.send(500, 'Error with given places\'s name');
		if (!lat || !lon || !check.type(lat, 'number') || !check.type(lon, 'number')
			|| !rgDecimalValue.test(lat) || !rgDecimalValue.test(lon))
			res.send(500, 'Error with given place\'s coordonates');
		next();
	} else {
		res.send(500, 'beforeAdding failed: User\'s rights');
	}
	next();
}

exports.beforeUpdate = function (req, res, next) {
	main.checkUser(req.session.user._id, ['user']);
}

exports.beforeDelete = function (req, res, next) {
	main.checkUser(req.session.user._id, ['user']);

}