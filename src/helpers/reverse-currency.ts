
export const reverseCurrencies = (currencyLeft: string, currencyRight: string, setCurrencyLeft: any, setCurrencyRight: any ) => {
    let currency = currencyLeft;
    setCurrencyLeft(currencyRight);
    setCurrencyRight(currency)
}