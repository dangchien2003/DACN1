const express = require('express');
const utilMiddleware = require('../utilMiddleware');
const router = express.Router();
const {
    getOrder,
    cancelOrder
} = require('./middleware');
// /order
router.get('/', utilMiddleware.checkBlock, getOrder);

// /order/cancel
router.put('/cancel', utilMiddleware.checkBlock, cancelOrder);

module.exports = router;