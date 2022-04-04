
export const Select = (props: any) => {
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