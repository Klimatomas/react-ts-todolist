import React = require("react");
import { SFC } from "react";

const EmptyToDoList: SFC<{}> = () => (
  <div id="emptyToDo">
    <h4 id="emptyToDoText">
      Nothing in the list! Click the button below to get started
      <div>asd</div>
    </h4>
  </div>
);

export default EmptyToDoList;
