import { ActionTypes } from "../actionTypes";
import { TypeKeys } from "../interfaces";
import { IToDo } from "../interfaces/toDoInterface";

export function submitNewToDoAction(newToDoArray: IToDo[]): ActionTypes { 
    return{
        payload: newToDoArray,
        type: TypeKeys.SUBMIT_NEW_TODO_ACTION,
    }
}

export function toggleToDoAction(newToDoArray: IToDo[]): ActionTypes { 
    return{
        payload: newToDoArray,
        type: TypeKeys.TOGGLE_TODO_ACTION,
    }
}
export function deleteToDoAction(newToDoArray: IToDo[]): ActionTypes { 
    return{
        payload: newToDoArray,
        type: TypeKeys.TOGGLE_TODO_ACTION,
    }
}