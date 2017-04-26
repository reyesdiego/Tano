/**
 * Created by diego on 15/03/17.
 */

var gmail = {
    user:	"pietrandrea2000@gmail.com",
    password: "belg4444",
    host:	"smtp.gmail.com",
    ssl: true
};

var email 	= require("emailjs");
var server 	= email.server.connect(gmail);

var message	= {
    text:	"i hope this works",
    from:	"pietrandrea2000@gmail.com",
    to:		"reyesdiego@hotmail.com",
    subject:	"testing emailjs",
    attachment:
        [
            {data: "<html>i <i>hope</i> this works!</html>", alternative:true}
        ]
};
server.send(message, function(err, message) { console.log(err || message); });
