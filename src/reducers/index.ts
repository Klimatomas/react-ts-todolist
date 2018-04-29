import { combineReducers } from "redux";
import { toDoListReducer } from "./toDoList/toDoListReducer";
import { getCmcCoinInfoReducer } from "./crypto/cryptoReducer";

export default combineReducers(
    {
        toDoList: toDoListReducer,
        cmcCoinInfo: getCmcCoinInfoReducer
    }
)