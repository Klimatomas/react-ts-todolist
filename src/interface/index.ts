export interface IToDo{
    dateInserted: string,
    content: string,
    completed: boolean,
}

export interface IStoreInterface{
    ToDoList: IToDo[]
}