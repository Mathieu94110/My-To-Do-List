const Todo = require("../models/todo");

exports.postTodo = (req, res, next) => {
  const newTodo = new Todo({
    ...req.body,
  });
  newTodo
    .save()
    .then(() =>
      res.status(200).json({ message: "Todo ajoutée !", todo: newTodo })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteTodo = (req, res, next) => {
  Todo.deleteOne({
    _id: req.params.id,
  })
    .then(() => res.status(200).json({ message: "Todo supprimée !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getTodo = (req, res, next) => {
  Todo.find()
    .then((todos) => res.status(200).json({ todos }))
    .catch((error) => res.status(400).json({ error }));

}
