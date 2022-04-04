import React, {useState} from "react"
import { IListCurrencies } from "src/types/ListCurrenciesTypes"
import { Select } from "../Select/Select"
import './ListCurrencies.scss'


export const ListCurrencies = (props: IListCurrencies ) => {
    const {allCurrencies, setLeftCurrency, setRightCurrency, leftCurrency, rightCurrency} = props 
    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setLeftCurrency} pickCurrency={leftCurrency}/>
            <Select allCurrencies={allCurrencies} setCurrency={setRightCurrency} pickCurrency={rightCurrency}/>
        </div>
    )
}