var express = require('express');
var router = express.Router();
var Voyage = require('./../models/Voyage');

/*
**	www;g-trotter.eu/home
*/

router.route('/')
	.get(function (req, res) {
    	res.json({
			path: 'www.g-trotter.eu/home',
    	});
	})
	.post(function (req, res) {
		var trip = new Voyage();
		trip.name = req.body.name;
		trip.desc = req.body.desc;
		trip.save(function(err) {
			if (err) res.send(err);
			res.json({
				message: 'trip saved', 
				trip: trip
			});
		});
	});
	
module.exports = router;