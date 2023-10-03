// thư viện code nodejs
const express = require('express');
// lấy ra phương thức 
const app = express();
app.set('view engine', 'ejs');
app.set("views", "./src/views");
app.use(express.static('public'));
app.use('/test', require('./controller/customer/testhome/api'));

const routerSCustomer = require("./controller/customer/apiCustomer");

routerSCustomer(app);


app.get('/', async (req, res) => {
    res.render('customer/sale/root');
});


app.listen(3000, () => {
    console.log(`127.0.0.1:3000`);
});