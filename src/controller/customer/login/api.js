const express = require('express');
const router = express.Router();
const {
    login
} = require("./middleware");

// /login
router.post('/', login);
// router.post()

module.exports = router;