const express = require('express');
const router = express.Router();
const {
    returnProducts,
    returnInfoProduct
} = require('./middleware');

router.get("/", returnProducts);
router.get("/product/info/:idsp", returnInfoProduct);

module.exports = router;