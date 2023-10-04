const express = require('express');
const router = express.Router();
const {
    returnPageContact
} = require('./middleware');

// /contact
router.get("/", returnPageContact)

module.exports = router;