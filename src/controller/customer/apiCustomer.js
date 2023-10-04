const routerProduct = require("./product/api");
const routerInfoCustomer = require("./Customer/api");
const routerLogin = require("./login/api");

function routerSCustomer(app) {
    app.use("/sale", routerProduct);
    app.use("/infocustomer", routerInfoCustomer)
    app.use("/login", routerLogin);

}

module.exports = routerSCustomer;