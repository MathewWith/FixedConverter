import React from "react"
import { ListCurrenciesTypes } from "src/types/types"
import { Select } from "../Select/Select"
import './ListCurrencies.scss'


export const ListCurrencies = (props: ListCurrenciesTypes ) => {
    const {allCurrencies, setLeftCurrency, setRightCurrency, leftCurrency, rightCurrency} = props 
    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setLeftCurrency} currentCurrency={leftCurrency}/>
            <Select allCurrencies={allCurrencies} setCurrency={setRightCurrency} currentCurrency={rightCurrency}/>
        </div>
    )
}