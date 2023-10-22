/** @format */

const express = require('express');
const router = express.Router();

const adminAccountController = require("../controllers/admin/AccountController")

//Admin account route
//Tạo tài khoản

router.use('/add-account',adminAccountController.store);
router.use('/create', adminAccountController.getViewCreateAccount);
//Xóa admin
router.use('/delete/admin/:id',adminAccountController.deleteAdmin);
//Xóa khách hàng
router.use('/delete/customer/:id',adminAccountController.deleteCustomer);

//Band account
router.use('/band/customer/:id',adminAccountController.bandAccount);

router.use('/band/admin/:id',adminAccountController.bandAccountAdmin);

//Cập nhật một tài khoản
router.use('/edit-account/:idTK',adminAccountController.update);
router.use('/:idTK',adminAccountController.getViewCreateAccount);
//Lấy danh sách tài khoản
router.use('/', adminAccountController.index);

module.exports = router;