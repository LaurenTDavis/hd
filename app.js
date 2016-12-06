// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
// Email
var nodemailer= require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var validator = require('email-validator');
var fs = require('fs');


// Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hamlindavis')

// Create Express App Object \\
var app = express();

app.use(express.static(__dirname + '/public'));

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.sendFile('/html/home.html', {root : './public'})
});



app.get('/contact-form', function(req, res){
    res.render('home', { title: 'Hamlin Davis Mailing List', page: 'home' })
});

app.post('/contact-form', function (req, res) {
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  var transporter = nodemailer.createTransport('smtps://parkerhardison02@gmail.com:AgeoftheGeek@smtp.gmail.com');
  //Mail options
  var mailOptions = {
      from: req.body.email + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'parkerhardison02@gmail.com',
      subject: 'Hamlin Davis Mailing List',
      text: 'Email: ' + req.body.email,

  };
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      else {
      console.log('Message sent: ' + info.response);
      }
  });
});

app.get('/submission', function(req, res){
    res.render('home', { title: 'Hamlin Davis Mailing List', page: 'home' })
});

app.post('/submission', function (req, res) {
  //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  var transporter = nodemailer.createTransport('smtps://parkerhardison02@gmail.com:AgeoftheGeek@smtp.gmail.com');
  //Mail options
  var mailOptions = {
      from: req.body.email + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
      to: 'parkerhardison02@gmail.com',
      subject: 'Hamlin Davis Submissions',
      text: 'Question 1: ' + req.body.question1 + '\n Question 2: ' + req.body.question2 + '\n Question 3: ' + req.body.question3,
      attachments: [{
        filename: "image1.png",
        path: req.body.image1
      },
      {
        filename: "image2.png",
        path: req.body.image2
      },
      {
        filename: "image3.png",
        path: req.body.image3
      }]

  };
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      else {
      console.log('Message sent: ' + info.response);
      }
  });
});


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;