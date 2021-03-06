'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// var sweetAlert = require('sweetAlert');
var app = express();

app.set('view engine', 'jade');

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));


// ROUTES
app.use('/', require('./routes/index'));
// app.use('/todos', require('./routes/todos'));
app.use('/add', require('./routes/add'));


// 404 HANDLER
app.use(function(req,res){
	res.status(404).render('404');
})

app.post('/', function(req, res){
	console.log('posted');
});
// app.get('/add', function(req,res){
// 	// res.render('add');
// 	console.log("adder")
// })

app.listen(PORT, function(){
	console.log('Listening on port ', PORT);
});
