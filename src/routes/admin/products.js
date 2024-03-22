/** @format */

const express = require('express');
const router = express.Router();

//const productController = require("../controllers/ProductController");
const adminProductController = require("../controllers/admin/ProductController")

//router.get("/", productController.getAllProduct);

//Admin route

//Thêm 1 sản phẩm
router.use('/add', adminProductController.store);

//Cập nhật 1 sản phẩm
router.use('/edit/:id',adminProductController.update);

//Xóa 1 sản phẩm
router.use('/delete/:id',adminProductController.destroyed);

//Lấy chi tiết 1 sản phẩm
//router.get('/:id',adminProductController.show);

//Lấy danh sách sản phẩm
router.use('/', adminProductController.index);

module.exports = router;
