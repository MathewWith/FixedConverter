import { getConvertedValue } from "src/service/api/get-converted-value"

export const setConvertedValue = async (  currencyLeft: string, 
                                    currencyRight: string, 
                                    inputValue: number, 
                                    setInputValue: any): Promise<any> => {
    const convertedValue = await getConvertedValue(currencyLeft, currencyRight, inputValue)
    setInputValue(convertedValue)
}