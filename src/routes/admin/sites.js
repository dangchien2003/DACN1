
const express = require('express');
const router = express.Router();

const reportController = require("../controllers/admin/ReportController")

//Admin route
//Đưa về trang chủ trang admin

router.use('/dashboard',reportController.report);

// router.use('/',(req,res,next)=>{
//     res.redirect('/admin/dashboard');
// })


module.exports = router;