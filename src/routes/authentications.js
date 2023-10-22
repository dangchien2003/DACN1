/** @format */

const express = require('express');
const router = express.Router();

const adminAuthenticationController = require("../controllers/admin/AuthenticationController");

//Admin account route

//Truy cập trang đăng nhập
router.use('/',adminAuthenticationController.getLogin);

//router.use('/signin', adminAuthenticationController.login);

module.exports = router;