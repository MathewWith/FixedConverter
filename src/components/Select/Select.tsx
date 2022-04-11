import { SelectProps } from "src/types/FunctionProps";
import './Select.scss'

export const Select = (props: SelectProps) => {
    const {allCurrencies, setCurrency, currentCurrency} = props;
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
