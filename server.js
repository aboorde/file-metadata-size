var express = require("express");
var path = require("path");
var pug = require("pug");

var app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.get('/', function(req, res) {
    res.render('index');
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 3000!')
})