import { ActionTypes } from "../../actionTypes";
import { IToDo, TypeKeys } from "../../interfaces";

export function toDoListReducer(toDoList: IToDo[] = [], action: ActionTypes) {
  switch (action.type) {
    case TypeKeys.SUBMIT_NEW_TODO_ACTION:
      toDoList.push({
        completed: false,
        content: action.payload,
        dateInserted: "15.15.2018"
      });
      return toDoList
    default:
      return toDoList;
  }
}
