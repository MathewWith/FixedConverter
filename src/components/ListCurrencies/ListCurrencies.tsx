import React, {useState} from "react"
import { Select } from "../Select/Select"

interface IListCurrencies {
    allCurrencies: string[],
    setLeftCurrency: React.Dispatch<React.SetStateAction<string>>,
    setRightCurrency: React.Dispatch<React.SetStateAction<string>>,
    leftCurrency: string,
    rightCurrency: string

}

export const ListCurrencies = (props: IListCurrencies ) => {
    const {allCurrencies, setLeftCurrency, setRightCurrency, leftCurrency, rightCurrency} = props 
    return (
        <div className="list-currencies">
            <Select allCurrencies={allCurrencies} setCurrency={setLeftCurrency} pickCurrency={leftCurrency}/>
            <Select allCurrencies={allCurrencies} setCurrency={setRightCurrency} pickCurrency={rightCurrency}/>
        </div>
    )
}