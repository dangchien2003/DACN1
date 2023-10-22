const express = require('express');
<<<<<<< HEAD
const exphbs = require('express-handlebars');
=======
const exphbs  = require('express-handlebars');
>>>>>>> kim_anh
const ejs = require('ejs');
const path = require('path');
const port = 3000;
const app = express();
<<<<<<< HEAD
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
const {
    format,
    addHours
} = require('date-fns');
const multer = require('multer');
const passportLogin = require('./until/passportLogin');

//Cấu hình nơi lưu trữ tải file lên
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage
});
=======
const route = require('./routes/admin');
const {format, addHours} = require('date-fns');
const bodyParser = require('body-parser')
const multer = require('multer');
const passportLogin = require('./until/passportLogin');

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
>>>>>>> kim_anh

app.use(upload.single('anh'));

//Cấu hình body request
<<<<<<< HEAD
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );
//Cấu hình file tĩnh
// app.use(express.static('./public'));
=======
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
//Cấu hình file tĩnh
app.use(express.static('./public'));
>>>>>>> kim_anh

//Cấu hình handlebars template engine
app.engine('hbs', exphbs.engine({extname: '.hbs', defaultLayout: 'main', helpers: {
  format: function(date, formatString){
<<<<<<< HEAD
    const dateString = new Date(date);
    //const vietnamTime = addHours(dateString,7);
=======
    if(!date) return '';
    const dateString = new Date(date);
    //const vietnamTime = addHours(dateString,0);
>>>>>>> kim_anh
    return format(dateString, formatString);
  },
  eq: function(val1, val2, options){
    return val1 === val2 ? true: false;
  },
  increase : function(val){
    return ++val;
  },
  currency: function(val){
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")  + ' VNĐ';
<<<<<<< HEAD
  }
=======
  },
>>>>>>> kim_anh
}}));
app.set('view engine', 'hbs');

//use ejs engine
app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'views/admin'), path.join(__dirname, 'views/admin/authentications'), path.join(__dirname, 'views')]);

<<<<<<< HEAD
//passportLogin(app);
// Route init
// route(app);
routeAdmin(app);

=======
passportLogin(app);
// Route init
route(app);
>>>>>>> kim_anh



app.listen(3000, () => {
  console.log(`127.0.0.1:3000`);
});
