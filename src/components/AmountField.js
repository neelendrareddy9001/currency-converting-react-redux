import React from "react";

const AmountField = ({ amount, onChange }) => {
  return (
    <form className="ExchangeRate-Form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
};

export default AmountField;
