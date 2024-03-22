const express = require('express');
const router = express.Router();
const {
    login,
    showLogin,
    register,
    showRegister,
    logOut
} = require("./middleware");


// /login
router.get('/', showLogin);



// /login
router.post('/', login);

// .login/register
router.post('/register', register);

//login/register
router.get('/register', showRegister);

module.exports = router;