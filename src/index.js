// thư viện code nodejs
const express = require('express');
// lấy ra phương thức 
const app = express();
app.set('view engine', 'ejs');
app.set("views", "./src/views");
app.use(express.static('public'));

app.use('/test', require('./controller/testhome/api'));

app.get('/', async (req, res) => {
    chien
    const query = "SELECT * from Account";
    var a = await helpers.query(query);
    res.render("home", {result: a});
});

app.listen(3000, () => {
    console.log(`127.0.0.1:3000`);
});