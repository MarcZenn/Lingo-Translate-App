var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose')
// var googleTranslate = require('google-translate')(apiKey);


var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);


app.post('/get-word', indexController.something)

var server = app.listen(8152, function() {
	console.log('Express server listening on port ' + server.address().port);
});
