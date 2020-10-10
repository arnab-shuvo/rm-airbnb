"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var _a = require('../../validator'), signUpValidator = _a.signUpValidator, loginValidator = _a.loginValidator;
router.post('/login', loginValidator, passport.authenticate('login', { session: false }), function (req, res) {
    res.json(req.user);
});
//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
router.post('/signup', signUpValidator, passport.authenticate('signup', { session: false }), function (req, res) {
    console.log(req.user);
    if (req.user.status) {
        res.json({
            message: req.user.message,
            id: req.user.user._id,
        });
    }
    else {
        res.status(401).json({
            message: req.authInfo.message,
        });
    }
});
module.exports = router;
