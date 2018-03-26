import { ActionTypes } from "../actionTypes";
import { IToDo, TypeKeys } from "../interfaces";

export function submitNewToDoAction(newToDoArray: IToDo[]): ActionTypes { 
    return{
        payload: newToDoArray,
        type: TypeKeys.SUBMIT_NEW_TODO_ACTION,
    }
}

export function deleteToDoAction(newToDoArray: IToDo[]): ActionTypes { 
    return{
        payload: newToDoArray,
        type: TypeKeys.DELETE_TODO_ACTION,
    }
}