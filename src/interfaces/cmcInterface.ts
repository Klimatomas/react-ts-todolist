import { TypeKeys } from ".";

export interface ICmcCoinInfo {
    "name": string,
symbol: string,
rank: string,
price_usd: string,
price_btc: string,
market_cap_usd: string,
available_supply: string,
total_supply: string,
max_supply:string,
percent_change_1h: string,
percent_change_24h: string,
percent_change_7d: string,
last_updated: string,
"24h_volume_usd": string,


    [key: string]: string
}


export interface IGetCMCDataAction{
    type: TypeKeys.GET_CMC_DATA_ACTION;
    payload: ICmcCoinInfo[];
}

