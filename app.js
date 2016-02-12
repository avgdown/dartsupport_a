var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/sub1', function(req, res) {
  res.send('Hello World Sub1');
});

app.listen(3000, function() {
  console.log('Server On!');
});
