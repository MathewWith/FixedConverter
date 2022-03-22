import {useEffect, useState} from "react"
import { reverseCurrencies } from "src/helpers/reverse-currency";
import { setConvertedValue } from "src/helpers/set-converted-value";
import { Select } from "../Select/Select"

export const ListCurrencies: any = (props: any) => {
    const {allCurrencies, leftInputValue, rightInputValue, isReversed, setLeftInputValue, setRightInputValue} = props;
    console.log(allCurrencies);
    
    useEffect(() => {
        if(!isReversed) {
            reverseCurrencies(currencyLeft, currencyRight, setCurrencyLeft, setCurrencyRight)
        }
        
        isReversed 
        ? setConvertedValue(currencyLeft, currencyRight, leftInputValue, setLeftInputValue) 
        : setConvertedValue(currencyLeft, currencyRight, rightInputValue, setRightInputValue)
    }, [leftInputValue, rightInputValue])

    const [currencyLeft, setCurrencyLeft] = useState('')
    const [currencyRight, setCurrencyRight] = useState('')

    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setCurrencyLeft}/>
            <Select allCurrencies={allCurrencies} setCurrency={setCurrencyRight}/>
        </div>
    )
}