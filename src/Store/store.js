// Package
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";

// Reducer
import ToDoReducer from "../Reducers/ToDoReducer";
import UserReducer from "../Reducers/UserReducer";

// Create Reducer
const store = combineReducers({
  todos: ToDoReducer,
  userInfo: UserReducer
});

const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);

export default createStoreWithMiddleWare(
  store,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
