import axios from "axios";
import { Symbol } from "src/types/PropsOfFunctions";

export const getCurrenciesSymbols = async (): Promise<Symbol[]> => {
  let response = await axios.get(
    `https://gist.githubusercontent.com/nhalstead/4c1652563dd13357ab936fc97703c019/raw/d5de097ef68f37501fb4d06030ca49f10f5f963a/currency-symbols.json`
  );
  return response.data;
};

export const getExchangeRate = async (
  leftCurrency: string,
  rightCurrency: string
): Promise<number> => {
  let response = await axios.get(
    `https://fcsapi.com/api-v3/forex/latest?symbol=${leftCurrency}/${rightCurrency}&access_key=W5ndOKH68FvIDvLZJR4FQXs`
  );

  return response.data.response[0].ch;
};

export const getConvertedValue = async (
  inputCurrency: string,
  outputCurrency: string,
  inputValue: number
): Promise<number> => {
  const response = await axios.get(
    `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/pair/${inputCurrency}/${outputCurrency}/${inputValue}`
  );

  return response.data.conversion_result;
};

export const getAllCurrencies = async (): Promise<string[]> => {
  let response = await axios.get(
    "https://openexchangerates.org/api/currencies.json"
  );
  let listCurrencies = Object.keys(response.data);

  return listCurrencies;
};
