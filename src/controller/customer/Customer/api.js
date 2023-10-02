const express = require('express');
const router = express.Router();
const {
    Hienthithongtinkhachhang
} = require("./middleware");

router.get('/', Hienthithongtinkhachhang);


module.exports = router;