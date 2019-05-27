// Package
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// Reducer
import ToDoReducer from "../Reducers/ToDoReducer";
import UserReducer from "../Reducers/UserReducer";

// Create Reducer
const store = combineReducers({
  todos: ToDoReducer,
  userInfo: UserReducer
});

import thunk from "redux-thunk";
const createStoreWithMiddleWare = applyMiddleware(thunk, logger)(createStore);

export default createStoreWithMiddleWare(
  store,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
