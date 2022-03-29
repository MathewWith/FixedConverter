import {useEffect, useState} from "react"
import { ListCurrenciesTypes } from "src/types/ListCurrenciesTypes";
import { Select } from "../Select/Select"

export const ListCurrencies = (props: ListCurrenciesTypes) => {
    const {allCurrencies, setInputCurrency, setOutputCurrency} = props;

    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setOutputCurrency}/>
            <Select allCurrencies={allCurrencies} setCurrency={setInputCurrency}/>
        </div>
    )
}