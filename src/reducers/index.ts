import { combineReducers } from "redux";
import { toDoListReducer } from "./todo/toDoListReducer";
import { getCmcCoinInfoReducer } from "./crypto/cryptoReducer";

export default combineReducers({
  cmcCoinInfo: getCmcCoinInfoReducer,
  toDoList: toDoListReducer
});
