/** @format */
const productRouter = require("./products");
const siteRouter = require("./sites");
const accountRouter = require("./accounts");
const invoiceRouter = require("./invoices");
const authenticationRouter = require("./authentications");
const isAdmin = require('../middleware/IsAdmin');
const passportLogin = require('../until/passportLogin')

function route(app) {
  
  //ROUTE ADMIN
  
   //Kiểm tra login
    //route dẫn đến trang chủ admin
   app.use('/admin', (req,res,next)=>{
    let isDangNhap = true;
    if(!isDangNhap) return res.render('login.hbs');
    return next();
   });
  app.use("/admin/authentications", authenticationRouter);
  app.use("/admin/invoices", invoiceRouter);
  //route admin account -> accounts.js
  app.use("/admin/accounts", accountRouter);
  //route admin product -> products.js
  app.use("/admin/products", productRouter);
  app.use("/admin", siteRouter);
}

module.exports = route;