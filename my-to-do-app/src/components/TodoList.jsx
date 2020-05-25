import React, { Component } from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";

class toDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            items: [],
        };
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value,
        });
    }
    addTodo(e) {
        this.setState({
            items: [...this.state.items, this.state.userInput],
        });
        console.log(this.state.items.value);
        this.setState({
            userInput: "",
        });
    }
    rendertodos() {
        return this.state.items.map((item) => {
            return (
                <InputGroup style={{ margin: "auto", padding: "5px", width: "50%" }}>
                    <Input value={item} />
                    <InputGroupAddon addonType="append" key={item}>
                        <Button color="info" onClick={this.deleteTodo.bind(this)}>
                            X
            </Button>
                    </InputGroupAddon>
                </InputGroup>
            );
        });
    }
    deleteTodo(e) {
        const array = this.state.items;
        var index = array.indexOf(e.target.value);
        array.splice(index, 1);
        this.setState({
            items: array,
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
                    <Button color="secondary" onClick={this.addTodo.bind(this)}>
                        Ajouter
          </Button>
                </form>

                <div>{this.rendertodos()}</div>
            </div>
        );
    }
}

export default toDoList;
