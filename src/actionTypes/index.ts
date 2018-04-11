import {IDeleteTodoAction, IStoreInterface, ISubmitNewTodoAction, IToggleToDoAction} from "../interfaces"

export type StoreState = IStoreInterface;

export type ActionTypes = 
| IDeleteTodoAction
| ISubmitNewTodoAction
| IToggleToDoAction