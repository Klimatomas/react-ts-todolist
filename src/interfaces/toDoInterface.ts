import { TypeKeys } from ".";

export interface IToDo{
    dateInserted: string,
    content: string,
    completed: boolean,
}

export interface ISubmitNewTodoAction {
    type: TypeKeys.SUBMIT_NEW_TODO_ACTION;
    payload: IToDo[];
}

export interface IToggleToDoAction{
    type: TypeKeys.TOGGLE_TODO_ACTION;
    payload: IToDo[];
}

export interface IDeleteTodoAction{
    type: TypeKeys.DELETE_TODO_ACTION;
    payload: IToDo[];
}
