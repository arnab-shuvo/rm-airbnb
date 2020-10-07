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
})
    .then(function () { return console.log('DB Connected'); })
    .catch(function (err) { return console.log("error connecting db::  " + err.message); });
var app = express();
app.use(morgan('dev'));
app.use(expressValidator());
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/api', router);
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
var port = 3000;
app.listen(port, function () {
    console.log("Listening " + port);
});
