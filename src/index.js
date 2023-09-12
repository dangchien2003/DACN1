// thư viện code nodejs
const express = require('express');
// lấy ra phương thức 
const app = express();
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static('../public'));



app.get('/', (req, res) => {
    res.send('Hello, World!');
});



app.listen(3000, () => {
    console.log(`127.0.0.1:3000`);
});