import {IDeleteToDoAction, IStoreInterface, ISubmitNewTodoAction} from "../interfaces"

export type StoreState = IStoreInterface;

export type ActionTypes = 
| ISubmitNewTodoAction
| IDeleteToDoAction