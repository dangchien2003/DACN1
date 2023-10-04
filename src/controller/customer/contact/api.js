const express = require('express');
const router = express.Router();
const {
    returnPageContact
} = require('./middleware');

router.get("/", returnPageContact)

module.exports = router;