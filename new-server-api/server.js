var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

//DATABASE
var restful = require('node-restful');
var mongoose = restful.mongoose;
mongoose.connect('mongodb://localhost/GT');
var db = mongoose.connection;
app.use(function (req, res, next) {
	req.db = db;
	next();
});
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', function(err) {
	console.log('Connected to database GT!');
	//1. loader le modèle mongoose
	var Account = require('./models/Account');
	Account.find(function (err, data) {
		if (err)
			console.error.bind(console, 'database error: ');
		//2. voir si les données par défaut existent déjà
		if (!data.toString().length)
		{
			//3. si nouvelle instance server: load données par défaut
			var defaultAccounts = require('./utils/deploy_database').accounts;
			defaultAccounts.forEach(function (e, index, array) {
				var account = new Account(e);
				account.save(function (err, data) {
					if (err)
						console.log(err);
					else
						console.log('success: account created (' + e.Login + ')')
				});
			});
		}
	});
});


//LOGS
var logger = require('morgan');
var fs = require('fs');
var logfile = (__dirname + '/api.log');
var accessLogStream = fs.createWriteStream(logfile, {flags: 'a'});
app.use(logger('combined', {stream: accessLogStream}));

//CONFIGURATION
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile); // pour mes tests je prenais le viewer EJS
app.use(bodyParser.urlencoded({ extented: true }));
app.use(bodyParser.json());
app.use(session({secret: 'secrect_default'})); 


//API
//Cf. fichier ./routes/api.js
app.use('/api', require('./routes/api'));


//SERVER'S ROUTES
//Cf. fichier ./routes/server_routes.js
app.use('/', require('./routes/server_routes'));


//RUNNING THE SERVER
app.listen(1337, function () {
	console.log('server running on port 1337!');
});