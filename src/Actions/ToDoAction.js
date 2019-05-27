// Add Todo Task Dispatch Action To Reducer
const addTodoTask = ({ text }) => {
  return {
    type: "ADD_TODO",
    payload: {
      text: text,
      completed: false
    }
  };
};

// This Function not write like this here
// const addTodoTask = ({ text }) => {
//   dispatch({
//     type: "ADD_TODO",
//     payload: {
//       text: text,
//       completed: false
//     }
//   });
// };

// Delete Todo Task Dispatch Action To Reducer
const deleteTodoTask = index => {
  return {
    type: "DELETE_TODO",
    payload: index
  };
};

// Update Todo Task Dispatch Action To Reducer
const updateTodoTask = ({ text, index }) => {
  return {
    type: "EDIT_TODO",
    payload: {
      text: text,
      index: index
    }
  };
};
// Export as function
export { addTodoTask, deleteTodoTask, updateTodoTask };
