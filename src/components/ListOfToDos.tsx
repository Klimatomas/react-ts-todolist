import React = require("react");
import { IToDo } from "../interfaces";

interface IListOfToDosProps {
  toDoList: IToDo[];
  toggleToDo: (index: number) => void;
  deleteToDo: (index: number) => void;
}

class ListOfToDos extends React.Component<IListOfToDosProps, {}> {
  public render() {
    return (
      <>
        <h4>Your ToDos. Click on one to mark it complete!</h4>
        <ul className="content__list">
          {this.props.toDoList.map((val, index) => (
            <React.Fragment key={index}>
              <li className={"content__item ".concat(val.completed.toString())}>
                {val.content}
                <div className="content__options">
                  <span
                    className="content__item--complete"
                    onClick={() => this.props.toggleToDo(index)}
                  >
                    {val.completed ? "mark as active" : "mark as complete"}
                  </span>

                  <span
                    className="content__item--delete"
                    onClick={() => this.props.deleteToDo(index)}
                  >
                    delete
                  </span>
                </div>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </>
    );
  }
}

export default ListOfToDos;
