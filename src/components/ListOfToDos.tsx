import React = require("react");
import { IToDo } from "../interfaces";

interface IListOfToDosProps {
  toDoList: IToDo[];
  toggleToDo: (index: number) => void;
}

class ListOfToDos extends React.Component<IListOfToDosProps, {}> {
  public render() {
    return (
      <>
        <h4>Your ToDos. Click on one to mark it complete!</h4>
        <ul className="content__list">
          {this.props.toDoList.map((val, index) => (
            <li
              key={index}
              className={"content__item ".concat(val.completed.toString())}
              onClick={() => this.props.toggleToDo(index)}
            >
              {val.content}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ListOfToDos;
