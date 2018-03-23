import React = require("react");
import { SFC } from "react";

interface IEmptyToDoListProps {
  createToDo: () => void;
}

const EmptyToDoList: SFC<IEmptyToDoListProps> = (
  props: IEmptyToDoListProps
) => (
  <div id="emptyToDo">
    <h4 id="emptyToDoText">
      Nothing in the list! Click the button below to get started
    </h4>
    {/* todo add glyphicon / styling (font awesome?) */}
  </div>
);

export default EmptyToDoList;
