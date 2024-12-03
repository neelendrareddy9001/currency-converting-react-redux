export function getExchangeRates(base, supportCurrencies) {
  const symbol = supportCurrencies.filter((symbol) => symbol !== base).join();
}

function handleAPIError(res) {
  if (res.success) return res;
  console.log(`Server Error: ${res.error.info}`);
  return {
    rates: {
      USD: 1.0,
    },
  };
}
