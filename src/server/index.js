var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var morgan       = require('morgan');
var responseTime = require('response-time');
var compression  = require('compression');

app.use(morgan('dev'));
app.use(compression());
app.use(responseTime());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || 3000);
