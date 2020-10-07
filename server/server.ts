const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const router = require('./routes');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const passport = require('passport')

require('./auth/auth');
dotenv.config();


mongoose
	.connect('mongodb://localhost:27017/airBnb', {
		useNewUrlParser: true,
	})
	.then(() => console.log('DB Connected'))
	.catch((err:any) => console.log(`error connecting db::  ${err.message}`));


const app = express();
app.use(morgan('dev'));
app.use(expressValidator());
app.use(passport.initialize());

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));




app.use('/api', router);

app.get('*', (req: any, res: any) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
	console.log(`Listening ${port}`);
});

