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


router.get('/product', showCart)
router.put('/delete', deleteCart)
router.post('/add', addCart)
router.post('/update', updateCart)
router.get('/checkout', showCheckout)
router.post('/checkout/done', CheckoutCart)


module.exports = router;