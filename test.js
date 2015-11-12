var Todo = require('./models/todo');
//
var todo = {task: 'make create method', done: false};

Todo.create(todo, function(err){
	if(err){
		console.log('ERROR WITH CREATE:', err);
	} else {
		console.log('todo created successfully');
	}

});
