import React from "react";

const CurrencyCodePicker = ({
  supportedCurrencies,
  currencyCode,
  onChange,
}) => {
  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
};

export default CurrencyCodePicker;
