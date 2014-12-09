//Npm//
var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')
var destroy = require('destroy');
var debug = require('debug')('Server');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
//App//
var app = express();
//Routes//
var route_dir = './routes/';
var root_route = require(route_dir + 'root');
var home_route = require(route_dir + 'home');
var settings_route = require(route_dir + 'settings');
var contact_route = require(route_dir + 'contact');
var mail_route = require(route_dir + 'mail');
var my_trip_route = require(route_dir + 'my_trip');
var connect_user_route = require(route_dir + 'connect_user');
var new_user_route = require(route_dir + 'new_user');
var carnets_route = require(route_dir + 'carnets');
var about_route = require(route_dir + 'about');

/* ----- */
/* SETUP */
/* ----- */
//!\ Comment this line for production /!\\
app.set('env', 'development');
//Views Engine//
app.set('views enginel', path.join(__dirname, ''));
//Log stream//
var accessLogStream = fs.createWriteStream(__dirname + '/logs/server.log', {
	flags: 'a'
});
app.set('port', 3000 || process.env.port);
app.set('db_adress', 'mongodb://localhost/gtrotter');

/*------------ */
/* MIDDLEWARES */
/* ----------- */
//Mongodb//
mongoose.connect(app.get('db_adress'));
//Logger//
app.use(logger('combined', {stream: accessLogStream}));
//Data Structure//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Cookies//
app.use(cookieParser());
//Assets//
app.use(express.static(path.join(__dirname, 'assets')));


/* ------ */
/* ROUTES */
/* ------ */
app.use('/', root_route);
app.use('/home', home_route); //??
app.use('/settings', settings_route); //??
app.use('/contact', contact_route);
app.use('/contact/mail', mail_route);
//app.use('/my-trip', my_trip_route);
app.use('/connect-user', connect_user_route);
app.use('/new-user', new_user_route);
app.use('/carnets', carnets_route);
app.use('/about', about_route);

/* -------------- */
/* ERROR HANDLING */
/* -------------- */
//404//
app.use(function(req, res, next) {
	var err = new Error("Page not found");
	err.status = 404;
	console.log(err.stack);
	next(err);
});

if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.json(err);
		next();
	});
} else {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.json({
			status: err.status,
			message: err.message
		});
		next();
	});
}

/* --------- */
/* LANCEMENT */
/* --------- */

var server = app.listen(app.get('port'), function() {
	console.log("Express server listening on port " + server.address().port);
});

destroy(accessLogStream);
