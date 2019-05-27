import React, { Component } from "react";
import { connect } from "react-redux";

// Component
import AddToDoTask from "../Components/AddToDoTask";
import TodoItems from "../Components/TodoItems";

// Action Creator
import {
  addTodoTask,
  deleteTodoTask,
  updateTodoTask
} from "../Actions/ToDoAction";

class App extends Component {
  render() {
    const { todos, addTodoTask, deleteTodoTask, updateTodoTask } = this.props;
    return (
      <section>
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <h5>Add Todo Task</h5>
            <AddToDoTask addTodoTask={addTodoTask} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <h5>ToDo Task List</h5>
            <ul className="list-group">
              {todos.map((todos, index) => {
                return (
                  <TodoItems
                    deleteTodoTask={deleteTodoTask}
                    updateTodoTask={updateTodoTask}
                    todos={todos}
                    key={index}
                    index={index}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// const mapDispatchToProps = dispatch => {
//   return {};
// };
export default connect(
  mapStateToProps,
  { addTodoTask, deleteTodoTask, updateTodoTask }
)(App);
