const express = require('express');
const router = express.Router();
const {
    Hienthithongtinkhachhang,
    suaThongTin,
    action
} = require("./middleware");

const {checkBlock} = require("../utilMiddleware")

// customer
router.get('/', checkBlock, action)

// customer/info
router.get('/info', checkBlock,  Hienthithongtinkhachhang);

//  customer/suathongtin
router.put('/suathongtin',checkBlock, suaThongTin);


module.exports = router;