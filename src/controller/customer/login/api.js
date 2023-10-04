const express = require('express');
const router = express.Router();
const {
    login
} = require("./middleware");

router.post('/login', login);
// router.post()

module.exports = router;