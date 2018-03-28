export enum TypeKeys{
    SUBMIT_NEW_TODO_ACTION = "SUBMIT_NEW_TODO_ACTION",
    TOGGLE_TODO_ACTION = "TOGGLE_TODO_ACTION",
}

export interface IToDo{
    dateInserted: string,
    content: string,
    completed: boolean,
}

export interface IStoreInterface{
    toDoList: IToDo[]
}

export interface ISubmitNewTodoAction {
    type: TypeKeys.SUBMIT_NEW_TODO_ACTION;
    payload: IToDo[];
}

export interface IToggleToDoAction{
    type: TypeKeys.TOGGLE_TODO_ACTION;
    payload: IToDo[];
}
