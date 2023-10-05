const express = require('express');
const router = express.Router();
const {
    login,
    showLogin
} = require("./middleware");


// /login
router.get('/', showLogin);

// /login
router.post('/', login);

// router.post()

module.exports = router;