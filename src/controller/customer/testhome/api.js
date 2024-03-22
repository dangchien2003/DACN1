const express = require('express');
const router = express.Router();
const {
    test
} = require("./middleware");

router.get('/', test);


module.exports = router;