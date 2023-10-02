
const routerProduct = require("./product/api");

function routerSCustomer (app) {
    app.use("/sale", routerProduct);
}
module.exports = routerSCustomer;
