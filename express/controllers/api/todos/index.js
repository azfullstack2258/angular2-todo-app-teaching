var express = require('express');
var router = express.Router();
var config = require('../../../config');

router.get('/all', function (req, res){
  var todos = config.todos;
//console.log("->>>>>>>>>>>>>")
res.status(200).json(todos);
})

router.get('/:todo_id', function (req, res){
  var todo_id = req.params.todo_id;
  var todos = config.todos;
  var todo;

  for(var i in todos) {
    if(todos[i].id == todo_id) {
      todo = todos[i];
      break;
    }
  }

  if(todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({
      message: 'The person is not found!'
    });
  }
});

module.exports =  router;
