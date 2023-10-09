const express = require('express');
const exphbs  = require('express-handlebars');
const ejs = require('ejs');
const path = require('path');
const port = 3000;
const app = express();
const route = require('./routes');
const {format, addHours} = require('date-fns');
const bodyParser = require('body-parser')
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
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
//Cấu hình file tĩnh
app.use(express.static('./public'));

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
route(app);

app.listen(3000, () => {
  console.log(`127.0.0.1:3000`);
});
