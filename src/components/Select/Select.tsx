import { SelectProps } from "src/types/SelectTypes";
import './Select.scss'

export const Select = (props: SelectProps) => {
    const {allCurrencies, setCurrency, pickCurrency} = props;
    return (
        <select onChange={(e) => setCurrency(e.target.value)} value={pickCurrency} className='select-wrap'>
                {
                    allCurrencies.map((currency: string, key: number) => {
                       return <option key={key} >{currency}</option>
                    })
                }
        </select>
    )
}

//посмотреть как работает селект