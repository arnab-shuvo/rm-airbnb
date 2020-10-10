"use strict";
module.exports = function (req, res, next) {
    //Validate post creation rule from schema
    req.check('title', 'Title required').notEmpty();
    req.check('description', 'Title required').notEmpty();
    req.check('start_date', 'Available Date required').notEmpty();
    req.check('property_type', 'Type required').notEmpty();
    req.check('end_date', 'Available Date required').notEmpty();
    req.check('city', 'City required').notEmpty();
    req.check('country', 'Country required').notEmpty();
    req.check('image', 'Image required').notEmpty();
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
