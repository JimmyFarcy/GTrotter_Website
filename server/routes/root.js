var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({
	path: 'www.g-trotter.eu/',
	title: 'gtrotter'
    });
});

module.exports = router;