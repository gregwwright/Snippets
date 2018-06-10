const http = require('http');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeader(),
	secretOrKey: 'secret',
	algorithms: ['HS256']
};

passport.use(new JwtStrategy(jwtOptions, function(jwtPayload, done) {
	done(null, { name: jwtPayload.name });
}));

const widgetRouter = require('./routers/widgets');

const app = express();
const server = http.createServer(app);

app.use(passport.authenticate('jwt', { session: false }));
app.use('/api', bodyParser.json());
app.use('/api', widgetRouter);

server.listen(3000, function() {
	console.log('rest service running on port 3000');
});