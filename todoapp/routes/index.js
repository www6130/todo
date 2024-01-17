const express = require('express');
const router = express.Router();

let todos = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ToDo App',todos: todos});
  
});

router.post('/', function(req, res, next) {
  // const todo = req.body.add;
  // todos.push(todo);
  console.log(req.body)
  res.redirect('/');
});

module.exports = router;
