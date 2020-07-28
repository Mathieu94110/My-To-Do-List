const express = require('express');
const router = express.Router();

const todoCtrl = require('../controllers/todo');

router.post('/', todoCtrl.postTodo);
router.delete('/:id', todoCtrl.deleteTodo);
router.get('/' , todoCtrl.getTodo)

module.exports = router;