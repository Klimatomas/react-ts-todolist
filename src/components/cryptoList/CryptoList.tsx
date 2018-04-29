import React = require("react");
import { SFC } from "react";
import { mergeProps } from "../../util/componentHelper";
import { StoreState, ActionTypes } from "../../actionTypes";
import { Dispatch, connect } from "react-redux";
import { ICmcCoinInfo } from "../../interfaces/cmcInterface";
import { getCryptoActionCreator } from "../../actions/cryptoActions";
import { formatDate } from "../../util/dateHelper";

interface ICryptoProps {
  cmcCoinInfo: ICmcCoinInfo[];
}

const CryptoList: SFC<ICryptoProps> = (props: ICryptoProps) => {
  const gotInfo: boolean = props.cmcCoinInfo.length > 0;

  return (
    gotInfo &&
    <table id="cryptoTable">
      <thead>
        <tr>
          <th>RANK</th>
          <th>NAME</th>
          <th>VALUE</th>
          <th>24HR</th>
          <th>24H VOLUME</th>
          <th>LAST UPDATED</th>
        </tr>
      </thead>
      <tbody>
        {props.cmcCoinInfo.map((val: ICmcCoinInfo) => {
          return <tr key={val.id}>
            <td>{val.rank}</td>
            <td>{val.name}</td>
            <td>{val.price_usd}</td>
            <td>{val.percent_change_24h + "%"}</td>
            <td>{val["24h_volume_usd"]}</td>
            <td>{formatDate(val.last_updated)}</td>
          </tr>
        })}
      </tbody>
    </table>
  );
}

const mapStateToProps = (store: StoreState) => {
  return {
    cmcCoinInfo: store.cmcCoinInfo
  };
};

const mapDispatchToProps = () => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CryptoList);