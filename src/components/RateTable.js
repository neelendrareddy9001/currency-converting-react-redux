import React from "react";
import { useSelector } from "react-redux";

const RateTable = () => {
  const amount = useSelector();
  const reates = useSelector();
  return (
    <table className="ExchangeRate-table">
      <tbody></tbody>
    </table>
  );
};

export default RateTable;
