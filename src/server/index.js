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
var config        = require('config');

const SESSION_SECRET = process.env.SESSION_SECRET || (process.env.NODE_ENV === 'production' ? null : 'devkey');

if (!SESSION_SECRET)
  throw Error('A SESSION_SECRET environment variable is required when running in production');

app.use(morgan(config.get('morgan.format')));
app.use(compression());
app.use(responseTime());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieSession({ keys: [SESSION_SECRET] }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
  res.send('hello world');
});

module.exports = app;

if (!module.parent) {
  app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening on port " + app.get('port'));
  });
}
