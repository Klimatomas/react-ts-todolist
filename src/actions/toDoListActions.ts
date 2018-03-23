import { ActionTypes } from "../actionTypes";
import { TypeKeys } from "../interfaces";

export function submitNewToDoAction(todoText: string): ActionTypes { 
    return{
        payload: todoText,
        type: TypeKeys.SUBMIT_NEW_TODO_ACTION,
    }
}