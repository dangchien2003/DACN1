const express = require('express');
const router = express.Router();
const {
    returnProducts,
    returnInfoProduct
} = require('./middleware');
//  /sale
router.get("/", returnProducts);

// sale/product/info/:idsp
router.get("/product/info/:idsp", returnInfoProduct);

module.exports = router;