import { combineReducers } from "redux";
import { toDoListReducer } from "./toDoList/toDoListReducer";

export default combineReducers(
    {
        toDoList: toDoListReducer
    }
)