import axios, { AxiosResponse } from "axios"
import { Dispatch } from "react-redux";
import thunk from "redux-thunk";
import { ActionTypes } from "../actionTypes";
import { TypeKeys } from "../interfaces";
import { ICmcCoinInfo } from "./../interfaces/cmcInterface";

export function getCryptoActionCreator(): Dispatch<ActionTypes> {
    return (dispatch: Dispatch<ActionTypes>) => {
        axios.get("/api/cmc").then((response: AxiosResponse) => {
            dispatch(getCryptoAction(response.data))
        })
    }
}

export function getCryptoAction(coinInfo: ICmcCoinInfo[]): ActionTypes {
  return {
    payload: coinInfo,
    type: TypeKeys.GET_CMC_DATA_ACTION
  };
}
