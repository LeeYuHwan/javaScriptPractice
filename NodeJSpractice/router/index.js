var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
//var main = require('./main/main');
//var email = require('./email/email');

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/public/form.html"));
});

//router.use('/main', main);
//router.use('/email', email);

module.exports = router;