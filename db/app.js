var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');



//routes
var loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var altaUsuarioRouter = require('./routes/alta_Usuario');

/*var publicacionRouter = require('./routes/publicacion');*/

var app = express();

//DB

var mongoose = require('mongoose');
var port = 3700;

//pasword del admin UufWXMNDSVwzmVSg

mongoose.connect("mongodb://admin:UufWXMNDSVwzmVSg@bd2-shard-00-00-az5yp.mongodb.net:27017,bd2-shard-00-01-az5yp.mongodb.net:27017,bd2-shard-00-02-az5yp.mongodb.net:27017/test?ssl=true&replicaSet=BD2-shard-0&authSource=admin&retryWrites=true",{useNewUrlParser:true});

//DB

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/login', loginRouter);
app.use('/index', indexRouter);
app.use('/signup', altaUsuarioRouter);
/*app.use('/publicacion', publicacionRouter);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
