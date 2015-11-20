var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');
var compression   = require('compression');
var cookieParser  = require('cookie-parser');
var cookieSession = require('cookie-session')
var helmet        = require('helmet');
var morgan        = require('morgan');
var responseTime  = require('response-time');
var passport      = require('passport');

const SESSION_SECRET = process.env.SESSION_SECRET || (process.env.NODE_ENV !== 'production' ? null : 'devkey');

app.use(morgan('dev'));
app.use(compression());
app.use(responseTime());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieSession({ keys: [SESSION_SECRET] }));
app.use(passport.initialize());
app.use(passport.session());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || 3000);
