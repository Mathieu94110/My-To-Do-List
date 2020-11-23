import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input } from "reactstrap";
class Todolist extends Component {
  render() {
    return (
      <>
        <h1 style={{ fontSize: "5vw" }}>MA TO DO LIST</h1>
        <div style={{ width: "300px", margin: "auto", display: "flex" }}>
          <Input
            type="text"
            onChange={(e) => {
              this.props.handleChange(e.target);
            }}
          />

          <Button
            color="secondary"
            onClick={() => {
              this.props.add(this.props.todolist);
            }}
          >
            Ajouter
          </Button>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (target) => {
      dispatch({ type: "SET_INPUT", value: target.value });
    },
    add: (input) => {
      let obj = {};
      let inputValue = input;
      let id = Math.floor(Math.random() * 1000);
      obj = { inputValue, id };
      dispatch({ type: "ADD_INPUT", value: obj });
    },
  };
};
const mapStateToProps = (state) => {
  return {
    todolist: state.input,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
