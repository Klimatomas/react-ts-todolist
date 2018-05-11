import React from "react";
import { IToDo } from "../interfaces";

interface IListOfToDosProps {
  toDoList: IToDo[];
  toggleToDo: (index: number) => void;
  deleteToDo: (index: number, e: React.MouseEvent<HTMLSpanElement>) => void;
}

interface IStateOfToDos {
  showActive: boolean;
  showCompleted: boolean;
}

const initialTodoListState: IStateOfToDos = {
  showActive: true,
  showCompleted: true
};

class ListOfToDos extends React.Component<IListOfToDosProps, IStateOfToDos> {
  public state = initialTodoListState;

  public render() {
    return (
      this.props.toDoList.length > 0 && (
        <>
          <div>
            {/* todo export as const */}
            <input
              type="checkbox"
              name="Show Completed"
              id="showCompleted"
              checked={this.state.showCompleted}
              onChange={e => this.changeCheckbox(e)}
            />
            <label htmlFor="showCompleted">Show Completed</label>
            <input
              type="checkbox"
              name="Show Active"
              id="showActive"
              checked={this.state.showActive}
              onChange={e => this.changeCheckbox(e)}
            />
            <label htmlFor="showActive">Show Active</label>
          </div>
          <ul className="content__list">
            <li className="content__header">
              <span>Task</span>
              <span>Date inserted</span>
            </li>
            {this.props.toDoList.map((val, index) => (
              // rework to cssGrid instead of flexbox todo
              // divide into headers and table? might be readable
              <li
                key={index}
                className={"content__item ".concat(val.completed.toString())}
                onClick={() => this.props.toggleToDo(index)}
                hidden={
                  (val.completed === true && this.state.showCompleted === false) ||
                  (val.completed === false && this.state.showActive === false)
                }
              >
                {/* should be way nicer */}
                <span>{val.content}</span>
                <span>{val.dateInserted.toLocaleString(navigator.language)}</span>
                <span className="btn placeholder" onClick={e => this.props.deleteToDo(index, e)}>
                  Delete
                </span>
              </li>
            ))}
          </ul>
        </>
      )
    );
  }

  public changeCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.checked
    });
  }
}

export default ListOfToDos;
