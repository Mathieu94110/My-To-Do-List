import React, { Component } from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import "./TodoList.css";
import axios from "axios";

class toDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      items: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3100/api/todo").then((res) => {
      this.setState({
        items: res.data.todos,
      });
    });
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  addTodo = () => {
    axios
      .post("http://localhost:3100/api/todo", { name: this.state.userInput })
      .then((res) => {
        this.setState({
          userInput: "",
          items: [...this.state.items, res.data.todo],
        });
      });
  };

  deleteTodo = (_id) => {
    axios.delete("http://localhost:3100/api/todo/" + _id).then((res) => {
      const array = this.state.items;
      var index = array.findIndex((todo) => todo._id == _id);
      array.splice(index, 1);
      this.setState({
        items: array,
      });
    });
  };

  rendertodos() {
    return this.state.items.map((item, index) => {
      return (
        <InputGroup>
          <Input value={item.name} />
          <InputGroupAddon addonType="append" key={index}>
            <Button color="info" onClick={() => this.deleteTodo(item._id)}>
              X
            </Button>
          </InputGroupAddon>
        </InputGroup>
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange.bind(this)}
          />
          <Button color="secondary" onClick={this.addTodo}>
            Ajouter
          </Button>
        </form>

        <div>{this.rendertodos()}</div>
      </div>
    );
  }
}

export default toDoList;
