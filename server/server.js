"use strict";
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var dotenv = require('dotenv');
var path = require('path');
var router = require('./routes');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var passport = require('passport');
require('./auth/auth');
dotenv.config();
mongoose
    .connect('mongodb://localhost:27017/airBnb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () { return console.log('DB Connected'); })
    .catch(function (err) { return console.log("error connecting db::  " + err.message); });
mongoose.set('useCreateIndex', true);
var app = express();
app.use(morgan('dev'));
app.use(expressValidator());
app.use(passport.initialize());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}));
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/fileserver', express.static(path.join(__dirname, '')));
app.use('/api', router);
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
var port = 3000;
app.listen(port, function () {
    console.log("Listening " + port);
});
