/** @format */
const productRouter = require("./products");
const siteRouter = require("./sites");
const accountRouter = require("./accounts");
const invoiceRouter = require("./invoices");

function route(app) {
  //ROUTE ADMIN
  //Khởi tạo biến global

  //Kiểm tra login
  app.get("/admin/login", (req, res, next) => {
    res.render("login.hbs", req.query);
  });
  //route dẫn đến trang chủ admin
  app.use("/admin", (req, res, next) => {
    let isAdmin = req.user && req.user.isAdmin;
    let isUser = req.user ? true : false;
    if (isAdmin) {
      if (!res.locals.global) {
        res.locals.global = {};
      }
      res.locals.global.user = req.user;
      return next();
    }
    if (isUser) return res.send("Bạn không có quyền truy cập");
    return res.redirect("/admin/login");
  });
  //route admin trang đơn hàng -> invoices.js
  app.use("/admin/invoices", invoiceRouter);
  //route admin account -> accounts.js
  app.use("/admin/accounts", accountRouter);
  //route admin product -> products.js
  app.use("/admin/products", productRouter);
  //Route admin trang báo cáo
  app.use("/admin", siteRouter);
  //Đăng xuất
  app.get("/admin/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.redirect("/admin/login");
    });
  });
}
module.exports = route;