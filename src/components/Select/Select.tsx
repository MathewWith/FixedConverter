import { SelectProps } from "src/types/PropsOfFunctions";
import './Select.scss'

export const Select = ({allCurrencies, setCurrency, currentCurrency}: SelectProps) => {
    return (
        <select onChange={(e) => setCurrency(e.target.value)} value={currentCurrency} className='wrapper'>
                {
                    allCurrencies.map((currency: string, key: number) => {
                       return <option key={key} >{currency}</option>
                    })
                }
        </select>
    )
}
