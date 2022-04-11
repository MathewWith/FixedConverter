import React from "react"
import { ListCurrenciesProps } from "src/types/FunctionProps"
import { Select } from "../Select/Select"
import './ListCurrencies.scss'


export const ListCurrencies = (props: ListCurrenciesProps ) => {
    const {allCurrencies, setLeftCurrency, setRightCurrency, leftCurrency, rightCurrency} = props 
    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setLeftCurrency} currentCurrency={leftCurrency}/>
            <Select allCurrencies={allCurrencies} setCurrency={setRightCurrency} currentCurrency={rightCurrency}/>
        </div>
    )
}