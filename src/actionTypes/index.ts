import {IStoreInterface, ISubmitNewTodoAction, IToggleToDoAction} from "../interfaces"

export type StoreState = IStoreInterface;

export type ActionTypes = 
| ISubmitNewTodoAction
| IToggleToDoAction