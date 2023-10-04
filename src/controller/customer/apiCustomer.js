
const routerProduct = require("./product/api");
const routerInfoCustomer = require("./Customer/api");
function routerSCustomer (app) {
    app.use("/sale", routerProduct);
    app.use("/infocustomer", routerInfoCustomer)

}

module.exports = routerSCustomer;