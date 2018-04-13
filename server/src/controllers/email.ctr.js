var express = require('express');
var emailService = require('../services/email.svc')

var router = express.Router();

router.route("/")
.post(function(req, res) {
    var newPost = req.body;
    emailService.sendEmail(newPost.name, newPost.email, newPost.subject, newPost.content)
    .then(function(response) {
        res.status(201);
    }).catch(function(e) {
        console.log(e);
    });
});


module.exports = router;