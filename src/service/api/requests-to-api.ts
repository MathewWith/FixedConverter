import axios from "axios"
import {API_KEY} from "src/shared/consts/api-key"


export const getConvertedValue = async (currencyLeft: string, currencyRight: string, inputValue: string): Promise<number|string>  => {
   if(inputValue === ''){
       return ''
   }
   
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${currencyLeft}/${currencyRight}/${inputValue}`)
    return response.data.conversion_result
}

export const getAllCurrencies = async (): Promise<string[]> => {
    let response = await axios.get('https://openexchangerates.org/api/currencies.json')
    let listCurrencies = Object.keys(response.data)
    return listCurrencies
}