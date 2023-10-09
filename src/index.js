const express = require('express');
const exphbs  = require('express-handlebars');
const ejs = require('ejs');
const path = require('path');
const port = 3000;
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
// const route = require('./routes');
const routeAdmin = require('./routes');
const {format, addHours} = require('date-fns');
const multer = require('multer');

//Cấu hình nơi lưu trữ tải file lên
const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './public/uploads');
  },
  filename: function(req, file, cb){
    cb(null, Date.now()+'-'+file.originalname);
  }
});

const upload = multer({storage:storage});

app.use(upload.single('anh'));

//Cấu hình body request
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );
//Cấu hình file tĩnh
// app.use(express.static('./public'));

//Cấu hình handlebars template engine
app.engine('hbs', exphbs.engine({extname: '.hbs', defaultLayout: 'main', helpers: {
  format: function(date, formatString){
    const vietnamTime = addHours(date,7);
    return format(vietnamTime, formatString);
  },
}}));
app.set('view engine', 'hbs');

//use ejs engine
app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'views/admin'), path.join(__dirname, 'views')]);


// Route init
// route(app);
routeAdmin(app);




app.listen(3000, () => {
  console.log(`127.0.0.1:3000`);
});
