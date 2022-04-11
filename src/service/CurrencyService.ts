import axios from "axios";
import { API_KEY } from "src/shared/consts/api-key";

export const getConvertedValue = async (
  inputCurrency: string,
  outputCurrency: string,
  inputValue: number
): Promise<number> => {
  const response = await axios.get(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${inputCurrency}/${outputCurrency}/${inputValue ? inputValue : 0}`
  );
  return response.data.conversion_result;
};

export const getAllCurrencies = async (): Promise<string[]> => {
  let response = await axios.get(
    "https://openexchangerates.org/api/currencies.json"
  );
  return Object.keys(response.data);
};

