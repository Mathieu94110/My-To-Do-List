import React, { Component } from "react";
import Input from "./components/input.js";
import Main from "./components/main";
import "./App.css";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Input />

        <Main />
      </div>
    );
  }
}

export default App;
