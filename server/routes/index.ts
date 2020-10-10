import express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/property', require('./property'));

module.exports = router;
