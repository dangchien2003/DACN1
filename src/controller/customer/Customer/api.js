const express = require('express');
const router = express.Router();
const {
    Hienthithongtinkhachhang,
    suaThongTin,
    action
} = require("./middleware");

const {
    checkBlock
} = require("../utilMiddleware")

// customer
// router.get('/', checkBlock, action)

// customer
router.get('/', checkBlock, Hienthithongtinkhachhang);

//  customer/suathongtin
router.post('/suathongtin', checkBlock, suaThongTin);


module.exports = router;