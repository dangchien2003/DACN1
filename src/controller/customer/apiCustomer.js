const routerProduct = require("./product/api");
const routerContact = require("./contact/api");
const routerOrder = require("./order/api");
const routerLogin = require("./login/api");
const routerInfoCustomer = require("./Customer/api");

function routersCustomer(app) {
    app.use("/sale", routerProduct);
    app.use("/contact", routerContact);
    app.use("/order", routerOrder);
    app.use("/sale", routerProduct);
    app.use("/infocustomer", routerInfoCustomer)
    app.use("/login", routerLogin);






    app.get('/', async (req, res) => {
        res.redirect('/sale');
    });
}

module.exports = routersCustomer;