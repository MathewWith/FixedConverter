import axios from 'axios'

export const getAllCurrencies = async (setAllCurrencies: any) => {
    return await axios.get('https://openexchangerates.org/api/currencies.json')
    .then(data => {
        let arr = Object.keys(data.data)
        setAllCurrencies(arr)
    })
}