import React from "react";

interface SelectProps {
    allCurrencies: string[] ,
    setCurrency: React.Dispatch<React.SetStateAction<string>>
}

export const Select = (props: SelectProps) => {
    const {allCurrencies, setCurrency} = props;
    return (
        <select onChange={(e) => setCurrency(e.target.value)}>
                {
                    allCurrencies.map((currency: string) => {
                       return <option key={currency}>{currency}</option>
                    })
                }
        </select>
    )
}