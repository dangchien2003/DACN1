const express = require('express');
const router = express.Router();
const {
    showCart, addCart
} = require('./middleware');


router.get('/product', showCart)
router.post('/add', addCart)


module.exports = router;