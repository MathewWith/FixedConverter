import axios from 'axios'

export const getAllCurrencies = async () => {
    return await axios.get('https://openexchangerates.org/api/currencies.json')
    .then(function (data){
        let arr = Object.keys(data.data)
        return arr
    })
}