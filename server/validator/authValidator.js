"use strict";
var jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
    jwt.verify(req.headers.authorization, 'top_secret', function (err, user) {
        if (err) {
            res.json('Unauthorized Request').status(401);
        }
        else {
            req.user = user;
            next();
        }
    });
};
