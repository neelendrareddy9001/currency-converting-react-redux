import React from "react";
import { useSelector } from "react-redux";
import { getRates } from "../reducers/RateReducer";

const RateTable = () => {
  const amount = useSelector();
  const rates = useSelector(getRates);
  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(rates).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RateTable;
