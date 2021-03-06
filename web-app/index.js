'use strict';

const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const path = require('path');

const options = require('./package.json');
const app = express();
const server = http.createServer(app);
const db = require('./database');

passport.use(new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password'
}, function(username, password, done) {

	if (db.authenticate(username, password)) {
		done(null, {
			username: username
		});
	} else {
		done(null, false);
	}

}));

const sessions = new Map();

passport.serializeUser(function(user, cb) {
	sessions.set(user.username, user);
	cb(null, user.username);
});

passport.deserializeUser(function(username, cb) {
	cb(null, sessions.get(username));
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: 'secret'
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function(req, res) {

	res.sendFile(path.join(__dirname, 'www', 'login.html'));

});

app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

app.use(function(req, res, next) {

	if (!req.user) {
		res.redirect('/login');
		return;
	}

	next();

});

// app.use('/demo/:id', function(req, res) {
// 	res.send('params: ' + JSON.stringify(req.params) + '<br>query: ' + JSON.stringify(req.query));
// });

// app.use('/contact', bodyParser.json());

// app.use('/contact', function(req, res) {

// 	res.send('POST Data: ' + JSON.stringify(req.body));

// });

app.use(function(req, res, next) {

	console.log(req.cookies);

	res.cookie('demo', 'test');

	next();

});


app.use(express.static(options.webServer.folder));

server.listen(options.webServer.port, function() {
	console.log(`web server started on port ${options.webServer.port}`);
});