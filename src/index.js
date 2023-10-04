// thư viện code nodejs
const express = require('express');
// lấy ra phương thức 
const app = express();
const bodyParser = require('body-parser');
// Sử dụng body-parser middleware để xử lý dữ liệu JSON
app.use(bodyParser.json());
// Sử dụng body-parser middleware để xử lý dữ liệu từ biểu mẫu HTML
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.set("views", "./src/views");
app.use(express.static('public'));
// import thư viện đọc cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const routersCustomer = require("./controller/customer/apiCustomer");

routersCustomer(app);




app.listen(3000, () => {
    console.log(`127.0.0.1:3000`);
});