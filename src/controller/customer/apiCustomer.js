const routerProduct = require("./product/api");
const routerContact = require("./contact/api");
const routerOrder = require("./order/api");
const routerLogin = require("./login/api");
const routerInfoCustomer = require("./Customer/api");
const routerCart = require("./cart/api");
const multer = require("multer");
const upload = multer();
function routersCustomer(app) {
    app.use("/sale", routerProduct);
    app.use("/contact", routerContact);
    app.use("/order", routerOrder);
    app.use("/sale", routerProduct);
    app.use("/infocustomer", routerInfoCustomer)
    app.use("/login", routerLogin);
    app.use("/cart", routerCart);






    app.get('/', async (req, res) => {
        res.redirect('/sale');
    });
    app.get('/test', async (req, res) => {
        res.render('customer/err/err' ,{background: "/customer/img/500.jpg"});
    });
}

module.exports = routersCustomer;