var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
