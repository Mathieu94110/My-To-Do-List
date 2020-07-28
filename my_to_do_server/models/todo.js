const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name: { type: String, require: true },
  date: { type: Date, dafault: new Date() },
});

module.exports = mongoose.model('Todo', todoSchema);