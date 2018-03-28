import { ActionTypes } from "../../actionTypes";
import { IToDo, TypeKeys } from "../../interfaces";

export function toDoListReducer(toDoList: IToDo[] = [], action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.SUBMIT_NEW_TODO_ACTION:
      return action.payload;
    case TypeKeys.TOGGLE_TODO_ACTION:
      return action.payload;
    default:
      return toDoList;
  }
}
