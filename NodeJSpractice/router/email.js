var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '0000',
    database : 'jsman'
});

connection.connect();

router.post('/form', function(req, res){ 
    console.log(req.body.email);   
    res.render('email.ejs', {'email' : req.body.email});
});

router.post('/ajax_send_email', function(req, res){
    var email = req.body.email;
    var responseData = {};

    var query = connection.query('SELECT name FROM user WHERE email="' + email + '"', function(err, rows){
        if(err) throw err;
        if(rows[0]) {
            responseData.result = 'ok';
            responseData.name = rows[0].name;
        }
        else{
            responseData.result = "none";
            responseData.name = "";
        }
        console.log(rows);
        res.json(responseData);
    });   
});

module.exports = router;