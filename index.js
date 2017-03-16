/**
 * Created by diego on 15/03/17.
 */
var http = require('http');

var path = require('path');

//var methodOverride = require('method-override');
//var bodyParser = require('body-parser');
var multer  = require('multer')();


var express = require('express');
var app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(methodOverride());

app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/sendMail', multer.array(), function (req, res) {
    console.log(req.body);
    res.end();
});

app.listen(8080);

