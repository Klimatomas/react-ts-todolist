import React from "react";
import { Dispatch, connect } from "react-redux";
import {
  deleteToDoAction,
  submitNewToDoAction,
  toggleToDoAction
} from "../actions/toDoListActions";
import { IToDo } from "../interfaces";
import { ActionTypes, StoreState } from "../types";
import { mergeProps } from "../util/componentHelper";
import ListOfToDos from "./ListOfToDos";


interface IToDoListProps {
  toDoList: IToDo[];
  submitNewTodo: (toDoList: IToDo) => void;
  toggleToDo: (index: number) => void;
  deleteToDo: (index: number) => void;
}

interface IToDoListState {
  todoText: string;
}

const initialTodoListState: IToDoListState = {
  todoText: ""
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
    const todosEmpty = this.props.toDoList.length === 0;
    const formEmpty = this.state.todoText.trim().length === 0;
    const emptyText = "Nothing in the list! Click the button below to get started";
    const nonEmptyText = "Your tasks. Click on one to mark it complete!";

    return (
      <div className="content">
        <h4>{todosEmpty ? emptyText : nonEmptyText}</h4>
        <ListOfToDos
          toDoList={this.props.toDoList}
          toggleToDo={this.toggleToDo}
          deleteToDo={this.deleteToDo}
        />
        <form onSubmit={e => this.submitNewTodo(e)} className="content__form">
          <input
            autoFocus
            type="text"
            onChange={e => this.handleFormInputChange(e)}
            value={this.state.todoText}
            maxLength={100}
          />
          <button className="btn" type="submit" disabled={formEmpty}>
            Add to plan
          </button>
        </form>
      </div>
    );
  }

  public handleFormInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      // rework ... interface? todo
      todoText: e.target.value
    });
  }

  public toggleToDo(index: number) {
    this.props.toggleToDo(index);
  }

  public deleteToDo(index: number, e: React.MouseEvent<HTMLSpanElement>) {
    e.stopPropagation();
    this.props.deleteToDo(index);
  }

  public submitNewTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newToDo: IToDo = {
      completed: false,
      content: this.state.todoText,
      dateInserted: new Date()
    };
    this.props.submitNewTodo(newToDo);
    this.setState(initialTodoListState);
  }
}

const mapStateToProps = (store: StoreState) => {
  return { toDoList: store.toDoList };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  return {
    deleteToDo: (index: number) => dispatch(deleteToDoAction(index)),
    submitNewTodo: (todoList: IToDo) => dispatch(submitNewToDoAction(todoList)),
    toggleToDo: (index: number) => dispatch(toggleToDoAction(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ToDoList);
