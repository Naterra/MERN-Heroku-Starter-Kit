'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _db = require('./db/db');

var db = _interopRequireWildcard(_db);

var _config = require('../config/config.json');

require('./db/models/User');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialization of express application
var app = (0, _express2.default)();

// Set up connection of database
// import mongoose from "mongoose";

db.setUpConnection();

// Using bodyParser middleware
app.use(_bodyParser2.default.json());

// Allow requests from any origin
app.use((0, _cors2.default)({ origin: '*' }));
app.set('port', process.env.PORT || _config.serverPort);

// Routers
app.get('/api', function (req, res) {
	res.send('OK');
});

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file

	app.use(_express2.default.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	// If express didn't find any route matches listed above,
	// will try to find in client/build
	var path = require('path');

	app.get('*', function (req, res) {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(app.get('port'), function () {
	console.log('Server is up and running on port ' + app.get('port'));
});