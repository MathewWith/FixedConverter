import { getConvertedValue } from "src/service/api/requests-to-api"

export const setConvertedValue = (  
                                    isReversed: boolean,
                                    currencyLeft: string, 
                                    currencyRight: string, 
                                    leftInputValue: string,
                                    rightInputValue: string,
                                    setLeftInputValue: any,
                                    setRightInputValue: any
                                    ): void => {
                                    
    const setInputValue = async () => {
        let res;
        isReversed  ? res = await getConvertedValue(currencyLeft, currencyRight, leftInputValue) 
                    : res = await getConvertedValue(currencyLeft, currencyRight, rightInputValue )

        isReversed ? setLeftInputValue(res) : setRightInputValue(res)
    }
    
    setInputValue()
}