export function getExchangeRates(base, supportedSymbols) {
  const symbols = supportedSymbols
    .filter((symbol) => symbol !== base) // exclude your own code from requested symbols
    .join();
  const url = `http://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
  return fetch(url)
    .then((res) => res.json())
    .then(handleAPIErrors)
    .then((res) => res.rates);
}

function handleAPIErrors(res) {
  if (res.success) return res;
  console.log(`Server Error: ${res.error.info}`);
  return {
    rates: {
      USD: 1.0,
    },
  };
}
