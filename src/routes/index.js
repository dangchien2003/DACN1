/** @format */
const productRouter = require("./products");
const siteRouter = require("./sites");
const accountRouter = require("./accounts");

function route(app) {

  //ROUTE ADMIN
  //route admin account -> accounts.js
  app.use("/admin/accounts", accountRouter);
  //route admin product -> products.js
  app.use("/admin/products", productRouter);
  //route dẫn đến trang chủ admin
  app.use("/admin", siteRouter);
}

module.exports = route;

