import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import "../src/styles/index.scss";
import combineReducers from "./reducers/index";

import { Provider } from "react-redux";

import { deleteToDoAction } from "./actions/toDoListActions";
import { StoreState } from "./actionTypes";
import Routes from "./routes";

const initialStoreState: StoreState = {
  toDoList: []
};

export const store = createStore(combineReducers, initialStoreState);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);

store.subscribe(() => {
  console.log("%c Store state changed: ", "color: yellow;", store.getState());
});
