var express = require('express');
var router = express.Router();
var Place = require('../models/Place');
var mongoose = require('mongoose');

/*
 **	/places/
 */
router.route('/')
	.get(function(req, res) {
		Place.find(function(err, places) {
			if (err)
				res.send(err);
			res.json(places);
		});
	})
	.post(function(req, res) {
		var place = new Place();
		place.name = req.body.name;
		place.desc = req.body.desc;
		place.lat = req.body.lat;
		place.lon = req.body.lon;
		place.save(function(err) {
			if (err)
				res.send(err);
			res.json({message: 'place created', name: place.name});
		});
	});

/*
 **	/:place_id
 */
router.route('/:place_id')
	.get(function(req, res) {
		Place.findById(req.params.place_id, function(err, place) {
			if (err)
				res.send(err)
			res.json(place);
		})
	})
	.put(function(req, res) {
		Place.findById(req.params.place_id, function(err, place) {
			if (err)
				res.send(err);
			if (req.body.name)
				place.name = req.body.name;
			if (req.body.desc)
				place.desc = req.body.desc;
			if (req.body.lat)
				place.lat = req.body.lat;
			if (req.body.lon)
				place.lon = req.body.lon;
			place.save(function(err) {
				if (err)
					res.send(err);
				res.json({message: 'place updated', name: place.name});
			});

		});
	})
	.delete(function(req, res) {
		Place.remove({
			_id: req.params.place_id
		}, function(err, place) {
			if (err)
				res.send(err);
			res.json({message: 'delete'});
		});
	});

module.exports = router;