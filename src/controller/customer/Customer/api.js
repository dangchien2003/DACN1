const express = require('express');
const router = express.Router();
const {
    Hienthithongtinkhachhang,
    suaThongTin
} = require("./middleware");


// infocustomer/
router.get('/', Hienthithongtinkhachhang);

// infocustomer/dangnhap 
router.get('/dangnhap', (req, res) => {
    res.render("file đăng nhập")
});

//  infocustomer/suathongtin
router.put('/suathongtin', suaThongTin);

//infocustomer/


module.exports = router;