
//============================== requirements ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose')
var googleTranslate = require('google-translate')('AIzaSyB45lmg3rb9SqYMqXoMjKbfI_DQghWvq1Y');

//============================== config ==============================//
        
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//============================== routing ==============================//
        
app.get('/', indexController.index);


app.get('/translate', indexController.translate)
// take form data here and build controller to send request data via AJAX to server. 
// app.post('/get-word', indexController.something)

//============================== server/db ==============================//
        
var server = app.listen(8152, function() {
	console.log('Express server listening on port ' + server.address().port);
});
