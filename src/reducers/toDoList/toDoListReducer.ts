import { ActionTypes } from "../../actionTypes";
import { IToDo, TypeKeys } from "../../interfaces";
import { constants } from "perf_hooks";

export function toDoListReducer(toDoList: IToDo[] = [], action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.SUBMIT_NEW_TODO_ACTION:
      return [...toDoList, action.payload];
    case TypeKeys.TOGGLE_TODO_ACTION:
      const newState = toDoList.slice(0);
      newState[action.payload].completed = !newState[action.payload].completed;
      return newState;
    case TypeKeys.DELETE_TODO_ACTION:
      const deletedToDoState = toDoList.slice(0);
      deletedToDoState.splice(action.payload, 1);
      return deletedToDoState;
    default:
      return toDoList;
  }
}
