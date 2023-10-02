/** @format */

const express = require("express");
const route = require("./routes");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static('public'));
app.use('/test', require('./controller/customer/testhome/api'));
app.get('/', async (req, res) => {
    res.render('customer/sale/root');
});
//thanh

app.listen(3000, () => {
  console.log(`127.0.0.1:3000`);
});
