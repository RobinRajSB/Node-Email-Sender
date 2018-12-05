'use strict';

const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "your email", // generated ethereal user
            pass: "password" // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Hello World" <your mail>', // sender address
        to: 'receivers mail, recievers mail', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<h4>Robin Raj SB testing auto mail</h4><b>LOL</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
});