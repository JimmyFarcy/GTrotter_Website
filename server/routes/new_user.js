var express = require('express');
var router = express.Router();

/*
**	www.g-trotter.eu/new-user
*/

router.route('/')
	.get(function(req, res) {
		res.json({
			path: 'www.g-trotter.eu/new-user'
		})
	})

module.exports = router;