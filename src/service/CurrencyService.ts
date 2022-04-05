import axios from "axios"

export const getCurrenciesSymbols = async () => {
    let response = await axios.get(`https://gist.githubusercontent.com/nhalstead/4c1652563dd13357ab936fc97703c019/raw/d5de097ef68f37501fb4d06030ca49f10f5f963a/currency-symbols.json`)
    console.log(response.data)
    return response.data
}

export const getExchangeRate = async (leftCurrency: string, rightCurrency: string): Promise<number|string> => {
    if(leftCurrency === '') {
        return ''
    }
    let response = await axios.get(
        `https://fcsapi.com/api-v3/forex/latest?symbol=${leftCurrency}/${rightCurrency}&access_key=W5ndOKH68FvIDvLZJR4FQXs`)
    console.log(response.data.response[0].ch);
    
    return response.data.response[0].ch
}

export const getConvertedValue = async (
            inputCurrency: string, 
            outputCurrency: string, 
            inputValue: string | number): Promise<number|string>  => {
        
   if(inputValue === ''){
       return ''
   }
    
    const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/pair/${inputCurrency}/${outputCurrency}/${inputValue}`)
        console.log(response.data.conversion_result);
        
    return response.data.conversion_result
}

export const getAllCurrencies = async (): Promise<string[]> => {
    let response = await axios.get('https://openexchangerates.org/api/currencies.json')
    let listCurrencies = Object.keys(response.data)
    
    return listCurrencies
}

///set prettier
