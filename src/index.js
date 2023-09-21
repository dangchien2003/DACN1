// thư viện code nodejs
const express = require('express');
// lấy ra phương thức 
const app = express();
app.set('view engine', 'ejs');
app.set("views", "./src/views");
app.use(express.static('public'));

app.use('/test', require('./controller/customer/testhome/api'));

app.get('/', async (req, res) => {
    console.log("trang chủ");
    res.send("trang chủ");
});
//thanh

app.listen(3000, () => {
    console.log(`127.0.0.1:3000`);
});