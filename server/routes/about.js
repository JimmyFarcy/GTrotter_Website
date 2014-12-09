var express = require('express');
var router = express.Router();
var Country = require('../models/Country');
var mongoose = require('mongoose');

/*
** www.g-trotter.eu/about
*/

router.route('/')
	.get(function (req, res) {
		res.json({
			path: 'www.g-trotter.eu/about'
		});
	});

router.route('/countries')
	.get(function (req, res) {
		Country.find(function (err, countries) {
			if (err) res.send(err);
			res.json({
				path: 'www.g-trotter.eu/about/countries',
				countries: countries
			});
		})
	})

router.route('/countries/:name')
	.get(function (req, res) {
		Country.find({name : req.params.name}, function (err, country) {
			if (err) res.send(err);
			res.json({
				path: 'www.g-trotter.eu/about/countries/' + req.params.name,
				country: country
			});
		})
	})

module.exports = router;