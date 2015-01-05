var express = require('express');
var router = express.Router();
var sess;

router.route('/home')
.get(function (req, res) {
	sess = req.session;
	if (sess.email) {
		res.redirect('/admin'); //il faudrai renvoyer sur la page principale à la place
	} else {
		res.render('index.html'); //page de login tès basique
	}
});

/*
**	ATTENTION password en clair (besoin d'encryption)
*/
router.route('/login')
.post(function (req, res) {
	sess = req.session;
	sess.email = req.body.email;
	sess.password = req.body.pass;
	res.end('done');
});

/*
**	Page de test de redirection avec vérification de login et possibilité de logout
*/
router.route('/admin')
.get(function (req, res) {
	sess = req.session;
	if (sess.email) {
		res.write('<h1>Hello ' + sess.email + '!</h1>');
		res.end('<a href="http://localhost:1337/logout">Logout</a>')
	} else {
		res.write('<h1>User not logged in</h1>');
		res.end('<a href="/home">Log in</a>');
	}
});

router.route('/logout')
.get(function (req, res) {
	req.session.destroy(function (err) {
		if (err)
			res.send(500, 'Error on logout');
		else
			res.redirect('/home');
	});
});


/*
**	FORMULAIRE + ENVOIE DE MAIL
**	j'ai essayé d'utiliser le package 'nodemailer' pour l'envoie
*/
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var transport = nodemailer.createTransport("SMTP", {
service: "Gmail",
auth: {
	user: "username@gmail.com", //du coup je relaisse ça vide
	pass: "gmail-password" //...et vous n'aurez pas mon password ^^
	}
});
router.route('/mail')
.get(function (req, res) {
	res.render('form.html');
});
router.route('/mail/send')
.get(function (req, res) {
	var mailOptions = {
		from: 'yoann.bourgault@epitech.eu',
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	};
	transporter.sendMail(mailOptions, function (err, response) {
		if (err) {
			console.log('Error (mail): ' + err.response);
			res.end('error');
		} else {
			console.log('Message sent: ' + response.message);
			res.end('sent');
		}
	});
});

module.exports = router;

