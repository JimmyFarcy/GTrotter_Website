var express = require('express');
var router = express.Router();

/*
**	g-trotter.eu/contact
*/
router.route('/')
	.get(function (req, res) {
		res.json({
			path: 'www.g-trotter.eu/contact'
		})
	})

module.exports = router;