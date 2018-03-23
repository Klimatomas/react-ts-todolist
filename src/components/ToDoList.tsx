import React = require("react");
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IToDo, IStoreInterface } from "../interface";

interface IToDoListProps {
  ToDoList: IToDo[];
}

interface IToDoListState {
  editing: boolean;
}

const initialTodoListState: IToDoListState = {
  editing: false
};

class ToDoList extends React.Component<IToDoListProps, IToDoListState> {
  public state = initialTodoListState;
  public render() {
    return (
      <div className="text-center col-12">
        <h4>TO DO LIST</h4>
        {this.props.ToDoList.length > 0 ? (
          // todo single component
          <div className="todolist">
            <h3>todos here</h3>
          </div>
        ) : (
          // todo single component
          <EmptyTodo />
        )}
      </div>
    );
  }

  public createToDo() {
    console.log("button clicked");
  }
}

const EmptyTodo = () => (
  <div id="emptyToDo">
    <h4 id="emptyToDoText">
      Nothing in the list! Click the button below to get started
    </h4>
    {/* todo add glyphicon / styling (font awesome?) */}
    <button
      className="btn rounded-circle btn-primary"
      onClick={() => this.createToDo()}
    >
      +
    </button>
  </div>
);

const mapStateToProps = (store: IStoreInterface) => {
  return {
    ToDoList: store.ToDoList
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
