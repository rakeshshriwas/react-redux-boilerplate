import React, { Component } from "react";

class AddToDoTask extends Component {
  addItemToState = event => {
    event.preventDefault();
    this.props.addTodoTask({
      text: this.refs.addtodo.value
    });
    this.refs.addtodo.value = "";
  };
  render() {
    return (
      <form onSubmit={this.addItemToState}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Task"
            ref="addtodo"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddToDoTask;
