const express = require('express');
const utilMiddleware = require('../utilMiddleware');
const router = express.Router();
const {
    getOrder,
    cancelOrder,
    showComment
} = require('./middleware');
// /order
router.get('/', utilMiddleware.checkBlock, getOrder);

router.post('/comment', utilMiddleware.checkBlock, showComment)

// /order/cancel
router.post('/cancel', utilMiddleware.checkBlock, cancelOrder);

module.exports = router;