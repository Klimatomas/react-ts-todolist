import {IStoreInterface, ISubmitNewTodoAction, IToggleToDoAction, IDeleteTodoAction} from "../interfaces"

export type StoreState = IStoreInterface;

export type ActionTypes = 
| IDeleteTodoAction
| ISubmitNewTodoAction
| IToggleToDoAction