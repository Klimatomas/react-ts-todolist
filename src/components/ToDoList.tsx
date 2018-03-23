import React = require("react");
import { connect, Dispatch } from "react-redux";
import { submitNewToDoAction } from "../actions/toDoListActions";
import { ActionTypes, StoreState } from "../actionTypes";
import { IToDo } from "../interfaces";
import { mergeProps } from "../util/componentHelper";
import EmptyToDoList from "./EmptyToDoList";

interface IToDoListProps {
  toDoList: IToDo[];
  submitNewTodo: (toDoText: string) => void;
}

interface IToDoListState {
  editing: boolean;
  formState: {
    todoText: string;
  };
}

const initialTodoListState: IToDoListState = {
  editing: false,
  formState: {
    todoText: ""
  }
};

class ToDoList extends React.Component<IToDoListProps, IToDoListState> {
  public state = initialTodoListState;

  constructor(props: IToDoListProps, state: IToDoListState) {
    super(props, state);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
  }

  public render() {
    return (
      <div className="">
        <h4>TO DO LIST</h4>
        {this.props.toDoList.length > 0 ? (
          <div className="todolist">
            {this.props.toDoList.map((val, index) => (
              <div key={index}>
                {val.content}
                <span id="index" onClick={() => this.deleteTodo(index)}>
                  [x]
                </span>
              </div>
            ))}
          </div>
        ) : (
          <EmptyToDoList createToDo={this.toggleEditing} />
        )}
        {!this.state.editing && (
          <button className="" onClick={this.toggleEditing}>
            +
          </button>
        )}

        {this.state.editing && (
          <div>
            <form onSubmit={e => this.submitNewTodo(e)}>
              <input
                autoFocus
                type="text"
                onChange={e => this.handleFormInputChange(e)}
                value={this.state.formState.todoText}
              />
              <button onClick={this.toggleEditing}>cancel</button>
              <button type="submit">submit</button>
            </form>
          </div>
        )}
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
    console.log("deleting", index);
  }

  public submitNewTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.toggleEditing();
    this.props.submitNewTodo(this.state.formState.todoText);
  }

  public toggleEditing() {
    this.setState({
      ...this.state,
      editing: !this.state.editing,
      formState: { todoText: "" }
    });
  }
}

const mapStateToProps = (store: StoreState) => {
  return { toDoList: store.toDoList };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  return {
    submitNewTodo: (todoText: string) => dispatch(submitNewToDoAction(todoText))
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  ToDoList
);
