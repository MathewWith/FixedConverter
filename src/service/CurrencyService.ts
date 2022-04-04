import axios from "axios"
import {API_KEY} from "src/shared/consts/api-key"

export const getLatestPrice = async (leftCurrency: string, rightCurrency: string) => {
    let response = await axios.get(`https://fcsapi.com/api-v3/forex/latest?symbol=${leftCurrency}/${rightCurrency}&access_key=W5ndOKH68FvIDvLZJR4FQXs`)
    console.log(response.data.response[0].ch);
    
    return response.data.response.ch
}



export const getConvertedValue = async (
            inputCurrency: string, 
            outputCurrency: string, 
            inputValue: string | number): Promise<number|string>  => {
        
   if(inputValue === ''){
       return ''
   }
   
    const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${inputCurrency}/${outputCurrency}/${inputValue}`)
        console.log(response.data.conversion_result);
        
    return response.data.conversion_result
}

export const getAllCurrencies = async (): Promise<string[]> => {
    let response = await axios.get('https://openexchangerates.org/api/currencies.json')
    let listCurrencies = Object.keys(response.data)
    return listCurrencies
}


///set prettier
