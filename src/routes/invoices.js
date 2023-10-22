/** @format */

const express = require('express');
const router = express.Router();

const adminInvoiceController = require("../controllers/admin/InvoiceController")

//Admin account route

//Cập nhật đơn hàng

router.use('/edit/:id',adminInvoiceController.update);
//Xóa đơn hàng
router.use('/delete/:id',adminInvoiceController.destroyed);

//phe duyet don hang
router.use('/approval/:id', adminInvoiceController.approval);

//Xem Chi tiết đơn hàng
router.use('/:id',adminInvoiceController.getInvoiceDetail);

//Lấy danh sách đơn hàng
router.use('/', adminInvoiceController.index);

module.exports = router;