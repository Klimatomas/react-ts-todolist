import { ActionTypes } from "../actionTypes";
import { IToDo, TypeKeys } from "../interfaces";

export function toggleToDoAction(index: number): ActionTypes { 
    return{
        payload: index,
        type: TypeKeys.TOGGLE_TODO_ACTION,
    }
}
export function submitNewToDoAction(todo: IToDo): ActionTypes { 
    return{
        payload: todo,
        type: TypeKeys.SUBMIT_NEW_TODO_ACTION,
    }
}

export function deleteToDoAction(index: number): ActionTypes { 
    return{
        payload: index,
        type: TypeKeys.DELETE_TODO_ACTION,
    }
}
