const express = require('express');
const utilMiddleware = require('../utilMiddleware');
const router = express.Router();
const {
    getOrder,
    cancelOrder
} = require('./middleware');
// /order
router.post('/', utilMiddleware.checkBlock, getOrder);
router.get('/', utilMiddleware.checkBlock, getOrder);

// /order/cancel
router.post('/cancel', utilMiddleware.checkBlock, cancelOrder);

module.exports = router;