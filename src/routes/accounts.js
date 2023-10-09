/** @format */

const express = require('express');
const router = express.Router();

const adminAccountController = require("../controllers/admin/AccountController")

//Admin account route

//Xóa admin
router.use('/delete/admin/:id',adminAccountController.deleteAdmin);
//Xóa khách hàng
router.use('/delete/customer/:id',adminAccountController.deleteCustomer);

//Band account
router.use('/band/:id',adminAccountController.bandAccount);

//Lấy chi tiết 1 sản phẩm
//router.get('/:id',adminProductController.show);

//Lấy danh sách tài khoản
router.use('/', adminAccountController.index);

module.exports = router;