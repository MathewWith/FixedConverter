import axios from 'axios'

export const getAllCurrencies = async () => {
    return await axios.get('https://openexchangerates.org/api/currencies.json')
    .then((data) => {
        let arrayCurrencies = Object.keys(data.data)
        return arrayCurrencies
    })
}