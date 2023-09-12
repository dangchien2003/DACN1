const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(3000, () => {
    console.log(`127.0.0.1:3000`);
});csaccsa ádasdas