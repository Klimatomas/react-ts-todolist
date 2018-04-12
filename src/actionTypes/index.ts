import { IStoreInterface} from "../interfaces"
import { IGetCMCDataAction } from "../interfaces/cmcInterface";
import { IDeleteTodoAction, ISubmitNewTodoAction, IToggleToDoAction } from "../interfaces/toDoInterface";

export type StoreState = IStoreInterface;

export type ActionTypes = 
| IDeleteTodoAction
| ISubmitNewTodoAction
| IToggleToDoAction
| IGetCMCDataAction