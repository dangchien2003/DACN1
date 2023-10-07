const express = require('express');
const router = express.Router();
const {
    login,
    showLogin,
    register
} = require("./middleware");


// /login
router.get('/', showLogin);

// /login
router.post('/', login);

// .login/register
router.post('/register', register);

module.exports = router;