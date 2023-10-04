const express = require('express');
const utilMiddleware = require('../utilMiddleware');
const router = express.Router();
const {
    getOrder,
    cancelOrder
} = require('./middleware');

router.get('/', utilMiddleware.checkBlock, getOrder);
router.put('/', utilMiddleware.checkBlock, cancelOrder);

module.exports = router;