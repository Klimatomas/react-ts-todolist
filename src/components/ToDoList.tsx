import * as React from "react";
import { connect, Dispatch } from "react-redux";
import {
  deleteToDoAction,
  submitNewToDoAction,
  toggleToDoAction
} from "../actions/toDoListActions";
import { ActionTypes, StoreState } from "../actionTypes";
import { IToDo } from "../interfaces";
import { mergeProps } from "../util/componentHelper";
import EmptyToDoList from "./EmptyToDoList";
import ListOfToDos from "./ListOfToDos";

interface IToDoListProps {
  toDoList: IToDo[];
  submitNewTodo: (toDoList: IToDo[]) => void;
  toggleToDo: (toDoList: IToDo[]) => void;
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
    this.toggleToDo = this.toggleToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
  }

  public render() {
    return (
      <>
        <div className="content">
          {this.props.toDoList.length > 0 ? (
            <ListOfToDos
              toDoList={this.props.toDoList}
              toggleToDo={this.toggleToDo}
              deleteToDo={this.deleteToDo}
            />
          ) : (
            <EmptyToDoList />
          )}
          {/* todo validation */}
          <form onSubmit={e => this.submitNewTodo(e)} className="content__form">
            <input
              autoFocus
              type="text"
              onChange={e => this.handleFormInputChange(e)}
              value={this.state.formState.todoText}
            />
            <button className="btn" type="submit">
              Add to plan
            </button>
          </form>
        </div>
      </>
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

  public toggleToDo(index: number) {
    const currentToDoList = this.props.toDoList.slice();
    currentToDoList[index].completed = !currentToDoList[index].completed;
    this.props.toggleToDo(currentToDoList);
  }

  public deleteToDo(index: number) {
    const currentToDoList = this.props.toDoList.slice();
    currentToDoList.splice(index, 1);
    this.props.deleteToDo(currentToDoList);
  }

  public submitNewTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let text = this.state.formState.todoText;
    if (text.length > 0) {
      const currentToDoList = this.props.toDoList.slice();
      //  todo rework
      text = text.substring(0, 1).toUpperCase() + text.substring(1);
      currentToDoList.push({
        completed: false,
        content: text,
        dateInserted: "today"
      });
      this.props.submitNewTodo(currentToDoList);
      this.setState({
        ...this.state,
        formState: initialTodoListState.formState
      });
    }
  }
}

const mapStateToProps = (store: StoreState) => {
  return { toDoList: store.toDoList };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  return {
    deleteToDo: (todoList: IToDo[]) => dispatch(deleteToDoAction(todoList)),
    submitNewTodo: (todoList: IToDo[]) =>
      dispatch(submitNewToDoAction(todoList)),
    toggleToDo: (todoList: IToDo[]) => dispatch(toggleToDoAction(todoList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  ToDoList
);
