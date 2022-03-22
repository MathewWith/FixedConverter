import axios from "axios"
import {API_KEY} from "src/shared/consts/api-key"

export const getConvertedValue = async (currencyLeft: string, currencyRight: string, inputValue: number): Promise<number> => {
    return await axios.get(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${currencyLeft}/${currencyRight}/${inputValue}`)
}