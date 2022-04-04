import { SelectProps } from "src/types/SelectTypes";

export const Select = (props: SelectProps) => {
    const {allCurrencies, setCurrency, pickCurrency} = props;
    return (
        <select onChange={(e) => setCurrency(e.target.value)}>
                {
                    allCurrencies.map((currency: string) => {
                       return <option key={currency}>{pickCurrency ? pickCurrency : currency}</option>
                    })
                }
        </select>
    )
}