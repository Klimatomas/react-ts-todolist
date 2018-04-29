import { ActionTypes } from "../../actionTypes";
import { TypeKeys } from "../../interfaces";
import { ICmcCoinInfo } from "../../interfaces/cmcInterface";

export function getCmcCoinInfoReducer(cmcCoinInfo: ICmcCoinInfo[] = [], action: ActionTypes) {
  switch (action.type) {
      case TypeKeys.GET_CMC_DATA_ACTION:
      return action.payload;
    default:
      return cmcCoinInfo;
  }
}
