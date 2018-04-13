var express = require('express');
var email = require('./controllers/email.ctr');



var router = express.Router();

router.use('/email', email);




module.exports = router;