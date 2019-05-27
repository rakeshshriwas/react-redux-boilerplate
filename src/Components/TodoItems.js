import React, { Component } from "react";

class TodoItems extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  // Toggleing Edit Todo Task

  toggleEditingTask = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  // Delete Todo Task
  deleteTodoTaskFromState = () => {
    this.props.deleteTodoTask(this.props.index);
  };

  // Onclick Edit Task Button
  editToDoTask = () => {
    this.toggleEditingTask();
  };

  // Update Todo Task
  updateEditToDoTask = event => {
    event.preventDefault();
    this.props.updateTodoTask({
      text: this.refs.updatedTodoValue.value,
      index: this.props.index
    });
    this.refs.updatedTodoValue.value = "";
    this.toggleEditingTask();
  };

  // Render Item Row
  renderItem = () => {
    const { todos } = this.props;
    return (
      <React.Fragment>
        <div className="">
          <span>{todos.text}</span>
        </div>
        <div>
          <button className="btn btn-sm btn-info mr-2">V D</button>
          <button
            className="btn btn-sm btn-primary mr-2"
            onClick={this.editToDoTask}
          >
            E
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={this.deleteTodoTaskFromState}
          >
            D
          </button>
        </div>
      </React.Fragment>
    );
  };

  // Render Edit Form
  renderEditForm = () => {
    const { todos } = this.props;
    return (
      <div className="col-lg-12 p-0">
        <form onSubmit={this.updateEditToDoTask}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Task"
              ref="updatedTodoValue"
              defaultValue={todos.text}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                Update Task
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={this.toggleEditingTask}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };

  render() {
    return (
      <li className="list-group-item d-flex flex-row justify-content-between align-items-center py-2 px-3">
        {this.state.isEditing ? this.renderEditForm() : this.renderItem()}
      </li>
    );
  }
}

export default TodoItems;
