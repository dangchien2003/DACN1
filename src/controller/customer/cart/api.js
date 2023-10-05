const express = require('express');
const router = express.Router();
const {
    showCart
} = require('./middleware');


router.get('/product', showCart)


module.exports = router;