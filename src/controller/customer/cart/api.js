const express = require('express');
const router = express.Router();
const {
    showCart,
    addCart,
    updateCart,
    showCheckout,
    CheckoutCart,
    deleteCart
} = require('./middleware');

const {
    checkBlock
} = require("../utilMiddleware");

router.get('/product', checkBlock, showCart)
router.put('/delete', deleteCart)
router.post('/add', addCart)
router.post('/update', updateCart)
router.get('/checkout', checkBlock, showCheckout)
router.post('/checkout/done', CheckoutCart)


module.exports = router;