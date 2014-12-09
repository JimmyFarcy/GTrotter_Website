var express = require('express');
var router = express.Router();
var Voyage = require('../models/Voyage');
var mongoose = require('mongoose');

/*
 **	www.g-trotter.eu/voyages/
 */
router.route('/')
	.get(function(req, res) {
		Voyage.find(function(err, voyages) {
			if (err)
				res.send(err);
			res.json(voyages);
		});
	})
	.post(function(req, res) {
		var voyage = new Voyage();
		voyage.name = req.body.name;
		voyage.desc = req.body.desc;
		voyage.places = req.body.places;
		voyage.save(function(err) {
			if (err)
				res.send(err);
			res.json({message: 'voyage created', name: voyage.name});
		});
	});

/*
 **	/:voyage_id
 */
router.route('/id/:id')
	.get(function(req, res) {
		Voyage.findById(req.params.id, function(err, voyage) {
			if (err)
				res.send(err)
			res.json(voyage);
		})
	})
	.put(function(req, res) {
		Voyage.findById(req.params.voyage_id, function(err, voyage) {
			if (err)
				res.send(err);
			if (req.body.name)
				voyage.name = req.body.name;
			if (req.body.desc)
				voyage.desc = req.body.desc;
			if (req.body.places)
				voyage.places = req.body.places;
			voyage.save(function(err) {
				if (err)
					res.send(err);
				res.json({message: 'voyage updated', name: voyage.name});
			});

		});
	})
	.delete(function(req, res) {
		Voyage.remove({
			_id: req.params.voyage_id
		}, function(err, voyage) {
			if (err)
				res.send(err);
			res.json({message: 'delete'});
		});
	});

module.exports = router;