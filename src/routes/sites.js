
const express = require('express');
const router = express.Router();

const adminSiteController = require("../controllers/admin/SiteControllers")

//Admin route
//Đưa về trang chủ trang admin
router.use('/',adminSiteController.index);

module.exports = router;