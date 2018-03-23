import "babel-polyfill";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import "../src/styles/index.scss";
import reducer from "./reducers/index";

import { Provider } from "react-redux";

import { IStoreInterface } from "./interface";
import Routes from "./routes";

const initialStoreState: IStoreInterface = {
  ToDoList: []
};

export const store = createStore(reducer, initialStoreState);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);

store.subscribe(() => {
  console.log(
    "%c Store state changed: ",
    "color: yellow; font-size:25px",
    store.getState()
  );
});

store.dispatch({ type: "asd" });
