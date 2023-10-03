const express = require('express');
const utilMiddleware = require('../utilMiddleware');
const router = express.Router();
const {
    getOrder
} = require('./middleware');

router.get('/', utilMiddleware.checkBlock, getOrder)

module.exports = router;