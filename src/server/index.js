var express       = require('express');
var app           = express();
var cookieParser  = require('cookie-parser');
var cookieSession = require('cookie-session')
var bodyParser    = require('body-parser');
var morgan        = require('morgan');
var responseTime  = require('response-time');
var compression   = require('compression');

app.use(morgan('dev'));
app.use(compression());
app.use(responseTime());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieSession());
app.use(passport.initialize());
app.use(passport.session());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || 3000);
