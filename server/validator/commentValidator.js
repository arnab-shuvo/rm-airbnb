"use strict";
module.exports = function (req, res, next) {
    //Validate post creation rule from schema
    req.check('name', 'Name required').notEmpty();
    req.check('location', 'Location required').notEmpty();
    req.check('comment', 'Comment required').notEmpty();
    req.check('uuid', 'UUI required').notEmpty();
    req.check('rating', 'rating required').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var errorResponse_1 = [];
        errors.map(function (error) {
            errorResponse_1.push({
                param: error.param,
                message: error.msg,
            });
        });
        return res.status(400).json({
            message: 'Valdiation Failed',
            error: errorResponse_1,
        });
    }
    next();
};
