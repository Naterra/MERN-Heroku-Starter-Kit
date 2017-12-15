import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as db from './db/db';
import { serverPort } from '../config/config.json';

// Initialization of express application
const app = express();

// Set up connection of database
// import mongoose from "mongoose";
import './db/models/User';
db.setUpConnection();

// Using bodyParser middleware
app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors({ origin: '*' }));
app.set('port', process.env.PORT || serverPort);

// Routers
app.get('/api', (req, res) => {
    res.send('OK');
});

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file

	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	// If express didn't find any route matches listed above,
	// will try to find in client/build
	const path = require('path');

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(app.get('port'), () => {
	console.log(`Server is up and running on port ${app.get('port')}`);
});
