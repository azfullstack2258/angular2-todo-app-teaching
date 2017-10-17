var express = require('express');
var router = express.Router();

var config = require('../../../config');
var Todo = require('../../../model/todo');

router.post('/', function (req, res){
  var newTodo = Todo(req.body);
  console.log(req.body);

  newTodo.save( function (err){
    if (err) {
      res.status(500).json({
        message: req.body
      });
    }
    else {
      res.status(202).json({
        message: "succeed"
      })
    }
  })
})
router.get('/', function (req, res){
  Todo.find(function (err, todos) {
    if (err) {
      res.status(500).json({
        message: err.message
      })
    } else if (todos){
      res.status(200).json(todos);
    } else {
      res.status(404).json({
        message: 'Not Found'
      })
    }
  })
})

router.get('/:todo_id', function (req, res){
  var todo_id = req.params.todo_id;
  var todos = config.todos;
  var todo;

  // for(var i in todos) {
  //   if(todos[i].id == todo_id) {
  //     todo = todos[i];
  //     break;
  //   }
  // }
  Todo.findOne({id: todo_id}, function (err, todo) {
    if (err) {
      res.status(500).json({
        message: err.message
      })
    } else if (todo){
      res.status(200).json(todo);
    } else {
      res.status(404).json({
        message: 'Not Found'
      })
    }
  })

  // if(todo) {
  //   res.status(200).json(todo);
  // } else {
  //   res.status(404).json({
  //     message: 'The person is not found!'
  //   });
  // }
});

module.exports =  router;
