const express = require('express');
const router = express.Router();
const {
    showCart,
    addCart,
    updateCart
} = require('./middleware');


router.get('/product', showCart)
router.post('/add', addCart)
router.post('/update', updateCart)


module.exports = router;