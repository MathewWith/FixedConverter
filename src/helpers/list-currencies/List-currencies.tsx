import {useState} from "react"

export const ListCurrencies = (allCurrencies: string[]) => {

    const [currencyOne, setCurrencyOne] = useState(allCurrencies[0])
    const [currencyTwo, setCurrencyTwo] = useState(allCurrencies[0])

    return (
        <div className="listCurrencies">
            <select onChange={(e) => setCurrencyOne(e.target.value)}>
                {
                    allCurrencies.map((cur) => {
                       return <option key={cur}>{cur}</option>
                    })
                }
            </select>
            <select onChange={(e) => setCurrencyTwo(e.target.value)}>
                {
                    allCurrencies.map((cur) => {
                       return <option key={cur}>{cur}</option>
                    })
                }
            </select>
        </div>
    )
}