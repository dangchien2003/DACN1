const express = require('express');
const router = express.Router();
const {
    Hienthithongtinkhachhang,
    suaThongTin
} = require("./middleware");


// infocustomer/
router.get('/', Hienthithongtinkhachhang);

//  infocustomer/suathongtin
router.put('/suathongtin', suaThongTin);


module.exports = router;