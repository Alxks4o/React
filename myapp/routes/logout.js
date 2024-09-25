var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function name(req, res, next) {
    res.clearCookie('token')
    res.redirect('/login')
});

module.exports = router; 