
var express = require('express');
var router = express.Router();


//MODELS
var Place = require('../models/place');
var Voyage = require('../models/voyage');
var User = require('../models/user');

//ROUTES
var places = require('./places');
var voyages = require('./voyages');
var users = require('./users');


//Places
Place.methods(['get', 'put', 'post', 'delete']); // j'utilise le package 'node-restful'
Place.route('tags.get', places.getPlacesByTags);
Place.before('post', places.beforeAdding);
Place.before('put', places.beforeUpdate);
Place.before('delete', places.beforeDelete);
Place.register(router, '/places');

//voyages
Voyage.methods(['get', 'put', 'post', 'delete']);
Voyage.register(router, '/voyages');

//users
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');


module.exports = router;