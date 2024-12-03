import React, { useCallback, useEffect, useState } from "react";
import CurrencyCodePicker from "./CurrencyCodePicker";
import { getExchangeRates } from "../api";
import AmountField from "./AmountField";
import RateTable from "./RateTable";

const supportCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

const ExchangeRate = () => {
  const [amount, setAmount] = useState("1.50");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  useEffect(() => {
    getExchangeRates(currencyCode, supportCurrencies).then((rates) => {
      setCurrencyCode(rates);
    });
  });

  const handleCurrencyCode = useCallback(
    (e) => setCurrencyCode(e.target.value),
    []
  );
  const handleAmountChange =
    ((e) => {
      let newAmount = e.target.vlaue;
      setAmount(newAmount);
    },
    []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          <CurrencyCodePicker
            onChange={handleCurrencyCode}
            supportCurrencies={supportCurrencies}
            currencyCode={currencyCode}
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} onChange={handleAmountChange} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
};

export default ExchangeRate;
