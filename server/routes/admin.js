var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.json({
		message: 'admin-panel',
		todo: 'basic authentication + dashboard services'
	})
});

module.exports = router;