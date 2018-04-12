import { ICmcCoinInfo } from "./cmcInterface";
import { IToDo } from "./toDoInterface";

export enum TypeKeys{
    SUBMIT_NEW_TODO_ACTION = "SUBMIT_NEW_TODO_ACTION",
    TOGGLE_TODO_ACTION = "TOGGLE_TODO_ACTION",
    DELETE_TODO_ACTION = "DELETE_TODO_ACTION",
    GET_CMC_DATA_ACTION = "GET_CMC_DATA_ACTION",
}


export interface IStoreInterface{
    toDoList: IToDo[],
    coinInfo?: ICmcCoinInfo[]
}


