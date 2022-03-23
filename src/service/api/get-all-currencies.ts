import axios from 'axios'

export const getAllCurrencies = async (): Promise<string[]> => {
    let response = await axios.get('https://openexchangerates.org/api/currencies.json')
    let listCurrencies = Object.keys(response.data)
    console.log(listCurrencies);
    return listCurrencies
}