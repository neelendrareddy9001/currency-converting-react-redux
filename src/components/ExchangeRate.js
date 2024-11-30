import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useEffect, useState } from "react";

const supportCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];

const ExchangeRate = () => {
  const [amount, setAmount] = useState("1.50");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  useEffect(() => {});

  return <div>ExchangeRate</div>;
};

export default ExchangeRate;
