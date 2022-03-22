import {useState} from "react"
import { Select } from "../Select/Select"

export const ListCurrencies: any = ({allCurrencies}: {allCurrencies: string[]}) => {
    
    const [currencyLeft, setCurrencyLeft] = useState(allCurrencies[0])
    const [currencyRight, setCurrencyRight] = useState(allCurrencies[0])

    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setCurrencyLeft}/>
            <Select allCurrencies={allCurrencies} setCurrency={setCurrencyRight}/>
        </div>
    )
}