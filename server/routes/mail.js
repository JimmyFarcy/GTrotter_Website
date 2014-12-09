var express = require('express');
var router = express.Router();
var Formulaire = require('./../models/Form');
var mongoose = require('mongoose');

/*
**	www.g-trotter.eu/.../mail
*/
router.route('/')
	.get(function (req, res) {
		res.json({
			path: 'www.g-trotter.eu/contact/mail'
		})
	})
    .post(function (req, res) {
		var f = new Formulaire();
		/*
			TODO: Contrôle des données
		*/
		f.name = req.body.name; //non vide et < 20 chars
		f.email = req.body.email; //mail like
		f.subject = req.body.subject; //non vide et < 50 chars
		f.contact = req.body.contact; //mail like
		f.description = req.body.description; //< 200 chars

		f.save(function (err) {
			if (err) {
				res.json({
					status: 'ko',
					msg: err.message 
				});
			}
			res.json({
				status: 'ok',
				from: f.email,
				to: f.contact
			});
		})
    })

module.exports = router;