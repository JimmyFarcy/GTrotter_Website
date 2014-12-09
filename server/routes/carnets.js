var express = require('express');
var router = express.Router();

/*
**	www.g-trotter.eu/carnets
*/

router.route('/')
	.get(function(req, res) {
		res.json({
			path: 'www.g-trotter.eu/carnets'
		})
	})

router.route('/:user')
	.get(function(req, res) {
		res.json({
			path: 'www.g-trotter.eu/carnets/' + req.params.user,
			id: req.params.user
		})
	})

router.route('/:user/:trip')
	.get(function(req, res) {
		res.json({
			path: 'www.g-trotter.eu/carnets/' + req.params.user + '/' + req.params.trip,
			id: req.params.user,
			trip: req.params.trip
		})
	})

module.exports = router;