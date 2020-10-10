import express = require('express');
const router = express.Router();
const passport = require('passport');
const authValidator = require('../../validator/authValidator');
const { createProperty, getProperty, searchProperty, addComment, getPropertyDetail, latestProperty } = require('../../controller/propertyController');
const propertyValidator = require('../../validator/propertyValidator');
const commentValidator = require('../../validator/commentValidator');

router.get('/', getProperty);
router.get('/search', searchProperty);
router.get('/latestReviews', latestProperty);
router.post('/comment', commentValidator, addComment);
router.get('/:id', getPropertyDetail);

router.post('/', authValidator, propertyValidator, createProperty);

module.exports = router;
