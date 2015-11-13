var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var morgan     = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || 3000);
