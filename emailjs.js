/**
 * Created by diego on 15/03/17.
 */

var gmail = {
    user:	"pietrandrea2000@gmail.com",
    password: "belg4444",
    host:	"smtp.gmail.com",
    ssl: true
};


var gmail = {
    user:	"pietra",
    password: "PIE794ar",
    host:	"mail.pietrandrea.com.ar",
    ssl: false,
    tls: {ciphers: "SSLv3"}

};


var email 	= require("emailjs");
var server 	= email.server.connect(gmail);

var message	= {
    text:	"i hope this works",
    from:	"pietra@pietrandrea.com.ar",
    to:		"reyesdiego@hotmail.com",
    bcc: "pietra@pietrandrea.com.ar",
    subject:	"testing emailjs",
    attachment:
        [
            {data: "<html>i <i>hope</i> this works!</html>", alternative:true}
        ]
};
server.send(message, function(err, message) { console.log(err || message); });
