var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var ejs = require('ejs');
var nodemon = require('nodemon');
var favicon = require('serve-favicon');
var stylus = require('stylus');
var nodemailer = require('nodemailer');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


var port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


// for views
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static(__dirname + '/public'));
// bring in the public directory -- remember to require('path')
app.use(express.static(path.join(__dirname, 'public')));


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// render the main page
// app.get('/', function(req, res){
//   res.render('index');
// });


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

app.listen(port);

module.exports = app;
