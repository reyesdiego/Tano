/**
 * Created by diego on 15/03/17.
 */
var email 	= require("emailjs");
var server 	= email.server.connect({
    user:	"reyesdiego@hotmail.com",
    password:"",
    host:	"smtp-mail.outlook.com",
    tls: {ciphers: "SSLv3"}
});

var message	= {
    text:	"i hope this works",
    from:	"you <pietran@hotmail.com>",
    to:		"reyesdiego@hotmail.com",
    subject:	"testing emailjs",
    attachment:
        [
            {data:"<html>i <i>hope</i> this works!</html>", alternative:true}
        ]
};
server.send(message, function(err, message) { console.log(err || message); });
