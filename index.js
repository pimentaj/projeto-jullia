var express = require("express");
var app = express()
var path = require('path');
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});
app.use(express.static('public'));
app.set('view engine', 'html');
app.listen(3000)
