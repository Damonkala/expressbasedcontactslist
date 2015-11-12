// 'use strict';
//
// var express = require('express');
// var router = express.Router();
// // Model
// var Todo = require('../models/todo');
//
// router.get('/', function(req, res){
// 	Todo.find(function(err, todos) {
// 		if(err){
// 			return res.status(400).send(err);
// 		}
// 		res.send(JSON.stringify(todos));
// 	});
// });
//
// router.post('/', function(req, res){
// 	var todo = req.body.todo;
// 	Todo.create(todo, function(err){
// 		if(err){
// 			res.statis(400).send(err)
// 		} else {
// 			res.send();
// 		}
// 	});
// });
//
// module.exports = router;
