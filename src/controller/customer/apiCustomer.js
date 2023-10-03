
const routerProduct = require("./product/api");
const routerContact = require("./contact/api");
const routerOrder = require("./order/api");

function routerSCustomer (app) {
    app.use("/sale", routerProduct);
    app.use("/contact", routerContact);
    app.use("/order", routerOrder);






    app.get('/', async (req, res) => {
        res.redirect('/sale');
    });
}
module.exports = routerSCustomer;
