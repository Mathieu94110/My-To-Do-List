import React from "react";
import TodoList from "./components/todoList/TodoList";
import "./App.css";
import LikeDislike from "./components/likeDislike";
function App() {
  return (
    <div className="App">
      <h1>Ma to-to-list</h1>
      <TodoList />
      <LikeDislike/>
    </div>
  );
}

export default App;
