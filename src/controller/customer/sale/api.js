const express = require('express');
const router = express.Router();
const returnProduct = require('./middleware');

// /sale/
router.get("/", returnProduct.returnProduct)

module.exports = router;