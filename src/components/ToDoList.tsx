import React = require("react");
import { connect, Dispatch } from "react-redux";
import {
  deleteToDoAction,
  submitNewToDoAction
} from "../actions/toDoListActions";
import { ActionTypes, StoreState } from "../actionTypes";
import { IToDo } from "../interfaces";
import { mergeProps } from "../util/componentHelper";
import EmptyToDoList from "./EmptyToDoList";

interface IToDoListProps {
  toDoList: IToDo[];
  submitNewTodo: (toDoList: IToDo[]) => void;
  deleteToDo: (toDoList: IToDo[]) => void;
}

interface IToDoListState {
  formState: {
    todoText: string;
  };
}

const initialTodoListState: IToDoListState = {
  formState: {
    todoText: ""
  }
};

class ToDoList extends React.Component<IToDoListProps, IToDoListState> {
  public state = initialTodoListState;

  constructor(props: IToDoListProps, state: IToDoListState) {
    super(props, state);
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
  }

  public render() {
    return (
      <div className="content">
        {this.props.toDoList.length > 0 ? (
          <>
            <h4>TASKS:</h4>
            <ul className="list">
              {this.props.toDoList.map((val, index) => (
                <li key={index} className="">
                  {val.content}
                  <span
                    className="btn btn--glyphicon"
                    onClick={() => this.deleteTodo(index)}
                  >
                    x
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <EmptyToDoList />
        )}
        {/* todo validation */}
        <form onSubmit={e => this.submitNewTodo(e)}>
          <input
            autoFocus
            type="text"
            onChange={e => this.handleFormInputChange(e)}
            value={this.state.formState.todoText}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }

  public handleFormInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      formState: {
        todoText: e.target.value
      }
    });
  }

  public deleteTodo(index: number) {
    const currentToDoList = this.props.toDoList.slice();
    currentToDoList.splice(index, 1);
    this.props.deleteToDo(currentToDoList);
    console.log("deleting", index);
  }

  public submitNewTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentToDoList = this.props.toDoList.slice();
    //  todo rework
    currentToDoList.push({
      completed: false,
      content: this.state.formState.todoText,
      dateInserted: "today"
    });
    this.props.submitNewTodo(currentToDoList);
  }
}

const mapStateToProps = (store: StoreState) => {
  return { toDoList: store.toDoList };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  return {
    deleteToDo: (todoList: IToDo[]) => dispatch(deleteToDoAction(todoList)),
    submitNewTodo: (todoList: IToDo[]) =>
      dispatch(submitNewToDoAction(todoList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  ToDoList
);
