import {useEffect, useState} from "react"
import { reverseCurrencies } from "src/helpers/reverse-currencies";
import { setConvertedValue } from "src/helpers/set-converted-value";
import { ListCurrenciesType } from "src/types/list-currencies";
import { Select } from "../Select/Select"

export const ListCurrencies = (props: ListCurrenciesType) => {
    
    const { allCurrencies, 
            leftInputValue, 
            rightInputValue, 
            isReversed, 
            setLeftInputValue, 
            setRightInputValue} = props;
    
    useEffect(() => {
        setConvertedValue(
            isReversed ,
            currencyLeft, 
            currencyRight, 
            leftInputValue, 
            rightInputValue, 
            setRightInputValue, 
            setLeftInputValue) 
            const result = getConvertedValue(currencyLeft, currencyRight, leftInputValue)
            const result = getConvertedValue(currencyRight, currencyLeft, rightInputValue)
    }, [leftInputValue, rightInputValue])

    useEffect(() => {
        reverseCurrencies(
            isReversed, 
            currencyLeft, 
            currencyRight, 
            setCurrencyLeft, 
            setCurrencyRight)
    }, [isReversed])

    const [currencyLeft, setCurrencyLeft] = useState('')
    const [currencyRight, setCurrencyRight] = useState('')

    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setCurrencyRight}/>
            <Select allCurrencies={allCurrencies} setCurrency={setCurrencyLeft}/>
        </div>
    )
}