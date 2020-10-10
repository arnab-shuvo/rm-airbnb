"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.use('/auth', require('./auth'));
router.use('/property', require('./property'));
module.exports = router;
