import React, {useState} from "react"
import { Select } from "../Select/Select"

interface IListCurrencies {
    allCurrencies: string[],
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>
}

export const ListCurrencies = (props: IListCurrencies ) => {
    const {allCurrencies, setLeftCurrency, setRightCurrency} = props 
    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setLeftCurrency}/>
            <Select allCurrencies={allCurrencies} setCurrency={setRightCurrency}/>
        </div>
    )
}