import axios from 'axios'

export const getAllCurrencies = async (): Promise<string[]> => {
    const response = await axios.get('https://openexchangerates.org/api/currencies.json')
    let currencies = Object.keys(response.data)
    return currencies
}