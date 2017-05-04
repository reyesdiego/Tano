/**
 * Created by diego on 15/03/17.
 */
var http = require('http');

var path = require('path');

//var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var express = require('express');
var app = express();
app.use(bodyParser.json());

// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
    next();
});
app.use(express.static(__dirname));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/sendMail', function (req, res, next) {
    var form = req.body;

    var gmail = {
        user:	"pietrandrea2000@gmail.com",
        password: "belg4444",
        host:	"smtp.gmail.com",
        ssl: true
    };

    if (form.message === undefined || form.message === "") {
        res.end();
    } else {
        var email 	= require("emailjs");
        var server 	= email.server.connect(gmail);

        var message	= {
            text: form.text,
            from: "Estudio Pietrandrea <noreply@gmail.com>",
            to: form.email,
            subject: "Consulta Estudio Pietrandrea",
            attachment:
                [
                    {data: "<html><p>"+form.name+"</p><p>"+form.message+"</p><p>"+form.telefono+"</p></html>", alternative:true}
                ]
        };
        server.send(message, function(err, message) { console.log(err || message); });

        res.sendFile(path.join(__dirname + '/contact.html'));
    }
});

app.listen(8080);

