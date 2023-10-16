const express = require('express');
const utilMiddleware = require('../utilMiddleware');
const router = express.Router();
const {
    getOrder,
    cancelOrder,
    showComment,
    saveComment,
    showInfoOrder
} = require('./middleware');
// /order
router.get('/', utilMiddleware.checkBlock, getOrder);

router.post('/comment', utilMiddleware.checkBlock, showComment)

router.post('/comment/save', utilMiddleware.checkBlock, saveComment)

// /order/cancel
router.post('/cancel', utilMiddleware.checkBlock, cancelOrder);

router.get('/info/:idDH', utilMiddleware.checkBlock, showInfoOrder);

module.exports = router;