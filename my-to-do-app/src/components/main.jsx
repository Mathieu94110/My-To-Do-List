import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
class Main extends Component {
  render() {
    return (
      <div>
        {this.props.todo.map((el) => (
          <InputGroup
            style={{
              margin: "30px auto",
              width: "60%",
            }}
          >
            <Input defaultValue={el.inputValue} />
            <InputGroupAddon addonType="append" key={el.id}>
              <Button
                color="info"
                onClick={() => {
                  this.props.remove(el.id);
                }}
              >
                X
              </Button>
            </InputGroupAddon>
          </InputGroup>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todo: state.main,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch({ type: "REMOVE_INPUT", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
