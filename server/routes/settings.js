var express = require('express');
var router = express.Router();

/*
**	www.g-trotter.eu/settings
*/

router.route('/')
	.get(function(req, res) {
		// get les préférences utilisateur
		res.json({
			path: 'www.g-trotter.eu/settings'
		})
	})

module.exports = router;